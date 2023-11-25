# AUTOGENERATED! DO NOT EDIT! File to edit: nbs/data__tsloader.ipynb (unless otherwise specified).

__all__ = ['TimeSeriesLoader', 'FastTimeSeriesLoader']

# Cell
import warnings
from collections.abc import Mapping
from typing import Dict, List, Optional, Union

import numpy as np
import torch as t
from fastcore.foundation import patch
from torch.utils.data import DataLoader

from .tsdataset import TimeSeriesDataset, WindowsDataset

# Cell
class TimeSeriesLoader(DataLoader):

    def __init__(self, dataset: Union[TimeSeriesDataset, WindowsDataset],
                 eq_batch_size: bool = False,
                 n_windows: Optional[int] = None,
                 **kwargs) -> 'TimeSeriesLoader':
        """Wraps the pytorch `DataLoader` with a special collate function
        for the `TimeSeriesDataset` ouputs.

        The TimeSeriesDataset constructs all the trainable windows
        of `batch_size` series. The number of windows can be greater
        or smaller than the `batch_size`. For this reason,
        an additional boolean parameter, `eq_batch_size` is included
        that if `True` samples `batch_size` windows randomly,
        while `False` returns all windows.

        Parameters
        ----------
        dataset: TimeSeriesDataset
            Stored time series.
        eq_batch_size: bool
            If `True` samples `batch_size` windows randomly,
            while `False` or `batch_size=None` returns all windows.
        n_windows: int
            Number of windows to sample after
            batching batch_size series.
        """
        if 'collate_fn' in kwargs.keys():
            warnings.warn(
                'This class wraps the pytorch `DataLoader` with a '
                'special collate function. If you want to use yours '
                'simply use `DataLoader`. Removing collate_fn'
            )
            kwargs.pop('collate_fn')

        kwargs_ = {**kwargs, **dict(collate_fn=self._collate_fn)}
        DataLoader.__init__(self, dataset=dataset, **kwargs_)
        self.eq_batch_size = eq_batch_size
        self.n_windows = n_windows
        self.w_idxs: Optional[np.ndarray] = None

# Cell
@patch
def _check_batch_size(self: TimeSeriesLoader, batch: t.Tensor):
    complete_batch = batch
    if self.w_idxs is not None:
        complete_batch = batch[self.w_idxs]

    return complete_batch

# Cell
@patch
def _collate_fn(self: TimeSeriesLoader, batch: Union[List, Dict[str, t.Tensor], t.Tensor]):
    """Special collate fn for the `TimeSeriesDataset`.

    Notes
    -----
    [1] Adapted from https://github.com/pytorch/pytorch/blob/master/torch/utils/data/_utils/collate.py.
    """
    elem = batch[0]
    # if len(batch) == 1:
    #     return {key: self._check_batch_size(elem[key]) for key in elem}

    elem_type = type(elem)

    if isinstance(elem, t.Tensor):
        out = None
        if t.utils.data.get_worker_info() is not None:
            # If we're in a background process, concatenate directly into a
            # shared memory tensor to avoid an extra copy
            numel = sum([x.numel() for x in batch])
            storage = elem.storage()._new_shared(numel)
            out = elem.new(storage)
        complete_batch = t.cat(batch, out=out)
        return self._check_batch_size(complete_batch)

    elif isinstance(elem, Mapping):
        n_windows = [elem_['Y'].size(0) for elem_ in batch]
        n_windows = sum(n_windows)
        if self.eq_batch_size and self.batch_size is not None:
            self.w_idxs = np.random.choice(n_windows, size=self.batch_size,
                                           replace=(n_windows < self.batch_size))
        if not self.eq_batch_size and self.n_windows is not None:
            self.w_idxs = np.random.choice(n_windows, size=self.n_windows,
                                           replace=(n_windows < self.n_windows))
        return {key: self.collate_fn([d[key] for d in batch]) for key in elem}

    raise TypeError(f'Unknown {elem_type}')

# Cell
class FastTimeSeriesLoader:
    """
    A DataLoader-like object for a set of tensors that can be much faster than
    TensorDataset + DataLoader because dataloader grabs individual indices of
    the dataset and calls cat (slow).
    Source: https://discuss.pytorch.org/t/dataloader-much-slower-than-manual-batching/27014/6

    Notes
    -----
    [1] Adapted from https://github.com/hcarlens/pytorch-tabular/blob/master/fast_tensor_data_loader.py.
    """
    def __init__(self, dataset: TimeSeriesDataset, batch_size: int = 32,
                 eq_batch_size: bool = False,
                 n_windows: Optional[int] = None,
                 shuffle: bool = False) -> 'FastTimeSeriesLoader':
        """Initialize a FastTimeSeriesLoader.

        The TimeSeriesDataset constructs all the trainable windows
        of `batch_size` series. The number of windows can be greater
        or smaller than the `batch_size`. For this reason,
        an additional boolean parameter, `eq_batch_size` is included
        that if `True` samples `batch_size` windows randomly,
        while `False` returns all windows.

        Parameters
        -----------
        dataset: TimeSeriesDataset
            Stored time series.
        batch_size: int
            Batch size to load.
        n_windows: int
            Number of windows to sample after
            batching batch_size series.
        shuffle: bool
            If `True`, shuffle the data *in-place* whenever an
            iterator is created out of this object.
        """
        self.dataset = dataset
        self.dataset_len = len(dataset)
        self.batch_size = batch_size
        self.eq_batch_size = eq_batch_size
        self.n_windows = n_windows
        self.shuffle = shuffle
        self.idxs = np.arange(self.dataset_len)

        # Calculate # batches
        n_batches, remainder = divmod(self.dataset_len, self.batch_size)
        if remainder > 0:
            n_batches += 1
        self.n_batches = n_batches
        self.w_idxs: Optional[np.ndarray] = None

# Cell
@patch
def __iter__(self: FastTimeSeriesLoader):
    if self.shuffle:
        self.idxs = np.random.permutation(self.dataset_len)

    self.i = 0
    return self

# Cell
@patch
def _check_batch_size(self: FastTimeSeriesLoader, batch: t.Tensor):
    complete_batch = batch
    if self.w_idxs is not None:
        complete_batch = batch[self.w_idxs]
    return complete_batch

# Cell
@patch
def __next__(self: FastTimeSeriesLoader):
    if self.i >= self.dataset_len:
        raise StopIteration
    idxs = self.idxs[self.i:(self.i + self.batch_size)].tolist()
    batch = self.dataset[idxs]
    self.i += self.batch_size

    n_windows = batch['Y'].size(0)
    if self.eq_batch_size and self.batch_size is not None:
        self.w_idxs = np.random.choice(n_windows, size=self.batch_size,
                                       replace=(n_windows < self.batch_size))

    if not self.eq_batch_size and self.n_windows is not None:
        self.w_idxs = np.random.choice(n_windows, size=self.n_windows,
                                       replace=(n_windows < self.n_windows))

    return {key: self._check_batch_size(batch[key]) for key in batch}

# Cell
@patch
def __len__(self: FastTimeSeriesLoader):
    return self.n_batches
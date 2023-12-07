"""Proper Orthogonal Decomposition.

Demonstrate how to use it.

---------------------------

MIT License

Copyright (c) 2018 Pamphile Tupui ROY

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
"""
import numpy as np

init_snapshots = np.array([[37., 40., 41., 49., 42., 46., 45., 48.], [40., 43., 47., 46., 41., 46., 45., 48.], [40., 41., 42., 45., 44., 46., 45., 47.]]).T
init_snapshots = np.array([[37., 40., 41., 49., 42., 46., 45., 48.], [40., 43., 47., 46., 41., 46., 45., 48.], [40., 41., 42., 45., 44., 46., 45., 47.]])


print("Initial snapshots:\n{}".format(init_snapshots))

m = init_snapshots.shape[0]  # Size of each snapshot
n = init_snapshots.shape[1]  # Number of snapshots
print("Size: ({}x{})".format(m, n))

mean_snapshot = np.average(init_snapshots, 1).reshape(m, -1)
print("Mean snapshot:\n{}".format(mean_snapshot))
snapshots = np.subtract(init_snapshots, mean_snapshot)

U, s, V = np.linalg.svd(snapshots, full_matrices=False)

print("\nU:\n{}\nS:\n{}\nV:\n{}\n".format(U, s, V))

rank = 3#8
dim = m - rank

S = np.diag(s)

if rank == m:
    fluctuation = np.dot(U, np.dot(S, V))
else:
    fluctuation = np.dot(U[:, :-dim], np.dot(S[:-dim, :-dim], V[:-dim, :]))

#print("Fluctuation:\n{}".format(fluctuation))

snap = 1
matrix_snap = mean_snapshot.flatten() + np.dot(U, np.dot(S, V)[:, snap])
print("Snapshot {}:\n{}".format(snap + 1, matrix_snap))
V = V.T
S = S.diagonal()
matrix_snap = mean_snapshot.flatten() + np.dot(U, V[snap]*S)
print("Snapshot {}:\n{}".format(snap + 1, matrix_snap))

reconstruction = mean_snapshot + fluctuation

print("\nReconstruction:\n{}".format(reconstruction))
equal = np.allclose(init_snapshots, reconstruction)
print("\nSame matrices: {}\n".format(equal))
if not equal:
    print("Difference:\n{}".format(reconstruction-init_snapshots))

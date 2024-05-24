

export const setBookingPrice = p => ({
  type: 'SET_PRICE',
  payload: p
});


export const setRoomName = roomName => ({
  type: 'SET_NAME',
  payload: roomName
});

export const setRoomIndex = i => ({
  type: 'SET_INDEX',
  payload: i
});

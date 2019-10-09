const initialState = {
  payload: [
    {
      id: 1,
      title: 'Test title',
      data: 'Some random data to fill message',
    },
    {
      id: 2,
      title: 'Test title',
      data: 'Some random data to fill message',
    },
    {
      id: 3,
      title: 'Test title',
      data: 'Some random data to fill message',
    },
  ]
}

function news (
  state = initialState,
  actions,
) {
  return state;
}

export default news;

export const showModal = (store, show) =>
  store.setState({ ...store.state, modal: show })

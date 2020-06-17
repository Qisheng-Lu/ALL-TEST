// Map Redux state to component props
export function mapStateToProps(state) {
  return {
    value: state.count
  }
}

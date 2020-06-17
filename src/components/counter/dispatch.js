// Map Redux actions to component props
import { increaseAction, decreaseAction } from './action.js'
export function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onDecreaseClick: () => dispatch(decreaseAction)
  }
}

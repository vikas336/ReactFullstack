
const initialState = {

  name: "gforce",
  toggle: false

}

export default function ContactReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_POST":

      return Object.assign({}, state, {
        name: action.data, toggle: !state.toggle
      })
    default:
      return state
  }
}
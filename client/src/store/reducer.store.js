import actions from './actions.store'

/**
 * Case reducers for manipulate global store context
 * @param {Object} state
 * @param {Object} action
 * */
export default function Reducer(state, action) {
    const { type, payload } = action

    // Verify action reducer type
    switch (type) {
        case actions.setToken:
            return { ...state, token: payload }

        default:
            return state
    }
}

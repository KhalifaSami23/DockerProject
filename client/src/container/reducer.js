const reducer = (state, action) => {
    switch(action.type) {
        case 'ON_LOGIN': 
            const user = action.user
            return user
        case 'ON_LOGOUT':
            return {}
        default:
            return state
    }
}

export default reducer
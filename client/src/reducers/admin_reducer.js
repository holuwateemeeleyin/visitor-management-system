/* eslint-disable import/no-anonymous-default-export */
export default function (state={}, action){
    switch (action.type) {
        case 'ADMIN_LOGIN':
            return {
                ...state,
                login:action.payload
            }
        case 'ADMIN_AUTH':
            return{...state, login:action.payload}
        default:
            return state;
    }
}
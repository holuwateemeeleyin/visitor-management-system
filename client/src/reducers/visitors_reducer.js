export default function (state={}, action){
    switch (action.type) {
        case 'GET_VISITORS':
        return{...state, visitors:action.payload}
        case 'REGISTER_VISITOR':
            return {
                ...state,
                create:action.payload.success,
                visitors:action.payload.visitors,
                error:action.payload.error
            }
        case 'CHECKOUT_VISITOR':
            return{
                ...state, 
                visitors:action.payload.success,
                error: action.payload.error
            }
        default:
            return state;
    }
}
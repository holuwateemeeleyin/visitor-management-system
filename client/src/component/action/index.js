import axios from 'axios'

export function getVisitors(){
    const request = axios.get(`/api/visitor/get-visitors`)
                    .then(response=>response.data)
    return {
        type:'GET_VISITORS',
        payload:request
    }
}
// passing what we want to add in the arguement, which is visitor
// passing the exisiting visitor as an arguement called visitorList
export function createVisitor(visitor,visitorList){
    const request = axios.post(`/api/visitor/create`, visitor)
    
    return(dispatch) => {
        // destructuring the data
        request.then(({data})=>{
            console.log(data.error);
            let response = {
            // The server will returned succes, so we stored the data in success
                success:data.success,
                // bring the visitorList and the data we get back from the server
                visitors:[...visitorList, data.visitor],
                error: data.error
            }

            dispatch({
                type: 'REGISTER_VISITOR',
                payload:response
            })
        })
    }

}

export function visitorCheckout(visitorMail){
    const request = axios.put(`/api/visitor/checkout`, visitorMail)

    return (dispatch)=>{
        // destructuring Data
        request.then(({data})=> {
            // console.log(data.error);
            let response = {
                success:data.success,
                error: data.error
            }

            dispatch ({
                type:'CHECKOUT_VISITOR',
                payload: response
            })
        })
    }
}

export function loginAdmin ({adminId, password}){
    const request = axios.post('/api/admin/login', {adminId,password})
                    .then(response => response.data)
    return {
        type: 'ADMIN_LOGIN',
        payload:request
    }
}

export function auth(){
    const request = axios.get('/api/admin/auth')
                    .then (response=>response.data);
    return {
        type: 'ADMIN_AUTH',
        payload:request
    }
}
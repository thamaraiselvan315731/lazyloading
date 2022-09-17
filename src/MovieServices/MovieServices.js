import Initialization from "./Initialization.js/Initialization"
const MovieServices = {

    loadData(dispatch, value) {
        dispatch({
            type: 'SET_ITEM',
            payload: null
        })
        Initialization.getMethod(value).then(res => {
            dispatch({
                type: 'GET_ITEM',
                payload: res
            })
        })
            .catch(() => {
                dispatch({
                    type: 'ERROR_USERS',
                    payload: null
                })
            })
            .finally(() => {

            })
    },
    loadFullData(dispatch) {
        dispatch({
            type: 'SET_DATA',
            payload: null
        })
        Initialization.setInitialData().then(res => {
            dispatch({
                type: 'GET_DATA',
                payload: res
            })
        })
            .catch(() => {
                dispatch({
                    type: 'ERROR_USERS',
                    payload: null
                })
            })
            .finally(() => {

            })

    }

}
export default MovieServices;
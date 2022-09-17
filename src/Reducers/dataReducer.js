
const initialState = {
    data: [],
    loading: true,
    error: false,
};

function dataReducer(state = initialState, action) {

    switch (action.type) {
        case 'SET_DATA':
            return { ...state, data: [], error: false, loading: true }
        case 'GET_DATA':
            return { ...state, data: action.payload, error: false, loading: false }
        case 'GET_DATA_UPDATE':
            return { ...state, data: [...state.data, ...action.payload], error: false, loading: false }
        case 'ERROR_DATA':
            return { ...state, data: [], error: true, loading: false }
        default:
            return state;
    }
};
export default dataReducer;
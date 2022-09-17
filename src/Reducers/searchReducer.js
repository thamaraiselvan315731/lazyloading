const initialState = {
    searchItem: [],
    loading: true,
    error: false,
};

function searchReducer(state = initialState, action) {

    switch (action.type) {
        case 'SET_ITEM':
            return { ...state, searchItem: [], error: false, loading: true }
        case 'GET_ITEM':
            return { ...state, searchItem: action.payload, error: false, loading: false }
        case 'ERROR_USERS':
            return { ...state, searchItem: [], error: true, loading: false }
        default:
            return state;
    }
};
export default searchReducer;
const initialState = {
    stories: [],
    currentPage: 1,
    totalpage: 1,
}

function storiesReducer(state = initialState, action) {
    const { type, payload } = action;

    if (type === 'stories/setPage') {
        return { ...state, ...payload }  // payload = {stories: [], currentPage: 1, totalPage: 1}
    }
    if (type === 'stories/setCurrentPage') {
        return { ...state, currentPage: payload }  
    }
    
    return state;
}

export default storiesReducer
const initialState = {
    articles: []
}
export default (state=initialState, action) => {
    switch (action.type) {
        case 'LOAD_ARTICLES' :
        return {
            ...state,
            articles: action.articles
        }
        default:
            return state
    }
}
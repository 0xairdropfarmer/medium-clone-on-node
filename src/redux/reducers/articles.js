const initialState = {
    articles: [],
    article: {}
}
export default (state=initialState, action) => {
    switch (action.type) {
        case 'LOAD_ARTICLES' :
        return {
            ...state,
            articles: action.articles
        }
        case 'VIEW_ARTICLE':
        return {
            ...state,
            article: action.article
        }
        default:
            return state
    }
}
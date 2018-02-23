const initialState = {
    articles: ['ssdsd']
}
export default (state=initialState, action) => {
    switch (action.type) {
        case 'LOAD_ARTICLES' :

        return {
            ...state,
            articles: action.article
        }
        default:
            return state
    }
}
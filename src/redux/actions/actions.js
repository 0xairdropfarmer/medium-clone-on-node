/** */
import axios from 'axios'

const url = "http://localhost:5000/api/"

export function loadArticles () {
    return (dispatch) => {
        axios.get(`${url}articles`)
        .then((res) => {
            let articles = res.data
            dispatch({type:'LOAD_ARTICLES', articles})
        }).catch((err) => {
            console.log(err)
        })
    }
}

export function getArticle (article_id) {
    return (dispatch) => {
        axios.get(`${url}article/${article_id}`)
        .then((res) => {
            let article = res.data
            dispatch({type: 'VIEW_ARTICLE', article})
        }).catch((err) => console.log(err))
    }
}

export function comment () {
    return (dispatch) => {

    }
}

export function clap (params) {
    return (dispatch) => {

    }
}

export function follow () {
    return (dispatch) => {
        
    }
}

export function SignInUser (user_data) {
    return (dispatch) => {
        axios.post(`${url}user`,user_data).then((res)=>{
            let user = res.data
            dispatch({type: 'SET_USER', user})
        }).catch((err)=>console.log(err))
    }
}
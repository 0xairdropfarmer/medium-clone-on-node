/** */
import axios from 'axios'

const url = "http://localhost:5000/api/"

export function loadArticles () {
    return (dispatch) => {
        axios.get(`${url}articles`)
        .then((res)=> {
            let articles = res.data
            dispatch({type:'LOAD_ARTICLES', articles})
        }).catch((err)=>{
            console.log(err)
        })
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
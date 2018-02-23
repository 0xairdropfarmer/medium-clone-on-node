/** */
import axios from 'axios'

const url = "localhost:5000/api/"

export function loadArticles () {
    return (dispatch) => {
        dispatch({type:'LOAD_ARTICLES',article:['smh']});

        /*axios.get(`${url}/articles`)
        .then((res)=>dispatch({type:'LOAD_ARTICLES',article:['smh']}),(err)=>{
            console.log(err)
        });*/
    }
}
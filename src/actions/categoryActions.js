export const fetchCategories = () => {
    return (dispatch) => {
        fetch("http://localhost:3001/categories")
        .then(resp => resp.json())
        .then(data => {console.log(data)
            dispatch({type: 'FETCH_CATEGORIES', payload: data.data})})
            
    }
}
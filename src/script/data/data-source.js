class DataSource {
   static searchClub(keyword) {
    return fetch(`https://itunes.apple.com/search?term=${keyword}&limit=100`)
    .then(response=>{
        return response.json();
    })
    .then(responseJson =>{
        if(responseJson.resultCount>=1) {
           return Promise.resolve(responseJson.results);
       } else {
           return Promise.reject(`${keyword} is not found`);
       }
   })
}
}

export default DataSource;
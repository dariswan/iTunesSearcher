import DataSource from '../data/data-source.js';
import '../component/app-searcher.js';

const main = () =>{
    const searchElement = document.querySelector("app-searcher");
    const songListElement = document.querySelector("#songList");

    const onButtonSearchClicked = () => {
        DataSource.searchClub(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult)
    };

    const renderResult = (results) => {
        songListElement.innerHTML = "";
        let i = 0;
        let contentAll ="";
        const songElement = document.createElement("div");
        results.forEach(song=> {
            const {artistName, trackName, artworkUrl100, previewUrl} = song;
            const content = `
            <div class="item">
            <img src="${artworkUrl100}">
            <label><span id="titleSong">${trackName}</span></label>
            <label>${artistName}</label>
            <audio controls="controls">
            <source src="${previewUrl}" type="audio/mp4" />
            </audio>
            <button id="addItem" value="${trackName}-${artistName}">Add to Basket</button>
            </div>
            `;
            if(i%5==0){
                contentAll += `<div class="flex-row">${content}`;
            }else if((i+1)%5==0){
                contentAll += `${content}</div>`;
            }else{
                contentAll += content;
            }
            i+=1;
        })
        songElement.innerHTML = contentAll;
        songListElement.appendChild(songElement);
    };

    const fallbackResult = (message) => {
        songListElement.innerHTML = "";
        songListElement.innerHTML += ` <h2 style="color:red;text-align:center;" class="placeholder">${message}</h2>`;
    };

    searchElement.clickEvent = onButtonSearchClicked;
    document.getElementById("setting").addEventListener("click", ()=>{
        var element = document.body;
        element.classList.toggle("dark-mode");
    });
};

export default main;
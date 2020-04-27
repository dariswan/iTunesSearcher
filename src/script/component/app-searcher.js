class AppSearcher extends HTMLElement {
 connectedCallback(){
   this.render();
}

set clickEvent(event) {
   this._clickEvent = event;
   this.render();
}

get value() {
   return this.querySelector("#searchElement").value;
}

render() {
   this.innerHTML = `
   <style>
   app-searcher {
      background-color: white;
      display: flex;
      width: 60%;
      padding: 10px;
      position: sticky;
      position: -webkit-sticky;
      top: 8px;
      margin-left:auto; 
      margin-right:auto;
      z-index: 1;
   }

   app-searcher > input {
      width: 68%;
      padding: 16px;
      border: 0;
      font-weight: bold;
   }
   app-searcher > button {
      width: 20%;
      cursor: pointer;
      margin-left: auto;
      padding: 16px;
      background-color: #f19f4d;
      border: 0px;
      border-radius: 5px;
   }
   app-searcher > a {
      text-align: center;
      width: 10%;
      cursor: pointer;
      margin-left: auto;
      padding: 16px;
      background-color: #f19f4d;
      border-radius: 5px;
   }
   @media screen and (max-width: 550px) {
      app-searcher {
         width: 100%;
         padding: 0;
      }
      </style>
      <input placeholder="Input music keyword" id="searchElement" type="search">
      <button id="searchButtonElement" type="submit"><i class="fas fa-search" style="color:black;"></i></button>
      <a id="myBasket"><i class="fas fa-shopping-basket" style="color:black;"></i></a>`;

      this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
   }
}
customElements.define("app-searcher", AppSearcher);
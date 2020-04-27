class AppHeader extends HTMLElement {
	connectedCallback(){
		this.render();
	}
	
	render() {
		this.innerHTML = `		
		<style>
		app-header {
			display: block;
			font-size: 25px;
			font-weight: bold;
			text-shadow: 2px 2px 10px #403439;
			color : white;
			background-color:#4484ce;
			padding :15px;
			margin-bottom: 10px;
			box-shadow: 0 4px 8px 0 rgba(38, 34, 40, 0.3);
		}
		app-header a{
			margin-left: 20px;
		}
		</style>	
		<span>iTunes Basket List</span>
		<a id="setting" href="#"><i class="fas fa-lightbulb" style="color:black;"></i></a>`;
	}
}
customElements.define("app-header", AppHeader);
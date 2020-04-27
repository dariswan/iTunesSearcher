class AppFooter extends HTMLElement {
	connectedCallback(){
		this.render();
	}
	
	render() {
		this.innerHTML = `		
		<style>
		app-footer {
			display: block;
			padding: 2px;
			color: white;
			text-shadow: 2px 2px 20px black;
			background-color: #4484ce;
			text-align: center;
		}
		</style>	
		<p>iTunes Searcher &copy; 2020, Developer</p>`;
	}
}
customElements.define("app-footer", AppFooter);
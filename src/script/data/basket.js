const addBasket = () =>{
	const basket =  
	{
		item : ["Jackass 2.5 - Jeff Tremaine","Charlotte's Web 2: Wilbur's Great Adventure - Mario Piluso","Love the Way You Lie (feat. Rihanna) - Eminem"]
	}

	document.getElementById("myBasket").addEventListener("click", ()=>{
		alert(`List lagu didalam Basket : \n - ${basket.item.join(" \n- ")}`);
	});

	const buttons = document.querySelectorAll("button"); // i dont know man 12 hours resolve this, and didnt get nothing, i give up
	var basket2 = new Array();
	for(let button of buttons){
		button.addEventListener('click', function(event){
			alert(event.target.value);
		});
	};
}
export default addBasket;


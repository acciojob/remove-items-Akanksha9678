//your JS code here. If required.
let form=document.querySelector("form");
let select=document.getElementById("colorSelect");
let btn=document.querySelector("input");

btn.addEventListener("click",()=>{
	let selectedIndex=select.selectedIndex;
	if (selectedIndex !== -1) {
        select.remove(selectedIndex);
      }
})
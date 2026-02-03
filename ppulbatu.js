let name;
let default_name=`moa`;
let input_name = document.getElementById("input_name");
let button_moa = document.getElementById("button_moa");
let heading_moa = document.getElementById("heading_moa");

button_moa.onclick=function(){
    name = input_name.value;
    heading_moa.textContent=`hello ${default_name} your name is ${name} `;
    
}

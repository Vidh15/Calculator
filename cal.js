
let string=""
let input=document.querySelector('input')
let buttons=document.querySelectorAll('button')

Array.from(buttons).forEach((button)=>{

 button.addEventListener('click', (e) =>{
    if(e.target.innerHTML == '=')
    {
       string=eval(string);
       input.value=string;
    }
    else if(e.target.innerHTML== 'C')
    {
        string= "";
        input.value="";

    }
    else if( e.target.innerHTML=='x'){
        string =string.slice(0,-1);
        input.value=string;
 
    }
    else{
        string= string+ e.target.innerHTML;
        input.value=string;
    }
 })

})
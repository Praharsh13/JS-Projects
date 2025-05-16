var input=document.getElementById('inputbox');
var buttons= document.querySelectorAll('button');

var string="";
var arr=Array.from(buttons); // use to make array

arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '=')
        {
            string=eval(string);
            input.value=string;

        }
        else if(e.target.innerHTML =='AC')
        {
            string="";
            input.value=string;
        }
        else{

        string+=e.target.innerHTML;
        input.value=string;
        }
    })
})

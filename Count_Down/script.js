let timer=null

let repettimeinput=0


function Timer(){


    var time=document.getElementById("timeInput")
   
    let timeInput=parseInt(time.value)

    repettimeinput=timeInput

    let display= document.getElementById("countdownDisplay")

    console.log(repettimeinput)
   

   if(isNaN(repettimeinput)){
    display.innerHTML="Please enter a valid number"
    return
   }

   if(repettimeinput<=0){
    display.innerHTML="Please enter time greater then 0 in seconds"
    return
   }

   
  
    
    timer=setInterval(()=>{
        repettimeinput=repettimeinput-1
        display.innerHTML=repettimeinput
        //console.log(timeInput)

        if(repettimeinput==0){
            clearInterval(timer)
        }
    },1000)

    
    time.value = "";
    

}

function Pause(){

    clearInterval(timer)

}
function Restart(){
    console.log(repettimeinput)
    if(repettimeinput>0){
        let display= document.getElementById("countdownDisplay")
        display.innerHTML=repettimeinput

        timer=setInterval(()=>{
            repettimeinput=repettimeinput-1
            display.innerHTML=repettimeinput
            //console.log(timeInput)
    
            if(repettimeinput==0){
                clearInterval(timer)
            }
        },1000)
        
    }
}




 const timerButton=document.getElementById("startButton")
 timerButton.addEventListener("click",Timer)

 const pauseButton=document.getElementById("pauseButton")
 pauseButton.addEventListener("click",Pause)

 const restartButton=document.getElementById("resetButton")
 console.log(restartButton)
 restartButton.addEventListener("click",Restart)
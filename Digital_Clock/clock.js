//function to set time
function updateTime(){

    const timeElement=document.getElementById("time")
    const dateElement=document.getElementById("date")
    const date=new Date()
    const hours=date.getHours()%12 || 12   // 0 is false value and take first truth value when hour is 12  and 24
    const minutes= date.getMinutes().toString().padStart(2,'0') // to convert the minutes to string to add the padding
    const seconds= date.getSeconds().toString().padStart(2,'0')
    const ampm= date.getHours()< 12 ? 'AM' :'PM'
    timeElement.innerHTML=`${hours} : ${minutes} : ${seconds} ${ampm}`

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

    const dateString=date.toLocaleDateString(undefined,options)

    dateElement.innerHTML=dateString

   
}


setInterval(updateTime,1000)

updateTime()

const toggleBtn=document.createElement("button")
toggleBtn.className='toggle-btn'
toggleBtn.innerHTML = '🌓';
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click',()=>{

    document.body.classList.toggle('light-theme')

})
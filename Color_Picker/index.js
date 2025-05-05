const color=document.getElementById("colorInput")
const colorValue=document.getElementById("colorCode")
const copyButton=document.getElementById("copyButton")
const complementryContainer=document.getElementById("complementaryContainer")
const saveButton=document.getElementById("saveColorButton")
const showFavColor=document.getElementById("favouriteContainer")


//Taking color value first
color.addEventListener("input",()=>{
    const colorCode=color.value
    // call function to display value
    displayValue(colorCode)
    const getComplement=complementColor(colorCode)
    showComplementColor(getComplement)
})


//Function to display color value
function displayValue(color){
    colorValue.textContent=color
    colorValue.style.color=color
}

//Function to return complement color
function complementColor(color){
    //removing "#" by splice and converting into hexadecimal
    //parseInt use radix which is 16 here to tell in which system we are working on
     const base=parseInt(color.slice(1),16)
     //For getting the complement we will do the XOR operation
     //with the highest color
     const complement=(0xFFFFFF ^ base).toString(16).padStart(6,"0")
     return `#${complement}`
    

}

//Function to show complement color
function showComplementColor(color){
    complementryContainer.innerHTML=""//if previousl there
    const colorBox=document.createElement("div")
    colorBox.classList.add("color-box")
    colorBox.style.backgroundColor=color
    complementryContainer.appendChild(colorBox)

}

//Copy color code concept
copyButton.addEventListener('click',copyColorCode)

function copyColorCode(){
    //navigator is the window object in js used to access many window object
    navigator.clipboard
    .writeText(colorValue.textContent)
    .then(()=>alert(`Color code ${colorValue.textContent} copied succesfully`))
    .catch((err)=>alert("Failed to copy ", err))
}

//Save faurite color and display it
saveButton.addEventListener('click',()=>{
    const showColor=colorValue.textContent
    showFav(showColor)
})

//Function to show  fav color
function showFav(color){
    const showBox=document.createElement('div')
    showBox.classList.add("color-box")
    showBox.style.backgroundColor=color
    showFavColor.appendChild(showBox)
}
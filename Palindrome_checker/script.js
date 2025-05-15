const wordInput= document.getElementById("input")
const button=document.getElementById("checkButton")
const output=document.getElementById("output")

const isPlanidrome=(input)=>{
     
    const nonSpaceInput=input.split(' ').join("").toLowerCase()
    let i=0;
    let j=nonSpaceInput.length-1
    
    while(i<j){

        if(nonSpaceInput[i]==nonSpaceInput[j]){
            i++
            j--
        }
        else{
            return false
        }

    }
    return true
}


const check=()=>{
    const word=wordInput.value
    
    const checkPalindrome= isPlanidrome(word)

    if(checkPalindrome){
        output.textContent=`${word} is Palindrome`
        output.style=green
    }
    else{
        output.textContent=`${word} is not Palindrome`
        output.style=red
    }
}





button.addEventListener('click', check)
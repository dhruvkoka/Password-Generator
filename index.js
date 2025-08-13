let randValues= [
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "0","1","2","3","4","5","6","7","8","9",
  "!","\"","#","$","%","&","'","(",")","*","+",
  ",","-",".","/",":",";","<","=",">","?","@",
  "[","\\","]","^","_","`","{","|","}","~"
]
let passButton = document.getElementById("passButton")
let box1 = document.getElementById("box1")
let box2= document.getElementById("box2")
let box3= document.getElementById("box3")
let box4= document.getElementById("box4")
let input1 =document.getElementById("passNum")

function clicked(){
    let maxLength= parseInt(input1.value)
    if (maxLength<12 && maxLength>0){
        maxLength= parseInt(input1.value)
    }
    else{
        maxLength=12
    }
    box1.innerHTML=""
    box2.innerHTML=""
    box3.innerHTML=""
    box4.innerHTML=""
    for (let i =0;i< maxLength;i++)
    {
        box1.innerHTML+=randValues[Math.floor(Math.random()*randValues.length)]
        box1.style.color= "#10B981"
        box1.style.fontSize="18px"
    }
    for (let i =0;i<maxLength;i++)
    {
        box2.innerHTML+=randValues[Math.floor(Math.random()*randValues.length)]
        box2.style.color= "#10B981"
        box2.style.fontSize="18px"
    }
    for (let i =0;i<maxLength;i++)
    {

        box3.innerHTML+=randValues[Math.floor(Math.random()*randValues.length)]
        box3.style.color= "#10B981"
        box3.style.fontSize="18px"
    }
    for (let i =0;i<maxLength;i++)
    {
        box4.innerHTML+=randValues[Math.floor(Math.random()*randValues.length)]
        box4.style.color= "#10B981"
        box4.style.fontSize="18px"
    }
}

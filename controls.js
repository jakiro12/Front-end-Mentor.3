const btnDisplay=document.querySelector('.toggle-button')
const btnClose=document.querySelector('.close')

const seeMenu=document.querySelector('.bar')
btnDisplay.addEventListener('click',()=>{
    let status = seeMenu.style.visibility
    console.log(status)
    if(status === '' || status === 'hidden'){
    seeMenu.style.visibility='visible'
    }else{
    seeMenu.style.visibility='hidden'
    }
})
btnClose.addEventListener('click',()=>{
    seeMenu.style.visibility='hidden'
})
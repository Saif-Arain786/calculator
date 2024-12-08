var btn=document.getElementsByClassName('input')
// var btncc=document.getElementById('cc')
function calulate(data){
   var lc= btn[0].value

    btn[0].value+=data; 

    console.log(btn)
}
function result(){

    let result=eval(btn[0].value)
    btn[0].value=result


    // alert('result')

}

var clear =document.getElementById("cc")
console.log(clear)
clear.addEventListener('click',()=>{
    btn[0].value=''
})

// let clear=()=>{
//     alert('cli')
//     console.log('data')
//     btn[0].value=''
// }
// clear()

// btncc.addEventListener('click',clear())
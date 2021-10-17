// var counter=0;

// function increment(){
//     updateDisplay(++counter);
// }
// function decrement(){
    
//     updateDisplay(--counter);  
//     if(counter==0){
//         document.getElementById("click").disabled=true;
//     }
// }
// function updateDisplay(value){
//     document.getElementById("click").innerHTML=value;
// }
var counter=0;

function increment(){
    updateDisplay(++counter);
}
function decrement(){
    
    if(counter==0){
        document.getElementById("click").disabled=true;
    }
    else{
        updateDisplay(--counter);
        
    }
}
function updateDisplay(value){
    document.getElementById("click").innerHTML=value;
}
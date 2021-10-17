var counter=0;

function increment(){
    updateDisplay(++counter);
}
function decrement(){
    
    updateDisplay(--counter);  
    if(counter==0){
        document.getElementById("click").ariaDisabled=true;
    }
}
function updateDisplay(value){
    document.getElementById("click").innerHTML=value;
}
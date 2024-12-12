let peso = prompt("qual seu peso?")
    
    if(peso > 1 && peso < 50){
        alert("magro")
    }
    else if(peso > 51 && peso < 70){
        alert("normal")
    }
    else if(peso > 71){
        alert("gordo")
    }
    else{
        alert("peso invalido")
    }
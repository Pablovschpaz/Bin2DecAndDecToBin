var binary = document.querySelector("#binary");
var decimal = document.querySelector("#decimal");
var valueDec;
var valueBinary;
var bin;


function justZeroAndOne(e){
    bin = true;
    let keyBoard=(window.event)?e.keyCode:e.which;
    if((keyBoard==48 || keyBoard==49)){
        return true;
    }else{
        return false;
    }
}

function justNumbers(e){
    bin = false;
    let keyBoard=(window.event)?e.keyCode:e.which;
    if((keyBoard>47 && keyBoard<58)){
        return true;
    }else{
        return false;
    }
}

function convert(){
    getBinary();
    getDecimal();
    binToDec();
    decToBin();
}

function getBinary(){
    valueBinary = parseInt(binary.value);
    
}

function getDecimal(){
    valueDec = parseInt(decimal.value);
    
}

function binToDec(){
    if(isNaN(valueBinary)){
        return;
    } else {
        binary.value = valueBinary;
        let str = parseInt(valueBinary,2);
        decimal.value = str;
    }
}

function decToBin(){
    if(isNaN(valueDec)){
        return false;
    } else {
        decimal.value = valueDec;
        let str = parseInt(valueDec).toString(2);
        binary.value = str;
    } 
}
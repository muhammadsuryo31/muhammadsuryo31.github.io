//DOM selections
const milimeterInput = document.querySelector('.milimeter > input');
const centimeterInput = document.querySelector('.centimeter > input');
const decimeterInput = document.querySelector('.decimeter > input');
const meterInput = document.querySelector('.meter > input');
const kilometerInput = document.querySelector('.kilometer > input');
const feetInput = document.querySelector('.feet > input');
const inchInput = document.querySelector('.inch > input');
const mileInput = document.querySelector('.mile > input');
const yardInput = document.querySelector('.yard > input');

//Functions for rounding up decimal numbers
function rounder(num) {
    let roundedValue = (Math.floor(num*10000000)/10000000);
    return roundedValue
}

//Functions for converting value
function milicon(){
    let milivalue = parseFloat(milimeterInput.value);
    let centivalue = milivalue/10;
    let decivalue = centivalue/10; 
    let metervalue = decivalue/10;
    let kilovalue = metervalue/1000;
    let feetvalue = milivalue*0.00328084;
    let inchvalue = milivalue*0.0393701;
    let milevalue = metervalue*0.000621;
    let yardvalue = milivalue*0.00109361;
    centimeterInput.value = rounder(centivalue);
    decimeterInput.value = rounder(decivalue);
    meterInput.value = rounder(metervalue);
    kilometerInput.value = rounder(kilovalue);
    feetInput.value = rounder(feetvalue);
    inchInput.value = rounder(inchvalue);
    mileInput.value = rounder(milevalue);
    yardInput.value = rounder(yardvalue);
}
   
function centicon(){
    let centivalue = parseFloat(centimeterInput.value);
    let milivalue = centivalue*10;
    let decivalue = centivalue/10; 
    let metervalue = decivalue/10;
    let kilovalue = metervalue/1000;
    let feetvalue = milivalue*0.00328084;
    let inchvalue = milivalue*0.0393701;
    let milevalue = metervalue*0.000621;
    let yardvalue = milivalue*0.00109361;
    milimeterInput.value = rounder(milivalue);
    decimeterInput.value = rounder(decivalue);
    meterInput.value = rounder(metervalue);
    kilometerInput.value = rounder(kilovalue);
    feetInput.value = rounder(feetvalue);
    inchInput.value = rounder(inchvalue);
    mileInput.value = rounder(milevalue);
    yardInput.value = rounder(yardvalue);
}

function decicon(){
    let decivalue = parseFloat(decimeterInput.value);
    let milivalue = decivalue*100;
    let centivalue = decivalue*10; 
    let metervalue = decivalue/10;
    let kilovalue = metervalue/1000;
    let feetvalue = milivalue*0.00328084;
    let inchvalue = milivalue*0.0393701;
    let milevalue = metervalue*0.000621;
    let yardvalue = milivalue*0.00109361;
    milimeterInput.value = rounder(milivalue);
    centimeterInput.value = rounder(centivalue);
    meterInput.value = rounder(metervalue);
    kilometerInput.value = rounder(kilovalue);
    feetInput.value = rounder(feetvalue);
    inchInput.value = rounder(inchvalue);
    mileInput.value = rounder(milevalue);
    yardInput.value = rounder(yardvalue);
}

function metercon(){
    let metervalue = parseFloat(meterInput.value);
    let milivalue = metervalue*1000;
    let centivalue = metervalue*100; 
    let decivalue = metervalue*10;
    let kilovalue = metervalue/1000;
    let feetvalue = milivalue*0.00328084;
    let inchvalue = milivalue*0.0393701;
    let milevalue = metervalue*0.000621;
    let yardvalue = milivalue*0.00109361;
    milimeterInput.value = rounder(milivalue);
    centimeterInput.value = rounder(centivalue);
    decimeterInput.value = rounder(decivalue);
    kilometerInput.value = rounder(kilovalue);
    feetInput.value = rounder(feetvalue);
    inchInput.value = rounder(inchvalue);
    mileInput.value = rounder(milevalue);
    yardInput.value = rounder(yardvalue);
}

function kilocon(){
    let kilovalue = parseFloat(kilometerInput.value);
    let milivalue = kilovalue*1000000;
    let centivalue = kilovalue*100000; 
    let decivalue = kilovalue*10000;
    let metervalue = kilovalue*1000;
    let feetvalue = milivalue*0.00328084;
    let inchvalue = milivalue*0.0393701;
    let milevalue = metervalue*0.000621;
    let yardvalue = milivalue*0.00109361;
    milimeterInput.value = rounder(milivalue);
    centimeterInput.value = rounder(centivalue);
    decimeterInput.value = rounder(decivalue);
    meterInput.value = rounder(metervalue);
    feetInput.value = rounder(feetvalue);
    inchInput.value = rounder(inchvalue);
    mileInput.value = rounder(milevalue);
    yardInput.value = rounder(yardvalue);
}

function feetcon(){
    let feetvalue = parseFloat(feetInput.value);
    let milivalue = feetvalue*304.8;
    let centivalue = milivalue/10;
    let decivalue = centivalue/10;
    let metervalue = decivalue/10;
    let kilovalue = metervalue/1000;
    let inchvalue = milivalue*0.0393701;
    let milevalue = metervalue*0.000621;
    let yardvalue = milivalue*0.00109361;
    milimeterInput.value = rounder(milivalue);
    centimeterInput.value = rounder(centivalue);
    decimeterInput.value = rounder(decivalue);
    meterInput.value = rounder(metervalue);
    kilometerInput.value = rounder(kilovalue);
    inchInput.value = rounder(inchvalue);
    mileInput.value = rounder(milevalue);
    yardInput.value = rounder(yardvalue);
}

function inchcon(){
    let inchvalue = parseFloat(inchInput.value);
    let milivalue = inchvalue*25.4;
    let centivalue = milivalue/10;
    let decivalue = centivalue/10;
    let metervalue = decivalue/10;
    let kilovalue = metervalue/1000;
    let feetvalue = milivalue*0.00328084;
    let milevalue = metervalue*0.000621;
    let yardvalue = milivalue*0.00109361;
    milimeterInput.value = rounder(milivalue);
    centimeterInput.value = rounder(centivalue);
    decimeterInput.value = rounder(decivalue);
    meterInput.value = rounder(metervalue);
    kilometerInput.value = rounder(kilovalue);
    feetInput.value = rounder(feetvalue);
    mileInput.value = rounder(milevalue);
    yardInput.value = rounder(yardvalue);
}

function milecon(){
    let milevalue = parseFloat(mileInput.value);
    let milivalue = milevalue*1609344;
    let centivalue = milivalue/10;
    let decivalue = centivalue/10;
    let metervalue = decivalue/10;
    let kilovalue = metervalue/1000;
    let feetvalue = milivalue*0.00328084;
    let inchvalue = milivalue*0.0393701;
    let yardvalue = milivalue*0.00109361;
    milimeterInput.value = rounder(milivalue);
    centimeterInput.value = rounder(centivalue);
    decimeterInput.value = rounder(decivalue);
    meterInput.value = rounder(metervalue);
    kilometerInput.value = rounder(kilovalue);
    feetInput.value = rounder(feetvalue);
    inchInput.value = rounder(inchvalue);
    yardInput.value = rounder(yardvalue);
}

function yardcon(){
    let yardvalue = parseFloat(yardInput.value);
    let milivalue = yardvalue*914.4;
    let centivalue = milivalue/10;
    let decivalue = centivalue/10;
    let metervalue = decivalue/10;
    let kilovalue = metervalue/1000;
    let feetvalue = milivalue*0.00328084;
    let inchvalue = milivalue*0.0393701;
    let milevalue = metervalue*0.000621;
    milimeterInput.value = rounder(milivalue);
    centimeterInput.value = rounder(centivalue);
    decimeterInput.value = rounder(decivalue);
    meterInput.value = rounder(metervalue);
    kilometerInput.value = rounder(kilovalue);
    feetInput.value = rounder(feetvalue);
    inchInput.value = rounder(inchvalue);
    mileInput.value = rounder(milevalue);
}

//event listeners
milimeterInput.addEventListener('input', milicon);
centimeterInput.addEventListener('input', centicon);
decimeterInput.addEventListener('input', decicon);
meterInput.addEventListener('input', metercon);
kilometerInput.addEventListener('input', kilocon);
feetInput.addEventListener('input', feetcon);
inchInput.addEventListener('input', inchcon);
mileInput.addEventListener('input', milecon);
yardInput.addEventListener('input', yardcon);
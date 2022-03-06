const value = document.getElementById('value');

const cancle = document.getElementById('cancle');
const div = document.getElementById('division');
const multi = document.getElementById('multiply');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');

const one = document.getElementById('one');
const two = document.getElementById('two');
const thr = document.getElementById('thr');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('sev');
const eight = document.getElementById('eig');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');

const run = document.getElementById('run');
var original;
var answer;

/*숫자 1*/
function oneBtn(){
    if(value.value=='0'){
        value.value='';
        original = value.value;
        value.value= original+'1';
    }else{
        original = value.value;
        value.value= original+'1';
    }
}

/*숫자 2*/
function twoBtn(){
    if(value.value=='0'){
        value.value='';
        original = value.value;
        value.value= original+'2';
    }else{
        original = value.value;
        value.value= original+'2';
    }
}

/*숫자 3*/
function threeBtn(){
    if(value.value=='0'){
        value.value='';
        original = value.value;
        value.value= original+'3';
    }else{
        original = value.value;
        value.value= original+'3';
    }
}

/*숫자 4*/
function fourBtn(){
    if(value.value=='0'){
        value.value='';
        original = value.value;
        value.value= original+'4';
    }else{
        original = value.value;
        value.value= original+'4';
    }
}

/*숫자 5*/
function fiveBtn(){
    if(value.value=='0'){
        value.value='';
        original = value.value;
        value.value= original+'5';
    }else{
        original = value.value;
        value.value= original+'5';
    }
}

/*숫자 6*/
function sixBtn(){
    if(value.value=='0'){
        value.value='';
        original = value.value;
        value.value= original+'6';
    }else{
        original = value.value;
        value.value= original+'6';
    }
}

/*숫자 7*/
function sevenBtn(){
    if(value.value=='0'){
        value.value='';
        original = value.value;
        value.value= original+'7';
    }else{
        original = value.value;
        value.value= original+'7';
    }
}

/*숫자 8*/
function eightBtn(){
    if(value.value=='0'){
        value.value='';
        original = value.value;
        value.value= original+'8';
    }else{
        original = value.value;
        value.value= original+'8';
    }
}

/*숫자 9*/
function nineBtn(){
    if(value.value=='0'){
        value.value='';
        original = value.value;
        value.value= original+'9';
    }else{
        original = value.value;
        value.value= original+'9';
    }
}

/*숫자 0*/
function zeroBtn(){
    original = value.value;
    value.value= original+'0';
}

/*cancle 버튼*/
function cancleBtn(){
    value.value='0';
}

/*나누기 버튼*/
function divBtn(){
    if(value.value=='0'){
        value.value='';
        original = value.value;
        value.value= original+'/';
    }else{
        original = value.value;
        value.value= original+'/';
    }
}

/*곱하기 버튼*/
function mulBtn(){
    if(value.value=='0'){
        value.value='';
        original = value.value;
        value.value= original+'*';
    }else{
        original = value.value;
        value.value= original+'*';
    }
}

/*더하기 버튼*/
function plusBtn(){
    if(value.value=='0'){
        value.value='';
        original = value.value;
        value.value= original+'+';
    }else{
        original = value.value;
        value.value= original+'+';
    }
}

/*빼기 버튼*/
function minusBtn(){
    if(value.value=='0'){
        value.value='';
        original = value.value;
        value.value= original+'-';
    }else{
        original = value.value;
        value.value= original+'-';
    }
}

/*run 버튼*/
function runBtn(){
    answer = eval(value.value);
    value.value = answer;
}
/* 
const cancle = document.getElementById('cancle');
const div = document.getElementById('division');
const multi = document.getElementById('multiply');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
*/

run.addEventListener('click',runBtn);
div.addEventListener('click',divBtn);
multi.addEventListener('click',mulBtn);
minus.addEventListener('click',minusBtn);
plus.addEventListener('click',plusBtn);
cancle.addEventListener('click',cancleBtn);
one.addEventListener('click',oneBtn);
two.addEventListener('click',twoBtn);
thr.addEventListener('click',threeBtn);
four.addEventListener('click',fourBtn);
five.addEventListener('click',fiveBtn);
six.addEventListener('click',sixBtn);
seven.addEventListener('click',sevenBtn);
eight.addEventListener('click',eightBtn);
nine.addEventListener('click',nineBtn);
zero.addEventListener('click',zeroBtn);

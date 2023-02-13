//  Calculator keys event handler
document.getElementById('calc-keys').addEventListener('click', function(event){
    const calcKey = event.target.innerText;
    const output = document.getElementById('output-value');
    if(isNaN(calcKey)){
        if(calcKey === '+'){
            output.value += calcKey;
        }
        else if(calcKey === '-'){
            output.value += calcKey;
        }
        else if(calcKey === 'x'){
            output.value += '*';
        }
        else if(calcKey === '÷'){
            output.value += '/';
        }
        else if(calcKey === '•'){
            output.value += '.';
        }
        else if(calcKey === 'C'){
            output.value = '';
        }
        else if(calcKey === '='){
            if(output.value === ''){
                // output.value = '';
                return;
            }
            else {
                output.value = eval(output.value);
            }
        }
    }
    else {
        output.value += calcKey;
    }
})
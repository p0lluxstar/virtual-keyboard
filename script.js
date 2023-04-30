const outputTextarea = document.getElementById('outputText');
outputTextarea.focus();



/* window.onkeydown = evt => {
    if (evt.key == 'Tab') { 
        console.log('Tab')
    }
    if (evt.key == 'CapsLock') {
        console.log('CapsLock')
    }
    if (evt.key == 'Shift') {
        console.log('Shift')
    }
    if (evt.key == 'Control') {
        console.log('Control')
    }
    
    evt.preventDefault();
} */

let keyboardEn = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 'backspace', 'tab', 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 'backslash', 'capslook', 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 'enter', 'shiftl', 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 'shiftr', 'top', 'ctrl', 'win', 'alt', 'spacebar', 'alt', 'win', 'ctrl', 'left', 'down', 'right', ];

function creatKeyBoard(){
    let out = '';
    for (let i = 0; i < keyboardEn.length; i++){
        if(i === 14 || i === 28 || i === 41 || i === 54){
            out += '<div class="line-break"></div>'
        }
        out += '<div class="key" data="' + keyboardEn[i] + '">' + String.fromCharCode(keyboardEn[i]) + '</div>';

    }

    document.querySelector('.keyboard').innerHTML = out;
}

creatKeyBoard();

function findData(){
    document.querySelectorAll('.keyboard .key').forEach(function(e){
        if (e.getAttribute('data') === 'backspace'){
            e.innerHTML = 'Backspace';
            e.classList.add('backspace');
        }
        if (e.getAttribute('data') === 'tab'){
            e.innerHTML = 'Tab';
            e.classList.add('tab');
        }
        if (e.getAttribute('data') === 'backslash'){
            e.innerHTML = '\\';
            e.classList.add('backslash');
        }
        if (e.getAttribute('data') === 'capslook'){
            e.innerHTML = 'Caps Look';
            e.classList.add('capslook');
        }
        if (e.getAttribute('data') === 'enter'){
            e.innerHTML = 'Enter';
            e.classList.add('enter');
        }
        if (e.getAttribute('data') === 'shiftl'){
            e.innerHTML = 'Shift';
            e.classList.add('shiftl');
        }
        if (e.getAttribute('data') === 'shiftr'){
            e.innerHTML = 'Shift';
            e.classList.add('shiftr');
        }
        if (e.getAttribute('data') === 'ctrl'){
            e.innerHTML = 'Ctrl';
            e.classList.add('ctrl');
        }
        if (e.getAttribute('data') === 'win'){
            e.innerHTML = 'Win';
            e.classList.add('win');
        }
        if (e.getAttribute('data') === 'spacebar'){
            e.innerHTML = '';
            e.classList.add('spacebar');
        }
        if (e.getAttribute('data') === 'alt'){
            e.innerHTML = 'Alt';
            e.classList.add('alt');
        }
        if (e.getAttribute('data') === 'top'){
            e.innerHTML = '↑';
            e.classList.add('top');
        }
        if (e.getAttribute('data') === 'left'){
            e.innerHTML = '←';
            e.classList.add('left');
        }
        if (e.getAttribute('data') === 'down'){
            e.innerHTML = '↓';
            e.classList.add('down');
        }
        if (e.getAttribute('data') === 'right'){
            e.innerHTML = '→';
            e.classList.add('right');
        }
        console.log(e.getAttribute('data'))
    })
}

findData()

document.onkeypress = function (e){
    outputTextarea.focus();

    function delClassActive(){
        document.querySelectorAll('.keyboard .key').forEach(function(e){
            e.classList.remove('active')
        })
    }
    setTimeout(delClassActive, 100)

    document.querySelector('.keyboard .key[data="' + e.keyCode + '"]').classList.add('active')
}

document.querySelectorAll('.keyboard .key').forEach(function(e){
    e.onclick = function(){
        outputTextarea.value += e.innerHTML;
    }
});


/* document.onkeypress = function(e){
   
    a.push(e.charCode)
    console.log(a)
} */

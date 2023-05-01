const outputTextarea = document.getElementById('outputText');
outputTextarea.focus();
outputTextarea.value.toLowerCase();


let keyboardEnLower = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'backslash', 'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter', 'shiftl', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shiftr', 'top', 'ctrl', 'win', 'alt', 'spacebar', 'alt', 'win', 'ctrl', 'left', 'down', 'right', ];
let keyboardEnUpper = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'backslash', 'capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'enter', 'shiftl', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'shiftr', 'top', 'ctrl', 'win', 'alt', 'spacebar', 'alt', 'win', 'ctrl', 'left', 'down', 'right', ];

//создание первоначальной клавиатуры
function creatKeyBoard(arrSymbol){
    let out = '';
    for (let i = 0; i < arrSymbol.length; i++){
        if(i === 14 || i === 28 || i === 41 || i === 54){
            out += '<div class="line-break"></div>'
        }
        out += '<div class="key" data="' + arrSymbol[i] + '">' + arrSymbol[i] + '</div>';

    }

    document.querySelector('.keyboard').innerHTML = out;
    
}

creatKeyBoard(keyboardEnLower);

// добавляем классы функциональным кнопкам
function addClassFnButton(arg){

    let classActive = 'no-active'

    if(!(typeof arg === 'undefined')){
        classActive = 'active'
    }
 
    document.querySelectorAll('.key').forEach(function(e){
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
        if (e.getAttribute('data') === 'capslock'){
            e.innerHTML = 'Caps Lock';
            e.classList.add('capslock', `${classActive}`);
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
    })
}

addClassFnButton();

//отвечает за вывод символов в textarea
function addSybmoInTextarea(){
    document.querySelectorAll('.keyboard .key').forEach(function(e){
        e.addEventListener('click', () => {
            if(e.innerHTML === 'Caps Lock' || e.innerHTML === 'Backspace' || e.innerHTML === 'Enter'){
               return;
            } else {
                outputTextarea.value += e.innerHTML; 
            }
        }) 
    });
    
}

addSybmoInTextarea();

/* caps lock */
// отвечате за работу при клике мышкой
function workCapsLockClick(){ 

    const capsLock = document.querySelector('.capslock');
    capsLock.addEventListener('click', () => {

        if(!capsLock.classList.contains('active')){
            creatKeyBoard(keyboardEnUpper);
            addClassFnButton('active');
            addSybmoInTextarea();
            workCapsLockClick();
            workCapsLockPress()
        }else {
            creatKeyBoard(keyboardEnLower);
            addClassFnButton();
            addSybmoInTextarea();
            workCapsLockClick();
            workCapsLockPress()
        }
        
    });
}
workCapsLockClick();

function workCapsLockPress(){
    const capsLock = document.querySelector('.capslock');

    document.addEventListener('keydown', function(e){
        outputTextarea.focus();

       if (e.key === 'CapsLock'){
            if(capsLock.classList.contains('no-active')){
                capsLock.classList.add('active')
                capsLock.classList.remove('no-active')
                creatKeyBoard(keyboardEnUpper);
                addClassFnButton('active');
                addSybmoInTextarea();
                workCapsLockClick();
                workCapsLockPress()
            }else{
                capsLock.classList.remove('active')
                capsLock.classList.add('no-active')
                creatKeyBoard(keyboardEnLower);
                addClassFnButton();
                addSybmoInTextarea();
                workCapsLockClick();
                workCapsLockPress()
            }
       }

        document.querySelectorAll('.keyboard .key').forEach(el =>{
            if(e.key === el.innerHTML){
                el.classList.add('active') 
                
            }
        })

        function delClassActive(){
            document.querySelectorAll('.keyboard .key').forEach(el =>{
                if(!(el.innerHTML === 'Caps Lock')){
                    el.classList.remove('active');
                } 
            })
        }
        setTimeout(delClassActive, 120)
    })
}

workCapsLockPress();
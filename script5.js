const outputTextarea = document.getElementById('outputText');
outputTextarea.focus();

let keyboardEn = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 'backspace', 'tab', 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 'backslash', 'capslock', 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 'enter', 'shiftl', 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 'shiftr', 'top', 'ctrl', 'win', 'alt', 'spacebar', 'alt', 'win', 'ctrl', 'left', 'down', 'right', ];

//создание первоначальной клавиатуры
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

//при нажатии на клавиши создается эффект нажатия
function showEffectPressClick(){
    document.onkeypress = function (e){
        outputTextarea.focus();
    
        function delClassActive(){
            document.querySelectorAll('.keyboard .key').forEach(function(e){
                if(!(e.innerHTML === 'Caps Lock')){
                    e.classList.remove('active');
                }
            })
        }
        setTimeout(delClassActive, 100);
    
        document.querySelector('.keyboard .key[data="' + e.keyCode + '"]').classList.add('active')
    }
}
showEffectPressClick();

/* document.onkeypress = function(e){
   
    a.push(e.charCode)
    console.log(a)
} */


/*capslock*/ 

// основна фукнция capslock, переводит символы в верхний регистр
function globalWorkCapsLock(){
    const capsLock = document.querySelector('.capslock');
    if(!capsLock.classList.contains('active')){
        console.log('active no')
       
        creatKeyBoard();
        addClassFnButton();
        addSybmoInTextarea();
        workCapsLockClick();
    }else {
        console.log('active yes')
       
        let out = '';
        for (let i = 0; i < keyboardEn.length; i++){
            if(i === 14 || i === 28 || i === 41 || i === 54){
                out += '<div class="line-break"></div>'
            }
            out += '<div class="key" data="' + keyboardEn[i] + '">' + String.fromCharCode(keyboardEn[i]).toUpperCase() + '</div>';
    
        }
        
        document.querySelector('.keyboard').innerHTML = out;
        
        addClassFnButton('active');
        addSybmoInTextarea();
        workCapsLockClick();
    }
}

globalWorkCapsLock();

// отвечате за работу при клике мышкой
function workCapsLockClick(){ 
    const capsLock = document.querySelector('.capslock');
    capsLock.addEventListener('click', () => {
        if(!capsLock.classList.contains('active')){
            console.log(1)
            addClassFnButton('active');
            globalWorkCapsLock();
            workCapsLockPress();
            globalWorkSpacebar();
            globalWorkBackspace();
            globalWorkEnter();
            
        }else {
            console.log(2)
            capsLock.classList.remove('active');
            creatKeyBoard();
            addClassFnButton();
            addSybmoInTextarea();
            workCapsLockClick();
            globalWorkSpacebar();
            globalWorkBackspace();
            globalWorkEnter();
        }
    })
}

// отвечате за работу при нажатии на клавиши
function workCapsLockPress(){
    const capsLock = document.querySelector('.capslock');

    /* window.onkeydown = evt => {
        if (evt.key == 'CapsLock') {
            if(!(capsLock.classList.contains('active'))){
                console.log(11)
                addClassFnButton('active');
                globalWorkCapsLock();
                globalWorkSpacebar();
                globalWorkBackspace();
            }else {
                capsLock.classList.remove('active');
                console.log(22)
                creatKeyBoard();
                addClassFnButton();
                addSybmoInTextarea();
                workCapsLockClick();
                globalWorkSpacebar();
                globalWorkBackspace();
            }
        } 
        workCapsLockPress();
    } */
}

workCapsLockPress();

/*spacebar*/
function globalWorkSpacebar(){
    const spacebar = document.querySelector('.spacebar');

    spacebar.addEventListener('click', () => {
        outputTextarea.value += ' ';
    })

}

globalWorkSpacebar();

/*backspace*/
function globalWorkBackspace(){
    const backspace = document.querySelector('.backspace');

    function delSymbol(){
        if(outputTextarea.value.length > 0){
            let newTextarea = outputTextarea.value.slice(0, -1);
            outputTextarea.value = newTextarea;
        }
    }

    backspace.addEventListener('click', () => {
        delSymbol()
    })

    window.onkeydown = evt => {
        if (evt.key == 'Backspace'){
            delSymbol()
        }
    }
}

globalWorkBackspace();

/*enter*/

function globalWorkEnter(){
    const enter = document.querySelector('.enter');

    enter.addEventListener('click', () => {
        outputTextarea.value += '\n';
    })

    window.onkeydown = evt => {
        if (evt.key == 'Enter'){
            outputTextarea.value += '\n';
        }
    }
}
globalWorkEnter();

/* window.onkeydown = evt => {
    if (evt.key == 'Tab'){
        evt.preventDefault();
        console.log(111)
    }
} */


function autoDelClassActive(nameClass){
    document.querySelector(`.${nameClass}`).classList.add('active');
    function delClassActive(){
        document.querySelector(`.${nameClass}`).classList.remove('active');
    }
    setTimeout(delClassActive, 100);
}

//
document.addEventListener('keydown', function(e) {
    e.preventDefault();
    console.log(e)
    if(e.code === 'CapsLock'){
        document.querySelector('.capslock').classList.toggle('active');
    }
    if(e.code === 'Space'){
        autoDelClassActive('spacebar'); 
    }
    if(e.code === 'Enter'){
        autoDelClassActive('enter'); 
    }
    if(e.code === 'Backspace'){
        autoDelClassActive('backspace'); 
    }
});




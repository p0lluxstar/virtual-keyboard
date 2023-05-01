

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

//
let arr = []
document.addEventListener('keydown', function(e) {
   
    arr.push(e.key)
    console.log(arr)

    e.preventDefault();
    console.log(e)
    if(e.code === 'CapsLock'){
       
        creatKeyBoard(keyboardEn3)
        addClassFnButton();
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




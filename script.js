function initHtml(){
    const divTitle = document.createElement('div');
    divTitle.classList.add('title');
    const elH1 = document.createElement('h1');
    elH1.innerHTML = 'RSS Виртуальная клавиатура';
    divTitle.appendChild(elH1);
    
    const divBlockText = document.createElement('div');
    divBlockText.classList.add('block-text');
    const elTextarea = document.createElement('textarea');
    elTextarea.setAttribute('id', 'outputText'); 
    divBlockText.appendChild(elTextarea);
    
    const divKeyboard = document.createElement('div');
    divKeyboard.classList.add('keyboard');
    
    const divChangeLanguage = document.createElement('div');
    divChangeLanguage.classList.add('change-language');
    const elP = document.createElement('p');
    elP.innerHTML = 'Смена раскладки Ctrl + Alt';
    divChangeLanguage.appendChild(elP);
    
    document.body.appendChild(divTitle);
    document.body.appendChild(divBlockText);
    document.body.appendChild(divKeyboard);
    document.body.appendChild(divChangeLanguage);
}
initHtml();

const outputTextarea = document.getElementById('outputText');
outputTextarea.focus();

let keyboardEnLower = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'backslash', 'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter', 'shiftl', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shiftr', 'up', '', 'ctrl', 'win', 'alt', 'spacebar', 'alt', 'win', 'ctrl', 'left', 'down', 'right', ];
let keyboardEnUpper = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'backslash', 'capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'enter', 'shiftl', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'shiftr', 'up', '', 'ctrl', 'win', 'alt', 'spacebar', 'alt', 'win', 'ctrl', 'left', 'down', 'right', ];
let keyboardEnUpperShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace', 'tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'backslash', 'capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'enter', 'shiftl', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '?', 'shiftr', 'up', '', 'ctrl', 'win', 'alt', 'spacebar', 'alt', 'win', 'ctrl', 'left', 'down', 'right', ];
let keyboardRuLower = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'backslash', 'capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'enter', 'shiftl', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'shiftr', 'up', '', 'ctrl', 'win', 'alt', 'spacebar', 'alt', 'win', 'ctrl', 'left', 'down', 'right', ];
let keyboardRuUpper = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'backslash', 'capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'enter', 'shiftl', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'shiftr', 'up', '', 'ctrl', 'win', 'alt', 'spacebar', 'alt', 'win', 'ctrl', 'left', 'down', 'right', ];
let keyboardRuUpperShift = ['`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace', 'tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'backslash', 'capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'enter', 'shiftl', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'shiftr', 'up', '', 'ctrl', 'win', 'alt', 'spacebar', 'alt', 'win', 'ctrl', 'left', 'down', 'right', ];

//создание первоначальной клавиатуры
function creatKeyBoard(arrSymbol){
    let out = '';
    for (let i = 0; i < arrSymbol.length; i++){
        if(arrSymbol[i].length > 1){
            out += `<div class="key ${arrSymbol[i]}" data="${arrSymbol[i]}" >${arrSymbol[i]}</div>`;
        }else{
            out += `<div class="key" data="${arrSymbol[i]}">${arrSymbol[i]}</div>`;
        }
    }

    document.querySelector('.keyboard').innerHTML = out;
    
}

//сохранение выбранного языка после обновления страницы, по умолчанию загружается en
let languageKey = localStorage.getItem("languageKey");

if(languageKey === 'en'){
    creatKeyBoard(keyboardEnLower);
}else if(languageKey === 'ru'){
    creatKeyBoard(keyboardRuLower)
}else{
    creatKeyBoard(keyboardEnLower)
}

// добавляем классы функциональным кнопкам
function changeInnerHtmlFnButton(){

    document.querySelectorAll('.key').forEach(function(e){
        if (e.getAttribute('data') === 'backspace'){
            e.innerHTML = 'Backspace';
        }
        if (e.getAttribute('data') === 'tab'){
            e.innerHTML = 'Tab';
        }
        if (e.getAttribute('data') === 'backslash'){
            e.innerHTML = '\\';
        }
        if (e.getAttribute('data') === 'capslock'){
            e.innerHTML = 'Caps Lock';
        }
        if (e.getAttribute('data') === 'enter'){
            e.innerHTML = 'Enter';
        }
        if (e.getAttribute('data') === 'shiftl'){
            e.innerHTML = 'Shift';
        }
        if (e.getAttribute('data') === 'shiftr'){
            e.innerHTML = 'Shift';
        }
        if (e.getAttribute('data') === 'ctrl'){
            e.innerHTML = 'Ctrl';
        }
        if (e.getAttribute('data') === 'win'){
            e.innerHTML = 'Win';
        }
        if (e.getAttribute('data') === 'spacebar'){
            e.innerHTML = ' ';
        }
        if (e.getAttribute('data') === 'alt'){
            e.innerHTML = 'Alt';
        }
        if (e.getAttribute('data') === 'up'){
            e.innerHTML = '↑';
        }
        if (e.getAttribute('data') === 'left'){
            e.innerHTML = '←';
        }
        if (e.getAttribute('data') === 'down'){
            e.innerHTML = '↓';
        }
        if (e.getAttribute('data') === 'right'){
            e.innerHTML = '→';
        }
    })
}

changeInnerHtmlFnButton();

function updateInnerHtml(arg){
    document.querySelectorAll('.key').forEach((e, index) => {
        e.innerHTML = arg[index]
    })
}

//отвечает за вывод символов в textarea
function addSybmoInTextarea(){
    document.querySelectorAll('.keyboard .key').forEach(function(e){
        e.addEventListener('click', () => {
            if(e.innerHTML === 'Caps Lock' 
            || e.innerHTML === 'Backspace' 
            || e.innerHTML === 'Enter' 
            || e.innerHTML === 'Tab' 
            || e.innerHTML === 'Alt' 
            || e.innerHTML === 'Shift'
            || e.innerHTML === 'Ctrl'){
               return;
            } else {
                outputTextarea.value += e.innerHTML; 
            }
        }) 
    });
    
}

addSybmoInTextarea();

/*tab*/
function workTabClick(){
    const tab = document.querySelector('.tab');
    tab.addEventListener('click', () => {
        outputTextarea.value += '    ';
    })

}
workTabClick();

/* caps lock */
// отвечате за работу при клике мышкой
function workCapsLockClick(){ 

    const capsLock = document.querySelector('.capslock');
    capsLock.addEventListener('click', () => {

        if(!capsLock.classList.contains('active') && document.querySelector('.key').innerHTML === '`'){
            updateInnerHtml(keyboardEnUpper);
            capsLock.classList.add('active');

        }else if(capsLock.classList.contains('active') && document.querySelector('.key').innerHTML === '`'){
            updateInnerHtml(keyboardEnLower);
            capsLock.classList.remove('active');

        }else if(!capsLock.classList.contains('active') && document.querySelector('.key').innerHTML === 'ё'){
            updateInnerHtml(keyboardRuUpper);
            capsLock.classList.add('active');

        }else if(capsLock.classList.contains('active') && document.querySelector('.key').innerHTML === 'Ё'){
            updateInnerHtml(keyboardRuLower);
            capsLock.classList.add('active');
        }

        changeInnerHtmlFnButton();
        
    });
}
workCapsLockClick();

/*Backspace*/
function workBackspaceClick(){
    const backspace = document.querySelector('.backspace');
    backspace.addEventListener('click', () => {
        if(outputTextarea.value.length > 0){
            let newTextarea = outputTextarea.value.slice(0, -1);
            outputTextarea.value = newTextarea;
        }
    })
}
workBackspaceClick();

/*Shift*/
function workShiftRCLick(){
    const shiftr = document.querySelector('.shiftr');

    shiftr.addEventListener('mousedown', () => {
        shiftr.classList.add('active');
        if(document.querySelector('.key').innerHTML === '`'){
            updateInnerHtml(keyboardEnUpperShift);
        }else {
            updateInnerHtml(keyboardRuUpperShift);
        }
        changeInnerHtmlFnButton();
    })

    shiftr.addEventListener('mouseup', () => {
        shiftr.classList.remove('active');
        if(document.querySelector('.key').innerHTML === '~'){
            updateInnerHtml(keyboardEnLower);
        }else {
            updateInnerHtml(keyboardRuLower);
        }
        
        changeInnerHtmlFnButton();
    })
}

workShiftRCLick();

function workShiftLCLick(){
    const shiftl = document.querySelector('.shiftl');

    shiftl.addEventListener('mousedown', () => {
        shiftl.classList.add('active');
        if(document.querySelector('.key').innerHTML === '`'){
            updateInnerHtml(keyboardEnUpperShift);
        }else {
            updateInnerHtml(keyboardRuUpperShift);
        }
        changeInnerHtmlFnButton();
    })

    shiftl.addEventListener('mouseup', () => {
        shiftl.classList.remove('active');
        if(document.querySelector('.key').innerHTML === '~'){
            updateInnerHtml(keyboardEnLower);
        }else {
            updateInnerHtml(keyboardRuLower);
        }
        
        changeInnerHtmlFnButton();
    })
}

workShiftLCLick();

/*Enter*/
function workEnterClick(){
    const enter = document.querySelector('.enter');

    enter.addEventListener('click', () => {
        outputTextarea.value += '\n';
    })
}
workEnterClick();

/*key spacebar*/
function workSpacebarClick(){
    const spacebar = document.querySelector('.spacebar');

    spacebar.addEventListener('click', () => {
        outputTextarea.value += '';
    })
}
workSpacebarClick();

/*Alt*/
function workAltClick(){
    const alt = document.querySelector('.alt');
    const capsLock = document.querySelector('.capslock');
    
    alt.addEventListener('click', () => {
        if(document.querySelector('.key').innerHTML === '`'){
            updateInnerHtml(keyboardRuLower);
            let localStorageLanguage = "ru";
            localStorage.setItem("languageKey", localStorageLanguage);
        } else {
            let localStorageLanguage = "en";
            localStorage.setItem("languageKey", localStorageLanguage);
            updateInnerHtml(keyboardEnLower);
        }
        capsLock.classList.remove('active');
        changeInnerHtmlFnButton();
    })
}
workAltClick();

//нажатия кнопок

let arrKeyCode = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 38, 0, 17, 91, 18, 32, 18, 91, 17, 37, 40, 39]


function pressKey(){
    const capsLock = document.querySelector('.capslock');
    
    document.addEventListener('keydown', function(e){
        e.preventDefault();
        outputTextarea.focus();

        arrKeyCode.forEach((arrE, index) => {
            if(arrE === e.keyCode){
                if(!(e.keyCode === 8 
                    || e.keyCode === 20
                    || e.keyCode === 13
                    || e.keyCode === 16
                    || e.keyCode === 17
                    || e.keyCode === 91
                    || e.keyCode === 18
                    )){
                    outputTextarea.value += document.querySelectorAll('.keyboard .key')[index].innerHTML
                }
                if(!(e.keyCode === 20 )){      
                document.querySelectorAll('.keyboard .key')[index].classList.add('active')}
            }
        })

        function delClassActive(){
            document.querySelectorAll('.keyboard .key').forEach(function(e){
                if(!(e.innerHTML === 'Caps Lock')){
                    e.classList.remove('active');
                }
            })
        }
        setTimeout(delClassActive, 120);

        if(e.key === 'Tab'){
            e.preventDefault();
            outputTextarea.value += '    ';
        }

       if (e.key === 'CapsLock'){
        
            if(!capsLock.classList.contains('active') && document.querySelector('.key').innerHTML === '`'){
                capsLock.classList.add('active')
                updateInnerHtml(keyboardEnUpper);

            }else if(!capsLock.classList.contains('no-active') && document.querySelector('.key').innerHTML === '`'){
                capsLock.classList.remove('active')
                updateInnerHtml(keyboardEnLower);
  
            }else if(!capsLock.classList.contains('active') && document.querySelector('.key').innerHTML === 'ё'){
                console.log(1)
                capsLock.classList.add('active')
                updateInnerHtml(keyboardRuUpper);

            }else if(!capsLock.classList.contains('no-active') && document.querySelector('.key').innerHTML === 'Ё'){
                capsLock.classList.remove('active')
                updateInnerHtml(keyboardRuLower);
            }

            changeInnerHtmlFnButton();

       }

       if (e.key === 'ArrowLeft'){
            outputTextarea.value += '←';
            document.querySelector('.left').classList.add('active')
       }

       if (e.key === 'ArrowUp'){
            outputTextarea.value += '↑';
            document.querySelector('.up').classList.add('active')
        }

        if (e.key === 'ArrowRight'){
            outputTextarea.value += '→';
            document.querySelector('.right').classList.add('active')
        }

        if (e.key === 'ArrowDown'){
            outputTextarea.value += '↓';
            document.querySelector('.down').classList.add('active')
        }

    })
}

pressKey();

//alt кнопка
document.addEventListener('keydown', (e) => {
    const capsLock = document.querySelector('.capslock');
    if(e.key === 'Alt'){
        e.preventDefault();
        if(document.querySelector('.key').innerHTML === '`'){
            updateInnerHtml(keyboardRuLower);
            let localStorageLanguage = "ru";
            localStorage.setItem("languageKey", localStorageLanguage);
        } else {
            updateInnerHtml(keyboardEnLower);
            let localStorageLanguage = "en";
            localStorage.setItem("languageKey", localStorageLanguage);
        }
        changeInnerHtmlFnButton();
        capsLock.classList.remove('active');
    }
})

document.addEventListener('keydown', (e) => {
    if(e.key === 'Control'){
        e.preventDefault();
        document.querySelectorAll('.ctrl').forEach(e => {
            e.classList.add('active')
        })
    }
})

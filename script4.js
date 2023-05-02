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

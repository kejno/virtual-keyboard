function keyDown(event) {

    let eventCodeElement = document.querySelector(`.${event.code}`);
    console.log(eventCodeElement)

    event.code != 'CapsLock'
        ? eventCodeElement.classList.add('push')
        : capsLock.classList.toggle('push')

    if (!event.repeat) {
        if (event.code == 'CapsLock' || event.code == 'ShiftLeft') {
            for (let i = 0; i < item.length; i++) {
                eng[i].children[0].classList.toggle('hidden');
                eng[i].children[1].classList.toggle('hidden');
                rus[i].children[0].classList.toggle('hidden');
                rus[i].children[1].classList.toggle('hidden');
            }
        }
    }
    if (event.code == 'Tab' || event.code == 'AltLeft' || event.code == 'MetaLeft') {
        event.preventDefault();
    }

    //======ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА=======//

    if (event.ctrlKey && event.altKey && !event.repeat) {

        !isEng ? isEng = true : isEng = false;
        console.log(isEng)
        localStorage.setItem('isEng', JSON.stringify(isEng))

        for (let i = 0; i < eng.length; i++) {
            eng[i].classList.toggle('hidden');
            rus[i].classList.toggle('hidden');
            rus[i].children[0].classList.toggle('hidden');
            eng[i].children[0].classList.toggle('hidden');
        }
    }

    /* ВЫВОД СИМВОЛОВ В TEXTAREA */
    for (let i = 0; i < eventCodeElement.children.length; i++) {
        if (eventCodeElement.children[i].classList.length == 1 && event.key.length == 1 && event.code != 'Space') {
            event.preventDefault();
            if (eventCodeElement.children[i].children[0].classList.length == 1) {
                textarea.value += eventCodeElement.children[i].children[0].innerHTML
            }
            else textarea.value += eventCodeElement.children[i].children[1].innerHTML
        }
    }
}

function keyUp(event) {

    event.code == 'CapsLock' ? null : document.querySelector(`.${event.code}`).classList.remove('push');

    if (event.code == 'ShiftLeft') {

        for (let i = 0; i < item.length; i++) {
            let k = 0;
            while (k < 2) {
                eng[i].children[k].classList.toggle('hidden');
                rus[i].children[k].classList.toggle('hidden');
                k++;
            }
        }
    }
}

document.onkeydown = keyDown;
document.onkeyup = keyUp;


for (let i = 0; i < item.length; i++) {

    item[i].onmouseover = (event) => {
        event.currentTarget.classList.add('hover')
    }
    item[i].onmouseout = (event) => {
        event.currentTarget.classList.remove('hover')
    }
    item[i].onmousedown = (event) => {
        event.currentTarget.classList.add('push')
    }
    item[i].onmouseup = (event) => {
        event.currentTarget.classList.remove('push')
    }
}



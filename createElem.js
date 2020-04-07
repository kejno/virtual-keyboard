function createElem(elem) {
    let el = document.createElement(elem)
    return el;
}

function prepend(elem, classname, parent) {
    let input = createElem(elem);
    input.classList.add(classname);
    document.querySelector(`${parent}`).prepend(input)
}

function append(elem, classname, parent, text = '') {
    let input = createElem(elem);
    input.className = classname;
    input.innerHTML = text;
    document.querySelector(`${parent}`).append(input)
}

let isEng = JSON.parse(localStorage.getItem('isEng'))
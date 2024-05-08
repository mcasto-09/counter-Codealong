let count = 0;
const counterContainer = document.querySelector('h1');
console.log(counterContainer);

function increase () {
    count++;
    counterContainer.innerText = count
    console.log(count);
}
function decrease() {
    count--;
    counterContainer.innerText = count
    console.log(count);
}


document.querySelector('#decrement').addEventListener('click', decrease);

document.querySelector('#increment').addEventListener('click', increase);

document.querySelector('#reset').addEventListener('click', () => {
    count = 0
    counterContainer.innerHTML = '<mark>0</mark>'
    console.log(count);
});


// themes// 

function setTheme(theme) {
    document.querySelector('body').className = theme;
    document.querySelector('main').className = theme;
const buttons = document.querySelectorAll('button')
console.log(buttons);

buttons.forEach((button) => {
    button.className = theme;
});
}

const themeButtons = document.querySelectorAll('header button');

console.log(themeButtons)

themeButtons.forEach((buttonNode) => {
    console.log(buttonNode);
    buttonNode.addEventListener('click', (e) => {
        console.log('click');
        console.dir(e.target.innerText.toLowerCase());
        setTheme(e.target.innerText.toLowerCase())
    });
});

document.querySelector('but-container').addEventListener('click', (e) => {
    console.log(e.target)
    console.log(this)
})
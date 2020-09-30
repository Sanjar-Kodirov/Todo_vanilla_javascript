
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const items = document.querySelectorAll('li');
const input = document.querySelector('input').textContent;
const deleteBtn = document.querySelector('.delete');
console.log(input);
button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Hello';
    ul.prepend(li);
});

deleteBtn.addEventListener('click', () => {
    ul.addEventListener('click', (e) => {
        console.log(e.target.textContent);
        e.target.remove();
    })
});
/* items.forEach(item => {
    item.addEventListener('click', (el) =>{
        el.target.remove();
        console.log('console.log li');
        el.stopPropagation();
    });
}); */

ul.addEventListener('click', (e) => {
    console.log(e.target.textContent);
    e.target.remove();
});
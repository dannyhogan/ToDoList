//import cat data
import todos from '../../assets/data.js';
//import template function
import toDoTemplate from './to-do-template.js';
//import HTML to DOM function
import htmlToDOM from './html-to-dom.js';
// reference <ul> parent
const list = document.getElementById('list');

todos.forEach(todo => {
    const html = toDoTemplate(todo);
    const dom = htmlToDOM(html);

    list.appendChild(dom);
});
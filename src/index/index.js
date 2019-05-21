//import cat data
import todos from '../../assets/data.js';
//import template functions
import toDoTemplate from './to-do-template.js';
import headerTemplate from './header-template.js';

//import HTML to DOM function
import htmlToDOM from './html-to-dom.js';

// reference parents
const list = document.getElementById('list');
const header = headerTemplate();
const dom = htmlToDOM(header);
document.body.firstChild.before(dom);

todos.forEach(todo => {
    const html = toDoTemplate(todo);
    const dom = htmlToDOM(html);

    list.appendChild(dom);
});
function toDoTemplate(todo) {
    let checked = '';

    if(todo.completed) {
        checked = 'checked';
    }

    return /*html*/`
        <li>
            <h3>${todo.task}</h3> 
            <input type="checkbox" ${checked}>
        </li>
    `;
}

export default toDoTemplate;
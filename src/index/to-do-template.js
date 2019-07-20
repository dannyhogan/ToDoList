function toDoTemplate(todo) {
    let checked = '';

    if(todo.completed) {
        checked = 'checked';
    }

    return /*html*/`
        <li>
            <label>${todo.task}
                <input type="checkbox" ${checked}>
            </label>
        </li>
    `;
}

export default toDoTemplate;
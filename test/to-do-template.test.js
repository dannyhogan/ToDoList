const test = QUnit.test;

test('creates unchecked box if not completed', function(assert) {
    //Arrange
    const todo = {
        task: 'Learn HTML',
        completed: true
    };

    const expected = /*html*/`
        <li>
            <h3>Learn HTML</h3> 
            <input type="checkbox" checked>
        </li>
    `;

    //Act 
    const html = toDoTemplate(todo);

    //Assert
    assert.equal(html, expected);
});

test('creates checked box if not completed', function(assert) {
    //Arrange
    const todo = {
        task: 'Learn HTML',
        completed: false
    };

    const expected = /*html*/`
        <li>
            <h3>Learn HTML</h3> 
            <input type="checkbox" >
        </li>
    `;

    //Act 
    const html = toDoTemplate(todo);

    //Assert
    assert.equal(html, expected);
});

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
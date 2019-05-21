import toDoTemplate from '../src/index/to-do-template.js';
const test = QUnit.test;

test('creates unchecked box if not completed', function(assert) {
    //Arrange
    const todo = {
        task: 'Learn HTML',
        completed: true
    };

    const expected = /*html*/`
        <li>
            <label>${todo.task}
                <input type="checkbox" checked>
            </label>
        </li>
`;

    //Act 
    const html = toDoTemplate(todo);

    //Assert
    assert.htmlEqual(html, expected);
});

test('creates checked box if not completed', function(assert) {
    //Arrange
    const todo = {
        task: 'Learn HTML',
        completed: false
    };

    const expected = /*html*/`
        <li>
            <label>${todo.task}
                <input type="checkbox" >
            </label>
        </li>
    `;

    //Act 
    const html = toDoTemplate(todo);

    //Assert
    assert.htmlEqual(html, expected);
});
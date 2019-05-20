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
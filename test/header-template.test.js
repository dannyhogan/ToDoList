import headerTemplate from '../src/index/header-template.js';
const test = QUnit.test;

QUnit.module('creates header html from template');

test('creates header html', function(assert) {
    //Arrange
    const expected = /*html*/`
        <header>
            <h1>Alchemy To Do List!</h1>
        </header>
    `;

    //Act 
    const html = headerTemplate(expected);

    //Assert
    assert.htmlEqual(html, expected);
});
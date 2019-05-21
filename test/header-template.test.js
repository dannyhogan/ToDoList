const test = QUnit.test;

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

function headerTemplate() {
    return /*html*/`
        <header>
            <h1>Alchemy To Do List!</h1>
        </header>
    `;
}
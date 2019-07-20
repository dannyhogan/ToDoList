const test = QUnit.test;

QUnit.module('html equals');

test('normalizes whitespace', assert => {
    //arrange
    const html = /*html*/`
            <div>hello div</div>
    `;

    const expected = /*html*/`
        <div>hello div</div>
    `;

    //assert
    assert.htmlEqual(html, expected);
});

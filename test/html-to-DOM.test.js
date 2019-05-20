const test = QUnit.test;

QUnit.module('creates dom from html')

test('creates dom from html', assert => {
    //arrange
    const html = /*html*/`
        <span>html to dom</span>
    `;
    
    //act
    const dom = htmlToDOM(html);

    //assert
    assert.equal(dom.tagName, 'SPAN');
    assert.equal(dom.textContent, 'html to dom');
});

function htmlToDOM(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    const content = template.content;
    const firstElementChild = content.firstElementChild;

    return firstElementChild;
}
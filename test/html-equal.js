const pattern = /[\f\n\r\t\v ]{2,}/g;
const replacement = ' ';

function normalize(html) {
    // normalizes whitespace, everything becomes one space
    const replaced = html.replace(pattern, replacement);
    //trims all whitespace
    const trimmed = replaced.trim();

    return trimmed;
}

// Adds customs assertion to QUnit.
QUnit.assert.htmlEqual = function(actual, expected) {
    const normalizedActual = normalize(actual);
    const normalizedExpected = normalize(expected);
    QUnit.assert.equal(normalizedActual, normalizedExpected);
};
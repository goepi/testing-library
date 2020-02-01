
const expect = actual => ({
    toBe: expected => {
        if (actual !== expected) {
            throw new Error(`Expected ${expected} but got ${actual}`);
        }
    }
})

module.exports = {
    expect
}
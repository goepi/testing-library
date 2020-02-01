const { add, subtract, addAsync, subtractAsync } = require('./math.js');
const { expect } = require('./expect.js');

const test = async (title, callback) => {
    try {
        await callback();
        console.log(`✓ ${title}`)
    } catch (error) {
        console.log(`✕ ${title}`)
        console.log(error)
    }
}


test('add', () => {
    expect(add(7, 4)).toBe(11);
    expect(subtract(7,4)).toBe(3);
});

test('addAsync', async () => {
    const result = await addAsync(7, 4)
    expect(result).toBe(11);
})

test('subtractAsync', async () => {
    const result = await subtractAsync(7, 4)
    expect(result).toBe(3);
})

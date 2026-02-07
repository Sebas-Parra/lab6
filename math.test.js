const {isPerfect, quickSort }= require('./math');

describe('Test de numeros perfectos', () => {
test('28 es un numero perfecto por la suma de sus divisores', () => {
    expect(isPerfect(28)).toBe(true);
});

test('6 es un numero perfecto por la suma de sus divisores', () => {
    expect(isPerfect(6)).toBe(true);
});

test('10 no es un numero perfecto por la suma de sus divisores', () => {
    expect(isPerfect(10)).toBe(false);
})

});

describe('Test de quick sort', () => {
test('Ordenar el arreglo [5, 3, 8, 4, 2] debe resultar en [2, 3, 4, 9, 8]', () => {
    expect(quickSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 9, 8]);
});

test('Ordenar el arreglo [10, -1, 0, 5] debe resultar en [-1, 0, 5, 10]', () => {
    expect(quickSort([10, -1, 0, 5])).toEqual([-1, 0, 5, 10]);
});

test('Ordenar el arreglo [1] debe resultar en [1]', () => {
    expect(quickSort([1])).toEqual([1]);
});

});
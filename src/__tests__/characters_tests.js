import { getSortedCharactersList } from '../characters.js'

test('test getSortedCharactersList', () => {
    const testCharactersList = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ];
    const expectedResult = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ];
    expect(getSortedCharactersList(testCharactersList)).toEqual(expectedResult);
})
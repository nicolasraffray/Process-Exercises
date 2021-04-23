import { exampleFunction } from './app'

describe('A suite of tests', () => {
    test('a specific test case', () => {
        const result = exampleFunction(1,2);
        expect(3).toEqual(result)
    })
})
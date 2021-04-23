import {add} from '../src/add';

describe('this is a set of tests typically for a function', () => {
    test('tests for the function are written in these', () => {
        // Arrange 
        x = 1
        y = 2 

        // Act 
        z = add(x,y)

        // Assert
        expect(z).toEqual(3)
    })
})
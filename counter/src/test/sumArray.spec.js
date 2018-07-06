import { expect } from  'chai';

import sumArray from './sumArray';

describe('sumArray', () => {
    it('should sum arr of one el', () => {
        const result = sumArray([5]);
        expect(result).to.be.a('number');
        expect(result).equal(5);
    });
    it('should return sum of many el', () => {
        const result = sumArray([1, 3, 5, 7, 9]);
        expect(result).to.be.a('number');
        expect(result).equal(25);
    });
    it('should sumArray return empty arr', () => {
        const result = sumArray([]);
        expect(result).to.be.a('number');
        expect(result).equal(0);
    })
});
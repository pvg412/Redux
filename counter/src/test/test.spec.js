import { expect } from 'chai';
import minTemp from './temp';

describe('minTemp test', () => {
    it('simple', () => {
        const result = minTemp(1, -2, -8, 4, 5);
        expect(result).to.be.a('number');
        expect(result).equal(1);
    });
    it('negative', () => {
        const result = minTemp(-12, -5, -137);
        expect(result).to.be.a('number');
        expect(result).equal(-5);
    });
    it('choose 5', () => {
        const result = minTemp(42, -5, 12, 21, 5, 24);
        expect(result).to.be.a('number');
        expect(result).equal(5);
    });
    it('choose 2', () => {
        const result = minTemp(42, -5, 12, 21, 5, 24);
        expect(result).to.be.a('number');
        expect(result).equal(5);
    });
    it('complex', () => {
        const result = minTemp(-5, -4, -2, 12, -40, 4, 2, 18, 11, 5);
        expect(result).to.be.a('number');
        expect(result).equal(2);
    });
    it('no temperature', () => {
        const result = minTemp(0);
        expect(result).to.be.a('number');
        expect(result).equal(0);
    });
});
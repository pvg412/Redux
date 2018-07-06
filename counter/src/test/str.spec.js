import { expect } from 'chai';
import counter from '../reducers/counterReducer';



describe('counter reducer', () => {
   it('should return 1 dec', () => {
       expect(counter(0, {type: 'DECREMENT'})).equal(-1)
   });
   it('should return reset', () => {
       const result = counter(5, {type: 'RESET'});
       expect(result).to.be.a('number');
       expect(result).equal(0);
   });
   it('should return 1 inc', () => {
       const result = counter(3, {type: 'INCREMENT'});
       expect(result).to.be.a('number');
       expect(result).equal(4);
   })
});
import {compute} from './compute'

describe('compute',()=>{
it('should increment number when there is a number more than 1',()=>{
    expect(compute(1)).toBe(2);
})

it('should retun 0  when there is a value less than 0',()=>{
    expect(compute(-1)).toBe(0);
})
});
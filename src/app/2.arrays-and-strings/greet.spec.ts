import{greet} from './greet'

describe('greet',()=>{
    // it('should append the name with welcome',()=>{
    //     expect(greet('Chandrakant')).toBe('welcomeChandrakant')
    // })

    // or

    it('should append the name with welcome',()=>{
        expect(greet('Chandrakant')).toContain('Chandrakant');
    })
})
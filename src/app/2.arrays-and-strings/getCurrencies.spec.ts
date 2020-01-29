import {getCurrencies} from './getCurrencies';

describe('getCurrencies',()=>{
    it('shouls have array elements',()=>{
        const result = getCurrencies();
        expect(result).toContain('usd');
        expect(result).toContain('inr');
        expect(result).toContain('aur');
    })
})
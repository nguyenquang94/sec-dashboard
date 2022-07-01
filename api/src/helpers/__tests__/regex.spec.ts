import { usernameRegex, passwordRegex } from './../regex';

describe('helpers/regex', () => {
    describe('Email', () => {
        it('should invalid', () => {
            expect(usernameRegex.test('asdaaa_1Zawn')).toBe(false);
            expect(usernameRegex.test('Asdaaa_1Zawn')).toBe(false);
            expect(usernameRegex.test('Asdaaa_1awn')).toBe(false);
            expect(usernameRegex.test('_Asdaaa_1awn')).toBe(false);
            expect(usernameRegex.test('12 adsas2.')).toBe(false);
            expect(usernameRegex.test('12adsas2*')).toBe(false);
        });

        it('should Valid', () => {
            expect(usernameRegex.test('asdaaa-_113awn.')).toBe(true);
            expect(usernameRegex.test('asdaaa.113awn')).toBe(true);
        });
    });

    describe('Password', () => {
        it('should invalid', () => {
            expect(passwordRegex.test('124543523452345')).toBe(false);
            expect(passwordRegex.test('adsfadsfadsfaas452345')).toBe(false);
            expect(passwordRegex.test('11111a%')).toBe(false);
            expect(passwordRegex.test('111111%a12111234')).toBe(false);
        });

        it('should Valid', () => {
            expect(passwordRegex.test('thedollar1212 ')).toBe(true);
            expect(passwordRegex.test('thedol"lar1212 "')).toBe(true);
            // expect(usernameRegex.test('asdaaa.113awn')).toBe(true);
        });
    });
});

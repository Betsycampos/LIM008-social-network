// importamos la funcion que vamos a testear
import { emailValidation } from "../src/lib/index";

// require('../src/lib/index.js');

const emailTrue = 'format_email_true@email.com';
const emailFalse = 'format_email_true_email_com';
describe('emailValidation', () => {
  it('debería ser una función', () => {
    expect(typeof emailValidation).toBe('function');
  });
  it('debería retornar false para email incorrectos', () => {
    expect(emailValidation(emailFalse)).toEqual(false);
  });
  it('debería retornar true para email correcto', () => {
    expect(emailValidation(emailTrue)).toEqual(true);
  });
});
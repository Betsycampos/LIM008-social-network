// importamos la funcion que vamos a testear
import { emailValidation } from "../src/lib/index";
const emailTrue = 'format_email_true@email.com';
const emailFalse = 'format_email_true_email_com';
const passwordTrue = '123456'
const passwordFalse = '12345'
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
describe('passwordValidation', () => {
  it('debería ser una función', () => {
    expect(typeof passwordValidation).toBe('function');
  });
  it('debería retornar false si la contraseña ingresada tiene menos de 6 caracteres', () => {
    expect(passwordValidation(passwordFalse)).toEqual(false);
  });
  it('debería retornar true si la contraseña tiene más o igual a 6 caracteres', () => {
    expect(passwordValidation(passwordTrue)).toEqual(true)
  });
});
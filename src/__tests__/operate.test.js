// eslint-disable-next-line
import operate from '../components/logic/operate';

describe('Tests operatete.js Functions', () => {
  test('Tests Sum Function', () => {
    const result = operate('99', '20', '+');
    expect(result).toBe('119');
  });

  test('Tests Subtraction Function', () => {
    const result = operate('99', '20', '-');
    expect(result).toBe('79');
  });

  test('Tests multiplication Function', () => {
    const result = operate('99', '20', 'x');
    expect(result).toBe('1980');
  });

  test('Tests division Function', () => {
    const result = operate('90', '20', '÷');
    expect(result).toBe('4.5');
  });

  test('Tests Invalid division Function', () => {
    const result = operate('90', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  test('Tests Invalid modulo Function', () => {
    const result = operate('90', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  test('Tests modulo Function', () => {
    const result = operate('90', '2', '%');
    expect(result).toBe('0');
  });

  test('throw an error when there is wrong operation', () => {
    expect(() => operate('25', '5', '/')).toThrowError('Unknown operation \'/\'');
  });
});
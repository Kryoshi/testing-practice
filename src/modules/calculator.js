export const calculator = (() => {
  const add = (firstNumber, secondNumber) => {
    if (isValid(firstNumber) && isValid(secondNumber))
      return firstNumber + secondNumber;
  };

  const subtract = (fromThisNumber, thisNumber) => {
    if (isValid(fromThisNumber) && isValid(thisNumber))
      return fromThisNumber - thisNumber;
  };

  const multiply = (firstNumber, secondNumber) => {
    if (firstNumber === Infinity || secondNumber === Infinity)
      throw new Error('Multiplying by Infinity');
    if (isValid(firstNumber) && isValid(secondNumber))
      return firstNumber * secondNumber;
  };

  const divide = (thisNumber, byThisNumber) => {
    if (byThisNumber === 0) throw new Error('Dividing by zero');
    if (isValid(thisNumber) && isValid(byThisNumber))
      return thisNumber / byThisNumber;
  };

  const isValid = (number) => {
    if (
      number === undefined ||
      number === null ||
      typeof number !== 'number' ||
      Number.isNaN(number)
    ) {
      throw new Error('Expected a valid number');
    }
    return true;
  };
  return { add, subtract, multiply, divide };
})();

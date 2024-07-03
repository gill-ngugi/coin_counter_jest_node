const coinCounterClosure = (amount) => {
    const coinValues = [25, 10, 5, 1];
    const coinNames = ['quarters', 'dimes', 'nickels', 'pennies'];
  
    const countCoins = (value) => {
      return Math.floor(amount / value);
    };
  
    const calculateChange = () => {
      let remainingAmount = amount;
      const result = {};
  
      for (let i = 0; i < coinValues.length; i++) {
        const coinValue = coinValues[i];
        const coinName = coinNames[i];
        result[coinName] = countCoins(coinValue);
        remainingAmount -= result[coinName] * coinValue;
        amount = remainingAmount;
      }
  
      return result;
    };
  
    return calculateChange;
  };
  
  module.exports = { coinCounterClosure };
  
import { randomDate, formatCurrency } from "../utils/common";
const useTransactionData = (numTransactions = 100) => {
  const data = [...Array(numTransactions)].map(() => {
    const randomPrice = Math.random() * 1000;

    const calculatePoints = () => {
      if (randomPrice < 50) {
        return 0;
      } else if (randomPrice > 50 && randomPrice < 100) {
        return Math.floor(randomPrice - 50);
      } else {
        return Math.floor(randomPrice - 100) * 2 + 50;
      }
    };
    return {
      date: randomDate().toString().substring(4, 15),
      amount: formatCurrency.format(randomPrice),
      points: calculatePoints(),
    };
  });
  return {
    data,
  };
};

export default useTransactionData;

// This file is for re-used logic throughout application
const randomDate = (
  start = new Date(2021, 6, 8),
  end = new Date(2021, 9, 8)
) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const formatCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export { randomDate, formatCurrency };

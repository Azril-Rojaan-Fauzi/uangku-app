export const groupByCategory = (data) => {
  return data.reduce((acc, curr) => {
    const found = acc.find((item) => item.category === curr.category);
    if (found) {
      found.amount += curr.amount;
    } else {
      acc.push({ category: curr.category, amount: curr.amount });
    }
    return acc;
  }, []);
};

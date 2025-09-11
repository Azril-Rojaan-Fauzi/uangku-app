const formatNumber = (amount) => {
  if (!amount && amount !== 0) return "";
  return amount.toLocaleString("id-ID");
};
export default formatNumber;

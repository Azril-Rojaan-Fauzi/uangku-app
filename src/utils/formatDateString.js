function formatDateString(dateStr) {
  const [year, month, day] = dateStr.split("-");
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];
  return `${parseInt(day)} ${monthNames[parseInt(month) - 1]} ${year}`;
}

export default formatDateString;

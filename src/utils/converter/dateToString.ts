// Get the UTC date.
const dateToString = (date: Date) => {
  let yyyy = date.getFullYear();
  let mm =
    date.getUTCMonth() + 1 > 9
      ? date.getUTCMonth() + 1
      : "0" + (date.getUTCMonth() + 1);
  let dd = date.getUTCDate() > 9 ? date.getUTCDate() : "0" + date.getUTCDate();

  return `${yyyy}-${mm}-${dd}`;
};

export default dateToString;

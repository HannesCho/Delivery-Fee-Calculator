// Get the UTC hours and minutes.
const timeToString = (date: Date) => {
  const hour =
    date.getUTCHours() > 9 ? date.getUTCHours() : "0" + date.getUTCHours();
  const minute =
    date.getUTCMinutes() > 9
      ? date.getUTCMinutes()
      : "0" + date.getUTCMinutes();
  return `${hour}:${minute}`;
};

export default timeToString;

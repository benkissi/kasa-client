export function timeConverter(UNIX_timestamp) {
  const a = new Date(UNIX_timestamp);
  console.log('date', a)
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const sec = a.getSeconds();
  const time =
  hour + ":" + min + ":" + sec+ " " +date + " " + month + " " + year
  return time;
}

import moment from "moment";

export default function Date({ dateString }) {
  return (
    <span dateTime={dateString}>
      {moment(dateString).format("DD MMMM, YYYY")}
    </span>
  );
}

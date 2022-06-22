import moment from "moment";

export default function Date({ dateString }) {
  return (
    <span dateTime={dateString} className="text-sm">
      {moment(dateString).format("MMM DD, YYYY")}
    </span>
  );
}

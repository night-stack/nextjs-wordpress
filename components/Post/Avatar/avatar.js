import Image from "next/image";
import Date from "../Date/date";

export default function Avatar({ author, date }) {
  const name = author
    ? author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name
    : null;

  return (
    <div className="flex items-center">
      <div className="w-10 h-10 relative mr-4">
        <Image
          src="/img/logo-witech-footer.png"
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-base flex flex-col">
        Witech Enterprise
        <span className="text-gray-700 text-sm">
          <Date dateString={date} />
        </span>
      </div>
    </div>
  );
}

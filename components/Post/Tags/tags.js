export default function Tags({ tags }) {
  return (
    <div className="max-w-2xl mx-auto">
      <p className="mt-10 text-sm text-gray-700">
        {tags.edges.map((tag, index) => (
          <span
            key={index}
            className="mr-4 font-medium text-xs rounded-full bg-neutral-100 px-6 py-1.5 cursor-pointer"
          >
            {tag?.node?.name}
          </span>
        ))}
      </p>
    </div>
  );
}

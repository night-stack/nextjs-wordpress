export default function Categories({ categories }) {
  return (
    <div className="py-5 px-16 border-b-2 border-neutral-100 mb-10 text-sm w-full top-0 text-gray-700">
      Published in
      {categories?.edges.length > 0 ? (
        categories?.edges.map((category, index) => (
          <span key={index} className="ml-1 font-semibold cursor-pointer">
            {category.node.name}
          </span>
        ))
      ) : (
        <span className="font-semibold">{categories?.edges?.node?.name}</span>
      )}
    </div>
  );
}

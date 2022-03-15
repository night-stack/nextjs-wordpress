export default function PostTitle({ children }) {
  return (
    <h1
      className="text-gray-700 text-3.5xl md:text-3.5xl lg:text-4xl font-extrabold leading-11 md:leading-11 mb-10 text-center md:text-left"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}

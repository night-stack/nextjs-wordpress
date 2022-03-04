export default function Container({ children }) {
  return (
    <div
      className="container mx-auto mt-10"
      style={{ paddingLeft: 100, paddingRight: 100 }}
    >
      {children}
    </div>
  );
}

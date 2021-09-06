function Content({ children }) {
  return (
    <div className="bg-gradient-to-r from-transparent via-purple-900 to-transparent">
      <div>{children}</div>
    </div>
  );
}

export default Content;

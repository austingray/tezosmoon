function Button(props) {
  return (
    <button
      {...props}
      className="inline-block text-sm px-4 py-2 leading-none bg-transparent hover:bg-white text-white-700 font-semibold hover:text-black border border-white-500 hover:border-transparent rounded"
    >
      {props.children}
    </button>
  );
}

export default Button;

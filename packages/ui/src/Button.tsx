export default function Button() {
  const click = () => {
    console.log("hello!!! WEB");
  };
  return (
    <button onClick={click} style={{ background: "green" }}>
      click! WEB!
    </button>
  );
}

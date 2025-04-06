import React from "react";

export default function Button() {
  const click = () => {
    console.log("hello!!! WEB");
  };
  return <button onClick={click}>click! WEB!</button>;
}

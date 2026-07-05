import { useState } from "react";

function Randomnumber() {
  const [generated, setgenerated] = useState(true);
  const [random, setrandom] = useState("0");
  const rnumber = () => {
    const r = Math.floor(Math.random() * 100 + 1);
    setrandom(r);
    setgenerated(false);
  };
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        Random Number Generator
      </h1>
      <h1 style={{ textAlign: "center", marginTop: "50px", fontSize: "75px" }}>
        {random}
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <button onClick={rnumber} style={{ width: "fit-content" }}>
          Generate Number
        </button>
        {generated && <p>No numbers generated yet</p>}
      </div>
    </>
  );
}

export default Randomnumber;

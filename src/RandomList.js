import { useState } from "react";

function RandomList() {

  const [numbers, setNumbers] = useState(new Array)

  return (
    <div>
      <button>Randomize Me</button>
      <div>{numbers}</div>
    </div>);
}

export default RandomList;
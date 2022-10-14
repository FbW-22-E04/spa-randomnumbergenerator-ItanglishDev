import { useState } from "react";
import Button from './Button'

function RandomList() {

  const [numbers, setNumbers] = useState(new Array(0))

  return (
    <div class="italic">
      <Button />
      <div></div>
    </div>);
}

export default RandomList;
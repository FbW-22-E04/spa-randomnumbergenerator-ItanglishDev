import { useState } from "react";
import Button from './Button'

function RandomList() {

  const [numbers, setNumbers] = useState(new Array(0))

  const randomNumber = () => {

    const random = Math.floor(Math.random() * 100)
    const allNumbers = [...numbers, random]
    setNumbers(allNumbers)
    console.log(numbers);

  }

  return (
    <div>
      <Button callBack={randomNumber} />
      <div>{numbers}    </div>
    </div>);
}

export default RandomList;
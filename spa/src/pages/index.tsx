import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(123);
  }, []);

  return <h1 onClick={() => setCount(count + 1)}>Click</h1>;
}

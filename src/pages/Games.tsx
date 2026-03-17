import {useState} from 'react'
import { Button } from '../components/Button';

export const Games = () => {
  const [Color, setColor] = useState<"primary" | "secondary">("primary");

  const toggle = () => {
    setColor((prev) => (prev === "primary" ? "secondary" : "primary"));
  };

  return (
    <div className="bg-blue-200 flex justify-center items-center relative flex-col">
      <Button size="large" color={Color} title="Игры" onClick={toggle}></Button>
    </div>
  );
};

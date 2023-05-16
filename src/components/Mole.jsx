import mole from "../embedded/mole.png";
import { useEffect } from "react";

export default function Mole({ setIsShowing }) {
  useEffect(() => {
    let randMillies = Math.ceil(Math.random() * 5000 + 1000);
    let timer = setTimeout(() => {
      setIsShowing(false);
    }, randMillies);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <img style={{ width: "30vw" }} src={mole} />
    </div>
  );
}
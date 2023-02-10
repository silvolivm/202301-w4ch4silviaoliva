import "./key.css";
import { useContext } from "react";
import { useGrabar } from "../../../hooks/use-grabar";
export function Key() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "Delete"];

  return (
    <>
      {numbers.map((item) => (
        <li>
          <button className="key" data-number={item}>
            {item}
          </button>
        </li>
      ))}
    </>
  );
}

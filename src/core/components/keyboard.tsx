// /////////////////////

// import { render, screen } from "@testing-library/react";
// import { SingleKey } from "./key";
// //////

// import { SingleKey } from "../keyboard/key/key";
// import { KeyBoard } from "../keyboard/keyboard";
// export function KeyBoard({ children }: { children: JSX.Element }) {
//   return <ol className="keyboard">{children}</ol>;
// }
// ////////////////////
// export function SingleKey() {
//   return (
//     <>
//       x
//       <li>
//         <button className="key">1</button>
//       </li>
//       <li>
//         <button className="key">2</button>
//       </li>
//       <li>
//         <button className="key">3</button>
//       </li>
//       <li>
//         <button className="key">4</button>
//       </li>
//       <li>
//         <button className="key">5</button>
//       </li>
//       <li>
//         <button className="key">6</button>
//       </li>
//       <li>
//         <button className="key">7</button>
//       </li>
//       <li>
//         <button className="key">8</button>
//       </li>
//       <li>
//         <button className="key">9</button>
//       </li>
//       <li>
//         <button className="key">0</button>
//       </li>
//       <li>
//         <button className="key big">delete</button>
//       </li>
//     </>
//   );
// }

describe("Given the Key function", () => {
  describe("When it is rendered", () => {
    test("Then it should appear in the screen", () => {
      render(<SingleKey></SingleKey>);
      const element = screen.getByText(/1/);
      expect(element).toBeInTheDocument();
    });
  });
});

///////////
////////////
app.tsx;

function App() {
  return (
    <KeyBoard>
      <SingleKey></SingleKey>
    </KeyBoard>
  );
}

export default App;

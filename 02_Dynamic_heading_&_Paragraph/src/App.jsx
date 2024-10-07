import { Heading } from "./components/Heading";
import { Paragraph } from "./components/Paragraph";

function App() {
  return (
    <>
      <div className="bg-blue-600 w-screen h-screen">
        <Heading text="This is Dynamic heading" />
        <Paragraph text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem deserunt blanditiis maxime commodi vero ut pariatur vel quidem fuga repellat veritatis sapiente ab, minima, eveniet nisi harum enim voluptatibus dolorum!" />
      </div>
    </>
  );
}

export default App;

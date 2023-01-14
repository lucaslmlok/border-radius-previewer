import BoxPreview from "./components/BoxPreview";
import CornerField from "./components/CornerField";
import CodePreview from "./components/CodePreview";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-zinc-800 text-white">
      <div className="container flex max-w-xl flex-col items-center py-4">
        <h1 className="font my-6 text-3xl font-extrabold">
          Border-radius Previewer
        </h1>
        <p>Adjust the border-radius of the box below:</p>
        <div className="flex w-full flex-col items-center gap-x-4 md:flex-row">
          <BoxPreview />
          <div className="my-2 grid w-full grid-cols-2 gap-6">
            <CornerField corner="top-left" />
            <CornerField corner="top-right" />
            <CornerField corner="bottom-left" />
            <CornerField corner="bottom-right" />
          </div>
        </div>
        <CodePreview />
        <Footer />
      </div>
    </div>
  );
}

export default App;

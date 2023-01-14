import BoxPreview from "./components/BoxPreview";
import CornerField from "./components/CornerField";
import CodePreview from "./components/CodePreview";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg min-h-screen text-white">
      <div className="container flex flex-col items-center">
        <h1 className="font my-6 text-5xl font-black">
          Border-radius Previewer
        </h1>
        <p>Adjust the border-radius of the box below:</p>
        <BoxPreview />
        <CodePreview />
        <Footer />
      </div>
    </div>
  );
}

export default App;

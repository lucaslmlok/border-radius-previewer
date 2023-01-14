import { Helmet } from "react-helmet";
import colors from "tailwindcss/colors";
import BoxPreview from "./components/BoxPreview";
import CodePreview from "./components/CodePreview";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg min-h-screen bg-cyan-600 text-white">
      <Helmet>
        <meta name="theme-color" content={colors.cyan[600]}></meta>
      </Helmet>

      <div className="container flex flex-col items-center">
        <h1 className="my-6 text-center text-4xl font-black md:text-5xl">
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

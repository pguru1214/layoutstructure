import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RootLayout from "./Components/RootLayout";
import LayoutProvider from "./Utils/LayOutProvider";

function App() {
  return (
    <div className="App">
      <LayoutProvider>
        <RootLayout />
      </LayoutProvider>
    </div>
  );
}

export default App;

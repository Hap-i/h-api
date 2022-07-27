import Home from "./pages/Home";
import useWindowDimensions from "./hooks/useWindowDimensions";
import SmallWindow from "./pages/SmallWindow";
function App() {
  const { width } = useWindowDimensions();
  return (
    <>
      {width > 1000 ? <Home></Home> : <SmallWindow></SmallWindow>}
    </>
  );
}

export default App;

import Home from "./pages/Home";
import useWindowDimensions from "./hooks/useWindowDimensions";
import SmallWindow from "./pages/SmallWindow";
import { Provider } from 'react-redux';
import store from "./redux/store/store";

function App() {
  const { width } = useWindowDimensions();
  return (
    <Provider store={store}>
      {width > 1000 ? <Home></Home> : <SmallWindow></SmallWindow>}
    </Provider>
  );
}

export default App;

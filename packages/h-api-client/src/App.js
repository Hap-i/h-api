import Home from "./pages/Home";
import useWindowDimensions from "./hooks/useWindowDimensions";
import SmallWindow from "./pages/SmallWindow";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { Route, Routes } from "react-router-dom";
import AppSettings from "./pages/AppSettings";
import AppDashboard from "./pages/AppDashboard";
import InvalidPage from "./pages/InvalidPage";

function App() {
  const { width } = useWindowDimensions();
  if (width < 1000) {
    return <SmallWindow></SmallWindow>;
  } else {
    return (
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="app/:id" element={<AppDashboard />}>
            <Route path="settings" element={<AppSettings />} />
          </Route>
          <Route path="*" element={<InvalidPage />} />
        </Routes>
      </Provider>
    );
  }
}

export default App;

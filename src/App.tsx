import "./App.scss";
import IndexRoutes from "@/config/routes/IndexRoutes";
import WeatherProvider from "./context/WeatherProvider";

function App() {
  return (
    <WeatherProvider>
      <IndexRoutes />
    </WeatherProvider>
  );
}

export default App;

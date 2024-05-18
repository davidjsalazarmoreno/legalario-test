import { CameraProvider } from "./context/camera/CameraContext";
import Home from "./pages/Home/Home";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <>
      <CssBaseline />
      <CameraProvider>
        <Home />
      </CameraProvider>
    </>
  );
}

export default App;

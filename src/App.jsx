import { BrowserRouter, Route, Routes} from "react-router-dom";

import '../src/assets/css/App.css'
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";

function App() {

  return (
     <BrowserRouter>
      <Routes>v
        <Route exact path="/" element={<HomePage />} />
        <Route path="/categories/:idc" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

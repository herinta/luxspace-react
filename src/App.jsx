import { BrowserRouter, Route, Routes} from "react-router-dom";

import '../src/assets/css/App.css'
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import Cart from "./pages/Cart";

function App() {

  return (
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/categories/:idc" element={<Details />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

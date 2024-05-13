import { BrowserRouter, Route, Routes} from "react-router-dom";

import '../src/assets/css/App.css'
import HomePage from "./pages/HomePage";

function App() {

  return (
     <BrowserRouter>
      <Routes>v
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

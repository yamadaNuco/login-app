import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./views/Signin";
import Top from "./views/Top"
import { walkUpBindingElementsAndPatterns } from "typescript";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>

        <Route path={`/`} element={<Top />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Note from "./pages/addnote.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
         <Route path="*" element={<Home />} />
         <Route path="addnote" element={<Note />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
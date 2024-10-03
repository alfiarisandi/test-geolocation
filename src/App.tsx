import { BrowserRouter, Route, Routes } from "react-router-dom"
import TestA from "./componnet/TestA"
import TestB from "./componnet/TestB"
// import router from './router';
// import "./app.css";


function App() {


  return (
    <>
      {/* <RouterProvider router={router} /> */}

      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<TestA />} />
          <Route path="/test-ip" element={<TestB />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

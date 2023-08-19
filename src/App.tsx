import FirstPage from "./components/FirstPage";
import { Route, Routes } from "react-router-dom";
import SecondPage from "./components/SecondPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
      {/* <FirstPage/> */}
    </>
  );
}

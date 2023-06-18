import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";
import { ArchiveHabitPage } from "./Pages/ArchiveHabitPage/ArchiveHabitPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/archive" element={<ArchiveHabitPage />}></Route>
        <Route path="/404" element={<ErrorPage />}></Route>
        <Route path="*" element={<Navigate to={"/404"} />} />
      </Routes>
    </div>
  );
}

export default App;

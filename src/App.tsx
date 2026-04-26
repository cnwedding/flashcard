import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Learning } from "./pages/Learning";
import { EndOfLesson } from "./pages/EndOfLesson";
import { SavedWords } from "./pages/SavedWords";
import { Onboarding } from "./pages/Onboarding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/end" element={<EndOfLesson />} />
          <Route path="/saved" element={<SavedWords />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

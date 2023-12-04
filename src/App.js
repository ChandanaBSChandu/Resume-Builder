import { Button } from "react-bootstrap";
import NavBar from "./components/NavBar";
import { Typography } from "@mui/material";
import Home from "./components/Home";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Route, Routes } from "react-router-dom";
import ResumeTemplates from "./components/ResumeTemplates";
function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div
        className=" h-100"
        style={{
          backgroundColor: "#fafafa",
          minHeight: "100vh",
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumeTemplates />} />
        </Routes>
      </div>
    </LocalizationProvider>
  );
}

export default App;

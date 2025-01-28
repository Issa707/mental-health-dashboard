import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CoursePage from "./components/CoursePage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/course/:illness" element={<CoursePage />} />
            </Routes>
        </Router>
    );
};

export default App;

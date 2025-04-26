import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './UI/LogInForm';
import DashBoard from './UI/DashBoard';
import StudentTable from './UI/StudentTable';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/student" element={<StudentTable/>} />

      </Routes>
    </Router>
  );
}

export default App;
import React from "react"
import ReactDOM from "react-dom"
import TodoContainer from "./functionBased/components/TodoContainer"
import "./functionBased/App.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from "./functionBased/components/pages/About"
import NotMatch from "./functionBased/components/pages/NotMatch"
import Navbar from "./functionBased/components/Navbar"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<TodoContainer />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<NotMatch />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
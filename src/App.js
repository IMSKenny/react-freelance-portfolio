import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/nav-bar/navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";
import ScrollToTop from "./utils/scrollToTop";


function App() {
  return (
    <div className="App">
		<Router>
			<ScrollToTop/>
			<Navbar/>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/projects" element={<Projects/>}/>
				<Route path="/contacts" element={<Contacts/>}/>
				<Route path="/project/:id" element={<Project/>}/>
			</Routes>
			<Footer/>	
		</Router>
	</div>
  );
}

export default App;

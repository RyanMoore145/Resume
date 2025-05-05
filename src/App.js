import {
	BrowserRouter,
	Routes,
	Route,
	Navigate
} from "react-router-dom";

import "./global.css";

import Layout from "./Layout.js";
import Resume from "./Resume.js";
import Projects from "./Projects.js";
import ContactMe from "./ContactMe.js";

function App() {
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route path="/" element={<Navigate replace to="/Resume"/>}/>
					<Route path="Resume" element={<Resume/>}/>
					<Route path="Projects" element={<Projects/>}/>
					<Route path="ContactMe" element={<ContactMe/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	useLocation
} from "react-router-dom";

import "./global.css";

import Layout from "./Layout.js";
import CV from "./CV.js";
import ContactMe from "./ContactMe.js";

function App() {
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route path="/" element={<Navigate replace to="/CV"/>}/>
					<Route path="CV" element={<CV/>}/>
					<Route path="ContactMe" element={<ContactMe/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

import {
	BrowserRouter,
	Routes,
	Route
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
					<Route index element={<CV/>}/>
					<Route path="CV" element={<CV/>}/>
					<Route path="ContactMe" element={<ContactMe/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

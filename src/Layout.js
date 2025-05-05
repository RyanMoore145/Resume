import {
	Outlet,
	useNavigate,
	useLocation
} from "react-router-dom";

import styles from "./Layout.module.css";

export default function Layout() {
	
	const navigate = useNavigate();
	const location = useLocation();
	
	let navStyle = null;
	if (location.pathname === "/" || location.pathname === "/CV") {
		navStyle = styles.TopNavAnimated;
	}
	
	return (
		<div className={styles.Screen}>
			<nav>
				<div className={`${styles.TopNav} ${navStyle}`}>
					<img src="R.svg"></img>
					<div id={styles.redirects}>
						<button className="Link" onClick={() => {navigate("CV")}}>CV</button>
						<button className="Link" onClick={() => {navigate("ContactMe")}}>Contact Me</button>
					</div>
				</div>
			</nav>
			<div className={styles.Page}>
				<Outlet/>
			</div>
		</div>
	);
}
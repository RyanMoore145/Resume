import {
	useRef
} from "react";

import {
	Outlet,
	useNavigate,
	useLocation
} from "react-router-dom";

import styles from "./Layout.module.css";

export default function Layout() {
	
	const lastViewedPage = useRef(null);
	const hasViewedResume = useRef(false);
	
	const navigate = useNavigate();
	const location = useLocation();
	
	//ENSURES ANIMATION DOESNT PLAY EVERY TIME USER RETURNS TO RESUME
	if (lastViewedPage.current === "/Resume" && location.pathname !== "/Resume") {
		hasViewedResume.current = true;
	}
	lastViewedPage.current = location.pathname;
	
	let navStyle = null;
	if (location.pathname === "/CV" && !hasViewedResume.current) {
		navStyle = styles.TopNavAnimated;
	}
	
	return (
		<div className={styles.Screen}>
			<nav>
				<div className={`${styles.TopNav} ${navStyle}`}>
					<img src="R.svg" alt="A logo of an R"></img>
					<div id={styles.redirects}>
						<button className="Link" onClick={() => {navigate("Resume")}}>Resume</button>
						<button className="Link" onClick={() => {navigate("Projects")}}>Projects</button>
						<button className="Link" onClick={() => {navigate("ContactMe")}}>Contact Me</button>
					</div>
				</div>
			</nav>
			<div className={styles.Page}>
				<Outlet context={{hasViewedResume: hasViewedResume.current}}/>
			</div>
		</div>
	);
}
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
	const hasViewedCV = useRef(false);
	
	const navigate = useNavigate();
	const location = useLocation();
	
	//ENSURES ANIMATION DOESNT PLAY EVERY TIME USER RETURNS TO CV
	if (lastViewedPage.current == "/CV" && location.pathname != "/CV") {
		hasViewedCV.current = true;
	}
	lastViewedPage.current = location.pathname;
	
	let navStyle = null;
	if (location.pathname === "/CV" && !hasViewedCV.current) {
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
				<Outlet context={{hasViewedCV: hasViewedCV.current}}/>
			</div>
		</div>
	);
}
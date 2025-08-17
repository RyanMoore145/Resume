import {
	useNavigate,
	useOutletContext,
	Link
} from "react-router-dom";

import styles from "./Resume.module.css";

export default function Resume() {
	
	const context = useOutletContext();
	const navigate = useNavigate();
	
	let typewriterAnimation = styles.Typewriter;
	let fadeInAnimation = styles.FadeIn;
	if (context.hasViewedResume) {
		typewriterAnimation = "";
		fadeInAnimation = "";
	}

	function onClickContactMe() {
		navigate("/ContactMe");
	}
	
	return (
	<div className={styles.Page}>
		<header>
			<div id={styles.headerNarrow}>
				<div className={typewriterAnimation} id={styles.name}>
					<h1>Ryan Moore</h1>
				</div>
				<div className={fadeInAnimation} id={styles.contactInfo}>
					<h3>(902) 321-6542</h3>
					<h3>ry331186@dal.ca</h3>
					<div id={styles.contactMe}>
						<button className={styles.ShadowButton} type="button" onClick={onClickContactMe}>Contact Me</button>
					</div>
				</div>
			</div>
		</header>
		<main>
			<div id={styles.mainNarrow}>
				<section id={styles.aboutMe}>
					<div className={styles.SectionTitle}>
						<h3>About Me</h3>
					</div>
					<p>Dedicated university student looking for reliable work. In the Computer Science program at Dalhousie University. People-oriented, good listening skills with experience working in a team environment.</p>
					<p>Graduated from high school with Honours with distinction, received the Paul Bethune Memorial Award for excellence in math, and received the West Kings Faculty Award.</p>
				</section>
				<section id="education">
					<div className={styles.SectionTitle}>
						<h3>Education</h3>
					</div>
					<h4>Bachelor's of Computer Science</h4>
					<div className={styles.Table}>
						<div className={styles.EducationTableElement}>
							<img src="dalhousie.jpeg" alt="Dalhousie University"></img>
							<h4>Dalhousie University</h4>
							<p> Sept 2022 - Present</p>
						</div>
							<div className={styles.EducationTableElement}>
							<img src="acadia.jpg" alt="Acadia University"></img>
							<h4>Acadia University</h4>
							<p>Sept 2021 - May 2022</p>
						</div>
					</div>
				</section>
				<section id="workExperience">
					<div className={styles.SectionTitle}>
						<h3>Work Experience</h3>
					</div>
					<div className={styles.WorkElement}>
						<div className={styles.WorkNameAndInfo}>
							<h4>IT Intern</h4>
							<div className={styles.WorkInfo}>
								<p>Nova Insurance - Dartmouth NS</p>
								<p>June 2025 - Sept 2025</p>
							</div>
						</div>
						<div className={styles.WorkDesc}>
							<p>Created and managed a tech support ticketing system using SharePoint, Microsoft Power Automate, and Power Apps.</p>
							<p>Monitored and updated support requests to ensure timely issue resolution.</p>
							<p>Assisted staff with technical problems, including troubleshooting Excel macros and other software tools.</p>
							<p>Performed front desk duties and provided in-person support to visitors and employees.</p>
							<p>Contacted clients to promote and support the transition to paperless processes.</p>
						</div>
					</div>
					<div className={styles.WorkElement}>
						<div className={styles.WorkNameAndInfo}>
							<h4>Telemarketing Representative</h4>
							<div className={styles.WorkInfo}>
								<p>ECW Solutions - Dartmouth NS</p>
								<p>Jun 2024 - Sept 2024</p>
							</div>
						</div>
						<div className={styles.WorkDesc}>
							<p>Contacted potential customers to promote water quality tests and schedule appointments.</p>
							<p>Educated callers on the benefits of water testing and addressed inquiries.</p>
							<p>Maintained an organized call log and appointment schedule.</p>
							<p>Followed scripts and adapted messaging to engage customers affectively.</p>
							<p>Provided excellent customer service and handled objections professionally.</p>
						</div>
					</div>
					<div className={styles.WorkElement}>
						<div className={styles.WorkNameAndInfo}>
							<h4>Weapons Technician, Reservist</h4>
							<div className={styles.WorkInfo}>
								<p>Canadian Armed Forces - Halifax NS</p>
								<p>Nov 2021 - Jan 2024</p>
							</div>
						</div>
						<div className={styles.WorkDesc}>
							<p>Weapons Technicians are responsible for maintaining functional small arms and servicing non-functional small arms belonging to their unit.</p>
							<p>Completed the Basic Training course, strengthening abilities in team building, time and stress management, quick critical thinking, and patience in a field and classroom environment.</p>
							<p>Served two summers at Willow Park Armouries completing secondary courses including first aid training, maintaining inventory in the storage bay, and fulfilling general duties.</p>
						</div>
					</div>
					<div className={styles.WorkElement}>
						<div className={styles.WorkNameAndInfo}>
							<h4>AI Trainer</h4>
							<div className={styles.WorkInfo}>
								<p>DataAnnotation</p>
								<p>Mar 2024 - Present</p>
							</div>
						</div>
						<div className={styles.WorkDesc}>
							<p>Evaluated and corrected AI responses to given prompts pertaining to subjects such as coding, life advice, and general knowledge from a work from home environment.</p>
						</div>
					</div>
				</section>
			</div>
			<div id={styles.sideBar}>
				<div className={styles.SideBarGroup} id="skills">
					<h3>Skills</h3>
					<section>
						<h4>React / React Native</h4>
						<p>Years of experience: 1</p>
						<p>- <Link to="/Projects">PawPals Mobile App</Link></p>
					</section>
					<section>
						<h4>JavaScript</h4>
						<p>Years of experience: 4</p>
					</section>
					<section>
						<h4>C++</h4>
						<p>Years of experience: 4</p>
						<p>- <Link to="/Projects">Custom RSA Algorithm</Link></p>
						<p>- <Link to="/Projects">Socket Networking Tool</Link></p>
					</section>
					<section>
						<h4>Python</h4>
						<p>Years of experience: 3</p>
						<p>- <Link to="/Projects">3D Graphics Engine</Link></p>
					</section>
					<section>
						<h4>Git</h4>
						<p>Years of experience: 3</p>
					</section>
				</div>
			</div>
		</main>
		<footer>
			<h4>Source code:</h4>
			<a href="https://github.com/RyanMoore145/Resume">https://github.com/RyanMoore145/Resume</a>
			<a href="https://github.com/RyanMoore145/ContactMeServer">https://github.com/RyanMoore145/ContactMeServer</a>
		</footer>
	</div>
	);
}
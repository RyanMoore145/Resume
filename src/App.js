import './App.css';

function App() {
	return (
	<div className="App">
		<nav>
			<div id="navAnimated">
				<img src="R.svg"></img>
				<a href="#aboutMe">About Me</a>
				<a href="#education">Education</a>
				<a href="#workExperience">Work Experience</a>
				<a href="#skills">Skills</a>
				<a href="#projects">Projects</a>
			</div>
		</nav>
		<header>
			<div id="headerNarrow">
				<div className="Typewriter" id="name">
					<h1>Ryan Moore</h1>
				</div>
				<div className="FadeIn" id="contact_info">
					<h3>(902) 321-6542</h3>
					<h3>ry331186@dal.ca</h3>
				</div>
			</div>
		</header>
		<main>
			<div id="mainNarrow">
				<section id="aboutMe">
					<div className="SectionTitle">
						<h3>About Me</h3>
					</div>
					<p>Dedicated university student looking for reliable work. In the Computer Science program at Dalhousie University. People-oriented, good listening skills with experience working in a team environment.</p>
					<p>Graduated from high school with Honours with distinction, received the Paul Bethune Memorial Award for excellence in math, and received the West Kings Faculty Award.</p>
				</section>
				<section id="education">
					<div className="SectionTitle">
						<h3>Education</h3>
					</div>
					<h4>Bachelor's of Computer Science</h4>
					<div className="table">
						<div className="EducationTableElement" id="dal">
							<img src="dalhousie.jpeg"></img>
							<h4>Dalhousie University</h4>
							<p> Sept 2022 - Present</p>
						</div>
						<div className="EducationTableElement" id="acadia">
							<img src="acadia.jpg"></img>
							<h4>Acadia University</h4>
							<p>Sept 2021 - May 2022</p>
						</div>
					</div>
				</section>
				<section id="workExperience">
					<div className="SectionTitle">
						<h3>Work Experience</h3>
					</div>
					<div className="WorkElement">
						<div className="WorkNameAndInfo">
							<h4>Telemarketing Representative</h4>
							<div className="WorkInfo">
								<p>ECW Solutions - Dartmouth NS</p>
								<p>Jun 2024 - Sept 2024</p>
							</div>
						</div>
						<div className="WorkDesc">
							<p>Contacted potential customers to promote water quality tests and schedule appointments.</p>
							<p>Educated callers on the benefits of water testing and addressed inquiries.</p>
							<p>Maintained an organized call log and appointment schedule.</p>
							<p>Followed scripts and adapted messaging to engage customers affectively.</p>
							<p>Provided excellent customer service and handled objections professionally.</p>
						</div>
					</div>
					<div className="WorkElement">
						<div className="WorkNameAndInfo">
							<h4>Weapons Technician, Reservist</h4>
							<div className="WorkInfo">
								<p>Canadian Armed Forces - Halifax NS</p>
								<p>Nov 2021 - Jan 2024</p>
							</div>
						</div>
						<div className="WorkDesc">
							<p>Weapons Technicians are responsible for maintaining functional small arms and servicing non-functional small arms belonging to their unit.</p>
							<p>Completed the Basic Training course, strengthening abilities in team building, time and stress management, quick critical thinking, and patience in a field and classroom environment.</p>
							<p>Served two summers at Willow Park Armouries completing secondary courses including first aid training, maintaining inventory in the storage bay, and fulfilling general duties.</p>
						</div>
					</div>
					<div className="WorkElement">
						<div className="WorkNameAndInfo">
							<h4>AI Trainer</h4>
							<div className="WorkInfo">
								<p>DataAnnotation</p>
								<p>Mar 2024 - Present</p>
							</div>
						</div>
						<div className="WorkDesc">
							<p>Evaluated and corrected AI responses to given prompts pertaining to subjects such as coding, life advice, and general knowledge from a work from home environment.</p>
						</div>
					</div>
				</section>
			</div>
			<div id="sideBar">
				<div className="sideBarGroup" id="skills">
					<h3>Skills</h3>
					<section>
						<h4>React / React Native</h4>
						<p>Years of experience: 1</p>
					</section>
					<section>
						<h4>C++</h4>
						<p>Years of experience: 4</p>
					</section>
					<section id="projects">
						<h4>Python</h4>
						<p>Years of experience: 3</p>
					</section>
					<section>
						<h4>Git</h4>
						<p>Years of experience: 3</p>
					</section>
				</div>
				<div className="sideBarGroup" id="projects">
					<h3>Projects</h3>
					<section>
						<h4>Sample</h4>
						<p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">sample link</a></p>
					</section>
				</div>
			</div>
		</main>
		<footer>
			<h4>Source code:</h4>
			<a href="https://github.com/RyanMoore145/CV">https://github.com/RyanMoore145/CV</a>
		</footer>
	</div>
	);
}

export default App;

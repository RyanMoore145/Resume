import './App.css';

function App() {
	return (
	<div className="App">
		<nav>
			<div id="navAnimated">
				<img src="R.svg"></img>
				<a href="#aboutMe">About Me</a>
				<a href="#education">Education</a>
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
					<h4>About Me</h4>
					<p>Dedicated university student looking for reliable work. In the Computer Science program at Dalhousie University. People-oriented, good listening skills with experience working in a team environment.</p>
					<p>Graduated from high school with Honours with distinction, received the Paul Bethune Memorial Award for excellence in math, and received the West Kings Faculty Award.</p>
				</section>
				<section id="education">
					<h4>Education</h4>
					<div className="table">
						<div className="EducationTableElement" id="dal">
							<img src="dalhousie.jpeg"></img>
							<h4>Dalhousie</h4>
						</div>
						<div className="EducationTableElement" id="acadia">
							<img src="acadia.jpg"></img>
							<h4>Acadia</h4>
						</div>
					</div>
				</section>
			</div>
		</main>
		<footer>
		
		</footer>
	</div>
	);
}

export default App;

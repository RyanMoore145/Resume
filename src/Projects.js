import {useState} from "react";

import styles from "./Projects.module.css";

export default function Projects() {
	
	const [categoryFilter, setCategoryFilter] = useState([]);
	const [sortSelection, setSortSelection] = useState("category");
	
	const projects = [
		{
			title: "sample project 1",
			img: {
				src: "./project1.png",
				alt: "project 1"
			},
			category: "C++",
			body: "sample description 1"
		},
		{
			title: "sample project 2",
			img: {
				src: "./project2.png",
				alt: "project 2"
			},
			category: "JS",
			body: "sample description 2"
		},
		{
			title: "sample project 3",
			img: {
				src: "./project3.png",
				alt: "project 3"
			},
			category: "Python",
			body: "sample description 3"
		}
	];
	
	function filter(elem) {
		if (categoryFilter.length === 0) {
			return true;
		}
		else {
			return categoryFilter.includes(elem.category);
		}
	}
	
	function sorter(a, b) {
		if (sortSelection === "category") {
			return a.category.localeCompare(b.category);
		}
		else {
			return -1;
		}
	}
	
	const Item = ({elem}) =>
		<div className={styles.Item}>
			<img src={elem.img.src} alt={elem.img.alt}/>
			<div className={styles.ItemInfo}>
				<h4>{elem.title}</h4>
				<p>{elem.body}</p>
				<p>{elem.category}</p>
			</div>
		</div>;
	
	const List = ({elems=[], Item=({elem})=>{}, filter=(elem)=>true, sorter=(a,b)=>-1, className=""}) =>
		<div className={className}> 
			{elems.filter(filter).toSorted(sorter).map((elem) => <Item elem={elem}/>)}
		</div>;
	
	return (
	<div className={styles.Page}>
		<header>
			<h3>Projects</h3>
		</header>
		<main>
			<List 
				className={styles.List} 
				elems={projects}
				Item={Item}
				filter={filter}
				sorter={sorter}
			/>
		</main>
		<footer>
			<h4>Source code:</h4>
			<a href="https://github.com/RyanMoore145/Resume">https://github.com/RyanMoore145/Resume</a>
			<a href="https://github.com/RyanMoore145/ContactMeServer">https://github.com/RyanMoore145/ContactMeServer</a>
		</footer>
	</div>
	);
}
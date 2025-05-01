import {
	useState
} from "react";

import "./global.css";
import styles from "./ContactMe.module.css";

export default function ContactMe() {
	
	const [inputValue, setInputValue] = useState("testing");
	
	async function onClickSubmit() {
		console.log(inputValue);
		try {
			const res = await fetch("http://127.0.0.1:3001/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					input: inputValue
				})
			});
			console.log(await res.json());
		} catch (e) {
			console.log(e);
		}
	}
	
	return (
	<div className="App">
		<header>
		
		</header>
		<main className="Foo">
			<p>TESTING</p>
			<input type="text" value={inputValue} onChange={setInputValue}/>
			<button onClick={onClickSubmit}>Submit</button>
		</main>
		<footer>
		
		</footer>
	</div>
	);
}
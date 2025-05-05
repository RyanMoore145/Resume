import {
	useState
} from "react";

import "./global.css";
import styles from "./ContactMe.module.css";

export default function ContactMe() {

	const [senderEmail, setSenderEmail] = useState("");
	const [emailHeader, setEmailHeader] = useState("");
	const [emailBody, setEmailBody] = useState("");
	const [error, setError] = useState("");
	
	function clearFields() {
		setSenderEmail("");
		setEmailHeader("");
		setEmailBody("");
		setError("");
	}
	
	async function onClickSubmit() {
		if (
			senderEmail.trim().length === 0 ||
			emailHeader.trim().length === 0 ||
			emailBody.trim().length === 0
		) {
			setError("Please fill all fields");
			return;
		}
		try {
			const res = await fetch("https://ryan-a-moore.com/ContactMeServer/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					senderEmail, emailHeader, emailBody
				})
			});
			if (res.ok) {
				clearFields();
				setError("Message sent! Please check your inbox and your spam folder for a confirmation email");
				return;
			}
			const resjson = await res.json();
			console.log(resjson);
			if (resjson.error) {
				setError(resjson.error);
			}
		} catch (e) {
			console.log(e);
		}
	}
	
	return (
	<div className={styles.Page}>
		<header>
		
		</header>
		<main>
			<div className={styles.ContactContainer}>
				<div className={styles.Banner}/>
				<div id={styles.contactMeMessage}>
					<h3>Contact Information</h3>
					<h4>(902) 321-6542</h4>
					<h4>ry331186@dal.ca</h4>
				</div>
				<div className={styles.Form}>
					<div className={styles.FormHeader}>
						<h4>... Or Contact Me Here</h4>
					</div>
					<label htmlFor="email">Email Address: </label>
					<input id="email" type="email" value={senderEmail} onChange={e => setSenderEmail(e.target.value)}/>
					<label htmlFor="emailHeader">Header: </label>
					<input id="emailHeader" type="text" value={emailHeader} onChange={e => setEmailHeader(e.target.value)}/>
					<label htmlFor="emailBody">Body: </label>
					<textarea id="emailBody" value={emailBody} maxLength={1000} onChange={e => setEmailBody(e.target.value)}/>
					<button className={styles.SubmitButton} onClick={onClickSubmit}>Submit</button>
					<p>{error}</p>
				</div>
			</div>
		</main>
		<footer>
			<a id={styles.link} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Link</a>
		</footer>
	</div>
	);
}
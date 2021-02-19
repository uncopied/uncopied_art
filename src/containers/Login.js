import React, { useState } from "react";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import LoaderButton from "../app/components/LoaderButton";
import { useAppContext } from "../libs/contextLib";
import { useFormFields } from "../libs/hooksLib";
import { useHistory } from "react-router-dom";
import { onError } from "../libs/errorLib";

import embossing from "../embossing.svg";

export default function Login() {
	const { userHasAuthenticated } = useAppContext();
	const [fields, handleFieldChange] = useFormFields({
		username: "",
		password: ""
	});
	const [isLoading, setIsLoading] = useState(false);
	const history = useHistory();

	function validateForm() {
		return fields.username.length > 0 && fields.password.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();
		try {
			setIsLoading(true);
			// Sending and receiving data in JSON format using POST method
			var xhr = new XMLHttpRequest();

			var url = process.env.REACT_APP_UNCOPIED_API + "api/v1.0/auth/login";
			xhr.open("POST", url, true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.onload = function () {
				if (xhr.status === 200) {
					var json = JSON.parse(xhr.responseText);
					console.log(json.user + ", " + json.token);
					localStorage.setItem('jwtoken', json.token);
					userHasAuthenticated(true);
					history.push("/");
				} else {
					alert("Could not authenticate user " + fields.username + " xhr.readyState=" + xhr.readyState + " xhr.status=" + xhr.status);
					setIsLoading(false);
					userHasAuthenticated(false);
				}
			};
			var data = JSON.stringify({ "username": fields.username, "password": fields.password });
			xhr.send(data);
		} catch (e) {
			onError(e);
			setIsLoading(false);
			userHasAuthenticated(false);
		}
	}

	return (
		<div className="form-container-outer">
			<div className="form-container-inner">
				<div>
					<img className="embossing" src={embossing} alt="embossing" />
					<h2 align="center">LOG IN TO YOUR ACCOUNT</h2>
				</div>
				<Form onSubmit={handleSubmit}>
					<Form.Group size="lg" controlId="username">
						<Form.Label>Username</Form.Label>
						<Form.Control
							autoFocus
							type="username"
							value={fields.username}
							onChange={handleFieldChange}
						/>
					</Form.Group>
					<Form.Group size="lg" controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							value={fields.password}
							onChange={handleFieldChange}
						/>
					</Form.Group>
					<LoaderButton
						block
						size="lg"
						type="submit"
						isLoading={isLoading}
						disabled={!validateForm()}
					>
						Login
					</LoaderButton>
				</Form>
			</div>
		</div>
	);
}	
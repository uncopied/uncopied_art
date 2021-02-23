import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import LoaderButton from "../app/components/LoaderButton";
import { notify } from './Notification'
import { useAppContext } from "../libs/contextLib";
import { useFormFields } from "../libs/hooksLib";
import { useHistory } from "react-router-dom";
import { onError } from "../libs/errorLib";


import embossing from "../embossing.svg";
import axios from "axios";

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
			const url = process.env.REACT_APP_UNCOPIED_API + "api/v1.0/auth/login";
			const headers = {
				"Content-Type": "application/json"
			}
			const data =  JSON.stringify({
				"username": fields.username,
				"password": fields.password 
			})
			axios.post(url, data, headers).then(response => {
				if(response.status === 200)
				{
					notify({"title":"Successfully Logged In", "type":"success"})
					localStorage.setItem('jwtoken', response.data.token);
					userHasAuthenticated(true)
					history.push("/")
				}
				setIsLoading(false)
			}).catch(error => {
				notify({"title":"Logged In failed", "type":"danger"})
				onError(error)
				setIsLoading(false)
				userHasAuthenticated(false)
			})
		} catch(error) {
			onError(error);
		}
	}

	return (
		<>
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
		</>
	);
}	
import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./Forms.css";
import LoaderButton from "./LoaderButton";
import { useAppContext } from "../libs/contextLib";
import { useFormFields } from "../libs/hooksLib";
import { useHistory } from "react-router-dom";
import { onError } from "../libs/errorLib";
import embossing from "../embossing.svg";
import { Link } from  'react-router-dom';

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
			//
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
				<Row className="form-contatiner-logo">
					<Col>
						<img className="embossing mb-4" src={embossing} alt="embossing" />
						<h4 align="center" className='mb-4'><b>LOG IN TO YOUR ACCOUNT</b></h4>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form onSubmit={handleSubmit}>
							<Form.Row className='mt-3 mb-3'>
								<Col>
									<Form.Group size="lg" controlId="username">
										<Form.Control
											autoFocus
											type="username"
											placeholder="Email"
											value={fields.username}
											onChange={handleFieldChange}
										/>
									</Form.Group>
								</Col>
							</Form.Row>
							<Form.Row className='mt-3 mb-3'>
								<Col>
									<Form.Group size="lg" controlId="password">
										<Form.Control
											type="password"
											placeholder="Password"
											value={fields.password}
											onChange={handleFieldChange}
										/>
									</Form.Group>
								</Col>
							</Form.Row>
							<Form.Row className='mt-3 mb-3 text-center'>
								<Col>
									<LoaderButton
										size="lg"
										type="submit"
										isLoading={isLoading}
										disabled={!validateForm()}
									>
										Login
									</LoaderButton>
								</Col>
							</Form.Row>
							<Form.Row className='mt-4 mb-3 text-center'>
								<Col>
									<Form.Text>
										<a href="#">Forget password ?</a>
									</Form.Text>
								</Col>
							</Form.Row>
							<Form.Row className='mt-3 mb-3 text-center'>
								<Col>
									<Form.Text>
										<Link to="/signup">Don't have an account</Link>
									</Form.Text>
								</Col>
							</Form.Row>
						</Form>
					</Col>
				</Row>
			</div>
		</div>
	);
}	
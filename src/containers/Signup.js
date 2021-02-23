import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import LoaderButton from "../app/components/LoaderButton";
import { useAppContext } from "../libs/contextLib";
import { useFormFields } from "../libs/hooksLib";
import { useHistory } from "react-router-dom";
import { onError } from "../libs/errorLib";
import embossing from "../embossing.svg";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios"
import { notify } from './Notification'

export default function Signup() {
  const [fields, handleFieldChange] = useFormFields({
    username: "",
    displayName: "",
    email: "",
    password: "",
    role: "artist"
  });
  const history = useHistory();
  const { userHasAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return (
      fields.username.length > 0 &&
      fields.displayName.length > 0 &&
      fields.email.length > 0 &&
      fields.password.length > 0
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    try {
      setIsLoading(true);
      const url = process.env.REACT_APP_UNCOPIED_API + "api/v1.0/auth/register";
      const data = JSON.stringify({
        "username": fields.username,
        "display_name": fields.displayName,
        "email": fields.email,
        "password": fields.password,
        "role": fields.role 
      });
			const headers = {
				"Content-Type": "application/json"
			}
      axios.post(url, data, headers)
      .then((response => {
        if(response.status === 200)
        {
          notify({"title":"Successfully Signed In", "type":"success"})
          localStorage.setItem('jwtoken', response.data.token);
          userHasAuthenticated(true);
          history.push("/");
        }
        else if(!response.data.user || !response.data.token)
        {
          notify({"title":"Could not signup and authorize user", "type":"danger"})
        }
        setIsLoading(false);
        userHasAuthenticated(false);
      }))
      .catch(error => {
        if(error.response.status === 409)
        {
          notify({"title":"Username already exists", "type":"danger"})
        }
        else
        {
          notify({"title":"Sign up failed", "type":"danger"})
        }
        setIsLoading(false);
        userHasAuthenticated(false);
      })
    } catch(error) {
      notify({"title":"Sign up failed", "type":"danger"})
      onError(error);
      setIsLoading(false);
      userHasAuthenticated(false);
    }
  }

  return (
    <div className="form-container-outer">
      <div className="form-container-inner">
        <div>
          <img className="embossing" src={embossing} alt="embossing" />
          <h2 align="center">CREATE YOUR ACCOUNT</h2>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="username" size="lg">
            <Form.Label>Username</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={fields.username}
              onChange={handleFieldChange}
            />
          </Form.Group>
          <Form.Group controlId="displayName" size="lg">
            <Form.Label>Display name</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={fields.displayName}
              onChange={handleFieldChange}
            />
          </Form.Group>
          <Form.Group controlId="email" size="lg">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </Form.Group>
          <Form.Group controlId="password" size="lg">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={fields.password}
              onChange={handleFieldChange}
            />
          </Form.Group>
          <Form.Group controlId="role">
            <Form.Label>Role</Form.Label>
            <Form.Control as="select" onChange={handleFieldChange} value={fields.role} >
              <option value="artist">Artist</option>
              <option value="collector">Collector</option>
              <option value="museum">Museum</option>
              <option value="other">Other</option>
            </Form.Control>
          </Form.Group>
        By registering, you agree to our <a href="/assets/pdf/202101_Uncopied_terms.pdf" target="top">Terms and Conditions</a>.
        <LoaderButton
            block
            size="lg"
            type="submit"
            variant="success my-3"
            isLoading={isLoading}
            disabled={!validateForm()}
          >
            Create account
        </LoaderButton>
        </Form>
        <p align="center">
          <LinkContainer to="/login">
            <Nav.Link>I already have an account</Nav.Link>
          </LinkContainer>
        </p>
      </div>
    </div>
  );

}	
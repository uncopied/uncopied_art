import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import LoaderButton from "./LoaderButton";
import "./Forms.css";
import { useAppContext } from "../libs/contextLib";
import { useFormFields } from "../libs/hooksLib";
import { useHistory } from "react-router-dom";
import { onError } from "../libs/errorLib";
import embossing from "../embossing.svg";
import { Link } from 'react-router-dom';

export default function Signup() {
  const [fields, handleFieldChange] = useFormFields({
    username: "",
    displayName: "",
    email: "",
    password: "",
    role: "artist"
  });
  const history = useHistory();
  const [newUser, setNewUser] = useState(null);
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
      // Sending and receiving data in JSON format using POST method
      //
      var xhr = new XMLHttpRequest();
      var url = process.env.REACT_APP_UNCOPIED_API + "api/v1.0/auth/register";
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onload = function () {
        if (xhr.status === 200) {
          var json = JSON.parse(xhr.responseText);
          if (json == null || json.token == null) {
            alert("Could not signup and auth user " + fields.username);
            setIsLoading(false);
            userHasAuthenticated(false);
          } else {
            console.log(json.user + ", " + json.token);
            localStorage.setItem('jwtoken', json.token);
            userHasAuthenticated(true);
            history.push("/");
          }
        } else {
          alert("Could not signup user " + fields.username);
          setIsLoading(false);
          userHasAuthenticated(false);
        }
      };
      var data = JSON.stringify({ "username": fields.username, "display_name": fields.displayName, "email": fields.email, "password": fields.password, "role": fields.role });
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
						<h4 align="center" className='mb-4'><b>CREATE YOUR ACCOUNT</b></h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
            <Form.Row className='mt-3 mb-3'>
                <Col>
                  <Form.Group controlId="username" size="lg">
                    <Form.Control
                      autoFocus
                      type="text"
                      placeholder="Username"
                      value={fields.username}
                      onChange={handleFieldChange}
                    />
                  </Form.Group>   
                </Col>
              </Form.Row>
              <Form.Row className='mt-3 mb-3'>
                <Col>
                  <Form.Group controlId="displayName" size="lg">
                    <Form.Control
                      autoFocus
                      placeholder="Display Name"
                      type="text"
                      value={fields.displayName}
                      onChange={handleFieldChange}
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row className='mt-3 mb-3'>
                <Col>
                  <Form.Group controlId="email" size="lg">
                    <Form.Control
                      autoFocus
                      placeholder="Email"
                      type="email"
                      value={fields.email}
                      onChange={handleFieldChange}
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row className='mt-3 mb-3'>
                <Col>
                  <Form.Group controlId="password" size="lg">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={fields.password}
                      onChange={handleFieldChange}
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row className='mt-3 mb-3'>
                <Col>
                  <Form.Group controlId="role">
                    <Form.Control as="select" onChange={handleFieldChange} value={fields.role} >
                      <option value="artist">Artist</option>
                      <option value="collector">Collector</option>
                      <option value="museum">Museum</option>
                      <option value="other">Other</option>
                    </Form.Control>
                  </Form.Group>  
                </Col>
              </Form.Row>
              <Form.Row className='mt-3 mb-3'>
                <Col>
                  <Form.Text as={'p'}>
                    By registering, you agree to our <a href="/assets/pdf/202101_Uncopied_terms.pdf" target="top">Terms and Conditions</a>.
                  </Form.Text>    
                </Col>
              </Form.Row>
              <Form.Row className='mt-3 mb-3 text-center'>
                <Col>
                  <LoaderButton
                    size="lg"
                    type="submit"
                    variant="success my-3"
                    isLoading={isLoading}
                    disabled={!validateForm()}
                  >
                    Create account
                  </LoaderButton>
                </Col>
              </Form.Row>
              <Form.Row className="mt-3 mb-1 text-center">
                <Col>
                  <Link to="/login">I already have an account</Link>
                </Col>
              </Form.Row>
            </Form>
            </Col>
        </Row>
      </div>
    </div>
  );

}	
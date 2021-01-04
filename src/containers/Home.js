import React, { useEffect, useState } from "react";
import "./Forms.css";
import "./Home.css";
import { ListGroup, Row, Col, Button, Container, Form } from "react-bootstrap";
import { useAppContext } from "../libs/contextLib";
import { LinkContainer } from "react-router-bootstrap";
import embossing from "../embossing.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Home() {
    const { t } = useTranslation();
    const { isAuthenticated } = useAppContext();

    function renderNewCertificateChoice() {
        return (
            <LinkContainer to="/cert/new">
                <ListGroup.Item action className="py-3 text-nowrap text-truncate">
                    <span className="ml-2 font-weight-bold">Create Certificate</span>
                </ListGroup.Item>
            </LinkContainer>
        )
    }

    function renderOrderCertificateChoice() {
        return (
            <LinkContainer to="/cert/order">
                <ListGroup.Item action className="py-3 text-nowrap text-truncate">
                    <span className="ml-2 font-weight-bold">Order Certificate</span>
                </ListGroup.Item>
            </LinkContainer>
        )
    }

    function renderUploadNewArtworkChoice() {
        return (
            <LinkContainer to="/src/new/">
                <ListGroup.Item action className="py-3 text-nowrap text-truncate">
                    <span className="ml-2 font-weight-bold">Upload new Artwork</span>
                </ListGroup.Item>
            </LinkContainer>
        )
    }

    function renderListArtworksChoice() {
        return (
            <LinkContainer to="/src">
                <ListGroup.Item action className="py-3 text-nowrap text-truncate">
                    <span className="ml-2 font-weight-bold">Your Artworks</span>
                </ListGroup.Item>
            </LinkContainer>
        )
    }

    function renderMainChoices() {
        return (
            <div className="Home">
                <div className="form-container-outer">
                    <div className="form-container-inner">
                        <div className="artworkSources">
                            <div>
                                <img className="embossing" src={embossing} alt="embossing" />
                                <h2 align="center">WELCOME!</h2>
                            </div>
                            {renderUploadNewArtworkChoice()}
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    function renderLander() {
        return (
            <Container fluid>
                <Row>
                    <Col sm={6} id="section1">
                        <h1 className='mb-5'>
                            <b>Your Best Value Proposition</b>
                        </h1>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae congue quam, vitae egestas tortor. Morbi sit amet lectus risus. Phasellus nec purus finibus, porta velit et, facilisis nibh. Donec dolor orci, egestas et ante ut, gravida ornare nibh. Proin vel magna nulla. In luctus efficitur nulla at fringilla.
                        </p>
                        <Button variant="dark">Button</Button>
                    </Col>
                    <Col sm={6} className="section-bak">

                    </Col>
                </Row>
                <Row id="section2">
                    <Col>
                        <Row>
                            <Col id="section2-title">
                                <h1><b>HOW IT WORKS</b></h1>
                            </Col>
                        </Row>
                        <Row className="text-center" style={{ paddingBottom: 50 }}>
                            <Col md={{ span: 8, offset: 2 }}>
                                <Row>
                                    <Col md={3}>
                                        <i className="fal fa-desktop-alt mb-5" style={{ fontSize: 100 }}></i>
                                        <h6><b>Create Account</b></h6>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Nunc vitae congue quam, vitae egestas tortor. Morbi sit amet lectus risus.
                                        </p>
                                    </Col>
                                    <Col md={3}>
                                        <i className="fal fa-desktop-alt mb-5" style={{ fontSize: 100 }}></i>
                                        <h6><b>Create Account</b></h6>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Nunc vitae congue quam, vitae egestas tortor. Morbi sit amet lectus risus.
                                        </p>
                                    </Col>
                                    <Col md={3}>
                                        <i className="fal fa-desktop-alt mb-5" style={{ fontSize: 100 }}></i>
                                        <h6><b>Create Account</b></h6>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Nunc vitae congue quam, vitae egestas tortor. Morbi sit amet lectus risus.
                                        </p>
                                    </Col>
                                    <Col md={3}>
                                        <i className="fal fa-desktop-alt mb-5" style={{ fontSize: 100 }}></i>
                                        <h6><b>Create Account</b></h6>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Nunc vitae congue quam, vitae egestas tortor. Morbi sit amet lectus risus.
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row id="section3">
                    <Col>
                        <div style={{ padding: 100 }}>
                            <Row>
                                <Col md={6} style={{ paddingRight: 100 }}>
                                    <h1 className="mb-4 mt-5"><b>LE CERTIFICAT</b></h1>
                                    <p className="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nunc vitae congue quam, vitae egestas tortor. Morbi sit amet lectus risus.
                                        Nunc vitae congue quam, vitae egestas tortor. Morbi sit amet lectus risus.
                                        Nunc vitae congue quam, vitae egestas tortor. Morbi sit amet lectus risus.
                                    </p>
                                    <p className="mb-4 text-muted" >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nunc vitae congue quam, vitae egestas tortor.
                                    </p>
                                    <div style={{ marginBottom: 100 }}>
                                        <Button variant="light">Button</Button>
                                    </div>
                                </Col>
                                <Col md={6} className="section-bak" style={{ paddingLeft: 100 }}>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row id="section4">
                    <Col>
                        <div style={{ padding: 100 }}>
                            <Row>
                                <Col md={6} style={{ paddingRight: 100 }}>
                                    <div className="section-bak" style={{ height: '100%' }}>

                                    </div>
                                </Col>
                                <Col md={6} style={{ paddingRight: 100 }}>
                                    <h1 className="mb-4 mt-5"><b>About</b></h1>
                                    <p style={{ marginBottom: 100 }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nunc vitae congue quam, vitae egestas tortor. Morbi sit amet lectus risus.
                                        Nunc vitae congue quam, vitae egestas tortor. Morbi sit amet lectus risus.
                                        Nunc vitae congue quam, vitae egestas tortor. Morbi sit amet lectus risus.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nunc vitae congue quam, vitae egestas tortor.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row id="section5">
                    <Col md={6}>
                        <Row>
                            <Col md={{ span: 8, offset: 2 }}>
                                <h1 className="mb-4 mt-5"><b>Contact</b></h1>
                                <Form>
                                    <Form.Row className='mt-3 mb-3'>
                                        <Col>
                                            <Form.Group size="lg" controlId="name">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Name"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Form.Row>
                                    <Form.Row className='mt-3 mb-3'>
                                        <Col>
                                            <Form.Group size="lg" controlId="email">
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Email"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Form.Row>
                                    <Form.Row className='mt-3 mb-3'>
                                        <Col>
                                            <Form.Group size="lg" controlId="message">
                                                <Form.Control
                                                    as="textarea"
                                                    rows={10}
                                                    placeholder="Message"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Form.Row>
                                    <Form.Row className='mt-3 mb-3'>
                                        <Col>
                                            <Button type="submit" style={{ paddingLeft: 60, paddingRight: 60 }}>SEND</Button>
                                        </Col>
                                    </Form.Row>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} className="section-bak"></Col>
                </Row>
                <Row id="section6">
                    <Col style={{ paddingTop: 50, paddingBottom: 60 }}>
                        <Row>
                            <Col sm={{ span: 10, offset: 1}}>
                                <Row style={{ color: '#d6d6d6' }}>
                                    <Col md={4} className="text-center">
                                        Address
                                    </Col>
                                    <Col md={4}>
                                        Mention
                                    </Col>
                                    <Col md={4}>
                                        Social
                                    </Col>
                                </Row>
                                <hr style={{ borderColor: '#d6d6d6' }} />
                                <Row style={{ color: '#ffffff' }}>
                                    <Col md={4} className="text-center">
                                        <Row>
                                            <Col xs={3} className="text-right">

                                            </Col>
                                            <Col xs={9}>
                                                <h6>UNCOPIED</h6>
                                                <p className="text-muted">65 rue de la Paroisse,</p>
                                                <p className="text-muted">78000, Versailles</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={4}>
                                        <h6><Link style={{ textDecoration: 'underline',  color: '#ffffff' }} to="/">Link1</Link></h6>
                                        <h6><Link style={{ textDecoration: 'underline',  color: '#ffffff' }} to="/">Link2</Link></h6>
                                        <h6><Link style={{ textDecoration: 'underline', color: '#ffffff' }} to="/">Link3</Link></h6>
                                    </Col>
                                    <Col md={4}>
                                        <h6>LinkedIn</h6>
                                        <h6>Facebook</h6>
                                        <h6>Instagram</h6>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <>
            { isAuthenticated ? renderMainChoices() : renderLander()}
        </>
    );
}
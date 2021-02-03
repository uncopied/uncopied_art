import React, { useEffect, useState } from "react";
import "./Forms.css"
import "./Home.css";
import ListGroup from "react-bootstrap/ListGroup";
import { useAppContext } from "../libs/contextLib";
import { LinkContainer } from "react-router-bootstrap";
import embossing from "../embossing.svg";
import { useTranslation } from "react-i18next";
import Nav from "react-bootstrap/Nav";

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
        );
    }

    function renderLander() {
        return (
            <div className="Home">
                <div className="lander">
                    <h1>UNCOPIED.ART</h1>
                    <p className="text-muted">
                        {t('home.mission-statement')}
                    </p>
                    <LinkContainer to="/signup">
                        <Nav.Link>{t('common.signup')}</Nav.Link>
                    </LinkContainer>
                </div>
                <div className="benefits">
                    <h2>{t('home.for-you')}</h2>
                    <h4>{t('home.for-artists')}</h4>
                    <p>
                        {t('home.for-artists-statement')}
                    </p>
                    <h4>{t('home.for-collectors')}</h4>
                    <p>
                        {t('home.for-collectors-statement')}
                    </p>
                    <h4>{t('home.for-museums')}</h4>
                    <p>
                        {t('home.for-museums-statement')}
                    </p>
                </div>
                <div className="benefits">
                    <h2>{t('home.how-it-works')}</h2>
                    <p>
                        {t('home.how-it-works-desc')}
                    </p>
                    <i className="fal fa-user-plus mb-5" style={{ fontSize: 50 }}></i>
                    <h4>{t('home.how-it-works-1')}</h4>
                    <p>
                        {t('home.how-it-works-1-more')}
                    </p>
                    <i className="fal fa-image mb-5" style={{ fontSize: 50 }}></i>
                    <h4>{t('home.how-it-works-2')}</h4>
                    <p>
                        {t('home.how-it-works-2-more')}
                    </p>
                    <i className="fal fa-file-code mb-5" style={{ fontSize: 50 }}></i>
                    <h4>{t('home.how-it-works-3')}</h4>
                    <p>
                        {t('home.how-it-works-3-more')}
                    </p>
                    <i className="fal fa-gem mb-5" style={{ fontSize: 50 }}></i>
                    <h4>{t('home.how-it-works-4')}</h4>
                    <p>
                        {t('home.how-it-works-4-more')}
                    </p>
                    <i className="fal fa-file-signature mb-5" style={{ fontSize: 50 }}></i>
                    <h4>{t('home.how-it-works-5')}</h4>
                    <p>
                        {t('home.how-it-works-5-more')}
                    </p>
                </div>
                <div className="benefits">
                    <h2>{t('home.certificate')}</h2>
                    <p>
                        {t('home.certificate-desc')}
                        <a href="https://uncopied.github.io/blog/post/chapter-1/">{t('home.certificate-action')}</a>
                    </p>
                </div>
                <div className="benefits">
                    <h2>{t('home.about')}</h2>
                    <p>
                        {t('home.about-desc')}
                    </p>
                </div>
            </div>
        );
    }


    return (
        <div className="Home">
            {isAuthenticated ? renderMainChoices() : renderLander()}
        </div>
    );
}
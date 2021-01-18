import React, { useEffect, useState } from "react";
import "../Forms/style.css"
import "../Home/style.css";
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
                    <h2>{t('home.for-artists')}</h2>
                    <p>
                        {t('home.for-artists-statement')}
                    </p>
                    <h2>{t('home.for-collectors')}</h2>
                    <p>
                        {t('home.for-collectors-statement')}
                    </p>
                    <h2>{t('home.for-museums')}</h2>
                    <p>
                        {t('home.for-museums-statement')}
                    </p>
                </div>
            </div>
        );
    }

    function renderHowTo() {
        return (
        <div className="lander">
            <h3>HOW IT WORKS</h3>
            <i className="fal fa-user-plus mb-5" style={{ fontSize: 50 }}></i>
            <h4><b>Create Account</b></h4>
            <p>
                Create your personal account. Optionally link your account with
                a blockchain address. We aim towards self-sovereign identity.
            </p>
            <i className="fal fa-image mb-5" style={{ fontSize: 50 }}></i>
            <h4><b>Upload Source</b></h4>
            <p>
                Upload your high-definition source image for long-term preservation and
                proof-of-authorship.
            </p>
            <i className="fal fa-gem mb-5" style={{ fontSize: 50 }}></i>
            <h4><b>Create Edition</b></h4>
            <p>
                Create your art edition: artwork name and metadata, licensing and digital rights, NFT spec.
            </p>
            <i className="fal fa-file-signature mb-5" style={{ fontSize: 50 }}></i>
            <h4><b>Sign Certificate</b></h4>
            <p>
                Receive and sign the physical certificate. Optionally transfer
                the NFT asset to your crypto wallet.
            </p>
        </div>
        );
    }

    return (
        <div className="Home">
            {isAuthenticated ? renderMainChoices() : renderLander()}
        </div>
    );
}
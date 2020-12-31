import React, {useEffect, useState} from "react";
import "./Home.css";
import ListGroup from "react-bootstrap/ListGroup";
import {useAppContext} from "../libs/contextLib";
import {LinkContainer} from "react-router-bootstrap";
import embossing from "../embossing.svg";
import { useTranslation } from "react-i18next";

export default function Home() {
    const { t } = useTranslation();
    const {isAuthenticated} = useAppContext();

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
                <ListGroup.Item action className="py-3   text-nowrap text-truncate">
                    <span className="ml-2 font-weight-bold">Your Artworks</span>
                </ListGroup.Item>
            </LinkContainer>
        )
    }

    function renderMainChoices() {
        return (
            <div className="artworkSources">
                <div>
                    <img className="embossing" src={embossing} alt="embossing" />
                    <h2 align="center">WELCOME!</h2>
                </div>
                {renderUploadNewArtworkChoice()}
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
                </div>
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
        );
    }

    return (
        <div className="Home">
            {isAuthenticated ? renderMainChoices() : renderLander()}
        </div>
    );
}
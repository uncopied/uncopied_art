import React, {useEffect, useState} from "react";
import "./Home.css";
import ListGroup from "react-bootstrap/ListGroup";
import {useAppContext} from "../libs/contextLib";
import {LinkContainer} from "react-router-bootstrap";
import embossing from "../embossing.svg";

export default function Home() {
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
                    <h1>Uncopied.art</h1>
                    <p className="text-muted">Physical and digitally immutable certificates of authenticity for the
                        original artwork.</p>
                </div>
                <h2>For artists</h2>
                <p>
                    <strong>Certificates of Authenticity</strong> offer strong and long term protection for your intellectual property.
                    You gain control and decide with maximum flexibility on creating physical or digital editions of your artworks
                    (single original edition, limited edition of original prints, digital prints or non fungible tokens NFTs).
                </p>
                <h2>For museums and institutions</h2>
                <p>
                    <strong>Certificates of Inventory</strong> support long term preservation of your digital and
                    physical collections, as well as dissemination of your collection metadata in a standard and future-proof format.
                </p>
                <h2>For art collectors</h2>
                <p>
                    <strong>Certificates of Expertise</strong> increase the value of your collection with physically and
                    digitally signed documents from world-class experts and appraisers.
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
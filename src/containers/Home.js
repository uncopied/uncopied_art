import React, { useEffect, useState } from "react";
import "./Forms.css"
import "./Home.css";
import { useAppContext } from "../libs/contextLib";
import embossing from "../embossing.svg";
import { useTranslation } from "react-i18next";
import HowItWorks from "../app/components/StaticContent/HowItWorks";
import Container from '../app/components/LinkContainer'
import  HomePage  from '../app/pages/HomePage'


export default function Home() {
    const { t } = useTranslation();
    const { isAuthenticated } = useAppContext();

    function renderNewCertificateChoice() {
        return Container("/cert/new", "Create Certificate") 
    }

    function renderOrderCertificateChoice() {
        return Container("/cert/order", "Order Certificate");
    }

    function renderUploadNewArtworkChoice() {
        return Container("/src/new", "Upload new Artwork")
    }

    function renderListArtworksChoice() {
        return Container("/src", "Your Artworks")
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
        return HomePage()
    }

    function renderHowTo() {
        return HowItWorks();
    }

    return (
        <div className="Home">
            {isAuthenticated ? renderMainChoices() : renderLander()}
        </div>
    );
}
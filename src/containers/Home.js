import React, { useEffect, useState } from "react";
import "./Forms.css"
import "./Home.css";
import { useAppContext } from "../libs/contextLib";
import embossing from "../embossing.svg";
import { useTranslation } from "react-i18next";
import HowItWorks from "../app/components/StaticContent/HowItWorks";
import Container from '../app/components/LinkContainer'


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
        return (
            // <div className="Home">
            //     <div className="lander">
            //         <h1>UNCOPIED.ART</h1>
            //         <p className="text-muted">
            //             {t('home.mission-statement')}
            //         </p>
            //         <LinkContainer to="/signup">
            //             <Nav.Link>{t('common.signup')}</Nav.Link>
            //         </LinkContainer>
            //     </div>
            //     <div className="benefits">
            //         <h2>{t('home.for-artists')}</h2>
            //         <p>
            //             {t('home.for-artists-statement')}
            //         </p>
            //         <h2>{t('home.for-collectors')}</h2>
            //         <p>
            //             {t('home.for-collectors-statement')}
            //         </p>
            //         <h2>{t('home.for-museums')}</h2>
            //         <p>
            //             {t('home.for-museums-statement')}
            //         </p>
            //     </div>
            // </div>
            <section id="business-plan">
            <div className="container-fluid">
                <div className="row">
                <div class="col-lg-6 col-md-12 pl-4">
                <div class="business-item-info">
                    <h3>Don't feel left out, get hired or post a job and advance your career.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do </p>    
                <a className="btn btn-common" href="#">Discover</a>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 pt-70">
                <div className="business-item-img">
                <img src="https://user-images.githubusercontent.com/54095539/105851989-d76ab980-6009-11eb-9a3d-c7f6a3f00a21.png" className="img-fluid" alt=""/>
                </div>
            </div>
            </div>
        </div>
        </section>
            
        );
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
import React from "react";
import { useAppContext } from "../libs/contextLib";
import embossing from "../embossing.svg";
// import { useTranslation } from "react-i18next";
// import HowItWorks from "../app/components/StaticContent/HowItWorks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../app/components/Sidebar';
import Container from '../app/components/LinkContainer'
import  HomePage  from '../app/pages/HomePage'
import { Link } from "react-router-dom";


export default function Home() {
    // const { t } = useTranslation();
    const { isAuthenticated } = useAppContext();

    // function renderNewCertificateChoice() {
    //     return Container("/cert/new", "Create Certificate") 
    // }

    // function renderOrderCertificateChoice() {
    //     return Container("/cert/order", "Order Certificate");
    // }

    // function renderUploadNewArtworkChoice() {
    //     return Container("/src/new", "Upload new Artwork")
    // }

    // function renderListArtworksChoice() {
    //     return Container("/src", "Your Artworks")
    // }

    function renderMainChoices() {
        return (
            <div className="form-container-outer">
                <div className="spacing">
                <div className="sidebar-flex">
                    {/* <Sidebar></Sidebar> */}
                    <div className="content artworkSources">
                     <div>
                        <h2 className="center">CREATE YOUR <span>ARTWORKS</span></h2>
                     </div>
                     <div className="box">
                      <Link to="/src/new" className="content">
                       <p><FontAwesomeIcon icon={faArrowAltCircleUp} /></p>
                      </Link>
                     </div>
                    </div>
                </div>
                </div>
                </div>
        );
    }

    function renderLander() {
        return HomePage()
    }


    return (
        <div className="Home">
            {isAuthenticated ? renderMainChoices() : renderLander()}
        </div>
    );
}
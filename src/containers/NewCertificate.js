import React, { useRef, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { onError } from "../libs/errorLib";
import "./Forms.css";
import "./NewCertificate.css";
import {useAppContext} from "../libs/contextLib";
import Form from "react-bootstrap/Form";
import LoaderButton from "./LoaderButton";
import embossing from "../embossing.svg";

export default function NewCertificate() {

    const history = useHistory();
    const [assetTemplate, setAssetTemplate] = useState(null);
    const {isAuthenticated} = useAppContext();
    const [isLoading, setIsLoading] = useState(true);
    const [isCertificateAgreed, setIsCertificateAgreed] = useState(false);
    const [isLicenceAgreed, setIsLicenseAgreed] = useState(false);
    const [isPrivacyAgreed, setIsPrivacyAgreed] = useState(false);

    function validateForm() {
        return (
            isCertificateAgreed && isLicenceAgreed && isPrivacyAgreed
        );
    }

    useEffect(() => {
        async function onLoad() {
            setIsLoading(true);
            if (!isAuthenticated) {
                return;
            }
            try {
                const id = localStorage.getItem("assetTemplateID")
                const assetTemplate = await loadAssetTemplate(id);
                console.log("assetTemplate = "+assetTemplate )
                setAssetTemplate(assetTemplate);
            } catch (e) {
                onError(e);
            }
            setIsLoading(false);
        }
        onLoad();
    }, [isAuthenticated]);

    function loadAssetTemplate(id) {
        return new Promise(resolve => {
            try {
                // Sending and receiving data in JSON format using POST method
                //
                var xhr = new XMLHttpRequest();
                var url = process.env.REACT_APP_UNCOPIED_API+"api/v1.0/asset/"+id;
                console.log(url)
                xhr.open("GET", url, true);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem("jwtoken"));
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        var json = JSON.parse(xhr.responseText);
                        if (json == null) {
                            alert("Could not get asset, json is null");
                        } else {
                            console.log(json);
                            resolve(json)
                        }
                    } else {
                        alert("Could not get asset " + xhr.status);
                    }
                };
                /*
                "source_license":"CC-BY 4.0",
                "ipfs_hash":"QmZFmZfRcspTtgUk7EDZNofTMJiCUh7ffhU6kd3ycNbWDi"
                */
                xhr.send();
            } catch (e) {
                onError(e);
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        try {
            setIsLoading(true);
            // Sending and receiving data in JSON format using POST method
            //
            var xhr = new XMLHttpRequest();
            var url = process.env.REACT_APP_UNCOPIED_API+"api/v1.0/cert/order";
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem("jwtoken"));
            xhr.onload = function () {
                if (xhr.status === 200) {
                    var json = JSON.parse(xhr.responseText);
                    if (json == null) {
                        alert("Could order " + assetTemplate.ObjectUUID);
                        setIsLoading(false);
                    } else {
                        console.log(json);
                        localStorage.removeItem('assetTemplateID');
                        localStorage.setItem('OrderUUID', assetTemplate.ObjectUUID);
                        history.push("/cert/order");
                    }
                } else {
                    alert("Could order " + assetTemplate.ObjectUUID + " error " + xhr.status);
                }
            };
            /*
            "source_license":"CC-BY 4.0",
            "ipfs_hash":"QmZFmZfRcspTtgUk7EDZNofTMJiCUh7ffhU6kd3ycNbWDi"
            */
            var data = JSON.stringify({"AssetTemplateID" : assetTemplate.ID, "OrderUUID": assetTemplate.ObjectUUID });
            xhr.send(data);
        } catch (e) {
            onError(e);
            setIsLoading(false);
        }
    }

    function renderAssetTemplate() {
        return (
            <div className="form-container-outer">
                <div className="form-container-inner">

                <div>
                    <img className="embossing" src={embossing} alt="embossing" />
                    <h2 align="center">PREVIEW CERTIFICATE</h2>
                </div>
                <p>
                    Please carefully read and verify the <a href={`${process.env.REACT_APP_UNCOPIED_API}c/preview/${assetTemplate.ObjectUUID}`} target="top">Certificate document</a>. Once the certificate is issued, it is immutable (it CANNOT be modified).
                    This document refers to the UNCOPIED licence and Privacy agreement.
                </p>
                <div>
                    <iframe
                        style={{ width: "100%", height: "500px" }}
                        src={`${process.env.REACT_APP_UNCOPIED_API}c/preview/${assetTemplate.ObjectUUID}`}
                        title='title'
                    />
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="certificateAgreement">
                        <Form.Check type="checkbox" value={isCertificateAgreed} onChange={(e) => setIsCertificateAgreed(e.target.value)}   label="I ACCEPT the Certificate document"/>
                    </Form.Group>
                    <Form.Group controlId="licenceAgreement">
                        <Form.Check  type="checkbox" value={isLicenceAgreed} onChange={(e) => setIsLicenseAgreed(e.target.value)} label="I ACCEPT the License agreement" />
                    </Form.Group>
                    <Form.Group controlId="privacyAgreement">
                        <Form.Check type="checkbox" value={isPrivacyAgreed} onChange={(e) => setIsPrivacyAgreed(e.target.value)} label="I ACCEPT the Privacy agreement" />
                    </Form.Group>
                    <LoaderButton
                        block
                        type="submit"
                        size="lg"
                        variant="primary"
                        isLoading={isLoading}
                        disabled={!validateForm()}
                    >
                        Accept
                    </LoaderButton>
                </Form>
                <p>
                    Creating several editions for a same artwork may deteriorate your brand as an artist, or even conflict
                    with the promise you made in earlier edition. Please, follow our <a href="https://en.wikipedia.org/wiki/Guideline" target="top">guideline</a> and don't hesitate to
                    <a href="https://calendly.com/namsor/uncopied_art" target="top"> schedule a free chat </a> with an advisor.
                </p>
                </div>
            </div>
        );
    }

    return (
        <div className="Home">
            {isAuthenticated && !isLoading ? renderAssetTemplate() : <p>Please sign-in</p>}
        </div>
    );


}
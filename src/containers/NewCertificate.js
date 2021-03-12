import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { onError } from "../libs/errorLib";
import {useAppContext} from "../libs/contextLib";
import Form from "react-bootstrap/Form";
import LoaderButton from "../app/components/LoaderButton";
import embossing from "../embossing.svg";
import axios from "axios"
import { notify } from "./Notification";

export default function NewCertificate() {
    const history = useHistory();
    const [assetTemplate, setAssetTemplate] = useState(null);
    const { id } = useParams();
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
            loadAssetTemplate({id})
        }
        onLoad();
    }, [isAuthenticated, id]);
    function loadAssetTemplate(assetTemplateId)
    {
        const url = process.env.REACT_APP_UNCOPIED_API+"api/v1.0/asset/"+assetTemplateId.id;
        const bearer = 'Bearer ' + localStorage.getItem("jwtoken")
        const headers = {
            "Content-Type": "application/json",
            "Authorization": bearer
        }
        axios.get(url, {headers: headers})
        .then(response => {
            if(response.status === 200)
            {
                const assetTemplate = response.data;
                setAssetTemplate(assetTemplate);
                if(assetTemplate == null)
                {
                    console.error("Could not fetch asset, data is null")
                }
            }
            else{
                notify({"title": "Could not fetch asset", "type":"danger"})
            }
            setIsLoading(false);
        }).catch(error => {
            notify({"title": "Could not fetch asset", "type":"danger"})
            console.error(error);
            setIsLoading(false);
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        const url = process.env.REACT_APP_UNCOPIED_API+"api/v1.0/cert/order"
        const bearer = 'Bearer ' + localStorage.getItem("jwtoken")
            // [ELIAN] Hi! Looks like we need to encapsulate in an {options { headers: ... }}
        const headers = {
            headers : {
                "Content-Type": "application/json",
                "Authorization": bearer
            }
        };
        const data = JSON.stringify({
            "AssetTemplateID" : assetTemplate.ID,
            "OrderUUID": assetTemplate.ObjectUUID
        });
        axios.post(url, data, headers)
        .then(response => {
            if(response.status === 200)
            {
                console.log(response.data);
                history.push("/cert/order/"+assetTemplate.ObjectUUID);
            }
            setIsLoading(false);
        })
        .catch(error => {
            const title = "Could order " + assetTemplate.ObjectUUID + " error " + error.response.status
            notify({"title": title, "type":"danger"})
        })
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
            {isAuthenticated && !isLoading && assetTemplate ? renderAssetTemplate() : <p>Try with valid credentials</p>}
        </div>
    );


}
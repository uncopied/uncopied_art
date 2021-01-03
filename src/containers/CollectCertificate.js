import React, { useRef, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { onError } from "../libs/errorLib";
import "./Forms.css";
import "./CollectCertificate.css";
import {useAppContext} from "../libs/contextLib";
import embossing from "../embossing.svg";
import ListGroup from "react-bootstrap/ListGroup";
import {LinkContainer} from "react-router-bootstrap";
import Form from "react-bootstrap/Form";
import LoaderButton from "./LoaderButton";

export default function CollectCertificate() {
    const [key, setKey] = useState(null);
    const history = useHistory();
    const { uuid } = useParams();
    const [checkout, setCheckout] = useState(null);
    const {isAuthenticated} = useAppContext();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function onLoad() {
            setIsLoading(true);
            if (!isAuthenticated) {
                return;
            }
            try {
                const checkout = await loadCheckout({uuid});
                console.log("checkout = "+checkout )
                setCheckout(checkout)
            } catch (e) {
                onError(e);
            }
            setIsLoading(false);
        }
        onLoad();
    }, [isAuthenticated,uuid, key]);


    function validateForm() {
        return checkout.Order.ProductionStatus=="READY_TO_DELIVER";
    }

    function handleSubmit(event) {
        console.log("handleSubmit1")
        event.preventDefault();
        console.log("handleSubmit2")
        if(checkout.Order.ProductionStatus!="READY_TO_DELIVER") {
            console.log("handleSubmit3")
            setKey( ""+Math.random() )
        }
    }

    function loadCheckout(orderId) {
        return new Promise(resolve => {
            try {
                // Sending and receiving data in JSON format using POST method
                //
                var xhr = new XMLHttpRequest();
                var url = process.env.REACT_APP_UNCOPIED_API+"api/v1.0/order/checkout/"+orderId.uuid;
                console.log(url)
                xhr.open("GET", url, true);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem("jwtoken"));
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        var json = JSON.parse(xhr.responseText);
                        if (json == null) {
                            alert("Could not get order, json is null");
                        } else {
                            console.log(json);
                            resolve(json)
                        }
                    } else {
                        alert("Could not get order " + xhr.status);
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

    function renderOrder() {
        return (
            <div className="form-container-outer">
                <div className="form-container-inner">
                    <div>
                        <img className="embossing" src={embossing} alt="embossing" />
                        <h2 align="center">PREVIEW CERTIFICATE</h2>
                    </div>
                    <h3>Thank you !</h3>
                    <p>
                        Your order production status is {checkout.Order.ProductionStatus}.
                        { checkout.Order.ProductionStatus=='READY_TO_DELIVER' ? <p> Download <a href={`${process.env.REACT_APP_UNCOPIED_WWW}doc/${checkout.Order.OrderUUID}/${checkout.Order.ZipBundle}`}>{checkout.Order.ZipBundle}</a> </p> : <p> Reload to refresh status </p> }
                    </p>
                    <p>
                        Your order delivery status is {checkout.Order.DeliveryStatus}
                    </p>
                    <p>
                        Your order payment status is {checkout.Order.PaymentStatus}
                    </p>
                    <Form onSubmit={handleSubmit}>
                        <LoaderButton
                            block
                            size="lg"
                            type="submit"
                            isLoading={isLoading}
                            disabled={validateForm()}
                        >
                            {!validateForm() ? "Click to Refresh" : "Thank you!"}
                        </LoaderButton>
                    </Form>
                </div>
            </div>
        );
    }

    return (
        <div className="Home">
            {isAuthenticated && !isLoading ? renderOrder() : <p>Please sign-in</p>}
        </div>
    );


}
import React, { useRef, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { onError } from "../libs/errorLib";
import "./ArtworkSource.css";
import {useAppContext} from "../libs/contextLib";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import LoaderButton from "./LoaderButton";
import {useFormFields} from "../libs/hooksLib";
import embossing from "../embossing.svg";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function CheckoutCertificate() {

    const history = useHistory();

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
                const id = localStorage.getItem("OrderUUID")
                const checkout = await loadCheckout(id);
                console.log("checkout = "+checkout )
                setCheckout(checkout);
            } catch (e) {
                onError(e);
            }
            setIsLoading(false);
        }
        onLoad();
    }, [isAuthenticated]);


    function loadCheckout(id) {
        return new Promise(resolve => {
            try {
                // Sending and receiving data in JSON format using POST method
                //
                var xhr = new XMLHttpRequest();
                var url = process.env.REACT_APP_UNCOPIED_API+"api/v1.0/order/checkout/"+id;
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
            <div>
                <div>
                    <img className="embossing" src={embossing} alt="embossing" />
                    <h2 align="center">CHECKOUT CERTIFICATE</h2>
                </div>
                <h3>Delivery options</h3>
                <p>
                    Your order delivery status is {checkout.Order.DeliveryStatus}
                </p>
                <p>
                    Your order payment status is {checkout.Order.PaymentStatus}
                </p>
            </div>
        );
    }

    return (
        <div className="Home">
            {isAuthenticated && !isLoading ? renderOrder() : <p>Please sign-in</p>}
        </div>
    );


}
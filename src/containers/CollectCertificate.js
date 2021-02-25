import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { onError } from "../libs/errorLib";
import {useAppContext} from "../libs/contextLib";
import embossing from "../embossing.svg";
import Form from "react-bootstrap/Form";
import LoaderButton from "../app/components/LoaderButton";
import axios from "axios"
import {notify} from "./Notification"

export default function CollectCertificate() {
    const [key, setKey] = useState(null);
    // const history = useHistory();
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
            loadCheckout({uuid})
            setIsLoading(false);
        }
        onLoad();
    }, [isAuthenticated,uuid, key]);


    function validateForm() {
        return checkout.Order.ProductionStatus==="READY_TO_DELIVER";
    }

    function handleSubmit(event) {
        console.log("handleSubmit1")
        event.preventDefault();
        console.log("handleSubmit2")
        if(checkout.Order.ProductionStatus!=="READY_TO_DELIVER") {
            console.log("handleSubmit3")
            setKey( ""+Math.random() )
        }
    }

    function loadCheckout(orderId) {
        const url = process.env.REACT_APP_UNCOPIED_API+"api/v1.0/order/checkout/"+orderId.uuid
        const Bearer = 'Bearer ' + localStorage.getItem("jwtoken")
        const headers = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": Bearer
            }
        }
        axios.get(url, headers)
        .then(response => {
            const checkout = response.data
            setCheckout(checkout);
            if(checkout == null)
            {
                notify({"title":"Could not get order", "type": "danger"});
            }
        }).catch(error => {
            onError(error);
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
                        { checkout.Order.ProductionStatus==='READY_TO_DELIVER' ? <p> Download <a href={`${process.env.REACT_APP_UNCOPIED_WWW}doc/${checkout.Order.OrderUUID}/${checkout.Order.ZipBundle}`}>{checkout.Order.ZipBundle}</a> </p> : <p>  Reload to refresh status {checkout.Order.ProductionMessage}  </p> }
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
            {isAuthenticated && !isLoading && checkout ? renderOrder() : <p>Please sign-in</p>}
        </div>
    );


}
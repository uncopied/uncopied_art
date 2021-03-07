import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {useAppContext} from "../libs/contextLib";
import embossing from "../embossing.svg";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { notify } from "./Notification";

export default function CheckoutCertificate() {

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
            loadCheckout({uuid});
            setIsLoading(false);
        }
        onLoad();
    }, [isAuthenticated,uuid]);


    function loadCheckout(orderId) {
        const url = process.env.REACT_APP_UNCOPIED_API+"api/v1.0/order/checkout/"+orderId.uuid;
        const Bearer = 'Bearer ' + localStorage.getItem("jwtoken")
        const headers = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": Bearer
            }
        }
        axios.get(url, headers)
        .then(response => {
            if(response.status === 200 && response.data)
            {
                const checkout = response.data;
                setCheckout(checkout)
            }
            else if(response.data == null)
            {
                console.info("Data is empty");
            }
        }).catch(error => {
            onError(error)
        })
    }

    function updateOrder(IsDIY, PaymentSuccess, details) {
        const url = process.env.REACT_APP_UNCOPIED_API+"api/v1.0/order/process";
        const Bearer = 'Bearer ' + localStorage.getItem("jwtoken")
        const headers = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": Bearer
            }
        }
        const stringified = JSON.stringify(details)
        const data = 
        JSON.stringify(
            {"OrderUUID": checkout.Order.OrderUUID,
            "IsDIY": IsDIY,
            "IsPaid": PaymentSuccess,
            "PaypalDetails": stringified
        })
        axios.post(url, data, headers)
        .then(response => {
            const result = response.data;
            if(!result)
            {
                notify({"title":"Could not update the order", "type":"danger"})
            }
            else
            {
                notify({"title":"Successfully updated order", "type":"success"})
            }
            setIsLoading(false);
            history.push("/cert/collect/"+checkout.Order.OrderUUID);
        }).catch(error => {
            setIsLoading(false);
            onError(error)
        })
    }


    function createDIYOrder(data, actions) {
        console.log('Creating DIY order!');
        return actions.order.create({
            application_context : {
                shipping_preference: "NO_SHIPPING",
            },
            purchase_units: [
                {
                    "reference_id" : checkout.Order.OrderUUID,
                    //"description" : checkout.Order.OrderUUID,
                    "amount":{"currency_code":checkout.Pricing.Ccy,"value":checkout.Pricing.PriceDiy}}
                ]
        });
    }

    function createOrder(data, actions) {
        console.log('Creating DIY order!');
        return actions.order.create({
             application_context : {
                 //GET_FROM_FILE. Use the buyer-selected shipping address.
                 //SET_PROVIDED_ADDRESS. Use the merchant-provided address. Buyer cannot change the address on the PayPal pages. If the merchant does not pass an address, the buyer can choose the address on PayPal pages.
                shipping_preference: "GET_FROM_FILE",
            },
            purchase_units: [
                {
                    "reference_id" : checkout.Order.OrderUUID,
                    //"description" : checkout.Order.OrderUUID,
                    "amount":{"currency_code":checkout.Pricing.Ccy,"value":checkout.Pricing.Price}}
            ]
        });
    }

    function onDIYApprove (data, actions) {
        return actions.order.capture().then(function(details) {
            console.log('Transaction completed by ' + details.payer.name.given_name + '!');
            console.log("checkout = "+JSON.stringify(details))
            // CREATED. The order was created with the specified context.
            // SAVED. The order was saved and persisted. The order status continues to be in progress until a capture is made with final_capture = true for all purchase units within the order.
            // APPROVED. The customer approved the payment through the PayPal wallet or another form of guest or unbranded payment. For example, a card, bank account, or so on.
            // VOIDED. All purchase units in the order are voided.
            // COMPLETED. The payment was authorized or the authorized payment was captured for the order.
            // PAYER_ACTION_REQUIRED. The order requires an action from the payer (e.g. 3DS authentication). Redirect the payer to the "rel":"payer-action" HATEOAS link returned as part of the response prior to authorizing or capturing the order.
            if( details.status === 'COMPLETED' ) {
                updateOrder(true,true,details)
            } else {
                updateOrder(true,false,details)
            }
        });
    }

    function onApprove (data, actions) {
        return actions.order.capture().then(function(details) {
            console.log('Transaction completed by ' + details.payer.name.given_name + '!');
            console.log("checkout = "+JSON.stringify(details))
            // CREATED. The order was created with the specified context.
            // SAVED. The order was saved and persisted. The order status continues to be in progress until a capture is made with final_capture = true for all purchase units within the order.
            // APPROVED. The customer approved the payment through the PayPal wallet or another form of guest or unbranded payment. For example, a card, bank account, or so on.
            // VOIDED. All purchase units in the order are voided.
            // COMPLETED. The payment was authorized or the authorized payment was captured for the order.
            // PAYER_ACTION_REQUIRED. The order requires an action from the payer (e.g. 3DS authentication). Redirect the payer to the "rel":"payer-action" HATEOAS link returned as part of the response prior to authorizing or capturing the order.
            if( details.status === 'COMPLETED' ) {
                updateOrder(false,true,details)
            } else {
                updateOrder(false,false,details)
            }
        });
    }

    function onDIYError(err) {
        console.log('Error withj DIY order ! err = '+err);
        alert('Error withj DIY order ! err = '+err);
        updateOrder(true,false,err)
    }

    function onError(err) {
        console.log('Error with order ! err = '+err);
        alert('Error with order ! err = '+err);
        updateOrder(false,false,err)
    }

    function renderOrder() {
        return (
            <div className="form-container-outer">
                <div className="form-container-inner">
                <div>
                    <img className="embossing" src={embossing} alt="embossing" />
                    <h2 align="center">CHECKOUT CERTIFICATE</h2>
                    <p>
                        The 'tally stick' below is a critical part of our certificates. <a href="https://en.wikipedia.org/wiki/Tally_stick" target="top">Tally sticks</a> have been used for thousand of years
                        to secure commercial contracts. Our registered and unique design combines physical and digital security features to protect your
                        certificates.
                    </p>
                    <div className="tallypreview" dangerouslySetInnerHTML={{ __html: checkout.CertPreview.TaillyPreviewSVG }} />
                </div>
                <h3>Delivery options</h3>
                <p>
                    Your are about to finalize your order. Certificates are valid for a duration of 10 years. You can order to e-mail and print the certificates yourself, or you can order to mail and receive a printed document by post.
                </p>
                <h4>Order by mail</h4>
                <p>
                    We activate the digital certificates immediately, we print the documents and you will receive the physical certificates by post within a few days.
                </p>
                <p>
                    The cost is 25 {checkout.Pricing.CcySymbol} + 5 {checkout.Pricing.CcySymbol} per certificate.
                </p>
                <p>
                    Pay now {checkout.Pricing.CcySymbol} {checkout.Pricing.Price} {checkout.Pricing.Ccy} {process.env.REACT_APP_UNCOPIED_PAYPAL_TESTCARD}
                </p>
                <PayPalScriptProvider options={{
                    "client-id": process.env.REACT_APP_UNCOPIED_PAYPAL ,
                    "currency" : checkout.Pricing.Ccy
                }}>
                    <PayPalButtons
                        {...{
                            style: { color: 'blue' },
                            createOrder : createOrder,
                            onApprove: onApprove,
                            onError : onError,
                        }}
                    />
                </PayPalScriptProvider>
                <p>
                    SATISFIED OR REIMBURSED : You have 14 days to return the certificates by post if they do not meet your expectations.
                </p>
                <h4>Do it yourself (DIY) instructions</h4>
                <p>
                    If you order to e-mail, you will receive PDF documents at your email address tutu@uncopied.art. The first PDF document contains the certificates.
                    The other PDF document contains the tally sticks, providing identification and security to the certificates.
                    We will activate the digital certificates as soon as we receive from you, the left and right clips addressed by mail to our P.O. box.

                </p>
                <p>
                    While we are in ALPHA/BETA, the cost is just 1 {checkout.Pricing.CcySymbol} per certificate. Then the cost will be 5 {checkout.Pricing.CcySymbol} + 3 {checkout.Pricing.CcySymbol} per certificate.
                </p>
                <p>
                    Pay now {checkout.Pricing.CcySymbol} {checkout.Pricing.PriceDiy} {checkout.Pricing.Ccy} {process.env.REACT_APP_UNCOPIED_PAYPAL_TESTCARD}
                </p>
                <PayPalScriptProvider options={{
                    "client-id": process.env.REACT_APP_UNCOPIED_PAYPAL ,
                    "currency" : checkout.Pricing.Ccy
                }}>
                    <PayPalButtons
                        {...{
                            style: { color: 'blue' },
                            createOrder : createDIYOrder,
                            onApprove: onDIYApprove,
                            onError : onDIYError,
                        }}
                    />
                </PayPalScriptProvider>
                <p>
                    SATISFIED OR REIMBURSED !
                </p>
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
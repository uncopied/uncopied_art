import React, {useRef, useState} from "react";
import Form from "react-bootstrap/Form";
import {useHistory} from "react-router-dom";
import LoaderButton from "../LoaderButton";
import {onError} from "../../libs/errorLib";
import "../Forms/style.css";
import "../NewArtworkSource/style.css";
import embossing from "../../embossing.svg";

export default function NewArtworkSource() {
    const file = useRef(null);
    const history = useHistory();
    const [license, setLicense] = useState("UC-BY-NC-ND");
    const [hash, setHash] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const types = ['image/x-png', 'image/png', 'image/jpeg']

    function validateForm() {
        return (hash.length > 0);
    }

    function handleFileChange(event) {
        file.current = event.target.files[0];
    }

    async function handleUpload(event) {
        event.preventDefault();
        if (file.current && file.current.size > process.env.REACT_APP_MAX_ATTACHMENT_SIZE) {
            alert(
                `Please pick a file smaller than ${process.env.REACT_APP_MAX_ATTACHMENT_SIZE /
                1000000} MB.`
            );
            return;
        }
        if (file.current) {
            try {
                setIsUploading(true);
                // Sending and receiving data in JSON format using POST method
                //
                var xhr = new XMLHttpRequest();
                var url = process.env.REACT_APP_UNCOPIED_UPLOAD;
                xhr.open("POST", url, true);
                xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem("jwtoken"));
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        var json = JSON.parse(xhr.responseText);
                        if (json == null) {
                            alert("Couldnt upload file");
                        } else if (json.Message) {
                            alert(json.Message);
                        } else {
                            // all good
                            setHash(json.IPFSHash)
                            console.log(json);
                        }
                    } else {
                        alert("Could upload " + hash + " error " + xhr.status);
                    }
                    setIsUploading(false);
                };
                /*
                "source_license":"CC-BY 4.0",
                "ipfs_hash":"QmZFmZfRcspTtgUk7EDZNofTMJiCUh7ffhU6kd3ycNbWDi"
                */
                var formData = new FormData();
                formData.append("file", file.current, "file");
                xhr.send(formData);
            } catch (e) {
                onError(e);
                setIsUploading(false);
            }
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (hash.length > 0) {
            try {
                setIsLoading(true);
                // Sending and receiving data in JSON format using POST method
                //
                var xhr = new XMLHttpRequest();
                var url = process.env.REACT_APP_UNCOPIED_API+"api/v1.0/src/";
                xhr.open("POST", url, true);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem("jwtoken"));
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        var json = JSON.parse(xhr.responseText);
                        if (json == null) {
                            alert("Could upload " + hash);
                            setIsLoading(false);
                        } else if (json.StampError.length > 0) {
                            alert(json.StampError);
                            setIsLoading(false);
                        } else {
                            console.log(json);
                            // create a new edition for json.ID
                            history.push("/src/"+json.ID);
                        }
                    } else {
                        alert("Could upload " + hash + " error " + xhr.status);
                    }
                };
                /*
                "source_license":"CC-BY 4.0",
                "ipfs_hash":"QmZFmZfRcspTtgUk7EDZNofTMJiCUh7ffhU6kd3ycNbWDi"
                */
                var data = JSON.stringify({"source_license": license, "ipfs_hash": hash});
                xhr.send(data);
            } catch (e) {
                onError(e);
                setIsLoading(false);
            }
        }
    }

    return (
        <div className="form-container-outer">
            <div className="form-container-inner">

            <div>
                <img className="embossing" src={embossing} alt="embossing" />
                <h2 align="center">UPLOAD NEW ARTWORK</h2>
            </div>
            <p>
                Choose a license and upload your high-definition image source. We take responsibility to ensure its long
                term preservation. Your image source will be stored on the IPFS (the Interplanetary File System) with multiple
                redundancies. We need a high level of digital preservation for our certificates to still 'work' in 10 years and more.
            </p>
            <Form onSubmit={handleUpload}>
                <Form.Group controlId="file">
                    <Form.Label>Upload high-definition image file (PNG or JPG, max 15mb)</Form.Label>
                    <Form.Control onChange={handleFileChange} type="file" accept="image/x-png,image/png,image/jpeg"
                                  disabled={false}/>
                </Form.Group>

                <LoaderButton
                    block
                    type="submit"
                    size="lg"
                    variant="primary"
                    isLoading={isUploading}
                >
                    Upload
                </LoaderButton>
            </Form>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="content">
                    <Form.Label>Or, upload via <a href="https://pinata.cloud/" target="top">Pinata</a>,
                        and copy the IPFS hash</Form.Label>
                    <Form.Control
                        value={hash}
                        type="text"
                        placeholder="IPFS hash"
                        onChange={(e) => setHash(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="controlSelect">
                    <Form.Label>Select license for the image</Form.Label>
                    <Form.Control as="select" onChange={(e) => setLicense(e.target.value)}>
                        <option value="UC-BY-NC-ND">Uncopied-NonCommercial-NoDerivs</option>
                        <option value="CC-BY-NC-ND">Attribution-NonCommercial-NoDerivs</option>
                        <option value="CC-BY-NC-SA">Attribution-NonCommercial-ShareAlike</option>
                        <option value="CC-BY-NC">Attribution-NonCommercial</option>
                        <option value="CC-BY-ND">Attribution-NoDerivs</option>
                        <option value="CC-BY-SA">Attribution-ShareAlike</option>
                        <option value="CC-BY">Attribution</option>
                        <option value="CC0">Zero Public Domain</option>
                        <option value="CC Public Domain Mark 1.0">Public domain</option>
                        Attribution
                    </Form.Control>
                </Form.Group>
                <LoaderButton
                    block
                    type="submit"
                    size="lg"
                    variant="primary"
                    isLoading={isLoading}
                    disabled={!validateForm()}
                >
                    Create
                </LoaderButton>
            </Form>
            </div>
        </div>
    );
}
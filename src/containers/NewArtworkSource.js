import React, {useRef, useState} from "react";
import Form from "react-bootstrap/Form";
import {useHistory} from "react-router-dom";
import LoaderButton from "../app/components/LoaderButton";
import {onError} from "../libs/errorLib";
import embossing from "../embossing.svg";
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { notify } from "./Notification" 

export default function NewArtworkSource() {
    const file = useRef(null);
    const history = useHistory();
    const [license, setLicense] = useState("UC-BY-NC-ND");
    const [hash, setHash] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [UploadedImg, setUploadedImg] = useState('');
    // const types = ['image/x-png', 'image/png', 'image/jpeg']

    function validateForm() {
        return (hash.length > 0);
    }

    function handleFileChange(event) {
        file.current = event.target.files[0];
        setUploadedImg(URL.createObjectURL(file.current));
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
            setIsUploading(true);
            // Sending and receiving data in JSON format using POST method
            const url = process.env.REACT_APP_UNCOPIED_UPLOAD;
            const bearer = 'Bearer ' + localStorage.getItem("jwtoken")
            const headers = {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": bearer
                }
            }   
            const formData = new FormData();
            formData.append("file", file.current, "file");
            
            axios.post(url, formData, headers)
            .then(response => {
                if(response.status === 200)
                {
                    const json = response.data
                    if(json == null)
                        notify({title: "Couldn't upload data", type:"danger"})
                    else
                    {
                        notify({title: "Upload successfull", type:"success" })
                        setHash(json.IPFSHash)
                    }
                }
                setIsUploading(false);
            }).catch(e => {
                onError(e);
                setIsUploading(false);
            })
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (hash.length > 0) {
                setIsLoading(true);
                // Sending and receiving data in JSON format using POST method
                const url = process.env.REACT_APP_UNCOPIED_API+"api/v1.0/src/"
                const Bearer = 'Bearer ' + localStorage.getItem("jwtoken")
                const headers = {
                    "Content-Type": "application/json",
                    "Authorization": Bearer
                }
                const data = JSON.stringify({
                    "source_license": license,
                    "ipfs_hash": hash
                });
                axios.post(url, data, headers)
                .then(response => {
                    if(response.status === 200)
                    {
                        const data = response.data;
                        if(data == null)
                        {
                            notify({title: "Could not upload!", type: "danger"})
                        }
                        else if(data.StampError.length > 0)
                        {
                            console.log(data.StampError);
                        }
                        else
                        {
                            notify({title:"Successfully uploaded Artwork"})
                            history.push("/src/"+data.ID);
                        }
                    }
                    setIsLoading(false);
                })
                .catch(error => {
                    onError(error);
                    setIsLoading(false);
                })
        }
    }

    return (
        <div className="form-container-outer">
            <div className="sidebar-flex">
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
                 <LazyLoadImage className="thumbnail" src={UploadedImg}/>

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
        </div>
    );
}
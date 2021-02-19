import React, {useEffect, useState} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import {useAppContext} from "../libs/contextLib";
import {onError} from "../libs/errorLib";
import {LinkContainer} from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import embossing from "../embossing.svg";

export default function Home() {
    const [artworkSources, setArtworkSources] = useState([]);
    const {isAuthenticated} = useAppContext();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function onLoad() {
            setIsLoading(true);
            if (!isAuthenticated) {
                return;
            }
            try {
                const artworkSources = await loadArtworkSources();
                const artworkSourcesStamped = artworkSources.filter( artworkSource =>  artworkSource.StampError.length === 0 );
                setArtworkSources(artworkSourcesStamped);
            } catch (e) {
                onError(e);
            }
            setIsLoading(false);
        }
        onLoad();
    }, [isAuthenticated]);

    function loadArtworkSources() {
        return new Promise(resolve => {
            try {
                // Sending and receiving data in JSON format using POST method
                //
                var xhr = new XMLHttpRequest();
                var url = process.env.REACT_APP_UNCOPIED_API+"api/v1.0/src/";
                xhr.open("GET", url, true);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem("jwtoken"));
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        var json = JSON.parse(xhr.responseText);
                        if (json == null) {
                            alert("Could not get src, json is null");
                        } else {
                            console.log(json);
                            resolve(json)
                        }
                    } else {
                        alert("Could not get src " + xhr.status);
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


    function renderArtworkSourcesList(artworkSources) {
        return (
            <>
                {artworkSources.map(item => (
                    <LinkContainer key={item.ID} to={`/src/${item.ID}`}>
                        <ListGroup.Item action>
                            <span className="font-weight-bold">
                              <img className="thumbnail" src={`${process.env.REACT_APP_UNCOPIED_IPFS}${item.IPFSHashThumbnail}`} alt={`${new Date(item.CreatedAt).toLocaleString()} ${item.SourceLicense}`}/>
                              <figcaption className="thumbnailCaption">{new Date(item.CreatedAt).toLocaleString()} {item.SourceLicense}</figcaption>
                            </span>
                        </ListGroup.Item>
                    </LinkContainer>
                ))}
                <LinkContainer to="/src/new/">
                    <ListGroup.Item action className="py-3 text-nowrap text-truncate">
                        <span className="ml-2 font-weight-bold">New source image</span>
                    </ListGroup.Item>
                </LinkContainer>
            </>
        );
    }

    function renderArtworkSources() {
        return (
            <div className="artworkSources">
                <div>
                    <img className="embossing" src={embossing} alt="embossing" />
                    <h2 align="center">YOUR ARTWORKS</h2>
                </div>
                <ListGroup>{!isLoading && renderArtworkSourcesList(artworkSources)}</ListGroup>
            </div>
        );
    }

    function renderLander() {
        return (
            <div className="Home">
                <LinkContainer to="/login">
                    <Nav.Link>Log in</Nav.Link>
                </LinkContainer>
            </div>
        );
    }

    return (
        <div className="Home">
            {isAuthenticated ? renderArtworkSources() : renderLander()}
        </div>
    );
}
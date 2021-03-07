import React, {useEffect, useState} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import {useAppContext} from "../libs/contextLib";
import {onError} from "../libs/errorLib";
import {LinkContainer} from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import embossing from "../embossing.svg";
import axios from "axios"

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
            loadArtworkSources();
            setIsLoading(false);
        }
        onLoad();
    }, [isAuthenticated]);

    function loadArtworkSources() {
        const url = process.env.REACT_APP_UNCOPIED_API+"api/v1.0/src/"
        const Bearer = 'Bearer ' + localStorage.getItem("jwtoken")
        const headers = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": Bearer
            }
        }
        axios.get(url, headers)
        .then(response => {
            const artworkSources = response.data
            const artworkSourcesStamped = artworkSources.filter( artworkSource =>  artworkSource.StampError.length === 0 );
            setArtworkSources(artworkSourcesStamped)
        })
        .catch(error => {
            console.log(error);
            onError(error);
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
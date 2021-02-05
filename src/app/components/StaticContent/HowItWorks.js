import React from 'react';

export default function HowItWorks() {
  return (
            <div className="lander">
            <h3>HOW IT WORKS</h3>
            <i className="fal fa-user-plus mb-5" style={{ fontSize: 50 }}></i>
            <h4><b>Create Account</b></h4>
            <p>
                Create your personal account. Optionally link your account with
                a blockchain address. We aim towards self-sovereign identity.
            </p>
            <i className="fal fa-image mb-5" style={{ fontSize: 50 }}></i>
            <h4><b>Upload Source</b></h4>
            <p>
                Upload your high-definition source image for long-term preservation and
                proof-of-authorship.
            </p>
            <i className="fal fa-gem mb-5" style={{ fontSize: 50 }}></i>
            <h4><b>Create Edition</b></h4>
            <p>
                Create your art edition: artwork name and metadata, licensing and digital rights, NFT spec.
            </p>
            <i className="fal fa-file-signature mb-5" style={{ fontSize: 50 }}></i>
            <h4><b>Sign Certificate</b></h4>
            <p>
                Receive and sign the physical certificate. Optionally transfer
                the NFT asset to your crypto wallet.
            </p>
        </div>
  );

}
import React from 'react';
import "./style.css";
import intro from './assets/Intro.svg';
import certificate from './assets/certificate.svg';
import about from './assets/about.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faHandsHelping, faCertificate, faUserPlus, faImage, faFileCode, faGem, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";

export default function HomePage() {

  const { t } = useTranslation();

  return (
    <div>
    <section>
       <div className="container">
          <div className="row">
             <div className="col-lg-6 col-md-12 px-5">
                <div className="business-item-info">
                   <h3>{t('section1.heading')}</h3>
                   <p>{t('section1.heading-para')} <b>{t('section1.heading-para1')}</b> </p>
                   <a className="btn btn-common" href="https://uncopied.art/">{t('section1.heading-button')}</a>
                </div>
             </div>
             <div className="col-lg-6 col-md-12 pt-70">
                <div className="business-item-img">
                   <img src={intro} className="img-fluid" alt=""/>
                </div>
             </div>
          </div>
       </div>
    </section>
    <section className="section1">
    <div className="container box">
       <div className="cards">
          <div className="card-item">
             <div className="icon">
                <i>
                   <FontAwesomeIcon icon={faPenSquare} />
                </i>
             </div>
             <div className="card-info">
                <h2 className="card-title">{t('services.card1')}</h2>
                <p className="card-intro">{t('services.card1-para')}</p>
             </div>
          </div>
       </div>
       <div className="cards">
          <div className="card-item">
             <div className="icon">
                <i>
                   <FontAwesomeIcon icon={faHandsHelping} />
                </i>
             </div>
             <div className="card-info">
                <h2 className="card-title">{t('services.card2')}</h2>
                <p className="card-intro">{t('services.card2-para')}</p>
             </div>
          </div>
       </div>
       <div className="cards">
          <div className="card-item">
             <div className="icon">
                <i>
                   <FontAwesomeIcon icon={faCertificate} />
                </i>
             </div>
             <div className="card-info">
                <h2 className="card-title">{t('services.card3')}</h2>
                <p className="card-intro">{t('services.card3-para')}</p>
             </div>
          </div>
       </div>
    </div>
    </section>
    <section className="section2">
    <div className="container">
       <h1>{t('works.heading')}</h1>
       <div className="card-container">
          <div className="card">
             <div className="content text-center">
                <i className="icon mb-5">
                   <FontAwesomeIcon icon={faUserPlus} />
                </i>
                <h6><b>{t('works.sec1')}</b></h6>
                <p>{t('works.sec1-para')}</p>
             </div>
          </div>
          <div className="card">
             <div className="content text-center">
                <i className="icon mb-5">
                   <FontAwesomeIcon icon={faImage} />
                </i>
                <h6><b>{t('works.sec2')}</b></h6>
                <p>{t('works.sec2-para')}</p>
             </div>
          </div>
          <div className="card">
             <div className="content text-center">
                <i className="icon mb-5">
                   <FontAwesomeIcon icon={faFileCode } />
                </i>
                <h6><b>{t('works.sec5')}</b></h6>
                <p>{t('works.sec5-para')}</p>
             </div>
          </div>
          <div className="card">
             <div className="content text-center">
                <i className="icon mb-5">
                   <FontAwesomeIcon icon={faGem} />
                </i>
                <h6><b>{t('works.sec3')}</b></h6>
                <p>{t('works.sec3-para')}</p>
             </div>
          </div>
          <div className="card">
             <div className="content text-center">
                <i className="icon mb-5">
                   <FontAwesomeIcon icon={faFileSignature} />
                </i>
                <h6><b>{t('works.sec4')}</b></h6>
                <p>{t('works.sec4-para')}</p>
             </div>
          </div>
       </div>
    </div>
    </section>
    <section className="section3">
       <div className="container">
          <div className="row">
             <div className="col-lg-6 col-md-12 px-5">
                <div className="business-item-info">
                   <h3>{t('certificate.heading')}</h3>
                   <p>{t('certificate.heading-para')}</p>
                   <a className="btn btn-common" href="https://uncopied.art/blog/chapter-1/">{t('certificate.Button')}</a>
                </div>
             </div>
             <div className="col-lg-6 col-md-12 pt-70">
                <div className="business-item-img">
                   <img src={certificate} className="img-fluid" alt=""/>
                </div>
             </div>
          </div>
       </div>
    </section>
    <section className="section4">
       <div className="container">
          <div className="row">
             <div className="col-lg-6 col-md-12 pt-70">
                <div className="business-item-img">
                   <img src={about} className="img-fluid" alt=""/>
                </div>
             </div>
             <div className="col-lg-6 col-md-12 px-5">
                <div className="business-item-info">
                   <h3>{t('about.heading')}</h3>
                   <p>{t('about.heading-para')}</p>
                </div>
             </div>
          </div>
       </div>
    </section>
 </div>
  );
}
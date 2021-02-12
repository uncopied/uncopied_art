import React from 'react';
import "./style.css";
import intro from './assets/Intro.svg';
import certificate from './assets/certificate.svg';
import about from './assets/about.svg';
import contact from './assets/contact.svg';
import { useTranslation } from "react-i18next";

export default function HomePage()
{
  const { t } = useTranslation();

  return (
    <div>
      <section className="spacing">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 px-5">
                      <div className="business-item-info">
                        <h3>{t('section1.heading')}</h3>
                        <p>{t('section1.heading-para')} <b>{t('section1.heading-para1')}</b> </p>    
                        <a className="btn btn-common" href="/">{t('section1.Button')}</a>
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

<div class="container-fluid spacing box">
  <div class="cards">
    <div class="card-item">
    <div class="icon">
      <i class="fal fa-pen-square"></i>
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
      <i className="fal fa-hands-helping"></i>
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
      <i className="fal fa-hand-holding-box"></i>    
      </div>
      <div className="card-info">
        <h2 className="card-title">{t('services.card3')}</h2>
        <p className="card-intro">{t('services.card3-para')}</p>
      </div>
    </div>
  </div>
</div>

        <div className="section2 container-fluid spacing">
            <h1><b>{t('works.heading')}</b></h1>
        <div className="card-container">
          <div className="card">
          <div className="content text-center">
            <i className="icon fal fa-user-plus mb-5"></i>
            <h6><b>{t('works.sec1')}</b></h6>
            <p>{t('works.sec1-para')}</p>
          </div>
          </div>
          <div className="card">
          <div className="content text-center">
          <i className="icon fal fa-image mb-5"></i>
            <h6><b>{t('works.sec2')}</b></h6>
            <p>{t('works.sec2-para')}</p>
            </div>
          </div>
          <div className="card">
          <div className="content text-center">
          <i className="icon fal fa-file-code mb-5"></i>
            <h6><b>{t('works.sec5')}</b></h6>
            <p>{t('works.sec5-para')}</p>
          </div>
          </div>
          <div className="card">
          <div className="content text-center">
          <i className="icon fal fa-gem mb-5"></i>
            <h6><b>{t('works.sec3')}</b></h6>
            <p>{t('works.sec3-para')}</p>
          </div>
          </div>
          <div className="card">
          <div className="content text-center">
          <i className="icon fal fa-file-signature mb-5"></i>
            <h6><b>{t('works.sec4')}</b></h6>
            <p>{t('works.sec4-para')}</p>
          </div>
          </div>
          </div>
        </div>

    <section className="section3 spacing">
    <div className="container-fluid">

      <div className="row">
        <div className="col-lg-6 col-md-12 px-5">
          <div className="business-item-info">
            <h3>{t('certificate.heading')}</h3>
            <p>{t('certificate.heading-para')}</p>
            <a className="btn btn-common" href="https://uncopied.art/post/chapter-1/">{t('certificate.Button')}</a>
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
    <section className="section4 spacing">
    <div className="container-fluid">
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
  <section className="section5 contact spacing">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="business-item-info">
            <h3>{t('contact.heading')}</h3>
          </div>
          <form id="contactForm">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <input type="text" className="form-control" id="name" name="name" placeholder={t('contact.form1')} required data-error="Please enter your name" />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input type="text" className="form-control" id="email" name="email" placeholder={t('contact.form2')} required data-error="Please enter your Email" />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea className="form-control" type="message" id="message"  name="message" placeholder={t('contact.form3')} rows="6" data-error="Please enter your subject" required></textarea>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="submit-button">
                  <button className="btn btn-common" id="submit" type="submit">{t('contact.Button')}</button>
                  <div id="msgSubmit" className="h3 hidden"></div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6 col-md-12 pt-70">
          <div className="business-item-img">
            <img src={contact} className="img-fluid" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  );
}
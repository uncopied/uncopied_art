import React from 'react';
import "./style.css"
import { useTranslation } from "react-i18next";
export function Footer()
{
  const { t } = useTranslation();
  return (
    <footer className="footer-section">
    <div className="container-fluid nav-spacing" >
      <div className="footer-content pt-5 pb-5">
        <div className="row">
          <div className="col-xl-4 col-lg-4 mb-50">
            <div className="footer-widget">
              <div className="footer-logo">
                <a href="/"><img src="https://user-images.githubusercontent.com/54095539/106423469-808c3680-6486-11eb-834e-e1c96eaab845.png" className="img-fluid" alt="logo"/></a>
              </div>
              <div className="footer-text">
              <p>{t('footer.heading1')}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-4 col-md-6 mb-30">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>{t('footer.heading2')}</h3>
              </div>
              <ul>
                <li><a href="/">{t('footer.heading2-link1')}</a></li>
                <li><a href="/">{t('footer.heading2-link2')}</a></li>
                <li><a href="/">{t('footer.heading2-link3')}</a></li>
                <li><a href="https://uncopied.art">{t('footer.heading2-link4')}</a></li>
                <li><a href="/">{t('footer.heading2-link5')}</a></li>
                <li><a href="/">{t('footer.heading2-link6')}</a></li>
                <li><a href="/">{t('footer.heading2-link7')}</a></li>
                <li><a href="/">{t('footer.heading2-link8')}</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-6 mb-50">
          <div className="footer-widget">
          <div className="footer-social-icon">
            <span>{t('footer.heading3')}</span>
            <a href="/"><i className="fal fa-facebook facebook-bg"></i></a>
            <a href="/"><i className="fal fa-twitter twitter-bg"></i></a>
            <a href="/"><i className="fal fa-google-plus-g google-bg"></i></a>
          </div>
          </div>
         </div>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 text-center">
            <div className="copyright-text">
              <p>{t('footer.copyright')} <a href="/">Uncopied</a> <br/>
                <small>
                {t('common.debug-header')} -
                  <a href="https://calendly.com/namsor/uncopied_art" target="top"> {t('common.debug-contact')} </a>
                -
                debug env {process.env.REACT_APP_UNCOPIED_API}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}
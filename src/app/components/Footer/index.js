import React from 'react';
import "./style.css"
import { useTranslation } from "react-i18next";
export function Footer()
{
  const { t } = useTranslation();
  return (
    <footer class="footer-section">
    <div class="container-fluid nav-spacing" >
      <div class="footer-content pt-5 pb-5">
        <div class="row">
          <div class="col-xl-4 col-lg-4 mb-50">
            <div class="footer-widget">
              <div class="footer-logo">
                <a href="/"><img src="https://user-images.githubusercontent.com/54095539/106423469-808c3680-6486-11eb-834e-e1c96eaab845.png" class="img-fluid" alt="logo"/></a>
              </div>
              <div class="footer-text">
              <p>{t('footer.heading1')}</p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-4 col-md-6 mb-30">
            <div class="footer-widget">
              <div class="footer-widget-heading">
                <h3>{t('footer.heading2')}</h3>
              </div>
              <ul>
                <li><a href="/">{t('footer.heading2-link1')}</a></li>
                <li><a href="https://uncopied.art/about/">{t('footer.heading2-link2')}</a></li>
                <li><a href="https://uncopied.art/about/">{t('footer.heading2-link3')}</a></li>
                <li><a href="https://uncopied.art/blog/">{t('footer.heading2-link4')}</a></li>
                <li><a href="https://uncopied.art/contact/">{t('footer.heading2-link5')}</a></li>
                <li><a href="https://uncopied.art/about/">{t('footer.heading2-link6')}</a></li>
                <li><a href="https://opencollective.com/uncopied">{t('footer.heading2-link7')}</a></li>
                <li><a href="https://uncopied.art/blog/">{t('footer.heading2-link8')}</a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-2 col-lg-4 col-md-6 mb-50">
          <div class="footer-widget">
          <div class="footer-social-icon">
            <span>{t('footer.heading3')}</span>
            <a href="https://twitter.com/uncopied_art"><i class="fal fa-twitter twitter-bg"></i></a>
            <a href="https://www.facebook.com/uncopied"><i className="fal fa-facebook facebook-bg"></i></a>
            <a href="https://www.instagram.com/uncopied_art"><i className="fal fa-instagram"></i></a>
            <a href="http://github.com/uncopied"><i className="fal fa-github"></i></a>
          </div>
          </div>
         </div>
        </div>
      </div>
    </div>
    <div class="copyright-area">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 text-center">
            <div class="copyright-text">
              <p>
                {t('footer.copyright')} <a href="/">Uncopied</a> <br/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}
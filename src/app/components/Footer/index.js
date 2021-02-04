import "./style.css"
import { useTranslation } from "react-i18next";
export function Footer()
{
  const { t } = useTranslation();
  return (
    <footer class="footer-section">
    <div class="container-fluid spacing" >
      <div class="footer-content pt-5 pb-5">
        <div class="row">
          <div class="col-xl-4 col-lg-4 mb-50">
            <div class="footer-widget">
              <div class="footer-logo">
                <a href="/"><img src="https://user-images.githubusercontent.com/54095539/106423469-808c3680-6486-11eb-834e-e1c96eaab845.png" class="img-fluid" alt="logo"/></a>
              </div>
              <div class="footer-text">
                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                  elit,Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div class="footer-social-icon">
                <span>Follow us</span>
                <a href="/"><i class="fal fa-facebook facebook-bg"></i></a>
                <a href="/"><i class="fal fa-twitter twitter-bg"></i></a>
                <a href="/"><i class="fal fa-google-plus-g google-bg"></i></a>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div class="footer-widget">
              <div class="footer-widget-heading">
                <h3>Useful Links</h3>
              </div>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">about</a></li>
                <li><a href="/">services</a></li>
                <li><a href="/">portfolio</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">About us</a></li>
                <li><a href="/">Our Services</a></li>
                <li><a href="/">Expert Team</a></li>
                <li><a href="/">Contact us</a></li>
                <li><a href="/">Latest News</a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
            <div class="footer-widget">
              <div class="footer-widget-heading">
                <h3>Subscribe</h3>
              </div>
              <div class="footer-text mb-25">
                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
              </div>
              <div class="subscribe-form">
                <form action="#">
                  <input type="text" placeholder="Email Address"/>
                  <button><i class="fal fa-telegram-plane"></i></button>
                </form>
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
              <p>Copyright &copy; 2021, All Right Reserved <a href="/">Uncopied</a> <br/>
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
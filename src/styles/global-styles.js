import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  font-family: Montserrat;
}

body {
  margin: 0;
  padding: 0;
  color: #333;
  font-size: 16px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  max-width: 100%;
  white-space: normal;
}

body {
  &::-webkit-scrollbar {
    background-color: transparent;
    width: 0px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
}


/* Spacing between components */

.spacing {
  padding-right: 120px;
  padding-left: 120px;
  padding-top: 150px;
  padding-bottom: 150px;
}

.spacing .business-item-info {
  padding-top: 160px;
}

.spacing .business-item-info h3 {
  font-size: 70px;
  font-weight: 600;
}

.spacing .business-item-info p {
  font-size: 22px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.center {
  text-align: center;
}


/* Buttons*/

.btn {
  font-size: 14px;
  padding: 10px 30px;
  margin: 5px;
  border-radius: 4px;
  letter-spacing: 1px;
  font-weight: 500;
  color: #fff;
  border: none;
  text-transform: uppercase;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  display: inline-block;
}

.btn:focus,
.btn:active {
  box-shadow: none;
  outline: none;
}

.btn-common {
  background-color: #000;
  position: relative;
  z-index: 1;
  box-shadow: 0px 8px 9px 0px rgba(96, 94, 94, 0.17);
  width: 160px;
  height: 50px;
  padding: 14px 15px;
}

.btn-common:hover {
  color: #fff;
  transform: translateY(-0.5px);
}


/* Artwork Source */

.thumbnail {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}

.thumbnailCaption {
  text-align: center;
}

.Home .lander {
  padding: 80px 0;
  text-align: center;
}

.Home .lander h1 {
  font-weight: 600;
}


/* Form */

.embossing {
  display: block;
  margin: auto;
  width: 100px;
  padding: 20px;
}

.form-container-outer {
  background: #f2f2f2;
}

.form-container-inner {
  font-size: 18px;
  text-align: justify;
  box-shadow:
  0  5px 10px rgba(154,160,185,0.05),
  0 15px 40px rgba(166,173,201,0.2);
}

.form-group label {
  font-weight: 500;
}

.form-group {
   padding: 10px 0px;
   margin-bottom: 0rem;
}

div form button.btn {
  background-color: black !important;
  border-color: black !important;
  opacity: 1 !important;
}

.form-container-inner {
  background-color: #ffffff;
  padding: 15px;
}

@media all and (min-width: 480px) {
  .form-container-inner {
    padding: 60px 0;
  }
  .form-container-inner form {
    margin: 0 auto;
    max-width: 320px;
  }
}

.NewNote form textarea {
  height: 300px;
  font-size: 1.5rem;
}


/* Media Queries */

@media screen and (min-device-width: 1480px) and (max-device-width: 1659px) {
  .spacing .business-item-info {
    padding-top: 100px;
  }
  .spacing .business-item-info h3,
  .section2 h1,
  .section3 .business-item-info h3,
  .section4 .business-item-info h3 {
    font-size: 63px !important;
  }
}

@media screen and (min-device-width: 1380px) and (max-device-width: 1425px) {
  .spacing .business-item-info {
    padding-top: 60px;
  }
}

@media screen and (min-device-width: 320px) and (max-device-width: 1480px) {
  .spacing .business-item-info {
    padding-top: 50px;
  }
  .spacing .business-item-info p {
    font-size: 18px;
  }
  .spacing .business-item-info h3,
  .section2 h1,
  .section3 .business-item-info h3,
  .section4 .business-item-info h3 {
    font-size: 40px !important;
  }
  .cards .card-info,
  .section2 p,
  #contactForm input[type=text],
  #contact form#contactForm input[type=email],
  #contactForm textarea {
    font-size: 16px;
  }
}

@media screen and (min-device-width: 800px) and (max-device-width: 1380px) {
  .spacing {
    padding-left: 60px;
    padding-right: 60px;
  }
  .nav-spacing {
    padding-left: 65px;
    padding-right: 65px;
  }
}

@media screen and (max-device-width: 655px) {
  .spacing {
    padding-left: 30px;
    padding-right: 30px;
  }
  .nav-spacing {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media screen and (max-device-width: 400px) {
  .spacing .business-item-info h3,
  .section2 h1,
  .section3 .business-item-info h3,
  .section4 .business-item-info h3 {
    font-size: 37px !important;
  }
  .spacing {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .nav-spacing {
    padding-left: 20px;
    padding-right: 20px;
  }
  .cards .card-title {
    font-size: 23px;
  }
  .footer-widget ul li a {
    font-size: 18px;
  }
  .cards .card-item {
    padding: 30px 15px;
  }
  .copyright-text p,
  .footer-widget ul li {
    font-size: 16px;
  }
}

@media screen and (max-device-width: 425px) {
  .footer-widget ul li {
    float: none;
    display: table-header-group;
  }
  .footer-social-icon i {
    margin: -2px;
  }
  .row {
    text-align: center;
  }
}

@media screen and (min-width: 767px) {
  .form-container-inner {
    max-width: 740px;
    padding-left: 100px;
    padding-right: 100px;
    margin: auto;
  }
  .form-container-inner form {
    margin: 0 auto;
    max-width: none;
  }
}

@media screen and (max-width: 602px) {
  .artworkSources .box .content {
    padding: 100px 110px !important;
  }
}

/* Upload box*/ 

.artworkSources a {
  text-decoration: none;
}
.box {
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 50px 0px;
}

.artworkSources .box .content {
  background: #f2f2f2;
  padding: 120px 220px;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  box-shadow: 0px 18px 30px rgba(0,0,0,0.3),
              0px 14px 12px rgba(0,0,0,0.2);
  border-radius: 10px
}

.artworkSources .box:hover .content:hover {
  background-color: rgba(235, 109, 109, 0.1);
  transition: all 500ms ease;
}

.artworkSources .box .content h3 {
  margin: 0 0 10px;
  color: #EB6D6D;
}

.artworkSources .box .content p {
  margin: 0 0 10px;
  color: #EB6D6D;
  font-size: 3rem;
}

.sidebar-flex {
  display:flex;
}

@media (max-width: 848px) {
  .sidebar-flex{
    display: block;
  }
}

.sidebar {
  background: #222;
  order: 0;
  flex: 0 1 100%;
  border-radius: 10px;
  color: #fff;
}

.sidebar ul {
  list-style: none;
  padding: 20px;
  font-size: 18px;
}

.sidebar ul li {
  padding: 20px;
  cursor: pointer;
}

.sidebar ul li: hover{
  opacity: 0.5;
}

@media (min-width: 500px) {
  .sidebar {
    flex: 0 1 300px;
    flex-direction: row;
 }
}

.content {
  order: 1;
  flex: 0 1 80%;
  padding: 20px;
  flex-direction: row;
  background-color:pink;
}


.artworkSources span {
  color: rgba(235, 109, 109, 0.8);
}

.form-container-outer .spacing {
  padding-top: 100px;
  padding-bottom: 100px;
}
.mainpage{
  display: flex
}
.maincontent {
  justify-content: center;
  display: grid;
  text-align: center;
  margin: auto;
}
`;
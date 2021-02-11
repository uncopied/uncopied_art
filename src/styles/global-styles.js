import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
			font-family: Montserrat !important;
	}

	body {
		margin: 0;
		padding: 0;
		color: #333;
		font-size: 16px;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		font-family: "Montserrat-Regular";
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

	.code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
	}

	/*Logo*/

	.logo {
		padding: 10px;
	}

	.Nav-link {
		margin: 10px;
		font-weight: 600;
		color: #000 !important;
		text-align: center;
	}

	.Nav-but {
		margin: 10px;
		background-color: #000 !important;
		border: #000 !important;
		padding-left: 20px;
		padding-right: 20px;
	}

	.Nav-but:hover {
		background-color: #505050 !important;
	}

	.lang {
		border: 2px solid #000;
		border-radius: 4px;
		background-color: #f8f9fa;
	}

	.lang1 {
		text-align: center;
	}

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

	.nav-spacing {
		padding-right: 150px;
		padding-left: 150px;
	}

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

	.spacing .business-item-img {
		padding: 20px;
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

	@media screen and (min-device-width: 1425px) and (max-device-width: 1500px) { 
		.spacing .business-item-info {
			padding-top: 100px;
		}

		.spacing .business-item-info h3 , .section2 h1 , .section3 .business-item-info h3, .section4 .business-item-info h3 {
			font-size: 50px !important;
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

	.spacing .business-item-info p{
		font-size: 18px;
	}

	.spacing .business-item-info h3 , .section2 h1 , .section3 .business-item-info h3, .section4 .business-item-info h3 {
		font-size: 40px !important;
	}

	.cards .card-info , .section2 p , #contactForm input[type=text], #contact form#contactForm input[type=email] , #contactForm textarea{
		font-size: 16px;
	}
}

@media screen and (min-device-width: 800px) and (max-device-width: 1380px) { 
	.spacing {
		padding-left: 60px;
		padding-right: 60px;
	}
	.nav-spacing{
		padding-left: 65px;
		padding-right: 65px;
	}
}

@media screen and (max-device-width: 655px) { 

	.spacing {
		padding-left: 30px;
		padding-right: 30px;
	}
	.nav-spacing{
		padding-left: 40px;
		padding-right: 40px;
	}
}

@media screen and (max-device-width: 400px) { 

	.spacing .business-item-info h3 , .section2 h1 , .section3 .business-item-info h3, .section4 .business-item-info h3 {
		font-size: 30px !important;
	}

	.spacing {
		padding-left: 10px;
		padding-right: 10px;
		padding-top: 30px;
		padding-bottom: 30px;
	}
	.nav-spacing{
		padding-left: 20px;
		padding-right: 20px;
	}

	.cards .card-title{
		font-size: 23px;
	}

	.footer-widget ul li a {
		font-size: 18px;
	}

	.cards .card-item {
		padding: 30px 15px;
	}
}

@media screen and (max-device-width: 425px) { 

	.footer-widget ul li {
		float: none;
		display:table-footer-group;
	}

	.row {
		text-align: center;
	}
}

`;
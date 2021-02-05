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

	 body:hover{
		::-webkit-scrollbar {
				width: 5px;
				background: #F3F1F3;
			}
			
			::-webkit-scrollbar-thumb {
				background: #2E2C2E;
				border-radius: 5px;
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
		border: 1px solid #000;
		border-radius: 2px;
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
		text-align: justify;
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
`;
import React from 'react';
import errorpage from './assets/404.svg';
import { useTranslation } from "react-i18next";
import './style.css'

export default function NotFound()
{
  const { t } = useTranslation();

  return (
    <div className="Wrapper">
      <div className="business-item-img">
        <img src={errorpage} className="img-fluid" alt=""/>
      </div>
      <div className="Header">{t('error.heading')}</div>
       <div className="Button">
       <a className="btn btn-common" href="https://uncopied.org/">{t('error.button')}</a> 
       </div>
    </div>
  );
}
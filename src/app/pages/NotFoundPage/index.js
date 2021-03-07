import React from 'react';
import errorpage from './assets/404.svg';
import { useTranslation } from "react-i18next";
import './style.css'

export default function NotFound()
{
  const { t } = useTranslation();

  return (
    <div class="Wrapper">
      <div className="business-item-img">
        <img src={errorpage} className="img-fluid" alt=""/>
      </div>
      <div class="Header">{t('error.heading')}</div>
       <div class="Button">
       <a className="btn btn-common" href="https://uncopied.org/">{t('error.button')}</a> 
       </div>
    </div>
  );
}
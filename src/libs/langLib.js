// import React, { ChangeEvent, useState } from "react"
import React, { useState } from "react"
import { useTranslation } from 'react-i18next';

const LangLib = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState();

    let changeLanguage = (event) => {
        let language = event.target.value;
        setLang(language)
        i18n.changeLanguage(language)
    }

    return (
        <div>
            <div>
                <select className="lang" value={lang} name="language" onChange={changeLanguage}>
                    <option className="lang1" value="fr">FR</option>
                    <option value="en">EN</option>
                </select>
            </div>
        </div>
    )
}

export default LangLib;
import React from 'react'
import EmployeeServices from '../services/EmployeeServices';

//Language
import { withTranslation } from 'react-i18next';

function OtherLanguage(props) {

    const internationalizationLanguage = language => {
        const { i18n } = props;
        i18n.changeLanguage(language);
        EmployeeServices.otherLanguageServices(language);
    }
    return (
        <>
            <div className="container">
                <img src="tr.png" alt="TR" onClick={internationalizationLanguage('tr')} />
                <img src="en.png" alt="EN" onClick={internationalizationLanguage('en')} />
            </div>
        </>
    )
}
export default withTranslation()(OtherLanguage)

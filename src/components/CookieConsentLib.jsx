import CookieConsent from 'react-cookie-consent';
import { Link } from 'react-router-dom';

const CookieConsentLib = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="arithmo.ai"
      style={{ background: '#0029FF' }}
      buttonStyle={{
        backgroundColor: '#fff',
        color: '#0029FF',
        fontSize: '13px',
        fontWeight: 'bold',
      }}
      expires={150}
    >
      We use cookies to provide our services. To find out more or withdraw from it, please see 
      our <a style={{textDecoration: 'underline'}} href="https://www.arithmo.ai/cookie-policy">Cookie Policy</a> 
    </CookieConsent>
  );
};

export default CookieConsentLib;

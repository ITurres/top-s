import React, { useState, useEffect } from 'react';

import { IoMdArrowRoundDown } from 'react-icons/io';

import '../../styles/pages/ContactPage.scss';

import Drone from '../animations/Drone.tsx';
import ContactForm from '../UI/ContactForm.tsx';

import setPageTitle from '../../utils/setPageTitle.ts';

function ContactPage(): React.ReactElement {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const laptopWidth = 1366;

  setPageTitle('Contact me! 📲');

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="contact-page-bg--container">
      <div className="blend-in-out">
        {windowWidth >= laptopWidth ? <Drone /> : null}
        <main className="contact-page container">
          <ContactForm />

          <div className="contact-page__details text-hue-rotate">
            <IoMdArrowRoundDown className="details-icon" />
            <span>arthuriturres.co@gmail.com</span>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ContactPage;

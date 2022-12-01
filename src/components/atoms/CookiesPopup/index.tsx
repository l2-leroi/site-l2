import React, { useEffect, useState } from 'react';
import i18next from 'i18next';
import { Typography } from '../../../styles/typography';
import {
  CookiesDescription,
  CookiesIcon,
  TriangleContainer,
  OkButton,
} from './style';

export default function CookiesPopup() {
  const [openPopup, setOpenPopup] = useState(false);
  const { t } = i18next;
  const closePopup = () => {
    localStorage.setItem(`avisoCookies`, 'false');
    setOpenPopup(false);
  };

  useEffect(() => {
    const myItem = localStorage.getItem(`avisoCookies`);
    if (myItem == null || myItem == 'true' || myItem == undefined) {
      setTimeout(() => {
        setOpenPopup(true);
      }, 1000);
    }
  }, []);

  return (
    <TriangleContainer className={openPopup ? 'active' : ''}>
      <CookiesIcon src="/images/cookies.svg" alt="cookies" />
      <CookiesDescription>
        <Typography tag="p" color="gray" fontFamily="font2" size="xsmall">
          {t('cookiesPopup.description')}
          {/* <PrivacyLink href="#"> */}
          <Typography
            tag="span"
            color="gray"
            fontFamily="font2"
            size="xsmall"
            dangerouslySetInnerHTML={{
              __html: t('cookiesPopup.privacy'),
            }}
          />
          {/* </PrivacyLink> */}
        </Typography>
      </CookiesDescription>
      <OkButton onClick={closePopup}>Ok</OkButton>
    </TriangleContainer>
  );
}

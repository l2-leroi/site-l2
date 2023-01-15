import React from 'react';
import { t } from 'i18next';
import { Typography } from '../../../styles/typography';
import { SectionStyled } from './styled';
import PolicyList from '../../molecules/PolicyList';
// import {  } from './styled';

export default function PrivacyPolicyPage() {
  const texts = {
    prefix: 'privacyPolicy',
    allTexts: [
      {
        prefix: 'generalInfo',
        paragraphs: [
          { prefix: 'title', isAList: false, list: null },
          { prefix: 'weL2', isAList: false, list: null },
          { prefix: 'currentPolicy', isAList: false, list: null },
          { prefix: 'weWillTreat', isAList: false, list: null },
          { prefix: 'itWasElaborated', isAList: false, list: null },
          { prefix: 'law', isAList: false, list: null },
          { prefix: 'civilMilestone', isAList: false, list: null },
          { prefix: 'regulation', isAList: false, list: null },
          { prefix: 'theDocument', isAList: false, list: null },
        ],
      },
      {
        prefix: 'infoCollected',
        paragraphs: [
          { prefix: 'title', isAList: false, list: null },
          { prefix: 'considering', isAList: false, list: null },
          {
            prefix: 'recruitmentList',
            isAList: true,
            list: {
              type: 'normal',
              items: [
                'generalData',
                'contactData',
                'educationData',
                'statement',
                'languages',
                'media',
                'otherData',
              ],
            },
          },
          { prefix: 'otherInfo', isAList: false, list: null },
          {
            prefix: 'infoList',
            isAList: true,
            list: {
              type: 'normal',
              items: ['systemInfo', 'deviceInfo'],
            },
          },
          { prefix: 'weValuePrivacy', isAList: false, list: null },
        ],
      },
      {
        prefix: 'purposesOfUse',
        paragraphs: [
          { prefix: 'title', isAList: false, list: null },
          { prefix: 'curriculum', isAList: false, list: null },
          { prefix: 'theCollectedData', isAList: false, list: null },
          {
            prefix: 'useList',
            isAList: true,
            list: {
              type: 'normal',
              items: [
                'professionalParticipation',
                'professionalRegistration',
                'activeSearch',
                'sendingEmails',
                'legalNorms',
              ],
            },
          },
          { prefix: 'l2Acts', isAList: false, list: null },
          {
            prefix: 'actionsList',
            isAList: true,
            list: {
              type: 'normal',
              items: [
                'fulfillment',
                'consent',
                'security',
                'rights',
                'interests',
              ],
            },
          },
        ],
      },
      {
        prefix: 'storageTime',
        paragraphs: [
          { prefix: 'title', isAList: false, list: null },
          { prefix: 'personalData', isAList: false, list: null },
          { prefix: 'removed', isAList: false, list: null },
          { prefix: 'hypotheses', isAList: false, list: null },
          {
            prefix: 'cardinalList',
            isAList: true,
            list: {
              type: 'cardinal',
              items: [
                'legalObligation',
                'researchBody',
                'transfer',
                'exclusiveUse',
              ],
            },
          },
        ],
      },
      {
        prefix: 'dataSecurity',
        paragraphs: [
          { prefix: 'title', isAList: false, list: null },
          { prefix: 'ourSite', isAList: false, list: null },
          { prefix: 'confidentiality', isAList: false, list: null },
          { prefix: 'theContent', isAList: false, list: null },
          { prefix: 'theUser', isAList: false, list: null },
          { prefix: 'changeTheContent', isAList: false, list: null },
          { prefix: 'violation', isAList: false, list: null },
          {
            prefix: 'violationList',
            isAList: true,
            list: {
              type: 'normal',
              items: ['illegalPurposes', 'forge', 'violateCopyright'],
            },
          },
          { prefix: 'invasionAttempts', isAList: false, list: null },
          { prefix: 'providedByClients', isAList: false, list: null },
        ],
      },
      {
        prefix: 'personalDataTransfer',
        paragraphs: [
          { prefix: 'title', isAList: false, list: null },
          { prefix: 'thePersonalData', isAList: false, list: null },
          { prefix: 'providers', isAList: false, list: null },
          {
            prefix: 'toolsList',
            isAList: true,
            list: {
              type: 'normal',
              items: ['monday', 'clockify', 'notion', 'googleDrive'],
            },
          },
          { prefix: 'theyReceive', isAList: false, list: null },
          { prefix: 'whenBeingRedirected', isAList: false, list: null },
        ],
      },
      {
        prefix: 'cookies',
        paragraphs: [
          { prefix: 'title', isAList: false, list: null },
          { prefix: 'theCookies', isAList: false, list: null },
          { prefix: 'whatAreCookies', isAList: false, list: null },
          { prefix: 'areInfo', isAList: false, list: null },
          { prefix: 'whatTypes', isAList: false, list: null },
          { prefix: 'first', isAList: false, list: null },
          {
            prefix: 'cookieList',
            isAList: true,
            list: {
              type: 'normal',
              items: [
                'permanentCookies',
                'temporaryCookies',
                'necessaryCookies',
                'analyticalCookies',
                'functionalityCookies',
                'advertisingCookies',
              ],
            },
          },
          { prefix: 'whichCookies', isAList: false, list: null },
          { prefix: 'weUse', isAList: false, list: null },
          { prefix: 'language', isAList: false, list: null },
          { prefix: 'canIDisable', isAList: false, list: null },
          { prefix: 'howToDisable', isAList: false, list: null },
        ],
      },
      {
        prefix: 'consent',
        paragraphs: [
          { prefix: 'title', isAList: false, list: null },
          { prefix: 'whenUsing', isAList: false, list: null },
          { prefix: 'theUser', isAList: false, list: null },
          { prefix: 'removeConsent', isAList: false, list: null },
        ],
      },
      {
        prefix: 'changes',
        paragraphs: [
          { prefix: 'title', isAList: false, list: null },
          { prefix: 'chagePolicy', isAList: false, list: null },
          { prefix: 'solution', isAList: false, list: null },
          { prefix: 'doubts', isAList: false, list: null },
        ],
      },
    ],
  };
  return (
    <SectionStyled>
      <Typography
        tag="h1"
        color="black"
        size="large"
        fontWeight="weight3"
        fontFamily="font1"
        lineHeight="line90"
        letterSpacing="space2"
      >
        {t('privacyPolicy.title')}
      </Typography>
      <PolicyList policies={texts} />
    </SectionStyled>
  );
}

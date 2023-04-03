/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import i18next from 'i18next';
import dynamic from 'next/dynamic';
import React, { useRef } from 'react';

import { Typography } from '../../../styles/typography';

import { ListStyled, PolicyStyled } from './styled';

const DynamicComponent = dynamic(() => import('../../atoms/AudioSpectrum'), {
  ssr: false,
});

interface Policy {
  prefix: string;
  paragraphs: {
    prefix: string;
    isAList: boolean;
    list: {
      type: string;
      items: string[];
    };
  }[];
}

interface PolicyProps {
  policies: {
    prefix: string;
    allTexts: Policy[];
  };
}

export default function PolicyList({ policies }: PolicyProps) {
  const { t } = i18next;

  return (
    <PolicyStyled>
      {policies.allTexts.map((policy) =>
        policy.paragraphs.map((paragraph) =>
          paragraph.isAList ? (
            <ListStyled className={paragraph.list.type}>
              {paragraph.list.items.map((itemList) => (
                <Typography
                  color="black"
                  tag="li"
                  dangerouslySetInnerHTML={{
                    __html: t(
                      `${policies.prefix}.${policy.prefix}.${paragraph.prefix}.${itemList}`,
                    ),
                  }}
                />
              ))}
            </ListStyled>
          ) : paragraph.prefix == 'title' ? (
            <Typography
              color="black"
              tag="h2"
              fontWeight="weight2"
              size="small"
              lineHeight="line120"
              letterSpacing="space1"
              fontFamily="font2"
              dangerouslySetInnerHTML={{
                __html: t(
                  `${policies.prefix}.${policy.prefix}.${paragraph.prefix}`,
                ),
              }}
            />
          ) : (
            <Typography
              color="black"
              tag="p"
              fontWeight="weight1"
              size="xsmall"
              lineHeight="line140"
              letterSpacing="space2"
              fontFamily="font2"
              dangerouslySetInnerHTML={{
                __html: t(
                  `${policies.prefix}.${policy.prefix}.${paragraph.prefix}`,
                ),
              }}
            />
          ),
        ),
      )}
    </PolicyStyled>
  );
}

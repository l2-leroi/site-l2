import i18next from 'i18next';
import { getAllLanguageSlugs, getLanguage } from '../../i18n';
import 'twin.macro';

export default function Test() {
  const { t } = i18next;

  return (
    <>
      <h2 tw="mt-5 mb-5 font-bold text-2xl">test.js</h2>
      <p>{t('helloWorld')}</p>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllLanguageSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const language = getLanguage(params.lang);
  return {
    props: {
      language,
    },
  };
}

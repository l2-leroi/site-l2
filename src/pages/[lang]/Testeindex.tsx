import i18next from 'i18next';
import 'twin.macro';
import { getAllLanguageSlugs, getLanguage } from '../../i18n';

export default function LangIndex({ language }) {
  const { t } = i18next;

  return (
    <>
      <h2>index.tsx</h2>
      <div>
        <p>{t('language')}</p> : <p>{t(language)}</p> <p>({language})</p>
      </div>
      <a>/{language}/test</a>
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

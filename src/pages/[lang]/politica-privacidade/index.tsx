import { NextPage } from 'next';
import Footer from '../../../components/organisms/Footer';
import LineAnimation from '../../../components/atoms/LineAnimation';
import { colors } from '../../../styles/colors';
import PrivacyPolicyPage from '../../../components/organisms/PrivacyPolicyPage';

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <PrivacyPolicyPage />
      <LineAnimation
        topBgColor={colors.gray}
        bottomBgColor={colors.purple}
        hasOutSourcing={false}
        hasSpinner={false}
      />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;

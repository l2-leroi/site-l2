import { NextPage } from "next";
import { useEffect } from "react";
import MenuCases from "../../../components/organisms/Menu/MenuCases";
import HeaderCases from "../../../components/organisms/Header/HeaderCases";
import ProcessesCases from "../../../components/organisms/ProcessesCases";
import DesignsCases from "../../../components/organisms/DesignsCases";
import AllCases from "../../../components/organisms/Cases/AllCases";
// import Footer from "../../../components/organisms/Footer";
import FooterCases from "../../../components/organisms/Footer/FooterCases";
const MemoriesUp: NextPage = () => {

    useEffect(() => {
        if (history.scrollRestoration) {
          history.scrollRestoration = 'manual';
        } else {
          window.onbeforeunload = function () {
            window.scrollTo(0, 0);
          }
        }
      });

        return (
            <>
                
                <MenuCases />
                <HeaderCases />
                <ProcessesCases/>
                <DesignsCases  />
                <AllCases />
                {/* <Footer /> */}
                <FooterCases />
               
            </>
        );
    };



    export default MemoriesUp;
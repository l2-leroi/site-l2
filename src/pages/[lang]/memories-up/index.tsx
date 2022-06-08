import { NextPage } from "next";
import { useEffect } from "react";
import MenuCases from "../../../components/organisms/Menu/MenuCases";
import FooterCases from "../../../components/organisms/Footer/FooterCases";
import AllCases from "../../../components/organisms/Cases/AllCases";
import HeaderCases from "../../../components/organisms/Header/HeaderCases";
import ProcessesCases from "../../../components/organisms/ProcessesCases";
import DesignsCases from "../../../components/organisms/DesignsCases";

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
                <FooterCases />
               
            </>
        );
    };



    export default MemoriesUp;
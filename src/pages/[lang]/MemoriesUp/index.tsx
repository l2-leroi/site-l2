import { NextPage } from "next";
import { useEffect } from "react";
import MenuMemoriesUp from "../../../components/organisms/Menu/MenuMemoriesUp";
import FooterMemoriesUp from "../../../components/organisms/Footer/FooterMemoriesUp";
import CasesMemoriesUp from "../../../components/organisms/Cases/CasesMemoriesUp";
import HeaderMemoriesUp from "../../../components/organisms/Header/HeaderMemoriesUp";
import OurChallengesMemoriesUp from "../../../components/organisms/OurChallenges/OurChallengesMemoriesUp";
import OurProcessesMemoriesUp from "../../../components/organisms/OurProcesses/OurProcessesMemoriesUp";
import OurDesignsMemoriesUp from "../../../components/organisms/OurDesigns/OurDesignsMemoriesUp";

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
                
                <MenuMemoriesUp />
                <HeaderMemoriesUp />
                <OurChallengesMemoriesUp/>
                <OurProcessesMemoriesUp/>
                <OurDesignsMemoriesUp />
                <CasesMemoriesUp />
                <FooterMemoriesUp />
               
            </>
        );
    };



    export default MemoriesUp;
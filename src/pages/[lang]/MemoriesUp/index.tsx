import { NextPage } from "next";
import { useEffect } from "react";
import MenuMemoriesUp from "../../../components/organisms/MenuMemoriesUp";
import FooterMemoriesUp from "../../../components/organisms/Footer/FooterMemoriesUp";
import CasesMemoriesUp from "../../../components/organisms/Cases/CasesMemoriesUp";
import HeaderMemoriesUp from "../../../components/organisms/Header/HeaderMemoriesUp";
import OurServicesOnePageMemoriesUp from "../../../components/organisms/OurServicesOnePage/OurServicesOnePageMemoriesUp";
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
                <OurServicesOnePageMemoriesUp/>
                <OurProcessesMemoriesUp/>
                <OurDesignsMemoriesUp />
                <CasesMemoriesUp />
                <FooterMemoriesUp />
               
            </>
        );
    };



    export default MemoriesUp;
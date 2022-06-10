import { NextPage } from "next";
import { useEffect } from "react";
import MenuMemoriesUp from "../../../components/organisms/MenuMemoriesUp";
import FooterMemoriesUp from "../../../components/organisms/FooterMemoriesUp";
import CasesMemoriesUp from "../../../components/organisms/CasesMemoriesUp";
import HeaderMemoriesUp from "../../../components/organisms/HeaderMemoriesUp";
import OurServicesOnePageMemoriesUp from "../../../components/organisms/OurServicesOnePageMemoriesUp";
import ProcessPageMemoriesUp from "../../../components/organisms/ProcessMemoriesUp";
import DesignMemoriesUp from "../../../components/organisms/DesignMemoriesUp";

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
                <ProcessPageMemoriesUp/>
                <DesignMemoriesUp />
                <CasesMemoriesUp />

                <FooterMemoriesUp />
            </>
        );
    };

    export default MemoriesUp;
import { NextPage } from "next";
import { useEffect } from "react";
import OurServicesFull from "../../../components/organisms/OurServicesFull";
import Footer from "../../../components/organisms/Footer";
import Menu from "../../../components/organisms/Menu";
import LineAnimation from "../../../components/atoms/LineAnimation";

const OurServices: NextPage = () => {

        return (
            <>
                <OurServicesFull />
                <Footer />
            </>
        );
    };



    export default OurServices;
import { NextPage } from "next";
import { useEffect } from "react";
import HeaderMemoriesUp from "../../../components/organisms/HeaderMemoriesUp";

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
                <HeaderMemoriesUp />
                {/* <div className="case-01">
                    <h1>Case 01</h1>
                </div> */}
            </>
        );
    };



    export default MemoriesUp;
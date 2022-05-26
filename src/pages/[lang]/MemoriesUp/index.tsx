import { NextPage } from "next";
import { useEffect } from "react";

const Case01: NextPage = () => {

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
            <div>
                <h1>Case 01</h1>
            </div>
        );
    };



    export default Case01;
import React, { useState, useEffect } from "react";
import Header from "../header";
import Footer from "../footer";
import MainArea from "./common/main_area";
import LeftNav from "./common/left_nav";
import API from "../../utils/apiCalling";
import { config } from "../../utils/apiUrl";
import { toast } from "react-toastify";

const C = (props) => {
  const api = new API();
  const [cData, setCData] = useState();
  useEffect(() => {
    getCLanguage();
    // console.log(cData)
  }, []);

  const getCLanguage = async () => {
    let result = await api.get(config.get_c_language);
    if (result && result.code == 200) {
      setCData(result.data);
      console.log("getting c daqta", result)
      toast.success("getting success");
    } else {
      toast.warning("somethin went wrong");
    }
  };

  return (
    <div>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-12">
            <LeftNav />
          </div>
          <div className="col-md-7 col-sm-6 col-12 contentdiv">
            <MainArea cData={cData} />
          </div>
          <div className="col-md-2 col-sm-6 col-12">Ads By Google</div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default C;

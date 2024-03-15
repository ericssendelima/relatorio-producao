import React from "react";

import Addinfos from "../../components/Addinfos";
import TituloExpo from "../../components/TituloExpo";
import ExpoInfo from "../../components/ExpoInfo";
import ObsExpo from "../../components/ObsExpo";
import FinalButtons from "../../components/FinalButtons";

const Dashboard = ({checkLog}) => {
  return (
    <>
      <Addinfos checkLog={checkLog}/>
      <TituloExpo />
      <ExpoInfo />
      <ObsExpo />
      <FinalButtons />
    </>
  );
};

export default Dashboard;

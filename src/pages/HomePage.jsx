import React from "react";

import { SubContainer} from "../components/Container"
import { Header } from "../components/Header";
import Login from "./views/Login";

const HomePage = () => {
  return (
    <div className="app">
      <div>
        <Header />
        <SubContainer>
         <Login />
        </SubContainer>
      </div>
    </div>
  )
}

export default HomePage
import React from "react";
import Featured from './featured';
import MatchesHome from "./matches";
import MeetPlayers from "./meetPlayers";
import Promotion from "./promotion";
import Enroll from "./promotion/Enroll";

const Home = () => {
    return(
        <div className="bck_blue">
            <Featured/>
            <MatchesHome/>
            <MeetPlayers/>
            <Promotion/>
        </div>
    )
}

export default Home;
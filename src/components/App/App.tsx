import css from "./App.module.css";
import { useState } from "react";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteStats from "../VoteStats/VoteStats";
import VoteOptions from "../VoteOptions/VoteOptions";
import Notification from "../Notification/Notification";


const App = () => {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const totalVotes = votes.good + votes.neutral + votes.bad;

  
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={(voteType) => {
          setVotes((prevVotes) => ({
            ...prevVotes,
            [voteType]: prevVotes[voteType] + 1
          }));
        }}
        onReset={() => {
          setVotes({
            good: 0,
            neutral: 0,
            bad: 0
          });
        }}
        canReset={totalVotes > 0}
      />
      {totalVotes > 0 ? (<VoteStats votes={votes} />) : (<Notification />)}
    </div>
  );
}

  

export default App;
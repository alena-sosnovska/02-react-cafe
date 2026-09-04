import css from "./App.module.css";
import { useState } from "react";
import type {VoteType, Votes} from "../../types/votes";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteStats from "../VoteStats/VoteStats";
import VoteOptions from "../VoteOptions/VoteOptions";
import Notification from "../Notification/Notification";


const App = () => {
  const [votes, setVotes] = useState <Votes>({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes > 0 ? Math.round((votes.good / totalVotes) * 100) : 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={(voteType: VoteType) => {
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
      {totalVotes > 0 ? (<VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} />) : (<Notification />)}
    </div>
  );
}

  

export default App;
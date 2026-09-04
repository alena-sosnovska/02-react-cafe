import css from "./VoteStats.module.css";
import type Votes from "../../types/votes";

interface VoteStatsProps {
  votes: Votes;
}

const VoteStats = ({ votes }: VoteStatsProps) => {
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positive = totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0;

  return (<div className={css.container}>
    <p className={css.stat}>Good: <strong>{votes.good}</strong></p>
    <p className={css.stat}>Neutral: <strong>{votes.neutral}</strong></p>
    <p className={css.stat}>Bad: <strong>{votes.bad}</strong></p>
    <p className={css.stat}>Positive: <strong>{positive}%</strong></p>
  </div>);
}

export default VoteStats;




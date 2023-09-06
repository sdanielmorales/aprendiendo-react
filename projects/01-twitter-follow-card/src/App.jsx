import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";


//Remember
const users = [
  {
    userName: "midudev",
    name: "Miguel Angel Duran",
    isFollowing: false,
  },
  {
    userName: "pheralb",
    name: "AuronPlay",
    isFollowing: true,
  },
];

export function App() {
  return (
    <div className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </div>
  );
}

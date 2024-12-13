import React from "react";
import "./PlayerCard.css";

const PlayerCard = ({ player }) => {
  if (!player) return <div className="player-card">No player selected</div>;

  return (
    <div className="player-card">
      <p><strong>Shooting Percentage:</strong> {player.field_percent}</p>
      <p><strong>Points:</strong> {player.points}</p>
      <p><strong>Assists:</strong> {player.assists}</p>
    </div>
  );
};

export default PlayerCard;

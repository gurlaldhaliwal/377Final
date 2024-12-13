import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient.js";
import PlayerCard from "../components/PlayerCard.js";
import "./Compare.css";

const Compare = () => {
  const [players, setPlayers] = useState([]);
  const [playerOne, setPlayerOne] = useState(null);
  const [playerTwo, setPlayerTwo] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      
      let { data, error } = await supabase
      .from('players')
      .select('id, player_name, field_percent, points, assists')
    };

    fetchPlayers();
  }, []);

  const handlePlayerChange = (playerId, setPlayer) => {
    const selectedPlayer = players.find((player) => player.id === Number(playerId));
    setPlayer(selectedPlayer);
  };

  return (
    <div>
      <h1>Compare Players or Teams</h1>

      <p>Use the tools below to compare your favorite NBA players or teams.</p>

      <section className="content-grid">

        <div className="content-box top-box">

          <div className="player-selector">

            <label htmlFor="playerOne">Player 1:</label>

            <select
              id="playerOne"
              onChange={(e) => handlePlayerChange(e.target.value, setPlayerOne)}
            >
              <option value="">Select a player</option>
              {players.map((player) => (
                <option key={player.id} value={player.id}>
                  {player.player_name}
                </option>
              ))}
            </select>

          </div>

          <PlayerCard player={playerOne} />

        </div>

        <div className="content-box bottom-box">

          <div className="player-selector">

            <label htmlFor="playerTwo">Player 2:</label>

            <select
              id="playerTwo"
              onChange={(e) => handlePlayerChange(e.target.value, setPlayerTwo)}
            >
              <option value="">Select a player</option>
              {players.map((player) => (
                <option key={player.id} value={player.id}>
                  {player.player_name}
                </option>
              ))}
            </select>

          </div>

          <PlayerCard player={playerTwo} />

        </div>

      </section>
      
    </div>
  );
};

export default Compare;

import express from 'express';
import fetch from 'node-fetch'; // For making HTTP requests
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cowshmplnpofhhmdzqvd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvd3NobXBsbnBvZmhobWR6cXZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwNTYxNDYsImV4cCI6MjA0OTYzMjE0Nn0.ccK7TIssBPTO0Yxf6l289jegxwYiHlM8xJ9sDz9AUQg';
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
const port = 3000;

// Add the function for fetching and storing player data here
async function fetchAndStorePlayerData() {
    try {
        const response = await fetch('http://b8c40s8.143.198.70.30.sslip.io/api/PlayerDataTotals/season/2024');
        const playersData = await response.json();

        for (let player of playersData) {
            const { playerName, position, age, games, gamesStarted, minutesPg, 
                    fieldGoals, fieldAttempts, fieldPercent, threeFg, threeAttempts, 
                    threePercent, twoFg, twoAttempts, twoPercent, effectFgPercent, 
                    ft, ftAttempts, ftPercent, offensiveRb, defensiveRb, totalRb, 
                    assists, steals, blocks, turnovers, personalFouls, points, 
                    team, season, playerId } = player;

            const { data, error } = await supabase
                .from('players')
                .upsert([{
                    player_name: playerName,
                    position: position,
                    age: age,
                    games: games,
                    games_started: gamesStarted,
                    minutes_pg: minutesPg,
                    field_goals: fieldGoals,
                    field_attempts: fieldAttempts,
                    field_percent: fieldPercent || 0,
                    three_fg: threeFg,
                    three_attempts: threeAttempts,
                    three_percent: threePercent || 0,
                    two_fg: twoFg,
                    two_attempts: twoAttempts,
                    two_percent: twoPercent || 0,
                    effect_fg_percent: effectFgPercent || 0,
                    ft: ft,
                    ft_attempts: ftAttempts,
                    ft_percent: ftPercent || 0,
                    offensive_rb: offensiveRb,
                    defensive_rb: defensiveRb,
                    total_rb: totalRb,
                    assists: assists,
                    steals: steals,
                    blocks: blocks,
                    turnovers: turnovers,
                    personal_fouls: personalFouls,
                    points: points,
                    team: team,
                    season: season,
                    player_id: playerId,
                }]);


            if (error) {
                console.error('Error inserting player data:', error);
            } else {
                console.log('Inserted player data:', data);
            }
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchAndStorePlayerData();

// Route for the home page
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

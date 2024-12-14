import express from 'express';
import fetch from 'node-fetch';
import { createClient } from '@supabase/supabase-js';
import cors from 'cors';

const app = express();
const port = 3000;

const supabaseUrl = 'https://cowshmplnpofhhmdzqvd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvd3NobXBsbnBvZmhobWR6cXZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwNTYxNDYsImV4cCI6MjA0OTYzMjE0Nn0.ccK7TIssBPTO0Yxf6l289jegxwYiHlM8xJ9sDz9AUQg';
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(cors());
app.use(express.json());

async function fetchAndStorePlayerData() {
    const response = await fetch('http://b8c40s8.143.198.70.30.sslip.io/api/PlayerDataTotals/season/2024');
    const playersData = await response.json();

    for (let player of playersData) {
        const {
            playerName, position, age, games, gamesStarted, minutesPg,
            fieldGoals, fieldAttempts, fieldPercent, threeFg, threeAttempts,
            threePercent, twoFg, twoAttempts, twoPercent, effectFgPercent,
            ft, ftAttempts, ftPercent, offensiveRb, defensiveRb, totalRb,
            assists, steals, blocks, turnovers, personalFouls, points,
            team, season, playerId,
        } = player;

        await supabase
            .from('players')
            .upsert([{
                player_name: playerName,
                position,
                age,
                games,
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
                ft,
                ft_attempts: ftAttempts,
                ft_percent: ftPercent || 0,
                offensive_rb: offensiveRb,
                defensive_rb: defensiveRb,
                total_rb: totalRb,
                assists,
                steals,
                blocks,
                turnovers,
                personal_fouls: personalFouls,
                points,
                team,
                season,
                player_id: playerId,
            }]);
    }
}

// Route to register users
app.post('/api/register-user', async (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    const { data } = await supabase
        .from('registered_users')
        .insert([{ name, email }]);

    res.status(201).json({ message: 'User registered successfully', data });
});

app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    fetchAndStorePlayerData();
});

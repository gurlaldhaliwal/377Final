# NBA Stats

# Team Member Names:
Gurlal Dhaliwal, Enrique Coronado, 

## Project Description
NBA Stats is an interactive web application that allows users to explore and compare NBA players for the 2024 season. With a focus on statistics, the application enables basketball enthusiasts to analyze player statistics and matchups.

## Target Browsers and Devices
The NBA Stats web application is designed to be fully responsive and accessible across all modern browsers and devices, including:
- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge
- Mobile browsers (iOS, Android)

Users should be able to access the site on desktops, laptops, tablets, and smartphones without issues.

---

# Developer Manual

## Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher) must be installed on your machine.
- A code editor like [VSCode](https://code.visualstudio.com/) is recommended for development.

## Getting Started

Follow these steps to set up the project on your local machine:

1. **Clone the Repository**
   You can clone the project repository via either GitHub Desktop or using the terminal:
2. Navigate to the Project Folder Open your terminal and navigate to the project directory
3. Install Dependencies The application has both a frontend and backend that require dependencies. You need to install them separately. (npm install)
4. Start the Application To run the application locally:

API Documentation
Backend API Endpoints
POST /api/register-user

Backend:
1. POST /api/register-user
Description: Registers a new user by adding their name and email to the registered_users table in the Supabase database.
Request Body:
name (required): Name of the user.
email (required): Email of the user.
Response:
Success: Returns a 201 status with a message confirming the user registration.
Error: Returns a 400 status if name or email are missing in the request.

Based on the provided code, here are the API calls, including the method (GET, POST), endpoints, and their functionalities:

Backend: 
1. POST /api/register-user
Description: Registers a new user by adding their name and email to the registered_users table in the Supabase database.
Request Body:
name (required): Name of the user.
email (required): Email of the user.
Response:
Success: Returns a 201 status with a message confirming the user registration.
Error: Returns a 400 status if name or email are missing in the request.

2. GET /
Description: A basic root endpoint that returns a welcome message.
Response: "Welcome to the API!"

3. External Call - Fetching and Storing Player Data
Description: This function (fetchAndStorePlayerData) fetches player data for the 2024 season from an external API and stores the data into the players table in Supabase.
Operation: Fetches the player data. Extracts and inserts player stats such as points, assists, field goals, etc., into the players table via the Supabase client.

Frontend:
1. External API Call (Pexels API)
Description: Fetches basketball-related images from the Pexels API.
API Method: GET
Endpoint: https://api.pexels.com/v1/search
Response: The photos object containing an array of images with metadata (such as image URLs) is returned and set into the images state.

2. Supabase API Call
Description: This API call fetches data from the players table in Supabase, specifically retrieving the id, player_name, field_percent, points, and assists fields for all players in the table.
API Method: GET
Endpoint: /from/players/select
Response: The response contains an array of players with the selected fields. This data is then set into the players state, which is used to populate the dropdown menus for selecting players.

3. Registration in Frontend
Description: Allows users to sign up for the NBA Stats application. This feature doesn't really do much right now but adds the user's name and email to the supabase database. It includes validation and sends a POST request to the backend API to register users.
API Method: POST
Endpoint: supabase/register-user
Response: "User has successfully been added"

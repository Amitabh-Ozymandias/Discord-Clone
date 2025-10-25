My Thoughts:
The reason I did this in front, instead of the end, like it should be done, is because I had some things to say, which will make a lot of sense once you go through the project.

Before you go through this README, a few stuff to make you aware of, The site that was running, was not very successful in it's uploads through this repo, reason being, I uploaded node modules in client side and did not know how to get them off, so I left it alone. This entire repo is supposed to be for pulling stuff off of the repo and for you to access or run it on your own machine with your own secret jwt key and mongo cluster url(if you know, you know). If you want to know the code changes I made for it to run as a deployed site feel free to check out these links:

Backend: https://github.com/Amitabh-Ozymandias/social-backend
Frontend: https://github.com/Amitabh-Ozymandias/social-frontend

These are my repos that were used to build the site actually, feel free to check them out, they have no READMEs.

Project Name: Discord-Clone (MERN)
Overview

This is a basic Discord-like chat application built with MERN (MongoDB, Express, React, Node.js). Users can:

Register and log in

Create their own servers (guilds)

Create channels within servers

Send messages in channels

View their own servers and channels

Features Implemented

Authentication

JWT-based login and registration

Authenticated routes protected via middleware

Guilds (Servers)

Users can create new guilds

Users can view their guilds

Default "general" channel created automatically with a new guild

Channels

Guild owners can create new text channels

Users can view all channels within their guilds

Messaging

Users can send messages in channels

Messages show sender information

Messages are persisted in MongoDB

Frontend

Built with React and Material-UI

Responsive layout for guilds, channels, and messages

Scrollable lists for guilds, channels, and messages

Components: Home.jsx, GuildList.jsx, ChannelList.jsx, MessageList.jsx, CreateGuild.jsx, CreateChannel.jsx

Backend

Node.js + Express

MongoDB via Mongoose

Routes:

/api/auth → login, registration

/api/guild → create guild, join guild, fetch user guilds

/api/channel → create channel, fetch guild channels

/api/message → send message, fetch channel messages

Shortcomings / Known Issues

Joining other users’ guilds

Currently, users can only create and view their own guilds

Backend supports joining other guilds via /join/:guildId, but frontend integration is not complete

Steps taken:

Created a JoinGuild.jsx component for inputting a guild ID to join

Backend tested successfully with Postman

Integration with GuildList and Home.jsx pending

Message features

Messaging works per channel

No support yet for real-time updates (WebSocket / Socket.IO not implemented)

Miscellaneous

UI for creating and joining guilds can be improved

No file uploads for avatars or channel media

Error handling is minimal; alerts/logging are basic

No deployment-ready environment variables in GitHub repo (e.g., .env excluded via .gitignore)

Author's notes:
If you want to criticize my naming sense, I know it's horrid. But, I used these to build my site, I learnt a lot from this, and I hope you enjoy reviewing it =)(This line has been directed specifically at Mr. Mrinal Bhattacharya, who taught me about MERN, I'm looking at you Mrinal sir).

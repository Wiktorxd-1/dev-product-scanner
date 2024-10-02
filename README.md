# What Is dev-product-scanner

This is a scanner that scans new developer products for new universes. This can also scan description changes, name changes, price changes, and image changes.

## Installation

Download source code from the most recent release here: https://github.com/editlt/dev-product-scanner/releases and extract folders.

## Setup

1. Rename .env.example to .env

2. Create a discord bot here: https://discord.com/developers/applications. Feel free to customize it however you like, but after creating, get the bots token, and put this into .env under bot_token.

3. Next, invite the bot. Click the OUATH2 button on the side of the screen. Scroll to url generator, select bot. Below, give it any permissions you like, and then copy the link at the bottom to invite it to a server.

4. Once in the server, get a channel ID or multiple if wanted. You will need to activate developer mode for this. Put the channel id in .env under channelIds= . It should end up looking like channelIds=["1"] or channelIds=["1", "2"]

5. For setting up mongodb, I recommend watching this tutorial: https://youtu.be/oVHQXwkdS6w. Once you get the connection string, put it under mongo_db_token=

6. Finally, choose the game you want to scan updates on developer products for. Get the place id which is in the link (https://roblox.com/games/PLACEID), and take that id and put it into .env under placeIds=["placeId"], if you'd like multiple fill it in.

7. Run the bot using node index in the terminal.

## Contact / Support
Need extra help or asking questions? Message me on discord: editlt___

## Contributing
Pull requests are welcomed. I would love to see all the changes anyone can make.

## Goals
- [x] 5 ⭐ - Multiple Channel Support
- [x] 8 ⭐ - Place ID instead of universe ID in .env
- [x] 10 ⭐ - Multiple Place IDs
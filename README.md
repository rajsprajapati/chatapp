💬 Socket.IO Simple Chat

A real-time chat application built using Node.js, Express, and Socket.IO that runs directly in your browser.
This project demonstrates how to establish bi-directional communication between a client and a server using Socket.IO — perfect for beginners who want to understand the core concepts of real-time web apps.

Whether you’re learning about WebSockets, building a group chat, or experimenting with event-driven communication — this project is a great starting point.
It’s small, fast, and easy to extend into a more advanced chat platform.

📝 Description

This project is a browser-based real-time chat app that allows multiple users to join and communicate instantly without reloading the page. It uses Socket.IO for handling live, two-way communication and Express for serving the frontend files.

Once the server starts, users can open the app in multiple tabs or devices, set a username, and send messages in real-time. The app supports:

Broadcasting messages to all connected clients

Typing indicators

System notifications for joining/leaving users

Basic username identification

It’s designed as a beginner-friendly demo for understanding how Socket.IO works under the hood — including event handling, message broadcasting, and server-client synchronization.

✨ Features

⚡ Real-time messaging between clients

💬 Typing indicator (shows who is typing)

👋 System join/leave notifications

👤 Custom username support

🧱 Simple, minimal frontend (no framework)

🧩 Ready-to-extend code structure for rooms or private chats

🧱 Tech Stack

Backend: Node.js, Express.js, Socket.IO

Frontend: HTML, CSS, JavaScript (served by Express)

Transport Layer: WebSockets (with fallbacks & auto-reconnect)

🚀 Quick Start

# 1️⃣ Clone the repository

git clone https://github.com/rajsprajapati/chatapp.git
cd <your-repo>

# 2️⃣ Install dependencies

npm install

# 3️⃣ Run the app

node server.js

# or (if nodemon is installed)

# npm run dev

# 4️⃣ Open your browser and visit:

http://localhost:3501

Open two or more browser tabs and start chatting in real-time!

📂 Project Structure
.
├── public/
│ └── index.html # Frontend UI + Socket.IO client logic
├── server.js # Backend (Express + Socket.IO)
├── package.json
└── README.md

⚙️ Available Scripts

In your package.json, you can add:

{
"scripts": {
"start": "node server.js",
"dev": "nodemon server.js"
}
}

Run:

npm start # production mode
npm run dev # development mode

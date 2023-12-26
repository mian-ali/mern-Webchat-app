## Real-Time Chat webApp with MERN Stack, Socket.io, with Styled Components

### Technologies Used
- MERN stack (MongoDB, Express.js, React.js, and Node.js)
- Socket.io
- Multiavatar API (Avatar Generator API)
- Styled Components (For UI)

### Configuration and Local Setup project

`In the first terminal`
- cd client and create a .env file in the root of your client directory.
- Supply the following credentials
```
VITE_AVATAR_KEY=AVATAR_API_KEY
VITE_SERVER_URL=http://localhost:5000
```

```
$ cd frontend
$ npm install (to install client-side dependencies)
$ npm run dev (to start the client)
```

`In the second terminal`
- cd server and create a .env file in the root of your server directory.
- Supply the following credentials
```
PORT=5000
MONGO_URI=YOUR_MONGO_URI
CLIENT_URL=http://localhost:3000
ACCESS_TOKEN_SECRET=ADD_YOUR_RANDOM_TOKEN
REFRESH_TOKEN_SECERT=ADD_YOUR_RANDOM_TOKEN
COOKIE_SIGNATURE=ADD_YOUR_RANDOM_SIGNATURE

```

```
$ cd backend
$ npm install (to install server-side dependencies)
& npm run dev (to start the server)
```

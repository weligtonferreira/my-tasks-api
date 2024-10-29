<p align="center">
  <a href="https://nodejs.org/en" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="200" alt="NodeJS Logo" /></a>
</p>

# MyTasks API 🎯

MyTasks API was created to serve the interface created in the [MyTasks](https://github.com/weligtonferreira/my-tasks-react/) project.

## 💻 Technologies

- [Node](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [JWT](https://jwt.io/)
- [Prisma](https://www.prisma.io/)
- [MySQL](https://www.mysql.com/)

## ⚙️ Installation

```bash
$ npm install
```

## 🛠️ Configure ".env" environment variables

```
DEVELOPMENT_PORT=port
DATABASE_URL="mysql://admin:admin@localhost:3306/my-tasks"
JWT_SECRET_KEY=your-secret-key
```

## 🐋 Running Docker Compose

```bash
# start container
$ docker compose up -d

# shut down container
$ docker compose down
```

## 🚀 Running the app

```bash
# development
$ npm run dev

# production mode
$ npm run start
```

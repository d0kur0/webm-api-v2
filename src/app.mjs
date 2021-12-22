import { getBoards } from "./http/getBoards";
import { createServer } from "restify";

const server = createServer();
const port = process.env.PORT || 5050;

server.get("/getBoards", getBoards);

server.listen(port, () => console.log(`Open: http://localhost:${port}`));

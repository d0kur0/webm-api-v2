import { getBoards } from "./http/getBoards";
import { createServer } from "restify";

const server = createServer();

server.get("/getBoards", getBoards);

server.listen(process.env.POST || 5050, () =>
	console.log("%s listening at %s", server.name, server.url)
);

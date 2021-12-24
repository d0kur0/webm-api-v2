import "./polyfills/fetch.mjs";
import common from "./configs/common.json" assert { type: "json" };
import Fastify from "fastify";
import { getFiles } from "./http/getFiles.mjs";
import { getBoards } from "./http/getBoards.mjs";
import { getAllowedExtensions } from "./http/getAllowedExtensions.mjs";
import { fetchFiles } from "./workers/filesFetcher.mjs";

const fastify = Fastify({
	logger: true,
});

fetchFiles();

fastify.get("/getBoards", getBoards);
fastify.get("/getFiles", getFiles);
fastify.get("/getAllowedExtensions", getAllowedExtensions);

try {
	await fastify.listen(common.port);
} catch (error) {
	fastify.log.error(error);
	process.exit(1);
}

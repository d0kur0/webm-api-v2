import webmFinder from "webm-finder";
import common from "../configs/common.json" assert { type: "json" };
import allowedBoards from "../configs/allowedBoards.json" assert { type: "json" };
import allowedExtensions from "../configs/allowedExtensions.json" assert { type: "json" };

const files = [];
const twoChannel = webmFinder.twoChannelFactory({ requiredFileTypes: allowedExtensions });

export const fetchFiles = async () => {
	const threadsQueue = [];
	for (let board of allowedBoards) {
		threadsQueue.push(twoChannel.fetchThreads(board));
	}

	const threads = await Promise.allSettled(threadsQueue);

	console.log(threads);
};

export const registerFetchFilesWorker = async () => {
	await fetchFiles();
	setInterval(() => fetchFiles(), common.updateIntervalInMin * 60 * 1000);
};

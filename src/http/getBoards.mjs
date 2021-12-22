import { allowedBoards } from "../configs/allowedBoards";

export const getBoards = (_, response) => {
	response.send(200, allowedBoards);
};

import { allowedBoards } from "./../configs/allowedBoards";
import { RequestHandlerType } from "restify";

export const getBoards: RequestHandlerType = (_, response) => {
	response.send(200, allowedBoards);
};

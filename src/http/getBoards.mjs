import allowedBoards from "../configs/allowedBoards.json" assert { type: "json" };

export const getBoards = () => {
	return allowedBoards;
};

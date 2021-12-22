import allowedExtensions from "../configs/allowedExtensions.json" assert { type: "json" };

export const getAllowedExtensions = () => {
	return allowedExtensions;
};

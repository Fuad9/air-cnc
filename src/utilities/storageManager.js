/* Initializing the key ============================ */
const getUser = () => {
	const existingUser = sessionStorage.getItem("userId");
	if (existingUser) {
		return existingUser;
	} else {
		const newUser = "user-" + new Date();
		sessionStorage.setItem("userId", newUser);
		return newUser;
	}
};

const getDataKey = () => {
	const userId = getUser();
	return `github/users/${userId}`;
};

/* pushing data to local storage: a temporary place for database ======================= */
const addToDatabase = (key, count) => {
	const currentUser = getFromDatabase();
	currentUser[key] = count;
	localStorage.setItem(getDataKey(), JSON.stringify(currentUser));
};

/* Retrieving data from database ===========================*/
const getFromDatabase = () => {
	const dataKey = getDataKey();
	const data = localStorage.getItem(dataKey) || "{}";
	return JSON.parse(data);
};

/* Removing data from database ======================= */
const removeFromDatabase = (key) => {
	const currentUser = getFromDatabase();
	delete currentUser[key];
	localStorage.setItem(getDataKey(), JSON.stringify(currentUser));
};

export { addToDatabase, getFromDatabase, removeFromDatabase };

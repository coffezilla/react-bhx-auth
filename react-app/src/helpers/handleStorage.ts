// you can create multiple storage stores
const LOCAL_STORAGE_STORE = 'storage_sample';

export const getHasLocalStorageAuth = () => {
	// check local storage
	const localStorage = __getLocalStorage(LOCAL_STORAGE_STORE);
	return { status: !!localStorage, data: localStorage.auth };
};

export const clearLocalStorageAuth = () => {
	__clearLocalStorage(LOCAL_STORAGE_STORE);
	return;
};

export const setLocalStorageAuth = (newLocalStorage: any) => {
	__setLocalStorage(LOCAL_STORAGE_STORE, newLocalStorage);
	return;
};

// setting data to localstorage
export function __setLocalStorage(
	localStorageName: string,
	localStorageValue: any,
	isJson = true
) {
	if (isJson) {
		localStorage.setItem(localStorageName, JSON.stringify(localStorageValue));
	} else {
		localStorage.setItem(localStorageName, localStorageValue);
	}
}

// getting data from localstorage
export function __getLocalStorage(localStorageName: string): any {
	let localStorageValue: any;
	if (localStorage.getItem(localStorageName) !== null) {
		localStorageValue = localStorage.getItem(localStorageName);
	} else {
		localStorageValue = false;
	}

	return JSON.parse(localStorageValue);
}

// clear data from localstorage
export function __clearLocalStorage(localStorageName: string | null) {
	localStorage.clear();
}

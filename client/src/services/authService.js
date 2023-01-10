import { setLocalStorageItem, getObjectFromLocalStorage } from "./localStorageHelper";

export const isSignedIn = () => {
    const user = getObjectFromLocalStorage('user');
    return user ? true : false;
};

export const setLoginSession = (user) => {
    setLocalStorageItem('user', user);
}

export const unsetLoginSession = () => {
    setLocalStorageItem('user', null);
}
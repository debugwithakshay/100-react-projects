export const useLocalStorage = (key) => {
  //set item to local Storage
  function setItem(value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  }

  //get item from local Storage
  function getItem() {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      console.log(error);
    }
  }

  //remove item from local storage
  function removeItem() {
    try {
      return window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  }

  return [setItem, getItem, removeItem];
};

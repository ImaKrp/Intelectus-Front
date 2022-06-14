export const getLocalData = (dataName) => {
  const storedData = localStorage.getItem(dataName);
  if (!storedData) return;
  return JSON.parse(storedData);
};

export const changeLocalData = (dataName, object) => {
  const parsedObject = JSON.stringify(object);
  localStorage.setItem(dataName, parsedObject);
};

export const deleteLocalData = (dataName) => {
  localStorage.removeItem(dataName);
};

export const getSessionData = (dataName) => {
  const storedData = window.sessionStorage.getItem(dataName);
  if (!storedData) return;
  return JSON.parse(storedData);
};

export const changeSessionData = (dataName, object) => {
  const parsedObject = JSON.stringify(object);
  window.sessionStorage.setItem(dataName, parsedObject);
};

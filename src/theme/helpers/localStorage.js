/**
 * Set object to localStorage
 * @param {object} data
 * @param {string} keyName
 */
 export const setObjectToLocalStorage = (data, keyName) => {
  localStorage.setItem(keyName, JSON.stringify(data))
}

/**
 * Get object from localStorage
 * @param {string} keyName
 */
export const getObjectFromLocalStorage = (keyName) => {
  const lsData = localStorage.getItem(keyName)

  return lsData ? JSON.parse(lsData) : null
}

/**
 * To remove item from localStorage
 * @param keyName
 */
export const removeItemFromLocalStorage = (keyName) => {
  localStorage.removeItem(keyName)
}
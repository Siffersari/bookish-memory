export const filterItem = (itemArr, key, query) => {
  return itemArr.filter(item => item[key].indexOf(query) !== -1);
};

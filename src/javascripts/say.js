export default () => {
  const array = [1, 2, 3];
  const newArray = [...array, 4, 5];
  alert(`Hey Yo ${newArray.join(', ')}`);
};

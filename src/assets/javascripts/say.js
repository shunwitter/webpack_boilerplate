export default () => {
  const array = [1, 2, 3];
  const newArray = [...array, 4, 5];
  console.log(`You can user "Object Rest Spread": ${newArray.join(', ')}`);
};

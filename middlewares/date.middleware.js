const currentDate = () => {
  const date = new Date();
  const finalDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return finalDate;
};

module.exports = { currentDate };

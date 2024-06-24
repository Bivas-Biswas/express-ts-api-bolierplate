const db = 'This is comming from  DB';
const getText = () => {
  return db + ' ' + Math.random();
};

export { getText };

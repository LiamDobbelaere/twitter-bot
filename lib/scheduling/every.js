const every = (n, timeUnits, handler) => {
  handler();
  setInterval(handler, n * timeUnits);
};

module.exports = every;

function index (req, res) {
  res.send('Hello World');
}

function init (router) {
  router.get('/', index);
}

module.exports = init;

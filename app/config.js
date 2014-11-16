var config = module.exports;

config.app = {
  name: 'skeleton'
};

config.server = {
  port: process.env.EXPRESS_PORT || 5000,
  ip  : '0.0.0.0'
};

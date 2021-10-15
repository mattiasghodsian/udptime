const Gamedig = require('gamedig');

module.exports = {

  querySteam: function (id, ip) {
    return Gamedig.query({
      type: id,
      host: ip
    }).then((state) => {
      if (state.ping > 0) {
        return {
          status: "online",
          response: state
        }
      } else {
        return {
          status: "offline",
          ip: ip,
          id: id
        }
      }
    }).catch((error) => {
      return {
        status: "offline",
        ip: ip,
        id: id
      }
    });
  }
};
const { locations: locationsMock } = require("./geocode.mock");
const url = require("url");
const functions = require("firebase-functions");

module.exports.geocodeRequest = (request, response, client) => {
  const { city, mock } = url.parse(request.url, true).query;
  if (mock === "true") {
    const locationMock = locationsMock[city.toLocaleLowerCase()];
    return response.json(locationMock);
  }
  client
    .geocode({
      prams: {
        address: city,
        key: functions.config().google.key,
      },
      timeout: 1000,
    })
    .them((res) => {
      return response.json(res.data);
    })
    .catch((err) => {
      response.status(400);
      return response.send(err.response.data.error_message);
    });
};

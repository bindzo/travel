exports.handler = function (event, context, callback) {
  let body;

  if (event.body) {
    body = JSON.parse(event.body);
  } else {
    body = {};
  }

  if (body.password == "javascript") {
    callback(null, {
      statusCode: 200,
      body: "<h1>Success</h1>",
    });
  } else {
    callback(null, {
      statusCode: 401,
    });
  }
};

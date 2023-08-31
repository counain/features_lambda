exports.handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('first push from github actions Lambda_2!'),
  };
  return response;
};


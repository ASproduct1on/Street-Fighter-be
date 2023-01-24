const responseMiddleware = (req, res, next) => {
  // TODO: Implement middleware that returns result of the query
  if (res.err) {
    const code = res.statusCode === 400 ? 400 : 404;
    res.status(code);
    res.send(
      JSON.stringify({
        error: true,
        message: res.err,
      })
    );
  } else {
    res.status(200);
    res.send(res.data);
  }
  next();
};

export { responseMiddleware };

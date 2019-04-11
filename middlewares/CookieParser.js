const CookieParser = (req, res, next) => {
  console.log("Log ::: req ::: ", req);
  next();
};

export default CookieParser;
const cookieMiddleWare = (req,res,next) => {
    res.cookie("hello", "world", {maxAge: 60000})
  next()
}

export default cookieMiddleWare
const cookieMiddleWare = (req,res,next) => {
    res.cookie(
      "hello",
       "world",
       {
        maxAge: 10000,
        signed: true,
      })
  next()
}

export default cookieMiddleWare
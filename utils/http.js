function request(url,callBack){
wx.request(
  {
    url:url,
    success(res){
      callBack(res.data)
    }
  }
)
}
function requestMovies(url,key,title,callBack) {
  wx.request({
    url: url,
    success(res){
      callBack(res.data,key,title)
    }
  })
  
}

module.exports ={
  request,
  requestMovies,
}
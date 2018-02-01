//格式化时间
let formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
//格式化数字
let formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//经纬度格式化
let formatLocation = (longitude, latitude)=> {
    if (typeof longitude === 'string' && typeof latitude === 'string') {
        longitude = parseFloat(longitude)
        latitude = parseFloat(latitude)
    }

    longitude = longitude.toFixed(2)
    latitude = latitude.toFixed(2)

    return {
        longitude: longitude.toString().split('.'),
        latitude: latitude.toString().split('.')
    }
}

// 显示繁忙提示
let showBusy = text => wx.showToast({
    title: text,
    icon:'loading',
    duration:10000
})

//显示成功提示
let showSuccess = text => wx.showToast({
    title: text,
    icon:'success'
})

// 显示失败提示
let showModel = (title, content) => {
    wx.hideToast();
    wx.showModal({
        title,
        content: JSON.stringify(content),
        showCancel: false
    })
}
let jsonToUrl = (json) => {
    var str = [];
    for (var p in json) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
    }
    return str.join("&");
}

module.exports = { 
    formatTime, 
    showBusy, 
    showSuccess, 
    showModel,
    jsonToUrl 
}

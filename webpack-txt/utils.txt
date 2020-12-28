// 数组长度过滤
export function ellipsis (value, len) {
  if (!value) return ''
  if (value.length > len) {
    return value.slice(0, len) + '...'
  }
  return value
}
// 回到页面顶部
export function scroll2Top (timer) {
  cancelAnimationFrame(timer)
  timer = requestAnimationFrame(function fn () {
    let oTop = document.body.scrollTop || document.documentElement.scrollTop

    if (oTop > 0) {
      document.body.scrollTop = document.documentElement.scrollTop = oTop - 250
      timer = requestAnimationFrame(fn)
    } else {
      cancelAnimationFrame(timer)
    }
  })
}
// 时间戳转成日期
export function timeS2Date (data) {
  const timeS = new Date(parseInt(data))
  const year = timeS.getFullYear()
  const mon = timeS.getMonth() + 1
  const day = timeS.getDate()
  const hour = timeS.getHours()
  const min = timeS.getMinutes()
  const date = year + '年' + mon + '月' + day + '日 ' + hour + ':' + min
  return date
}
// 数组按数字大小排序
export function sortArr (arr) {
  return arr.sort(sortNum)
}
export function sortNum (a, b) {
  return a - b
}

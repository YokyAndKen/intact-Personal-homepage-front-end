// 获取assets静态资源方法
const getAssetsFile = (url) => {
  return new URL(`../assets/${url}`, import.meta.url).href
}

export default {
  getAssetsFile
}
import { createPinia } from 'pinia'
//引入pinia的持久化存储插件
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()
//使用插件
store.use(piniaPluginPersist)

// 开启数据缓存
// persist: {
//   enable: true,
//   strategies: [{
//     key: 'yokyStorage',
//     storage: localStorage,
//   需要开启持久化存储的项目
//     paths: ['age', 'name']  
//   }]
// }


export default store

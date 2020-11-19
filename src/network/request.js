import axios from 'axios'

/*export function request(config,success,failure) {
    const instance=axios.create({
        baseURL:'http://127.0.0.1:8000',
        timeout:5000//设置5000毫秒，即超过5秒即报错没有获取到
    })
    //发送真正的网络请求
    instance(config)
        .then(res=>success(res))
        .catch(res =>failure(err))
}*/
export function request(config,success,failure) {
    const instance=axios.create({
        baseURL:'http://127.0.0.1:8000',
        timeout:5000//设置5000毫秒，即超过5秒即报错没有获取到
    })

    //拦截器
    //作用：
    //1.当某些服务器获取的信息不符合我们的需求时，可在这拦截中做一些更改
    //2.当每次发送网络请求时，希望在界面面上出现等待的图标
    //3.某些网络请求必须携带一些特殊的信息

    //请求拦截例如下：
    instance.interceptors.request.use(config=>{
        // console.log(config)
        return config
    },
       error => {
        // console.log(error)
    })
    //响应拦截
    instance.interceptors.response.use(res=>{
        // console.log(res)
        return res.data
    },
        error => {
        // console.log(error)
        })

    //发送真正的网络请求
    return instance(config)
}

import axios from "axios"
const instance = axios.create();

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

// instance.request({
//     url:"http://api.artgoer.cn:8084/artgoer/api/v1/user/324380/v3/topic/topicHomeByLabel?pageIndex=1&token=b544cd63-6d42-46fe-a96c-3cf96bae3113&topicId=62187",
//     method:"get",
// }).then((res)=>{
//     console.log(res)
//     console.log(1111)
// })

export default instance

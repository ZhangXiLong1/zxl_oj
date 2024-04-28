# 每次更新后端接口文档时候执行以下代码即可自动生成前端axios请求
npm install axios
npm install openapi-typescript-codegen --save-dev
openapi --input http://localhost:8121/api/v2/api-docs --output ./generated --client axios
# 如果想要自定义请求参数
## 使用代码生成器提供的全局参数修改对象 core/OpenAPI.ts
export const OpenAPI: OpenAPIConfig = {
    BASE: 'http://localhost:8121',
    VERSION: '1.0',
    WITH_CREDENTIALS: false,
    CREDENTIALS: 'include',
    TOKEN: undefined,
    USERNAME: undefined,
    PASSWORD: undefined,
    HEADERS: undefined,
    ENCODE_PATH: undefined,
};
## 直接定义axios请求库的全局参数 比如全局情况拦截器
```
// Add a request interceptor
import axios from "axios";

axios.interceptors.request.use(function (config) {
// Do something before request is sent
return config;
}, function (error) {
// Do something with request error
return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
console.log("响应", response);
// Any status code that lie within the range of 2xx cause this function to trigger
// Do something with response data
return response;
}, function (error) {
// Any status codes that falls outside the range of 2xx cause this function to trigger
// Do something with response error
return Promise.reject(error);
});
```

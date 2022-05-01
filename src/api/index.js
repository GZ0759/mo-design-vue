import axios from 'axios';
import { customBaseUrl } from './environment';
import { apiList } from './urlList';

/* 初始化axioas */
let service = axios.create({
  baseURL: customBaseUrl,
  timeout: 20000,
});

/* 封装接口请求 */
const methods = Object.keys(apiList).reduce((acc, cur) => {
  let { path, method = 'get' } = apiList[cur];
  const promise = async (params) => {
    const key = method === 'get' ? 'params' : 'data';
    let config = {
      method,
      [key]: params,
    };
    let { data } = await service(path, config);
    return data;
  };
  return Object.assign(acc, {
    [cur]: promise,
  });
}, {});

/* 响应拦截 */
service.interceptors.response.use(
  (response) => response,
  (error) => {
    // 拦截接口超时
    const isTimeOut =
      error.code == 'ECONNABORTED' && error.message.indexOf('timeout') !== -1;
    if (isTimeOut) {
      const Toast = undefined; // 可引入vant的Toast组件
      Toast && Toast.clear();
      Toast && Toast.fail('网络繁忙，请稍后重试');
    }
    // 处理响应失败
    return Promise.reject(error);
  }
);
export default methods;

/**
 * 格式化时间戳
 * @param {String|Number} timestamp 毫秒时间戳
 * @param {String} [format = 'YYYY-MM-DD HH:mm:ss'] 格式化类型正则
 * @example
 * // return '2022年04月29日 17:03:21:332'
 * formatTime(1651223001332, 'YYYY年MM月DD日 HH:mm:ss:SSS');
 * @returns {String}
 */

export const formatTime = (timestamp, format) => {
  // 设置默认格式，毫秒S/SS/SSS均显示三位数
  format = format ? format.replace(/S+/, 'S') : 'YYYY-MM-DD HH:mm:ss';
  let date = new Date(parseInt(timestamp));
  // 正则映射
  let data = {
    'M+': date.getMonth() + 1, //月
    'D+': date.getDate(), //日
    'H+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds(), //毫秒
  };

  // 实际年份字符串
  let yearStr = date.getFullYear() + '';
  // 匹配年份y+
  let [yearExp] = format.match(/Y+/) || [];
  if (yearExp) {
    let expLen = 4 - yearExp.length;
    // 年份由右往左截取
    let res = yearStr.substring(expLen);
    // 替换年份内容
    format = format.replace(yearExp, res);
  }

  // 遍历替换除了年份外的内容
  format = Object.keys(data).reduce((pre, cur) => {
    // 匹配的其他正则形式
    let [dataExp] = pre.match(cur) || [];
    // 匹配的其他时间字符串
    let dataCont = data[cur] + '';
    if (!dataExp) return pre;
    // 部分单位填充左侧的0字符
    let padding = dataCont.padStart(2, '0');
    // 一位数或毫秒直接输出
    let res = dataExp.length === 1 ? dataCont : padding;
    return pre.replace(dataExp, res);
  }, format);

  return format;
};

// console.log(formatTime(new Date().getTime(), 'YYYY年MM月DD日'));
// console.log(formatTime(new Date().getTime(), 'YYYY年第q季度'));
// console.log(formatTime(new Date().getTime(), 'YYYY-MM-DD HH:mm:ss'));
// console.log(formatTime(new Date().getTime(), 'HH时mm分ss秒'));
// console.log(formatTime(new Date().getTime(), 'HH:mm:sss:SS'));

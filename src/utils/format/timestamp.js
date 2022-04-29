/**
 * 格式化时间戳
 * @param {String|Number} timestamp 毫秒时间戳
 * @param {String} [format = 'yyyy-MM-dd HH:mm:ss'] 格式化类型正则
 * @example
 * // return '2022年04月29日 17:03:21'
 * formatTime(1651223001332, 'yyyy年MM月dd日 HH:mm:ss');
 * @returns {String}
 */

export const formatTime = (timestamp, format) => {
  let date = new Date(parseInt(timestamp));
  let data = {
    'M+': date.getMonth() + 1, //月
    'd+': date.getDate(), //日
    'H+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds(), //毫秒
  };
  if (!format) format = 'yyyy-MM-dd HH:mm:ss';
  // 格式化年份
  if (/(y+)/.test(format)) {
    let yearStr = date.getFullYear() + '';
    // 匹配的年份y正则
    let yearExp = RegExp.$1;
    format = format.replace(yearExp, () => {
      // 四位年份中的倒数个数
      let len = 4 - yearExp.length;
      return yearStr.substring(len);
    });
  }
  // 格式化除了年份外的单位
  for (let k in data) {
    // 添加括号分组的正则
    let group = new RegExp('(' + k + ')');
    if (group.test(format)) {
      // 匹配的正则
      let dataExp = RegExp.$1;
      format = format.replace(dataExp, () => {
        // 匹配的内容字符串
        let dataCont = data[k] + '';
        if (dataExp.length === 1) return dataCont;
        // 正则超过两位数则补0
        return ('00' + dataCont).substring(dataCont.length);
        // 非ie浏览器可使用padStart
        // return dataCont.padStart(2, 0)
      });
    }
  }
  return format;
};

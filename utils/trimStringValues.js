function trimStringValues(data) {
  if (Array.isArray(data)) {
    // 处理数组类型的数据源
    for (let i = 0; i < data.length; i++) {
      if (typeof data[i] === 'string') {
        data[i] = data[i].trim();
      } else if (typeof data[i] === 'object') {
        trimStringValues(data[i]); // 递归调用以处理嵌套对象或数组
      }
    }
  } else if (typeof data === 'object') {
    // 处理对象类型的数据源
    for (let key in data) {
      if (typeof data[key] === 'string') {
        data[key] = data[key].trim();
      } else if (typeof data[key] === 'object') {
        trimStringValues(data[key]); // 递归调用以处理嵌套对象或数组
      }
    }
  }
}

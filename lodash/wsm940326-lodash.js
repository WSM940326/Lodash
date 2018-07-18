var wsm940326 = {

  // lodash --- 01:chunk
  chunk: function (array, size) {
    var result = []
    for (var i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size))
    }
    return result
  },


  // lodash ---> 02:compact
  compact: function (array) {
    if (array == null) return []
    return array.filter((v) => !!v !== false)

  },


  // lodash ---> 03:concat
  concat: function (arr, ...arg) {
    let result = arr;
    for (let item of arg) {
      if (Array.isArray(item)) {
        for (let subitem of item) {
          result.push(subitem);
        }
      } else {
        result.push(item);
      }
    }
    return result;
  },


  // lodash ---> 04:difference
  difference: function (array, values) {

    if (!array || !Array.isArray(array) || array.length <= 0) {
      return []
    }
    var aaa = Array.from(arguments).slice(1)
    if (!aaa || aaa.length <= 0) {
      return array.concat()
    }
    return array.filter(function (value) {
      return aaa.indexOf(value) < 0
    })

  },



  // lodash ---> 05:differenceBy
  differenceBy: function (array) {

    if (!array || !Array.isArray(array) || array.length <= 0) {
      return []
    }
    var aaa = arguments[1]
    if (!aaa || !Array.isArray(aaa) || aaa.length <= 0) {
      return array.concat()
    }
    var func = arguments[2]
    if (!func) {
      func = x => x
    } else if (typeof func === 'stying') {
      var funcs = func
      func = date => date[funcs]
    }
    var exc = aaa.map(function (value) {
      return func(value)
    })
    return array.filter(function (value) {
      return exc.indexOf(func(value)) < 0
    })
  },


  // lodash ---> 06:differenceWith
  differenceWith: function (array) {
    if (!array || !Array.isArray(array) || array.length <= 0) {
      return []
    }
    var except = arguments[1]
    if (!except || !Array.isArray(except) || except.length <= 0) {
      return array.concat()
    }
    var comparator = arguments[2]
    if (!comparator || typeof comparator !== 'function') {
      comparator = (arrVal, othVal) => arrVal === othVal
    }
    return array.filter(function (value) {
      var flag = true
      except.forEach(element => {
        if (comparator(value, element)) {
          flag = false
          return
        }
      })
      return flag
    })
  },

  // lodash ---> 07:drop
  drop: function (array, n = 1) {
    const length = array == null ? 0 : array.length
    return length ?
      array.slice(n < 0 ? 0 : n, length) : []
  },

  // lodash ---> 08:dropRight
  dropRight: function (array, n = 1) {

    if (!array || !Array.isArray(array) || array.length <= 0) {
      return []
    }
    n = parseInt(n)
    if (isNaN(n)) {
      n = 1
    }
    if (n > array.length) {
      n = array.length
    }
    return array.slice(0, array.length - n)

  },

  // lodash ---> 09:dropRightWhile
  dropRightWhile: function (array, predicate) {

    var tmpArray = array.slice()
    return dropRightWhile(tmpArray.reverse(), predicate).reverse()

  },


  // lodash ---> 10:dropWhile
  dropWhile: function (array, predicate) {
    if (!array || !Array.isArray(array) || array.length <= 0) {
      return []
    }
    if (!predicate) {
      return array.concat()
    }
    var except
    if (typeof predicate === 'function') {
      except = predicate
    } else if (Array.isArray(predicate)) {
      except = obj => {
        var flag = true
        for (var i = 0; i < predicate.length; i += 2) {
          if (obj[predicate[i]] !== predicate[i + 1]) {
            flag = false
          }
        }
        return flag
      }
    } else if (typeof predicate === 'object') {
      except = obj => {
        var flag = true
        for (var key in obj) {
          if (obj[key] !== predicate[key]) {
            flag = false
          }
        }
        return flag
      }
    } else if (typeof predicate === 'string') {
      except = obj => {
        return obj[predicate]
      }
    } else {
      return array.concat()
    }
    var exceptArr = [];
    array.forEach(function (obj, index) {
      if (except(obj)) {
        exceptArr.push(index);
      }
    })
    var start = 0
    exceptArr.forEach(function (value, index) {
      if (value === index) {
        start++
      } else {
        return
      }
    });
    return array.slice(start)


  },


  // lodash ---> 11: map
  map: function (array) {
    let result = []
    if (!(array && array.length)) {
      return result
    }
    for (let i = 0; i < array.length; i++) {
      if (fn(array[i], i, array)) {
        result.push(i)
      }
    }
    return result
  },

  /** 
   * javascript comment 
   * @Author: flydreame 
   * @Date: 2018-07-18 11:57:24 
   * @Desc:  
   */


  filter: function (array, test) {
    var filteredArr = []
    for (var i = 0; i < arr.length; i++) {
      if (test(arr[i])) {
        filteredArr.push(arr[i])
      }
    }
    return filteredArr
  },

  /** 
   * javascript comment 
   * @Author: flydreame 
   * @Date: 2018-07-18 11:57:17 
   * @Desc:  
   */

  forEach: function (array) {


  },

  /** 
   * javascript comment 
   * @Author: flydreame 
   * @Date: 2018-07-18 11:57:13 
   * @Desc:  
   */


  slice: function (array) {

  },

  /** 
   * javascript comment 
   * @Author: flydreame 
   * @Date: 2018-07-18 11:56:19 
   * @Desc:  
   */
  fill: function (array, value, start = 0, end) {
    if (!array || !Array.isArray(array)) return []
    if (!end) {
      end = array.length
    }
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },

  /** 
   * javascript comment 
   * @Author: flydreame 
   * @Date: 2018-07-18 11:56:12 
   * @Desc:  
   */
  findIndex: function (array, predicate = v => v, fromIndex = 0) {
    if (!array || !Array.isArray(array) || array.length <= 0) {
      return -1;
    }
    if (predicate === undefined || predicate === null) {
      return 0;
    }
    var func;
    if (typeof predicate === 'function') {
      func = predicate;
    } else if (Array.isArray(predicate)) {
      func = val => {
        for (var i = 0; i < predicate.length; i += 2) {
          if (val[predicate[i]] !== predicate[i + 1]) {
            return false;
          }
        }
        return true;
      }
    } else if (typeof predicate === 'object') {
      func = val => {
        for (var key in predicate) {
          if (val[key] !== predicate[key]) {
            return false;
          }
        }
        return true;
      }
    } else if (typeof predicate === 'string') {
      func = val => val[predicate];
    } else {
      return -1;
    }
    for (var i = fromIndex; i < array.length; i++) {
      if (func(array[i])) {
        return i;
      }
    }
    return -1;
  },


  /** 
   * javascript comment 
   * @Author: flydreame 
   * @Date: 2018-07-18 11:56:28 
   * @Desc:  
   */

  findLastIndex: function (array, predicate = v => v, fromIndex) {
    if (!array || !Array.isArray(array) || array.length <= 0) {
      return -1;
    }
    if (predicate === undefined || predicate === null) {
      return 0;
    }
    if (fromIndex === undefined || fromIndex === null) {
      fromIndex = array.length - 1;
    }
    var func;
    if (typeof predicate === 'function') {
      func = predicate;
    } else if (Array.isArray(predicate)) {
      func = val => {
        for (var i = 0; i < predicate.length; i += 2) {
          if (val[predicate[i]] !== predicate[i + 1]) {
            return false;
          }
        }
        return true;
      }
    } else if (typeof predicate === 'object') {
      func = val => {
        for (var key in predicate) {
          if (val[key] !== predicate[key]) {
            return false;
          }
        }
        return true;
      }
    } else if (typeof predicate === 'string') {
      func = val => val[predicate];
    } else {
      return -1;
    }
    for (var i = fromIndex; i >= 0; i--) {
      if (func(array[i])) {
        return i;
      }
    }
    return -1;
  },

  /** 
   * javascript comment 
   * @Author: flydreame 
   * @Date: 2018-07-18 14:04:35 
   * @Desc:  
   */

  flatten: function (array) {
    if (!array || !Array.isArray(array) || array.length <= 0) {
      return []
    }
    var result = []
    array.forEach(val => {
      if (Array.isArray(val)) {
        val.forEach(val => result.push(val));
      } else {
        result.push(val)
      }
    })
    return result
  },


  /** 
   * javascript comment 
   * @Author: flydreame 
   * @Date: 2018-07-18 11:56:38 
   * @Desc:  
   */

  formPairs: function (pairs) {
    if (!pairs || !Array.isArray(pairs) || pairs.length <= 0) {
      return []
    }
    var obj = {}
    pairs.forEach(val => {
      if (Array.isArray(val)) {
        for (var i = 0; i < val.length; i += 2) {
          obj[val[i]] = val[i + 1]
        }
      }
    })
    return obj

  },


  /** 
   * javascript comment 
   * @Author: flydreame 
   * @Date: 2018-07-18 11:59:46 
   * @Desc:  
   */

  head: function (array) {
    if (!array || !Array.isArray(array) || array.length <= 0) {
      return undefined;
    }
    return array[0];
  },


  /** 
   * javascript comment 
   * @Author: flydreame 
   * @Date: 2018-07-18 11:56:41 
   * @Desc:  
   */


  flattenDeep: function (array) {
    if (!array || !Array.isArray(array)) {
      return [];
    }
    var result = [];

    function addItem(array) {
      array.forEach(element => {
        if (Array.isArray(element)) {
          addItem(element);
        } else {
          result.push(element);
        }
      });
    }
    addItem(array);
    return result;
  },

  /** 
   * javascript comment 
   * @Author: flydreame 
   * @Date: 2018-07-18 11:56:49 
   * @Desc:  
   */

  flattenDepth: function (array, depth = 1) {
    if (!array || !Array.isArray(array) || array.length <= 0) {
      return [];
    }
    var result = [];

    function addItem(arr, dep) {
      arr.forEach(element => {
        if (Array.isArray(element) && dep > 0) {
          addItem(element, dep - 1);
        } else {
          result.push(element);
        }
      });
    }
    addItem(array, depth);
    return result;
  },



  /** 
   * javascript comment 
   * @Author: flydreame 
   * @Date: 2018-07-18 11:57:00 
   * @Desc:  
   */

  /*-------------*/
  sum: function (ary) {

  },

  /*---------------*/

  sumBy: function (ary, iterate) {
    var result = 0
    for (var i = 0; i < ary.length; i++) {
      result += iteratee(ary[i])
    }
    return result
  },

  /** 
   * javascript comment 
   * @Author: flydreame 
   * @Date: 2018-07-18 20:05:52 
   * @Desc:  
   */

  indexOf: function (array, value, fromIndex = 0) {
    if (!array || !Array.isArray(array) || array.length <= 0) {
      return -1;
    }
    for (let i = fromIndex, len = array.length; i < len; i++) {
      if (array[i] === value) {
        return i;
      }
    }
    return -1;
  },

  /** 
   * javascript comment 
   * @Author: flydreame 
   * @Date: 2018-07-18 19:25:47 
   * @Desc:  
   */

  last: function (array) {
    if (!array || !Array.isArray(array) || array.length <= 0) {
      return undefined;
    }
    return array[array.length - 1];
  },

  /** 
   * javascript comment 
   * @Author: flydreame 
   * @Date: 2018-07-18 18:55:44 
   * @Desc:  
   */

  lastIndexOf: function (array, value, fromIndex) {
    if (!array || !Array.isArray(array) || array.length <= 0) {
      return -1;
    }
    fromIndex = fromIndex == undefined ? array.length - 1 : fromIndex;
    return array.lastIndexOf(value, fromIndex);
  },













}
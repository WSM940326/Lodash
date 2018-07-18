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
    return array.filter(function(value) {
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
    var aaa = arguments[1]
    if (!aaa || !Array.isArray(aaa) || aaa.length <= 0) {
      return array.concat()
    }
    var com = arguments[2]
    if (!com || typeof com)


  },

  // lodash ---> 07:drop
  drop: function (array, n = 1) {
    const length = array == null ? 0 : array.length
    return length ?
      array.slice(n < 0 ? 0 : n, length) :
      []
  },

  // lodash ---> 08:dropRight
  dropRight: function (array) {



  },

  // lodash ---> 09:dropRightWhile
  dropRightWhile: function (array) {



  },


  // lodash ---> 10:dropWhile
  dropWhile: function (array) {



  },

  map: function (array) {
    
    let newArr = []
    arr.reduce((prev, current, index, array) => {
      newArr.push(current + '~')
    }, 0)
    

  },

  filter: function (array) {
    
    let newArr = []
    arr.reduce((prev, current, index, array) => {
      current.length > 2 && newArr.push(current)
    }, 0)
    


  },


  forEach: function (array) {
  
    return arr.reduce((prev, current, index, array) => {
      console.log(current)
    }, 0)
     
  },














































}
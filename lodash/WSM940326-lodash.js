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
  difference: function (array) {



  },



  // lodash ---> 05:differenceBy
  differenceBy: function (array) {



  },

  
  // lodash ---> 06:differenceWith
  differenceWith: function (array) {



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
    const carryBricks = arr => {
      let newArr = []
      arr.reduce((prev, current, index, array) => {
        newArr.push(current + '~')
      }, 0)
     }

  },

  filter: function (array) {
    const carryBricks = arr => {
      let newArr = []
      arr.reduce((prev, current, index, array) => {
        current.length > 2 && newArr.push(current)
      }, 0)
    }


  },


  forEach: function (array) {
    const carryBricks = arr => {
      return arr.reduce((prev, current, index, array) => {
        console.log(current)
      }, 0)
     }
  },














































}
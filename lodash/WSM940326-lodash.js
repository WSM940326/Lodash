
var wsm940326 = {
// lodash --- 01:chunk
  chunk: function (array, size = 1) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      result.push(array.slice(i, size+ 1))
    }
    return result
  },


// lodash --- 02:compact
  compact: function (array) {
    if (array == null) return []
      return array.filter((v) => !!v!==false)
      
  },
// lodash --- 03:concat

  concat: function (array) {
      


  },
 // lodash --- 04:difference
  difference: function (array) {
      


  },
// lodash --- 05:differenceBy
  differenceBy: function (array) {
      


  },
// lodash --- 06:differenceWith
  differenceWith: function (array) {
      


  },

// lodash --- 07:dorp
dorp: function (array, n = 1) {
    const length = array == null ? 0 : array.length
      return length
    ? array.slice(n < 0 ? 0 : n, length)
    : []
},

  
















































}




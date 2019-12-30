'use strict';

// ========================================
// = Add End Function to Array Capability =
// ========================================
if (!Array.prototype.end){
    Array.prototype.end = function(){
        return this[this.length - 1];
    };
};

const toSlug = (str) => {
  var res = str.toLowerCase();
  res = res.replace(/ /g, "-");
  return res;
}


module.exports = {
  toSlug
}

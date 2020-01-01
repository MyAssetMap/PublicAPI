'use strict';

// ========================================
// = Add End Function to Array Capability =
// ========================================
if (!Array.prototype.end){
    Array.prototype.end = function(){
        return this[this.length - 1];
    };
};

/**
 * Object.prototype.forEach() polyfill
 * https://gomakethings.com/looping-through-objects-with-es6/
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!Object.prototype.forEach) {
	Object.defineProperty(Object.prototype, 'forEach', {
		value: function (callback, thisArg) {
			if (this == null) {
				throw new TypeError('Not an object');
			}
			for (var key in this) {
				if (this.hasOwnProperty(key)) {
					callback.call(thisArg, this[key], key, this);
				}
			}
		}
	});
}

const toSlug = (str) => {
  var res = str.toLowerCase();
  res = res.replace(/ /g, "-");
  return res;
}

const processLayerID = (layerID) => {
  if (isNaN(layerID) && layerID != null) {
    var layerIDArr = layerID.split("_");
    if (layerIDArr.length > 1) layerID = layerIDArr.end();
    console.log('Layer ID is being parsed: '+layerID);
  }
  return layerID;
}


module.exports = {
  toSlug,
  processLayerID
}

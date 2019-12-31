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

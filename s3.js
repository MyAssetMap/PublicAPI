var AWS = require('aws-sdk');
var s3 = new AWS.S3();

const config = require('./config');

module.exports = class GEOJSONTILES {
   
  static getFile(file, callback) {
    if (typeof file === 'undefined') return callback(true, 'File Name (`file`) must be supplied.');
      
    s3.getObject({Bucket: config.s3.bucket, Key: file}, function (error, data) {
      if (error) return callback(true, error);
      
      callback(false,data.Body.toString());
    });
  }
};


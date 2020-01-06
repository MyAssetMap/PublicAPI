'use strict';

const config = require('../config');
const util = require('../util');

module.exports = class DB {

  // ===================
  // = QUERY FUNCTIONS =
  // ===================

  static runQuery(pool, queryMsg, callback) {
    var thisClass = this;
    console.log('QUERY:',queryMsg)
  
    pool.query(queryMsg, (error, results) => {
      if (error) {
        callback(true, error.message)
      }else callback(false, results.rows);
    })
  }

  static getTable(pool, table, callback) {
    var thisClass = this;
    thisClass.runQuery(pool, 'SELECT * FROM public."' + table + '"', callback);
  }

  static getRowFromTable(pool, table, row, callback) {
    var thisClass = this;
    thisClass.runQuery(pool, 'SELECT ' + thisClass.fromSingleValueToValues(row,'"') + ' FROM public."' + table + '"', callback);
  }

  static getTableWhere(pool, table, fieldName, value, callback) {
    var thisClass = this;
    if (!Array.isArray(value)) {
      thisClass.runQuery(pool, 'SELECT * FROM public."' + table + '" WHERE "' + fieldName + '" = ' + thisClass.processValue(value) + ';', callback);
    }else{
      if (value.length == 0) callback(false, [])
      thisClass.runQuery(pool, 'SELECT * FROM public."' + table + '" WHERE "' + fieldName + '" IN (' + thisClass.fromSingleValueToValues(value) + ');', callback);
    }
  }

  static getRowFromTableWhere(pool, table, row, fieldName, value, callback) {
    var thisClass = this;
    if (!Array.isArray(value)) {
      thisClass.runQuery(pool, 'SELECT ' + thisClass.fromSingleValueToValues(row,'"') + ' FROM public."' + table + '" WHERE "' + fieldName + '" = ' + thisClass.processValue(value) + ';', callback);
    }else{
      if (value.length == 0) callback(false, [])
      thisClass.runQuery(pool, 'SELECT ' + thisClass.fromSingleValueToValues(row,'"') + ' FROM public."' + table + '" WHERE "' + fieldName + '" IN (' + thisClass.fromSingleValueToValues(value) + ');', callback);
    }
  }

  static getInnerJoin(pool, fields, firstTable, firstIdentifier, secondTable, secondIdentifier, callback) {
    var thisClass = this;
    thisClass.runQuery(pool, 'SELECT "' + fields + '" from public."' + firstTable + '", public."' + secondTable + '" Where public."' + firstTable + '".' + firstIdentifier + ' = public."' + secondTable + '".' + secondIdentifier + ';', callback);
  }

  static updateRow(pool, table, column, value, identifierColumn, identifier, callback) {
    var thisClass = this;
    thisClass.runQuery(pool, 'UPDATE public."' + table + '" SET "' + column + '" = ' + thisClass.processValue(value) + ' WHERE "' + identifierColumn + '" = \'' + identifier + '\';', callback);
  }

  static appendToJSONRow(pool, table, column, value, identifierColumn, identifier, callback) {
    var thisClass = this;
    thisClass.runQuery(pool, 'UPDATE public."' + table + '" SET "' + column + '" = "' + column + '"::jsonb || '+thisClass.processValue(value)+'::jsonb WHERE "' + identifierColumn + '" = \'' + identifier + '\';', callback);
  }

  static deleteFromJSONRow(pool, table, column, value, identifierColumn, identifier, callback) {
    var thisClass = this;
    thisClass.runQuery(pool, 'UPDATE public."' + table + '" SET "' + column + '" = "' + column + '"::jsonb || '+thisClass.processValue(value)+'::jsonb WHERE "' + identifierColumn + '" = \'' + identifier + '\';', callback);
  }

  static insertRow(pool, table, columns, values, callback) {
    var thisClass = this;
    thisClass.runQuery(pool, 'INSERT INTO public."' + table + '" (' + thisClass.fromSingleValueToValues(columns,'"') + ') VALUES (' + thisClass.fromSingleValueToValues(values) + ') RETURNING id;', function(error, row) {
      if (error) return callback(true, row);
      callback(false, row[0].id)
    });
  }

  static deleteTableWhere(pool, table, fieldName, value, callback) {
    var thisClass = this;
    if (!Array.isArray(value)) {
      thisClass.runQuery(pool, 'DELETE FROM public."' + table + '" WHERE "' + fieldName + '" = ' + thisClass.processValue(value) + ';', callback);
    }else{
      if (value.length == 0) callback(false, [])
      thisClass.runQuery(pool, 'DELETE FROM public."' + table + '" WHERE "' + fieldName + '" IN (' + thisClass.fromSingleValueToValues(value) + ');', callback);
    }
  }
  
  // ========================
  // = PROCESSING FUNCTIONS =
  // ========================
  static processValue(value,char) {
    var thisClass = this;
    if (typeof char === 'undefined') char = `'`;
  
    if (typeof value === 'string') {
      value = value.trim(); //We remove any extra space used between values
    }else if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    if (value === null) {
      value = "null";
    }else{
      if (value === '') {
        value = char+char;
      }else{
        if (isNaN(value)) value = char + value + char;
      }
    }
  
    return value;
  }

  static fromSingleValueToValues(valuesOrValues,char) {
    var thisClass = this;
    if (typeof char === 'undefined') char = `'`;
  
    if (typeof valuesOrValues === 'object' || (typeof valuesOrValues === 'string' && valuesOrValues.includes(","))) {
      var values
      if (typeof valuesOrValues === 'object') {
        values = valuesOrValues;
      }else values = valuesOrValues.split(',');
    
      var result = [];

      values.forEach(function(value) {
        result.push(thisClass.processValue(value,char));
      });
    
      return result.join(`, `);
    } else if (typeof valuesOrValues === 'string') return thisClass.processValue(valuesOrValues,char);
  }
}
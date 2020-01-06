'use strict';

// const config = require('../config');
// const util = require('../util');

module.exports = class DB {

  // ===================
  // = QUERY FUNCTIONS =
  // ===================

  static runQuery(pool, queryMsg, callback) {
    console.log('QUERY:',queryMsg)
  
    pool.query(queryMsg, (error, results) => {
      if (error) {
        callback(true, error.message)
      }else callback(false, results.rows);
    })
  }

  static getTable(pool, table, callback) {
    this.runQuery(pool, 'SELECT * FROM public."' + table + '"', callback);
  }

  static getRowFromTable(pool, table, row, callback) {
    this.runQuery(pool, 'SELECT ' + this.fromSingleValueToValues(row,'"') + ' FROM public."' + table + '"', callback);
  }

  static getTableWhere(pool, table, identifierColumn, identifier, callback) {
    if (Array.isArray(identifier) && identifier.length == 0) return callback(false, [])
    this.runQuery(pool, 'SELECT * FROM public."' + table + '" WHERE ' + this.processWhere(identifierColumn,identifier,callback) + ';', callback);
  }

  static getRowFromTableWhere(pool, table, row, identifierColumn, identifier, callback) {
    if (Array.isArray(identifier) && identifier.length == 0) return callback(false, [])
    this.runQuery(pool, 'SELECT ' + this.fromSingleValueToValues(row,'"') + ' FROM public."' + table + '" WHERE ' + this.processWhere(identifierColumn,identifier,callback) + ';', callback);
  }

  static getInnerJoin(pool, fields, firstTable, firstIdentifier, secondTable, secondIdentifier, callback) {
    this.runQuery(pool, 'SELECT "' + fields + '" from public."' + firstTable + '", public."' + secondTable + '" Where public."' + firstTable + '".' + firstIdentifier + ' = public."' + secondTable + '".' + secondIdentifier + ';', callback);
  }

  static bulkUpdateRow(pool, table, changes, identifierColumn, identifier, callback) {
    var thisClass = this;
    if (typeof changes !== 'object') return callback(true, 'Changes were invalid.')
      
    var changeText = [];
    changes.forEach(function(value, column) {
      changeText.push('"' + column + '" = ' + thisClass.processValue(value));
    })
    this.runQuery(pool, 'UPDATE public."' + table + '" SET ' + changeText.join(`, `) + ' WHERE ' + this.processWhere(identifierColumn,identifier,callback) + ';', callback);
  }

  static updateRow(pool, table, column, value, identifierColumn, identifier, callback) {
    this.runQuery(pool, 'UPDATE public."' + table + '" SET "' + column + '" = ' + this.processValue(value) + ' WHERE ' + this.processWhere(identifierColumn,identifier,callback) + ';', callback);
  }

  static appendToJSONRow(pool, table, column, value, identifierColumn, identifier, callback) {
    this.runQuery(pool, 'UPDATE public."' + table + '" SET "' + column + '" = "' + column + '"::jsonb || '+this.processValue(value)+'::jsonb WHERE ' + this.processWhere(identifierColumn,identifier,callback) + ';', callback);
  }

  static deleteFromJSONRow(pool, table, column, value, identifierColumn, identifier, callback) {
    this.runQuery(pool, 'UPDATE public."' + table + '" SET "' + column + '" = "' + column + '"::jsonb || '+this.processValue(value)+'::jsonb WHERE ' + this.processWhere(identifierColumn,identifier,callback) + ';', callback);
  }

  static insertRow(pool, table, columns, values, callback) {
    this.runQuery(pool, 'INSERT INTO public."' + table + '" (' + this.fromSingleValueToValues(columns,'"') + ') VALUES (' + this.fromSingleValueToValues(values) + ') RETURNING id;', function(error, row) {
      if (error) return callback(true, row);
      callback(false, row[0].id)
    });
  }

  static deleteTableWhere(pool, table, identifierColumn, identifier, callback) {
    if (Array.isArray(identifier) && identifier.length == 0) return callback(false, [])
    this.runQuery(pool, 'DELETE FROM public."' + table + '" WHERE ' + this.processWhere(identifierColumn,identifier,callback) + ';', callback);
  }
  
  // ========================
  // = PROCESSING FUNCTIONS =
  // ========================
  static processWhere(identifierColumn, identifier, callback) {
    if (Array.isArray(identifierColumn) && identifierColumn.length == 0) return callback(false, [])
    if (Array.isArray(identifier) && identifier.length == 0) return callback(false, [])
    
    if (!Array.isArray(identifierColumn)) {
      if (!Array.isArray(identifier)) {
        return '"' + identifierColumn + '" = ' + this.processValue(identifier);
      }else{
        if (identifier.length == 0) return callback(false, [])
        return '"' + identifierColumn + '" IN (' + this.fromSingleValueToValues(identifier) + ')';
      }
    }else{
      if (!Array.isArray(identifier)) {
        return '"' + identifierColumn[0] + '" = ' + this.processValue(identifier);
      }else{
        var thisClass = this;
        var whereText = [];
        var key = 0;
        identifierColumn.forEach(function(iColumn) {
          whereText.push('"' + iColumn + '" = ' + thisClass.processValue(identifier[key]))
          key++
        })
        return whereText.join(' AND ');
      }
    }
  }
  
  static processValue(value,char) {
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
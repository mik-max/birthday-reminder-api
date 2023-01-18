import loadSqlQueries from "../../../utils.js";
import configData from "../../../config.js";
import sql from 'mssql';
let sqlQueries = await loadSqlQueries('data/churches');
const getAllChurchesData = async () => {
     try {
          let pool = await sql.connect(configData.sql) // opened databse connection
          const list = await pool.request().query(sqlQueries.churches)
          await pool.close() // closed database conection
          return list.recordset;
     } catch (error) {
          return error.message;
     }
}
const getChurchesDataByGroupId = async (GroupId) => {
     try {
          let pool = await sql.connect(configData.sql) // opened databse connection
          const list = await pool.request().input('GroupId', sql.SmallInt, GroupId).query(sqlQueries.churchesByGroupId);
          await pool.close() // closed database conection
          return list.recordset;
     } catch (error) {
          return error.message
     }
}
const getChurchesDataById = async (Id) => {
     try {
          let pool = await sql.connect(configData.sql) // opened databse connection
          const list = await pool.request().input('Id', sql.Int, Id).query(sqlQueries.getChurchesByChurchId);
          await pool.close() // closed database conection
          return list.recordset;
     } catch (error) {
          return error.message
     }
}

export {getAllChurchesData, getChurchesDataByGroupId, getChurchesDataById}
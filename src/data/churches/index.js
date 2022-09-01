import loadSqlQueries from "../../../utils.js";
import configData from "../../../config.js";
import sql from 'mssql';
let pool = await sql.connect(configData.sql);
let sqlQueries = await loadSqlQueries('data/churches');
const getAllChurchesData = async () => {
     try {
          const list = await pool.request().query(sqlQueries.churches)
          return list.recordset;
     } catch (error) {
          return error.message;
     }
}
const getChurchesDataByGroupId = async (GroupId) => {
     try {
          const list = await pool.request().input('GroupId', sql.SmallInt, GroupId).query(sqlQueries.churchesByGroupId);
          return list.recordset;
     } catch (error) {
          return error.message
     }
}

export {getAllChurchesData, getChurchesDataByGroupId}
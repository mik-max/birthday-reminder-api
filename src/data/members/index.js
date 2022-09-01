import loadSqlQueries from "../../../utils.js";
import configData from "../../../config.js";
import sql from 'mssql';
let pool = await sql.connect(configData.sql);
let sqlQueries = await loadSqlQueries('data/members');
let generalSqlQueries = await loadSqlQueries('data/general')

const createMemberData = async (memberData) => {
     let date = new Date(); 
     let isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
     console.log(date)
     try {
          const churchId = await pool.request().input('Name', sql.VarChar(50), memberData.church).query(generalSqlQueries.getChurchId)
          console.log(churchId.recordset[0].Id)




          const insertMember = await pool.request()
          .input('Title', sql.VarChar(20), memberData.title)
          .input('FirstName', sql.VarChar(50), memberData.firstName)
          .input('LastName', sql.VarChar(50), memberData.lastName)
          .input('Gender', sql.VarChar(10), memberData.gender)
          .input('PhoneNumber', sql.VarChar(20), memberData.phoneNumber)
          .input('Email', sql.VarChar(50), memberData.email)
          .input('DateOfBirth', sql.VarChar(20), memberData.dateOfBirth)
          .input('Church', sql.VarChar(50), memberData.church)
          .input('ChurchId', sql.Int, churchId.recordset[0].Id) 
          .input('DateCreated', sql.DateTime2, isoDateTime)
          .query(sqlQueries.createMembers)
          return insertMember.recordset;
     } catch (error) {
          return error.message;
     }
}

const getMembersData = async () => {
     try {
          const list = await pool.request().query(sqlQueries.getMembers);
          return list.recordset;
     } catch (error) {
          return error.message
     }
}

const getMembersDataByChurchId = async (ChurchId) => {
     try {
          const list = await pool.request().input('ChurchId', sql.Int, ChurchId).query(sqlQueries.getMembersByChurchId)
          return list.recordset;
     } catch (error) {
          return error.message
     }
}

const updateMembersData = async(Id, membersData) => {
     let date = new Date(); 
     let isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
     try {
          const churchId = await pool.request().input('Name', sql.VarChar(50), membersData.church).query(generalSqlQueries.getChurchId)

         const list = await pool.request()
          .input('Id', sql.Int, Id)
          .input('Title', sql.VarChar(20), membersData.title)
          .input('FirstName', sql.VarChar(50), membersData.firstName)
          .input('LastName', sql.VarChar(50), membersData.lastName)
          .input('Gender', sql.VarChar(10), membersData.gender)
          .input('PhoneNumber', sql.VarChar(20), membersData.phoneNumber)
          .input('Email', sql.VarChar(50), membersData.email)
          .input('DateOfBirth', sql.VarChar(20), membersData.dateOfBirth )
          .input('Church', sql.VarChar(50), membersData.church)
          .input('ChurchId', sql.Int, churchId.recordset[0].Id)
          .input('DateModified', sql.DateTime2, isoDateTime).query(sqlQueries.updateMembers)

          return list.recordset
     } catch (error) {
          return error.message
     }
}

const deleteMemberData = async(Id) => {
     let date = new Date(); 
     let isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();

     try {
          const list = await pool.request()
          .input('Id', sql.Int, Id )
          .input('DateModified', sql.DateTime2, isoDateTime).query(sqlQueries.deleteMembers)

          return list.recordset
     } catch (error) {
          return error.message
     }
     
}

export {createMemberData, getMembersData, getMembersDataByChurchId, updateMembersData, deleteMemberData}
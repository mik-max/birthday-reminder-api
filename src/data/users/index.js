import loadSqlQueries from "../../../utils.js";
import configData from "../../../config.js";
import { encrypt, compareHash } from "../../utilities/hashing.js";
import sql from 'mssql';
let pool = await sql.connect(configData.sql);
let sqlQueries = await loadSqlQueries('data/users');
let generalSqlQueries = await loadSqlQueries('data/general')

const createUserData = async (userData) => {
     const hashedPassword = encrypt(userData.password);
     let date = new Date(); 
     let isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
     console.log(isoDateTime)
     try {
          const churchId = await pool.request().input('Name', sql.VarChar(50), userData.church).query(generalSqlQueries.getChurchId)
          console.log(churchId.recordset[0].Id)
          const insertUser = await pool.request()
          .input('FirstName', sql.VarChar(50), userData.firstName)
          .input('LastName', sql.VarChar(50), userData.lastName)
          .input('Gender', sql.VarChar(10), userData.gender)
          .input('Email', sql.VarChar(50), userData.email)
          .input('PhoneNumber', sql.VarChar(20), userData.phoneNumber)
          .input('Church', sql.VarChar(50), userData.church)
          .input('ChurchId', sql.Int, churchId.recordset[0].Id) 
          .input('Role', sql.VarChar(20), userData.role)
          .input('Password', sql.VarChar(200), hashedPassword)
          .input('DateCreated', sql.DateTime2, isoDateTime)
          .query(sqlQueries.createUser)
          return insertUser.recordset;
     } catch (error) {
          return error.message
     }
}

const getUsersData = async () => {
     try {
          const list = await pool.request().query(sqlQueries.getUsers)
          return list.recordset;
     } catch (error) {
          return error.message
     }
}
const getUserDataById = async (Id) => {
     try {
          const list = await pool.request().input('Id', sql.Int, Id).query(sqlQueries.getUserById)
          return list.recordset;
          
     } catch (error) {
          return error.message
     }
}

const updateUserData = async (Id, userData) => {
     let date = new Date(); 
     let isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
     try {
          const churchId = await pool.request().input('Name', sql.VarChar(50), userData.church).query(generalSqlQueries.getChurchId)
          console.log(churchId.recordset[0].Id)
          const insertUser = await pool.request()
          .input('Id', sql.Int, Id)
          .input('FirstName', sql.VarChar(50), userData.firstName)
          .input('LastName', sql.VarChar(50), userData.lastName)
          .input('Gender', sql.VarChar(10), userData.gender)
          .input('Email', sql.VarChar(50), userData.email)
          .input('PhoneNumber', sql.VarChar(20), userData.phoneNumber)
          .input('Church', sql.VarChar(50), userData.church)
          .input('ChurchId', sql.Int, churchId.recordset[0].Id) 
          .input('Role', sql.VarChar(20), userData.Role)
          .input('DateModified', sql.DateTime2, isoDateTime)
          .query(sqlQueries.updateUser)
          return insertUser.recordset;
     } catch (error) {
          return error.message
     }
}

const deleteUserData = async (Id) => {
     let date = new Date(); 
     let isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
     try {
          const deleteUser = await pool.request()
          .input('Id', sql.Int, Id)
          .input('DateModified', sql.DateTime2, isoDateTime)
          .query(sqlQueries.deleteUser)
          return deleteUser.recordset;
     } catch (error) {
          return error.message
     }
}

const getUserSignInCredentials = async (userEmail) => {

     try {
          let user = await pool.request()
          .input('Email', sql.VarChar(50), userEmail)
          .query(sqlQueries.getUserByEmail)
          return user.recordset;
     } catch (error) {
          return error.message;
     }

}

export {createUserData, getUsersData, getUserDataById, updateUserData, deleteUserData, getUserSignInCredentials}
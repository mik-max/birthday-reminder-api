import { createUserData, getUsersData, getUserDataById, updateUserData, deleteUserData, getUserSignInCredentials } from "../data/users/index.js";
import jsonwebtoken from 'jsonwebtoken';
import { compareHash } from "../utilities/hashing.js";

const jwt = jsonwebtoken;
const createUser = async (req, res, next) => {
     try {
          const data = req.body;
          const created = await createUserData(data);
          res.status(201).send(created);
     } catch (error) {
          res.status(400).send(error.message)
          console.error(error.message)
     }
}
const getUsers = async (req, res, next) => {
     try {
          const result = await getUsersData();
          res.status(200).send(result);
     } catch (error) {
          res.status(400).send(error.message)
     }
}
const  getUserById = async (req, res, next) => {
     try {
          const Id = req.params.id
          const result = await getUserDataById(Id);
          res.status(200).send(result);
     } catch (error) {
          res.status(400).send(error.message)
     }
}

const updateUser = async (req, res, next) => {
     try {
          const Id = req.params.id
          const data = req.body
          const result = await updateUserData(Id, data);
          res.status(200).send(result);
     } catch (error) {
          res.status(400).send(error.message)
     }
}

const deleteUser = async (req, res, next) => {
     try {
          const Id = req.params.id
          const result = await deleteUserData(Id);
          res.status(200).send(result)
     } catch (error) {
          res.status(400).send(error.message)
     }
}
const signInUser = async (req, res, next) => {
     try {

          let email = req.body.email;
          let password = req.body.password;
          let result = await getUserSignInCredentials(email)
          let passwordHash = result[0].Password
          let hashResult = compareHash(password, passwordHash)
          if(hashResult){
               const token = jwt.sign({
                    email: req.body.email,
                    password: req.body.password
               }, 'mikejwt$$')
               res.send({status: 'ok', token: token})
          }else{
               res.send({status: 'failed', token: null})
          }
     } catch (error) {
          res.status(400).send(error.message)
     }
}
export {createUser, getUsers, getUserById, updateUser, deleteUser, signInUser}
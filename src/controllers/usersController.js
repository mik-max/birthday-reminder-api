import { createUserData, getUsersData, getUserDataById, updateUserData, deleteUserData, getUserSignInCredentials } from "../data/users/index.js";
import jsonwebtoken from 'jsonwebtoken';
import { compareHash } from "../utilities/hashing.js";
import { pagination } from "../utilities/pagination.js";
import { validateEmail } from "../utilities/emailValidation.js";
import { validatePassword } from "../utilities/passwordValidation.js";
import { validatePhoneNumber } from "../utilities/validatePhoneNumber.js";
const jwt = jsonwebtoken;
const createUser = async (req, res, next) => {
     try {
          const data = req.body;
          let validatedEmail = validateEmail(req.body.email)
          let validatedPassword = validatePassword(req.body.password)
          let validatedPhoneNumber = validatePhoneNumber(req.body.phoneNumber)
         if((validatedEmail && validatedPassword && validatedPhoneNumber)){
               // const created = await createUserData(data);
               res.status(201).send({
                    status: 201,
                    message: "email, password or phone number is valid"
               });
         }else{
               res.status(400).send({
                    statusCode: 400,
                    message: "Invalid Email , Phone Number or Password",
                    data: null
               })
         }
     } catch (error) {
          res.status(400).send(error.message)
          console.error(error.message)
     }
}
const getUsers = async (req, res, next) => {
     try {
          const data = await getUsersData();
          const results = pagination(data, req.query)
          res.status(200).send(results);
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
          let validatedEmail = validateEmail(req.body.email)
          let validatedPassword = validatePassword(req.body.password)
          let validatedPhoneNumber = validatePhoneNumber(req.body.phoneNumber)
          if((validatedEmail && validatedPassword && validatedPhoneNumber)){
               // const created = await createUserData(data);
               res.status(201).send({
                    statusCode: 201,
                    message: "Updated"
               });
         }else{
               res.status(400).send({
                    statusCode: 400,
                    message: "Invalid Email , Phone Number or Password",
                    data: null
               })
         }
          // const result = await updateUserData(Id, data);
          // res.status(200).send(result);
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
                    password: req.body.password,
                    church: result[0].Church,
                    firstName: result[0].FirstName,
                    lastName: result[0].LastName,
                    role: result[0].Role,
                    churchId: result[0].ChurchId
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
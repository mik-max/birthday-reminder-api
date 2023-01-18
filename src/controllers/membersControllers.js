import { createMemberData, getMembersData, getMembersDataByChurchId, updateMembersData, deleteMemberData } from "../data/members/index.js";
import { pagination } from "../utilities/pagination.js";
import { validateEmail } from "../utilities/emailValidation.js";
import { validatePhoneNumber } from "../utilities/validatePhoneNumber.js";
import { validateBirthDate } from "../utilities/validateBirthDate.js";
import XLSX from 'xlsx'
import Excel from 'exceljs'

const createMemebers = async (req, res, next) => {
     try {
          const data = req.body;
          let validatedEmail = validateEmail(req.body.email)
          let validatedPhoneNumber = validatePhoneNumber(req.body.phoneNumber)
          let validatedDate = validateBirthDate(req.body.dateOfBirth)
          if(validatedEmail && validatedPhoneNumber && validatedDate){
               // const created = await createMemberData(data)
               // res.status(201).send(created)
               res.status(201).send({ 
                    statusCode: 201,
                    message: "Email and Phone Number are valid",
                    data: "created"
               })
         }else{
               res.status(400).send({
                    statusCode: 400,
                    message: "Invalid Email, Phone Number or Date Of Birth",
                    data: null
               })             
          }
     } catch (error) {
          res.status(400).send(error.message)
          console.error(error.message)
     }
}

const getMembers = async (req, res, next) => {
     try {
          const data = await getMembersData()
          let results = pagination(data, req.query)
          res.status(200).send(results)
     } catch (error) {
          res.status(400).send(error.message)
          console.error(error.message)
     }
}
const getMembersByChurchId = async (req, res, next) => {
     try {
          const churchId = req.params.id
          const data = await getMembersDataByChurchId(churchId)
          let results = pagination(data, req.query)
          res.status(200).send(results)
     } catch (error) {
          res.status(400).send(error.message)
          console.error(error.message)
     }
}

const updateMembers = async (req, res, next) => {
     try{
          let validatedEmail = validateEmail(req.body.email)
          let validatedPhoneNumber = validatePhoneNumber(req.body.phoneNumber)
          if(validatedEmail && validatedPhoneNumber){
               // const data = req.body
               // const id = req.params.id
               // const result = await updateMembersData(id, data)
               // res.status(201).send(result)
               res.status(201).send({ 
                    statusCode: 201,
                    message: "Email and Phone Number are valid",
                    data: "Updated"
               })
          }else{
               res.status(400).send({
                    statusCode: 400,
                    message: "Invalid Email or Phone Number",
                    data: null
               })
         }
          

     }catch (error) {
          res.status(400).send(error.message)
     }
}

const deleteMembers = async (req, res, next) => {
     try {
          const id = req.params.id
          const result = await deleteMemberData(id)

          res.status(201).send({status: 'ok', message : 'Member successfully deleted'})
     } catch (error) {
          res.status(400).send(error.message)
     }
}

const downloadExcel = async (req, res, next) => {
     try {
          const formart = [
               { Title: "", FirstName: "" },
          ]
          const worksheet = XLSX.utils.json_to_sheet(formart);
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, "Members data");
          const base64 = XLSX.write(workbook,{type: 'base64'})
          res.status(200).send({status: 'Ok', data: base64})
     } catch (error) {
          res.status(400).send(error.message)
     }
}
export {createMemebers, getMembers, getMembersByChurchId, updateMembers, deleteMembers, downloadExcel}
import { createMemberData, getMembersData, getMembersDataByChurchId, updateMembersData, deleteMemberData } from "../data/members/index.js";
const createMemebers = async (req, res, next) => {
     try {
          const data = req.body;
          const created = await createMemberData(data);
          res.status(201).send(created);
     } catch (error) {
          res.status(400).send(error.message)
          console.error(error.message)
     }
}

const getMembers = async (req, res, next) => {
     try {
          const result = await getMembersData()
          res.status(200).send(result)
     } catch (error) {
          res.status(400).send(error.message)
          console.error(error.message)
     }
}
const getMembersByChurchId = async (req, res, next) => {
     try {
          const churchId = req.params.id
          const result = await getMembersDataByChurchId(churchId)
          res.status(200).send(result)
     } catch (error) {
          res.status(400).send(error.message)
          console.error(error.message)
     }
}

const updateMembers = async (req, res, next) => {
     try{
          const data = req.body
          const id = req.params.id
          const result = await updateMembersData(id, data)

          res.status(201).send(result)
     }catch (error) {
          res.status(400).send(error.message)
     }
}

const deleteMembers = async (req, res, next) => {
     try {
          const id = req.params.id
          const result = await deleteMemberData(id)

          res.status(201).send(result)
     } catch (error) {
          res.status(400).send(error.message)
     }
}
export {createMemebers, getMembers, getMembersByChurchId, updateMembers, deleteMembers}
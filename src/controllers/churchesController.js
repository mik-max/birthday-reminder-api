import { getAllChurchesData, getChurchesDataByGroupId, getChurchesDataById } from "../data/churches/index.js";
import { pagination } from "../utilities/pagination.js";
const getAllChurches = async (req, res, next) => {
     try {
          
          const data = await  getAllChurchesData();
          let results = pagination(data, req.query)
          
          res.status(200).send(results)
         
     } catch (error) {
          res.status(400).send(error.message)
          console.error(error.message)
     }
}

const getAllChurchesByGroupId = async(req, res, next) => {
     try {
          const groupId = req.params.id
          const result = await  getChurchesDataByGroupId(groupId);
          res.status(200).send(result)
     } catch (error) {
          res.status(400).send(error.message)
          console.error(error.message)
     }
}
const getAllChurchesByChurchId = async(req, res, next) => {
     try {
          const Id = req.params.id
          const result = await  getChurchesDataById(Id);
          res.status(200).send(result[0])
     } catch (error) {
          res.status(400).send(error.message)
          console.error(error.message)
     }
}
export {getAllChurches, getAllChurchesByGroupId, getAllChurchesByChurchId}
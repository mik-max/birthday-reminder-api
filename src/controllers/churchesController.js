import { getAllChurchesData, getChurchesDataByGroupId } from "../data/churches/index.js";
const getAllChurches = async (req, res, next) => {
     try {
          const result = await  getAllChurchesData();
          res.status(200).send(result)
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
export {getAllChurches, getAllChurchesByGroupId}
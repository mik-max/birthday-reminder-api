import Sib from 'sib-api-v3-sdk/src/index.js'
import { getMembersData } from '../data/members/index.js'
import { formartDate, checkMatchingDates } from '../utilities/dateFormerter.js'
import configData from '../../config.js'



const sendMail = (celebrants) => {
     const client = Sib.ApiClient.instance
     const apiKey = client.authentications['api-key']
     console.log(configData.sendInBlueApiKey)
     apiKey.apiKey = configData.sendInBlueApiKey
     const transactionalEmailApi  = new Sib.TransactionalEmailsApi()
     
     const sender = {
          name: 'Christ Embassy Central Group',
          email: 'michaelchinye2018@gmail.com'
     }
     
     celebrants.forEach((celebrant, index) => {
          const receivers = [
               {email: `${celebrant.Email}`}
          ]
          transactionalEmailApi.sendTransacEmail({
               sender,
               to:receivers,
               subject: 'Happy birthday celebration',
               htmlContent: `<div>
                                   <h1>Happy Birthday Celebration!</h1>
                                   <h4>Happy birthday celebration <strong>${celebrant.Title} ${celebrant.FirstName} ${celebrant.LastName}</strong> </h4>
                                   <h5>Onbehalf of everyone in Christ Embassy Centarl Group and your church ${celebrant.Church}, We wish you a happy and prosperous birthday. Congratulations!</h5>
                         </div>`
          }).then( response => { console.log(response)})
     })
     
}

const sendEmails = async (req, res, next) => {
     let todaysCelebrants = []
     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
     const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
     try {
          let data = await getMembersData()
          let todaysDate = new Date().toDateString()
          data.map((member, index) => {
               let dateOfBirth = member.DateOfBirth
               
               let birthMonth = months[new Date(dateOfBirth).getMonth()];
               let birthDate = new Date(dateOfBirth).getDate()

               let currentMonth = months[new Date(todaysDate).getMonth()];
               let currentDate = new Date(todaysDate).getDate();

               let formartedBirthDate = formartDate(birthMonth, birthDate)
               let formartedCurrentDate = formartDate(currentMonth, currentDate)

               let result = checkMatchingDates(formartedBirthDate, formartedCurrentDate)

               if(result){
                    todaysCelebrants.push(member)
               }
          })
          todaysCelebrants !== [] && sendMail(todaysCelebrants);
          
          res.status(200).send({status: "ok", message: "Emails have been sent." })
     } catch (error) {
          res.status(400).send(error.message)
     }

}



export {sendEmails}


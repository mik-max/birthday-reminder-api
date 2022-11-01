import Sib from 'sib-api-v3-sdk/src/index.js'
import { getMembersData } from '../data/members/index.js'
import { formartDate, checkMatchingDates } from '../utilities/dateFormerter.js'

import configData from '../../config.js'

const sendMail = (celebrants) => {
     const client = Sib.ApiClient.instance
     const apiKey = client.authentications['api-key']
     // console.log(configData.sendInBlueApiKey)
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
const sendToIndividual = (name, email) => {
          const client = Sib.ApiClient.instance
          const apiKey = client.authentications['api-key']
          console.log(configData.sendInBlueApiKey)
          apiKey.apiKey = configData.sendInBlueApiKey
          const transactionalEmailApi  = new Sib.TransactionalEmailsApi()
          const sender = {
               name: 'Mikecodes',
               email: 'michaelchinye2018@gmail.com'
          }
          const receivers = [
               {email: `${email}`}
          ]
     transactionalEmailApi.sendTransacEmail({
               sender,
               to:receivers,
               subject: 'Custom email',
               htmlContent: `<!DOCTYPE html>
               <html lang="en">
               <head>
                   <meta charset="UTF-8">
                   <meta http-equiv="X-UA-Compatible" content="IE=edge">
                   <meta name="viewport" content="width=device-width, initial-scale=1.0">
                   <title>Document</title>
                   <link rel="preconnect" href="https://fonts.googleapis.com">
                   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                   <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap" 
                   rel="stylesheet">
                   <link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap" rel="stylesheet">
                   <style>
                       *{
                           box-sizing: border-box;
                       }
                       body{
                          font-family: 'Montserrat', sans-serif;
                       }
                       .container{
                           color: white;
                           height: 100%;
                           width: 100%;
                           padding: 2rem;
                           display: flex;
                           justify-content: center;
                           align-items: center;
                       }
                       .raise{
                           font-family: 'Montserrat';
                           font-style: normal;
                           font-weight: 800;
                           font-size: 27.362px;
                           line-height: 17px;
                           display: flex;
                           align-items: center;
                           text-align: center;
                           letter-spacing: 0.01em;
                           color: #000000;
               
                       }
                       .hi{
                         font-family: 'Lato', sans-serif;
                           font-style: normal;
                           font-weight: 500;
                           font-size: 11px;
                           line-height: 13px;
                           color: #000000;
               
                       }
                       .text{
                           font-family: 'Lato', sans-serif;
                           font-style: normal;
                           font-weight: 500;
                           font-size: 10.4617px;
                           line-height: 24px;
                           color: #000000;
                       }
                       .boldPurple{
                           display: flex;
                           flex-direction: column;
                           justify-content: center;
                           font-family: 'Lato', sans-serif;
                           font-style: normal;
                           font-weight: 700;
                           font-size: 13px;
                           line-height: 24px;
                           color: #7B61FF;
                           margin-top: -23px;
                       }
                       .boldPurple p{
                           margin-bottom: 5px;
                       }
                       .boldPurple svg{
                           margin-top: -12px;
                       }
                       .buttonWrap{
                           display: flex;
                           justifyContent: center;
                           alignItems: center;
                           width: 100%;
                           height: 80px;
                       }
                       .button{
                           background-color: #7B61FF;
                           color: #ffffff;
                           border: none;
                           padding: 0px 11px ;
                           display: flex;
                           justify-content: center;
                           align-items:center;
                           border-radius: 10px;
                           text-decoration: none;
                           text-align:center
                           width: 10em;
                           height: 7vh;
                           font-family: 'Lato';
                           font-style: normal;
                           font-weight: 500;
                           font-size: 13.6696px;
                           line-height: 16px;
                       }
                       .display{
                         display: flex; 
                         gap: .5rem;
                         align-items: center;
                         /* justify-content: center; */
                       }
                   </style>
               </head>
               <body class="eer">
                   <div class="container" >
                         <div style="margin-left: auto; margin-right: auto;">
                              <div class="display" style="gap: .5rem;">
                                   
                                   <center style="display:flex; gap: .5rem;">
                                   <h2 class="raise">RAISE</h2> 
                                   <img src="https://res.cloudinary.com/dc-cloud/image/upload/v1664308930/images/hot-air-balloon_s471qg.png" alt="hot-air-balloon" style=" margin-top:20px;width: 20px; height: 20px;">
                                   </center>
                              </div>
                        
                              <p class="hi">Hi Emmanuel,</p>
                              <div >
                                   <P class="text">
                                        Thank you for joining Raise, We are delighted to have you onboard and look forward to helping you become a 
                                   </P> 
                                   <div class="boldPurple" > 
                                        <p style="display: flex;
                                        flex-direction: column;
                                        justify-content: center;
                                        font-family: 'Lato', sans-serif;
                                        font-style: normal;
                                        font-weight: 700;
                                        font-size: 13px;
                                        line-height: 24px;
                                        color: #7B61FF;
                                        margin-bottom: 0px">Creativity Champion</p>
                                       <img src="https://res.cloudinary.com/dc-cloud/image/upload/v1665152274/images/rule_ozsun1.png"style="margin-top:-9rem">
                                   </div>
                                   <div class="text">
                                        <p>As part of our network you can expect:</p>
                                   </div>
                                   <div >
                                        <div style="display: flex; justify-content:flex-start; align-items:center;  padding-left: 18px;">
                                             <img src="https://res.cloudinary.com/dc-cloud/image/upload/v1665148086/images/ok_r1gokn.png" alt="" style="width: 10px; height: 10px; margin-top:18px">
                                             <p class="text" style="margin-left: 15px;">
                                             <span style="color: #7B61FF;">Explore</span> and <span style="color: #7B61FF;">Discover</span> startups with interesting ideas 
                                             </p>
                                        </div>
                                        <div style="display: flex; justify-content:flex-start; align-items:center;  padding-left: 18px;">
                                             <img src="https://res.cloudinary.com/dc-cloud/image/upload/v1665148086/images/ok_r1gokn.png" alt="" style="width: 10px; height: 10px; margin-top:18px">
                                             <p class="text" style="margin-left: 15px;">
                                             Champion <span style="color: #7B61FF;">creativity</span> and <span style="color: #7B61FF;">innovation</span> by investing in these startups
                                             </p>
                                        </div>
                                        <div style="display: flex; justify-content:flex-start; align-items:center; padding-left: 18px;">
                                             <img src="https://res.cloudinary.com/dc-cloud/image/upload/v1665148086/images/ok_r1gokn.png" alt="" style="width: 10px; height: 10px; margin-top:18px">
                                             <p class="text" style="margin-left: 15px;">
                                             <span style="color: #7B61FF;">Leverage</span> the <span style="color: #7B61FF;">Raise Community</span> to raise funds for your startup by applying for a raise 
                                             </p>
                                        </div>
                                        
                                   </div>
                                   <div>
                                        <p class="text">
                                             To complete your account creation process, we need you to verify that this email belongs to you, please click the link below.
                                        </p>
                                   </div>
               
                                   <div class="buttonWrap" align="center">
                                        <table align="center" padding="50px" border="0" cellpadding="0" cellspacing="0" role="none" style="background:#fffffe;background-color:#fffffe;color:#ffffff;width:100%;padding-left:"25%">
                                        <tbody>
                                        <tr>
                                   
                                        <a href="#insertUrlLink" class="button" style="display:inline-block;margin:0;text-decoration:none;text-transform:none;padding:12px 0px 12px 0px;mso-padding-alt:0;width:10em;height:3vh;background:#7B61FF;color:#ffffff;font-family:Lato;font-size:13.6696px;font-weight:normal;line-height:16px;border-radius:10px;margin:0;text-decoration:none;text-transform:none;padding:12px 0px 12px 0px;mso-padding-alt:0;" target="_blank"> <span style="font-size:15px;font-family:Lato;font-weight:600;border-radius:10px;color:#ffffff;line-height:16px;">
                                        <center>verify email</center></span></a>
                                        </tr>
                                        </tbody>
                                        </table>
                                             
                                   </div>
                                   <div class="text">
                                        <p>A verified account enables you:</p>
                                   </div>
                                   <div>
                                        <div style="display: flex; justify-content:flex-start; align-items:center;padding-left: 18px;">
                                             <img src="https://res.cloudinary.com/dc-cloud/image/upload/v1665148086/images/ok_r1gokn.png" alt="" style="width: 10px; height: 10px; margin-top:18px">
                                             <p class="text" style="margin-left: 15px;">
                                             Fund dreams and invest in companies you love and support 
                                             </p>
                                        </div>
                                        <div style="display: flex; justify-content:flex-start; align-items:center;padding-left: 18px;">
                                             <img src='https://res.cloudinary.com/dc-cloud/image/upload/v1665148086/images/ok_r1gokn.png' alt="" style="width: 10px; height: 10px; margin-top:18px">
                                             <p class="text" style="margin-left: 15px;">
                                             Join the discussion forum
                                             </p>
                                        </div>
                                        <div style="display: flex; justify-content:flex-start; align-items:center; padding-left: 18px;">
                                             <img src='https://res.cloudinary.com/dc-cloud/image/upload/v1665148086/images/ok_r1gokn.png' alt="" style="width: 10px; height: 10px; margin-top:18px">
                                             <p class="text" style="margin-left: 15px;">
                                             Directly contact founders by sending messages or requesting for a call or meeting
                                             </p>
                                        </div>
                                        
                                   </div>
                                   <div style=" margin-top: 16px; display:flex; flex-direction:column ">
                                        <span class="text" > Best wishes,</span>
                                        <span class="text" > The Raise team.</span>
                                   </div>
                              </div>
                         </div>
                   </div>
               </body>
               </html>`
     }).then( response => { console.log(response)})
}

const sendEmails = async (req, res, next) => {
     let todaysCelebrants = []
     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
     const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
     try {
          let data = await getMembersData()
          let todaysDate = new Date().toDateString()
          // data.map((member, index) => {
          //      let dateOfBirth = member.DateOfBirth
               
          //      let birthMonth = months[new Date(dateOfBirth).getMonth()];
          //      let birthDate = new Date(dateOfBirth).getDate()

          //      let currentMonth = months[new Date(todaysDate).getMonth()];
          //      let currentDate = new Date(todaysDate).getDate();

          //      let formartedBirthDate = formartDate(birthMonth, birthDate)
          //      let formartedCurrentDate = formartDate(currentMonth, currentDate)

          //      let result = checkMatchingDates(formartedBirthDate, formartedCurrentDate)

          //      if(result){
          //           todaysCelebrants.push(member)
          //      }
          // })
          // sendMail(todaysCelebrants);
          sendToIndividual('Emeka', 'emekachinye09@gmail.com');
          res.status(200).send({status: 'ok', message: 'successfuly sent'})
     } catch (error) {
          res.status(400).send(error.message)
     }

}



export {sendEmails}


import Vonage from "@vonage/server-sdk";
import { getMembersData } from "../data/members/index.js";
import { formartDate, checkMatchingDates } from "../utilities/dateFormerter.js";
import configData from "../../config.js";
import { formartNumber } from "../utilities/phoneNumberHandler.js";

const sendSMS = (celebrants) => {
    const vonage = new Vonage({
      apiKey: configData.vonageAPIKey,
      apiSecret: configData.vonageAPISecret,
    });
    celebrants.forEach((celebrant)=>{
        let formartedNumber = formartNumber(celebrant.PhoneNumber)
        const from = "Christ Embassy Centra Group";
        const to = formartedNumber;
        const text = `Hello , Happy Birthday Celebration to You from all of us at Christ Embassy Centra Group `;
        console.log(formartedNumber)
        vonage.message.sendSms(from, to, text, (err, responseData) => {
        if (err) {
            console.log(err);
        } else {
            if (responseData.messages[0]["status"] === "0") {
            console.log("Message sent successfully.");
            } else {
            console.log(
                `Message failed with error: ${responseData.messages[0]["error-text"]}`
            );
            }
        }
        });
    })
}

const sendAllSMS = async (req, res, next) => {
  let todaysCelebrants = [];
  const months = ["January", "February","March","April","May", "June","July","August","September",
"October","November","December",];
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
  try {
    let data = await getMembersData();
    let todaysDate = new Date().toDateString();
    data.map((member, index) => {
      let dateOfBirth = member.DateOfBirth;

      let birthMonth = months[new Date(dateOfBirth).getMonth()];
      let birthDate = new Date(dateOfBirth).getDate();

      let currentMonth = months[new Date(todaysDate).getMonth()];
      let currentDate = new Date(todaysDate).getDate();

      let formartedBirthDate = formartDate(birthMonth, birthDate);
      let formartedCurrentDate = formartDate(currentMonth, currentDate);

      let result = checkMatchingDates(formartedBirthDate, formartedCurrentDate);

      if (result) {
        todaysCelebrants.push(member);
      }
    });
    console.log(todaysCelebrants)
     sendSMS(todaysCelebrants);

    res.status(200).send(todaysCelebrants);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export { sendAllSMS };
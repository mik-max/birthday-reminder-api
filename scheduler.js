import schedule from 'node-schedule'
import fetch from 'node-fetch';


schedule.scheduleJob('00 39 20 * * *', async function() {
     // This will run every Day at 12:00;
     fetch('http://localhost:8001/api/send/emails').then(response => {return response.json()}).then(data => {
          console.log(data)
     })
     console.log('hey!')
 });

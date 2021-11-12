import app from './app';
import{startConnection}  from './database'
require('dotenv').config();

 let main =async ()=>{
   await startConnection();
  app.listen(app.get('port'));
    console.log('server on port', app.get('port'));
}



main();
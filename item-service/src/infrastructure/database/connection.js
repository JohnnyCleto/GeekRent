const mysql =
require('mysql2/promise');

class DatabaseConnection {

 static instance;

 static async getInstance(){

  if(
   !DatabaseConnection.instance
  ){

   DatabaseConnection.instance =
   mysql.createPool({

    host:'localhost',

    user:'root',

    password:'root',

    database:'geekrent'

   });

  }

  return DatabaseConnection.instance;

 }

}

module.exports =
DatabaseConnection;
import connection from '../connection';

export interface User {
  userid: number;
  username: string;
  userlastname: string;
  useremail: string;
  userpw: string;
}

const db = {
  getAll(callback: (error: Error | null, result: any[] | null) => void) {
    const sql = `SELECT * FROM users`;
    connection.query(sql, function (err, result: any[] | null) {
      console.log(err);
      callback(err, result);
    });
  },
  signUp(user: User, callback: (error: Error | null, result: any) => void) {
    const sql = `INSERT INTO users SET ?`;
    connection.query(sql, user, function (err, result) {
      callback(err, result);
    });
  },
  login(useremail: string, callback: (error: Error | null, result: any) => void) {
    const sql = `SELECT * FROM users WHERE useremail=?`;
    connection.query(sql, [useremail], function (err, result) {
      callback(err, result);
    });
  },
  oneOrderId(username: string ,callback: (error: Error | null, result: any) => void){
    const sql = `SELECT o.orderid FROM zara.users AS u JOIN zara.orders AS o ON u.userid = o.userid WHERE u.username = "${username}"; `
    connection.query(sql, function (err, result) {
      callback(err, result)
    })
  }
};


export default db;

import con from '../connection';
export const getAll = () => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM orders`;
    con.query(sql, (err, rslt) => {
      if (err) reject(err);
      else resolve(rslt);
    });
  });
};

export const getOne = (date: any) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM orders WHERE orderid=${date}`;
    con.query(sql, (err, rslt) => {
      if (err) reject(err);
      else resolve(rslt);
    });
  });
};

export const createOrder = (order: any) => {
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO orders SET ?";
    con.query(sql, order, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

export const changeOrder = (id: any, order: any) => {
  return new Promise((resolve, reject) => {
    const sql = `UPDATE orders SET ? WHERE orderid=${id}`;
    con.query(sql, order, (err, rslt) => {
      if (err) {
        reject(err);
      } else {
        resolve(rslt);
      }
    });
  });
};

export const deleteOrder = (id: any) => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM orders WHERE WHERE orderid=${id}`;
    con.query(sql, (err, rslt) => {
      if (err) {
        reject(err);
      } else {
        resolve(rslt);
      }
    });
  });
};

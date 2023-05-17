import con from '../connection';
export const getAll = () => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM products`;
    con.query(sql, (err, rslt) => {
      if (err) reject(err);
      else resolve(rslt);
    });
  });
};

export const getAllWithOrder = (id: any) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM orders WHERE orderid=${id}`;
    con.query(sql, (err, rslt) => {
      if (err) reject(err);
      else resolve(rslt);
    });
  });
};

export const createProduct = (product: any) => {
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO orders SET ?";
    con.query(sql, product, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

export const changeProduct=(id: any, order: any) => {
  return new Promise((resolve, reject) => {
    const sql = `UPDATE orders SET ? WHERE productid=${id}`;
    con.query(sql, order, (err, rslt) => {
      if (err) {
        reject(err);
      } else {
        resolve(rslt);
      }
    });
  });
};

export const deleteProduct = (id: any) => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM orders WHERE WHERE productid=${id}`;
    con.query(sql, (err, rslt) => {
      if (err) {
        reject(err);
      } else {
        resolve(rslt);
      }
    });
  });
};


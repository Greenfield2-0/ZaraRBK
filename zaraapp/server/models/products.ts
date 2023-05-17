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
export const getOne = (prod:any) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM products WHERE productname LIKE '${prod}'`;
    con.query(sql, (err, rslt) => {
      if (err) reject(err);
      else resolve(rslt);
    });
  });
};


export const getAllWithOrder = (id: any) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT *FROM products WHERE orderid=${id}`;
    con.query(sql, (err, rslt) => {
      if (err) reject(err);
      else resolve(rslt);
    });
  });
};

export const createProduct = (product: any) => {
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO products SET ?";
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
    const sql = `UPDATE products SET ? WHERE productid=${id}`;
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
    const sql = `DELETE FROM products WHERE WHERE productid=${id}`;
    con.query(sql, (err, rslt) => {
      if (err) {
        reject(err);
      } else {
        resolve(rslt);
      }
    });
  });
};


const pool = require("../config/db");

exports.createUSer = async (fname, lname, email) => {
  const result = await pool.query(
    "INSERT INTO users (fname,lname,email) VALUES ($1,$2,$3) RETURNING *",
    [fname, lname, email]
  );
  return result.rows[0];
};

exports.getAllUsers = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

exports.getUserById = async (id) => {
  const result = await pool.query("SELECT * FROM users WHERE id=$1", [id]);
  return result.rows;
};

exports.updateUser = async (id, fname, lname, email) => {
  const result = await pool.query(
    "UPDATE users SET fname=$1,lname=$2,email=$3 WHERE id=$4 RETURNING *",
    [fname, lname, email, id]
  );
  return result.rows[0];
};

exports.deleteUser = async (id) => {
  const result = await pool.query("DELETE FROM users WHERE id=$1", [id]);
  return result.rows;
};

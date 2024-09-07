import { getConnection } from "../database/database.mjs";

const getFriends = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("select * from amigos");
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getFriend = async (req, res) => {
  try {
    const connection = await getConnection();
    const { id } = req.params;
    const result = await connection.query("select * from amigos where id = ?", [id]);
    res.json(result[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addFriend = async (req, res) => {
  try {
    const connection = await getConnection();
    const { nombre, telefono, facebook } = req.body;
    await connection.query("insert into amigos (nombre, telefono, facebook) values (?, ?, ?)", [nombre, telefono,facebook]);
    res.json({ nombre, telefono, facebook });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const updateFriend = async (req, res) => {
  try {
    const connection = await getConnection();
    const { id } = req.params;
    const { nombre, telefono, facebook } = req.body;
    await connection.query("update amigos set nombre = ?, telefono = ?, facebook = ? where id = ?", [nombre, telefono, facebook, id]);
    res.json({ nombre, telefono, facebook });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deleteFriend = async (req, res) => {
  try {
    const connection = await getConnection();
    const { id } = req.params;
    await connection.query("delete from amigos where id = ?", [id]);
    res.json({ id });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getFriends,
  addFriend,
  getFriend,
  updateFriend,
  deleteFriend
};

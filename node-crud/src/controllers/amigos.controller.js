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

export const methods = {
  getFriends,
};

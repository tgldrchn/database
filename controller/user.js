import User from "../model/User.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});

  if (!users) throw Error("Not found", 400);
  res.send({
    data: users,
  });
};

export const createUsers = async (req, res) => {
  const user = await User.create(req.body);

  if (!user) throw new Error("Not found", 400);
  res.send({
    data: user,
  });
};

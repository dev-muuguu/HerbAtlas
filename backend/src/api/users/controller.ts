import { Response, Request } from "express";
import Prisma from "../../../database";

const createUser = async (req: Request, res: Response) => {
  const { firstname, username, password } = req.body;
  try {
    if (!firstname || !username || !password) {
      return res.status(400).json({
        success: false,
        message: " username, password, or firstname is missing",
      });
    }

    const cretedUser = await Prisma.user.create({
      data: {
        firstname: firstname,
        username: username,
        password: password,
      },
    });

    return res.status(200).json({
      success: true,
      message: `${username} -- has been registered successfully `,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "error",
    });
  }
};

const allUsers = async (req: Request, res: Response) => {
  try {
    const listUsers = await Prisma.user.findMany();
    return res.status(200).json({
      success: true,
      data: listUsers,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "error",
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await Prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "error",
    });
  }
};
export { createUser, allUsers, getUser };

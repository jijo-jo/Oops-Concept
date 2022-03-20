import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import User from '../interfaces/interface'



const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    let result: AxiosResponse = await axios.get(`http://localhost:8000/users`);
    let users: [User] = result.data;
    return res.status(200).json({
        message: users
    });
};

const getUserByEmail = async (req: Request, res: Response) => {
    let name : string = req.body.name;
    let email: string = req.body.email;

    try{

    let result: AxiosResponse = await axios.get(`http://localhost:8000/users?email=${email}`);

    let users: User = result.data[0];
    console.log(users);
    console.log(email);

      if (users.name==name && users.email==email) {

        return res.status(200).json({

            message: 'User Exist',

            user : users

      });

      }
      else {
        return res.status(200).json({

            message: 'No user exist with this details'
        

        })};

}

catch{

    return res.status(400).json({

        message: "User not exist",

      });

}

 };

const getUser = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    let result: AxiosResponse = await axios.get(`http://localhost:8000/users/${id}`);
    let user: User = result.data;
    return res.status(200).json({
        message: user
    });
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    let name: string = req.body.name;
    let password: string = req.body.password;
    let email: string = req.body.email;

    let response: AxiosResponse = await axios.put(`http://localhost:8000/users/${id}`, {name,password,email});
    return res.status(200).json({
        message: response.data
    });
};


export default { getUsers ,getUser,updateUser,getUserByEmail };
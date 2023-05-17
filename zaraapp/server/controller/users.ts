import { Request, Response } from 'express';
import user, { User } from '../models/users';
import bcrypt from 'bcrypt';
import jwt, { Secret } from 'jsonwebtoken';

const getUser = (req: Request, res: Response) => {
  user.getAll((err: Error | null, results: any[] | null) => {
    if (err) res.status(500).send(err);
    else res.send(results);
  });
};

const signupUser = async (req: Request, res: Response) => {
  try {
    const hashedPassword  = await bcrypt.hash(req.body.userpw, 10);
    const newUser: User = {
      userid: req.body.userid,
      username: req.body.username,
      useremail: req.body.useremail,
      userlastname: req.body.userlastname,
      userpw: hashedPassword,
    };

    user.signUp(newUser, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: 'Something went wrong', err });
      }

      const token = jwt.sign(
        {},
        "zaraToken"
      );
      console.log(token, 'this is token');
      return res.status(201).json({results});
    });
  } catch (err) {
    return res.status(500).json({ message: 'Something went wrong', err });
  }
};
const userLogin = async (req: Request, res: Response) => {
  try {
    const useremail: string = req.body.useremail;
    const userpw: string = req.body.userpw;

    user.login(useremail, async (err, user) => {
      if (err) {
        console.error(err);
        return res.status(500).send("An error occurred");
      }
      if (!user)
        return res.status(401).send("Your useremail address or userpw is invalid");

      try {
        const isPasswordValid = await bcrypt.compare(userpw, user[0].userpw); // Access userpw property from user object

        if (isPasswordValid) {
          const token = jwt.sign({ useremail: user[0].useremail }, "zaraToken" as Secret);
          return res.status(200).json({ token,user, message: 'You logged in successfully' });
        } else {
          return res.status(401).json({ message: 'Invalid password' });
        }
      } catch (err) {
        console.error(err);
        return res.status(500).send("An error occurred");
      }
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("An error occurred");
  }
};
const getOneOrderId=(req: Request, res: Response)=>{
  const name=req.params.username
  user.oneOrderId(name,(err,result)=>{
    if(err) res.status(404).send(err)
    else res.status(200).send(result)
  })
}

export { getUser, signupUser, userLogin, getOneOrderId };

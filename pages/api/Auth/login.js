import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'

export default function loginHandler(req, res)  {

    const {email, password} = req.body

    //aqui se puede validar si el email y contraseñas existen pero con postgresql
    if (email == 'example@gmail.com' && password == 'example'){
        const token = jwt.sign({
            exp: Math.floor(Date.now()/1000) +  60 * 60 * 24 * 30,
            email: 'example@gmail.com',
            username: 'santy',
            password: 'example'
        }, 'secret')
    

        const serialized = serialize('myToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV == 'production', 
            sameSite: 'none',
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path:'/'
        })

        res.setHeader('Set-Cookie', serialized)
        return res.json('login succesfully')
    }

    return res.status(401).json({error: 'invalid email or password'})
}
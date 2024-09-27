import {verify} from "jsonwebtoken"

export default function profileHandler(req, res) {

    const {myToken} = req.cookies

    try {
        const user = verify(myToken, 'secret') //verifica el token y el string distintivo
        console.log(user)
        return res.json("token valido")
    } catch (error) {
        return res.status(401).json({error: "token invalido"}) //manejo de errores
    }

}



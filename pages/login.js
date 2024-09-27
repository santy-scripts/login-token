import {useState} from 'react'
import axios from 'axios';

function LoginPage(){

    const [credentials, setcredentials] = useState({
        email: '',
        password: ''
    });

    const handleChange =  (e) => {
        setcredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSumbit = async (e) => {
        e.preventDefault();
        console.log(credentials);
        const response = await axios.post('/api/Auth/login', credentials)
        console.log('Datos enviados:', response);
    }

    return(
        <div>
            <form onSubmit={handleSumbit}>

                <input name="email" type="email" placeholder="email"
                       onChange={handleChange}></input>
                <input name="password" type="password" placeholder="password"
                       onChange={handleChange}></input>
                <button type="submit">
                    Login
                </button>
            </form>


        </div>
    )
}

export default LoginPage
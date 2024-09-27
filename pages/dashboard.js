import axios from 'axios'

function dashboard(){
    const getProfrile = async () => {        
            const response = await axios.get('/api/profile');
            console.log(response);

}

    return(
        <div>
            <h1>Dashboard</h1>

                <button onClick={() => getProfrile()}>
                    getProfrile
                </button>
        </div>
    )

}

export default dashboard
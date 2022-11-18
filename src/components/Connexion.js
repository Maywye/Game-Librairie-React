const Connexion = ({isConnected, setConnected, setName}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        setName(name);
        console.log(name);
        setConnected(!isConnected);
    }

    function login(e){
        e.preventDefault();
        setConnected(!isConnected);
    }
    

    return (
        <>
            {
                (isConnected)
                ?
                    <>
                        <form name="form"></form>
                        <button onClick={login}>Déconnexion</button>
                    </>
                :
                    <>
                        <form onSubmit={handleSubmit}>
                            <input type='text' name="name" placeholder="votre nom" />
                            <button>Connexion</button>
                        </form>
                    </>
            }
        </>
    )
}
export default Connexion;
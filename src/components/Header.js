const Header = ({isConnected, name}) => {
    return (
        <>  
            {
                (isConnected) ? 

                <h2>Bibliothèque de jeux de : {name} </h2>
            :
                <h2>Bibliothèque de jeux</h2>

            }

        </>
    )
}
export default Header;
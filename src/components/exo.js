const Exo = () => {

    return (
        <>
            <h1>Exercice :  Création d'une librairie</h1>
            <ul>
                <li>1. Créer une nouvelle application React</li>
                <li>2. Implémenter le composant App</li>
                <p>Aide : COntient deux variables, deux useState</p>
                <ul>
                    <li><code>[isConnected, setConnected] = useState(false);</code></li>
                    <li><code>[name, setName] = useState("");</code></li>
                    <li>Utiliser les props {"=>"} transmettre la propriété name au composant title</li>
                    <li>S'il est connecté on va appeler le composant {"<Librairie/>"}</li>
                    <li>Sinon on affiche {"=>"} Veuillez-vous connecter</li>
                </ul>
                <li>3. Créer un composant Header/Title pour afficher le titre de votre site</li>
                <li>4. Créer le composant Connexion</li>
                <li>5. Créer un composant librairie, qui va afficher la liste des jeux (des films, des livres) sous forme de cartes (image +   titre)</li>
                <p>Les cartes sont des JSX, des div classiques</p>
                <li>6. Afficher une liste de jeux (ou de livres, ou de films)</li>
                <p>Des objets avec un titre, une image, un boolean isRead/isWatched...</p>
                <li>7. Intégrer ces composants dans App</li>
                <li>8. Ajouter un message qui s'affiche si la liste est vide</li>
                <li>9. Changer la couleur des titres en fonctions du boolean (des livres : titre en vert si c'est lu, et le titre en rouge si ce n’est pas lu)</li>
                <li>10. Par défaut quand on arrive sur l'appli, on n'est pas connecté</li>
                <p>Le bouton affiche connexion</p>
                <li>11. On ajoute un bouton "Connexion", quand on clique dessus, on est connecté</li>
                <p>Le bouton affiche Déconnexion</p>
                <li>12. Si on n’est pas connecté : On n'affiche pas la librairie, on affiche unique un message</li>
                <li>13. Si on est connecté : on affiche le composant librairie</li>
            </ul>
            <h5>Dynamique, on clique sur le bouton : On se connecte, on affiche la librairie</h5>
            <h5>Quand on est connecté, on affiche un bouton déconnexion qui permet de se déconnecter.</h5>

            <p>db.son</p>
        </>
        
    )
}
export default Exo;
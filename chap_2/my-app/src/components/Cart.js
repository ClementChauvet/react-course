import '../styles/Cart.css'


class plantes{
    constructor(nom, prix){
        this.nom = nom
        this.prix = prix
    }
}

var title = "La maison jungle"
var cart_content = [new plantes("Monstera", 8), new plantes("lierre", 10), new plantes("bouquet de fleurs", 15)]

function Cart(){
    return(// style can be inline but not recommended
        <div className = "lmj-cart">
            <h2>Mon panier</h2>
            <p>Nombre d'articles : {cart_content.length }</p>
            {cart_content.length > 0 ? <p>Contenu du panier : <ul>{cart_content.map((element,index) => <li key={`${element.nom}-${index}`}>{element.nom}</li>)}</ul></p> : <p>Votre panier est vide</p>}
            <p>Prix total : {cart_content.reduce((acc, element) => acc + element.prix, 0)}€</p>
        </div>
    )
}

export default Cart
const pokebola = document.querySelector('.pokebola')
const Card = document.querySelector('.cards')
const divCards = document.querySelector('.card')
const textPokemon = document.querySelector('.text-pokemon')

pokebola.addEventListener('click', pokemones)

function randomId(){
   return Math.floor(Math.random() * 905);
}
function pokemones(){
    const urlApi = `https://pokeapi.co/api/v2/pokemon/${randomId()}`;   

    pokemonsGets(urlApi)

}

function pokemonsGets(urlApi) {

    fetch(urlApi)
        .then(response => response.json())
        .then(pokemon => {
            const pokemonImages = pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
            const data = {
                name: pokemon.name,
                tipo: pokemon.types[0].type.name,
                img: pokemonImages ? pokemonImages : '/img/logo-pokemon.png'
            }
            
            infoPokemons(data)
            pokemons(data)
    })
}

function infoPokemons(data){
    divCards.innerHTML = `<p class="text-pokemon" >${data.name}</p>  <p>Tipo: ${data.tipo}</p>`  
}
function pokemons(data){
    textPokemon.innerHTML = `<img src="${data.img}" class="gif-pokemon"/>`  
    divCards.appendChild(textPokemon) 
    
}

pokemones()
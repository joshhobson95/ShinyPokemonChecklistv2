import './AllCard.css'


function AllCard({usersPokemonAll}) {
const grayscaleClass = !usersPokemonAll.id ? "grayscale" : "color";
  return (
    <div >
<img alt="pokemonshinyall" src={usersPokemonAll.pokemonShinyImg} className={`${grayscaleClass}`} />
    </div>
  )
}

export default AllCard
import React from 'react'
import './Wiki.css'
import Sandwiches from '../../assets/IMG_0618.PNG'
import ShinyRates from '../../assets/ShinyRates.JPG'

function Wiki() {
  return (
    <div className='x'>
    <div className='wikicontainer'>
      
        <h2 className='titlewiki'>Here is a short guide to all things Shiny Hunting in Pokemon Scarlet and Violet</h2>
        <div className='imgwiki'>
          <h4>Easiest Sandwiches</h4>
        <img about="ChartSandwich" alt='ChartSandwich' src={Sandwiches} />
          <h4>Shiny Odds</h4>
        <img alt="ChartShiny" src={ShinyRates}/>
        </div>


        <h2>The Odds:</h2>
        <p>The base Shiny rate of these games are the standard 1/4096. There are many ways to get these odds lowered, with the lowest being 1/512.44. Notably, this rate is the same rate that you get from the “Masuda Method” which involves hatching eggs, but these odds for overworld wild pokemon, not just hatchables.</p>

        <h2>Shiny Charm:</h2>
        <p>As in previous games, the Shiny Charm lowers your shiny rates by half, giving you much better odds at 1/2044. You can get the Shiny Charm by completing the Paldean Pokedex, catching all pokemon in the region. This will be a great first step at increasing odds, as it will stack with other methods, giving you a great chance at a shiny. </p>

        <h2>Outbreaks:</h2>
        <p>    Outbreaks have made a return in Pokemon Scarlet and Violet and boast better shiny odds as well. If a player clears or knocks out 30 pokemon or more you get an extra shiny roll. This extra roll equates to your odds being 1/2048.25. You can get one extra roll by clearing 60 or more pokemon in the outbreak bringing your odds down to 1/1365.67. You can clear pokemon with the new autobattle feature by simply clicking the “R” button and sending your pokemon towards the targets.
    Additionally, starting a picnic will reset the route spawns. It is said that if you knock out 60 pokemon in the outbreak, save, and then start a picnic close to the outbreak, that it will cause the game to respawn all pokemon in the outbreak. Repeating this will lead to very quick spawns and respawns of pokemon in the outbreak, churning through the outbreak and maximizing your chances of finding a shiny. </p>
     
        
        <h2>Sandwiches:</h2>
        <p>There is a new way to increase shiny odds like never seen before in the Pokemon games, by making sandwiches. Making the right sandwiches will increase the shiny rates of pokemon of a certain type and only that type. The boost on this sandwich is called “Sparkling Power” You can use these in conjunction with Mass Outbreaks but you have to make sure that your sandwich typing boost corresponds with the type of the pokemon in that outbreak. For example if there is an outbreak of Psyduck you will need to make a sandwich with a “Sparkling Power” for water or psychic type, because Psyduck is a water and psychic type Pokemon. 
    You can only get “Sparkling Power” from using Herba Mystica, a rare item only found in the Postgame, from five star raids. There is also only a 2% chance to get Herba Mystica in a 5 star raid. There are different types of Herba Mystica that you must use for certain Pokemon types, so its best to use recipes that other players have tested in case you waste your rare Herba Mystica. Above is a chart of the simplest sandwiches to attract shinies, as well as some more advanced sandwich recipes. Lastly saving before using your Herba Mystica is in good practice. If you are unlucky and get no shiny, you can simply reset the game to before you made you sandwich and will regain the Herba Mystica used </p>
    <h2>Isolated Hunting:</h2>
      <p>Using sandwiches with and outbreak is a great way to find a shiny but sometimes there are more possibilites of spawns on a specific route. Isloated hunting is finding a Pokemon on a specific route that is the only type on that route. For exmaple finding a route where the only grass type is Bramblin and then using a grass-type sandwich could result in more spawns than an outbreak and faster shinies. This will only work in certain situations but does produce very good results</p>


    </div>
    </div>
  )
}

export default Wiki
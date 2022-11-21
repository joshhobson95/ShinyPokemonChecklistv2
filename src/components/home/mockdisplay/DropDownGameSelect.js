import React from "react";
import Select from "react-select";

function DropDownGameSelect() {
  const options = [
    {
      label: "Gen 1",
      options: [
        { value: "Red", label: "Red" },
        { value: "Blue", label: "Blue" },
        { value: "Yellow", label: "Yellow" },
      ],
    },

    {
      label: "Gen 2",
      options: [
        { value: "Gold", label: "Gold" },
        { value: "Silver", label: "Silver" },
        { value: "Crystal", label: "Crystal" },
      ],
    },
    {
      label: "Gen 3",
      options: [
        { value: "Ruby", label: "Ruby" },
        { value: "Saphire", label: "Saphire" },
        { value: "Emerald", label: "Emerald" },
        { value: "FireRed", label: "Fire Red" },
        { value: "LeafGreen", label: "Leaf Green" },
      ],
    },
    {
      label: "Gen 4",
      options: [
        { value: "Diamond", label: "Diamond" },
        { value: "Pearl", label: "Pearl" },
        { value: "Platinum", label: "Platinum" },
        { value: "HeartGold", label: "HeartGold" },
        { value: "SoulSilver", label: "SoulSilver" },
      ],
    },
    {
      label: "Gen 5",
      options: [
        { value: "Black", label: "Black" },
        { value: "White", label: "White" },
        { value: "Black2", label: "Black 2" },
        { value: "White2", label: "White 2" },
      ],
    },
    {
      label: "Gen 6",
      options: [
        { value: "X", label: "X" },
        { value: "Y", label: "Y" },
        { value: "Omega Ruby", label: "Omega Ruby" },
        { value: "Alpha Saphire", label: "Alpha Saphire" },
      ],
    },
    {
      label: "Gen 7",
      options: [
        { value: "Sun", label: "Sun" },
        { value: "Moon", label: "Moon" },
        { value: "Ultra Sun", label: "Ultra Sun" },
        { value: "Ultra Moon", label: "Ultra Moon" },
        { value: "LGEevee", label: "Let's Go Eevee" },
        { value: "LGPikachu", label: "Let's Go Pikachu" },
      ],
    },
    {
      label: "Gen 8",
      options: [
        { value: "Sword", label: "Sword" },
        { value: "Shield", label: "Shield" },
        { value: "Brilliant Diamond", label: "Brilliant Diamond" },
        { value: "Shining Pearl", label: "Shining Pearl" },
        { value: "Legends Arceus", label: "Legends Arceus" },
      ],
    },
    {
      label: "Gen 9",
      options: [
        { value: "PokemonHome", label: "Pokemon Home" },
        { value: "Scarlet", label: "Scarlet" },
        { value: "Violet", label: "Violet" },
      ],
    },
  ];
  return <Select options={options} 
  className='Select-menu'

  />;
}

export default DropDownGameSelect;


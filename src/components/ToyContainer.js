import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDelete, onUpdatedToy }) {
  const toyList = toys.map(toy => {
    return (
      <ToyCard 
        key={toy.id}
        toy={toy}
        onDelete={onDelete}
        onUpdatedToy={onUpdatedToy}
      />
    )
  })

  return (
    <div id="toy-collection">{toyList}</div>
  );
}

export default ToyContainer;

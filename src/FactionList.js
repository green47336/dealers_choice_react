import React from "react";

const FactionList = (props) => {
  const { factions, selectFaction } = props;
  return (
    <div className="faction">
      {factions.map((faction) => {
        return (
          <a key={faction.id} onClick={() => selectFaction(faction.id)}>
            <img src={`${faction.imageUrl}`} />
            <p>{faction.name}</p>
          </a>
        );
      })}
    </div>
  );
};

export default FactionList;

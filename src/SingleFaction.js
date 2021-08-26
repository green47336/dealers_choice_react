import React from "react";

const SingleFaction = (props) => {
  const { selectedFaction } = props;
  const { kitties, puppers } = selectedFaction;
  const all = kitties.concat(puppers);
  //const { name, imageUrl, info } = selectedFaction;

  return (
    <div className="single-faction">
      {all.map((individual) => {
        return (
          <div key={individual.imageUrl}>
            <img src={`${individual.imageUrl}`} />
            <p>{individual.name}</p>
            {/* <li>{individual.info}</li> */}
          </div>
        );
      })}
    </div>
  );
};

export default SingleFaction;

import React from "react";

const SpreadOperator = () => {
  // 1st case -->
  const fullName = ["Raj", "Dev"];
  const biodata = [1, ...fullName, 22, "Male"];
  const biodata1 = [1, 22, "Male", ...fullName];

  // console.log(fullName);
  // console.log(biodata);
  // console.log(biodata1);


  // 2nd case -->
  const indoorSports = [
    "Carrom",
    "Chess",
    "Snakes-&-Ladders",
    "Business",
    "Housie",
    "Cards",
  ];
  const outdoorSports = [
    "Cricket",
    "Football",
    "Badminton",
    "Basketball",
    "Hockey",
    "Kabaddi",
    "Volleyball",
    "Golf",
    "Tennis",
  ];

  //   const sport = [...outdoorSports, indoorSports, ...indoorSports];
  //   const sports = [`Outdoor - ${...outdoorSports}, ${...indoorSports}`];

  const sports = [...outdoorSports, ...indoorSports];
  //   console.log(sports);


  // 3rd case -->
  const games = [
    "BGMI",
    "COC",
    "CR",
    "COD",
    "Angry Bird",
    "Cricket",
    "Football",
    "FreeFire",
  ];
  const [best, ...remaining] = games;
  // console.log(games);
  //   console.log(best);
  //   console.log(remaining);

  const FullName = {
    fname: "Raj",
    lName: 'Dev'
  } 

  const BioData = {
    id: 1,
    ...FullName,
    age: 22,
    gender: 'Male',
  }
  console.log(BioData);

  
  return (
    <>
      <div>
        <h1>1st Case</h1>
        <h3>My FullName -- {fullName}</h3> <br />
        <h4>
          My Biodatas are -- {biodata}, {biodata1}
        </h4>
        <br />
      </div>
      <hr />

      <div>
        <h1>2nd Case</h1>
        <h3>My Outdoor Sports -- {outdoorSports}</h3> <br />
        <h3>My Infoor Sports -- {indoorSports}</h3>
        <h4>My Sports -- {sports} </h4> <br />
      </div>
      <hr />

      <div>
        <h1>3rd Case</h1>
        <h3>My Daily Games -- {games}</h3> <br />
        <h3>My Favourite Game -- {best}</h3>
        <h4>My Remaining Game from the list -- {remaining} </h4> <br />
      </div>
    </>
  );
};

export default SpreadOperator;

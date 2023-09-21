import React from "react";
import MovieProps from "./MovieProps";
import SeriesData from "./NetflixData";

const headingStyle = {
  textAlign: "center",
  marginTop: "10px",
  marginBottom: "15px",
};

// console.log(SeriesData);

const netflixData = (currVal) => {
  return (
    <MovieProps
      no={currVal.no}
      img={currVal.img}
      seriesName={currVal.seriesName}
      desc={currVal.desc}
      link={currVal.link}
    />
  );
};


const RenderMovies = () => {
  return (
    <div>
      <h3 style={headingStyle}>Top 5 Netflix Series - </h3>
      <MovieProps
        no={SeriesData[0].no}
        img={SeriesData[1].img}
        seriesName={SeriesData[2].seriesName}
        desc={SeriesData[2].desc}
        link={SeriesData[3].link}
      />
      <hr />

      {/*  <MovieProps no="" img="" seriesName="" desc="" link="" className="Random Data" it will render this data bcoz it will behave as attribute rather than css./> 
      <MovieProps no="" img="" seriesName="" desc="" link=""/> [Custom Element] */}


      {/* {SeriesData.map(netflixData)}; */}

      {SeriesData.map(function netflixData(val, index, arr) {
        {/* console.log(index, val) */}
        return (
          <MovieProps
            key = {val.no}
            no={val.no}
            img={val.img}
            seriesName={val.seriesName}
            desc={val.desc}
            link={val.link}
          />
        );
      })}
    </div>
  );
};

export default RenderMovies;


// Now, here if we want to render more than 1 data with same card, rather calling it again & again we can do it with the helps of props.. For rendering multiple data it should be in same order in object or any other things.
import React from "react";
import Data from "./data.json";
import CRDataShow from "./CRDataShow";
import TR from './TernaryRender';

const ConditionalRendering = () => {
  // console.log(SData.SData);
  const crData = Data.SData;
  // console.log(crData)

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Conditional-Rendering</h2>
      {crData.map((cv) => {
        {
          /* console.log(cv); */
        }
        return (
          <CRDataShow
            key={cv.no}
            no={cv.no}
            img={cv.img}
            seriesName={cv.seriesName}
            desc={cv.desc}
            link={cv.link}
          ></CRDataShow>
        );
      })}
    </>
  );
};

const IfElseCondition = () => {
  let fs = "netflix";
  fs = "prime";
  //   fs = "nothing"

  const ifElse1 = Data.SData;
  const foifElse1 = ifElse1.slice(0, 3);

  const ifElse2 = Data.SData;
  const foifElse2 = ifElse2.slice(3);

  // console.log(ifElse1, foifElse1)

  if (fs == "netflix") {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>If-Else-Condition</h2>
        <table>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Image</th>
              <th>Series Name</th>
              {/* <th>Description</th> */}
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {foifElse1.map((nVal) => {
              {
                /* {console.log(nVal, foifElse1)}; */
              }
              return (
                <>
                  <tr key={nVal.no}>
                    <td>{nVal.no}</td>
                    <td>{nVal.img}</td>
                    <td>{nVal.seriesName}</td>
                    {/* <td>{nVal.desc}</td> */}
                    <td>{nVal.link}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else if (fs == "prime") {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>If-Else-Condition</h2>
        <table>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Image</th>
              <th>Series Name</th>
              {/* <th>Description</th> */}
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {foifElse2.map((pVal) => {
              {
                /* {console.log(pVal, foifElse2)}; */
              }
              return (
                <>
                  <tr key={pVal.no}>
                    <td>{pVal.no}</td>
                    <td>{pVal.img}</td>
                    <td>{pVal.seriesName}</td>
                    {/* <td>{pVal.desc}</td> */}
                    <td>{pVal.link}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <>
        <h2 style={{ textAlign: "center" }}>If-Else-Condition</h2>
        <h3 style={{ textAlign: "center" }}>
          Nothing found... Plz try again later
        </h3>
      </>
    );
  }
};

const TernaryCondition = () => {
    return(
        <>
        <TR />
        </>
    )
}

export { ConditionalRendering, IfElseCondition, TernaryCondition };

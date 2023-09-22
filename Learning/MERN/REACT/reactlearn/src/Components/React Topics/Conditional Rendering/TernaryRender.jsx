import React from "react";
import Data from "./data.json";

const TernaryCondition = () => {
  let fs = "netflix";

  const tElse1 = Data.SData;
  const fotNetflix = tElse1.slice(0, 3);

  const tElse2 = Data.SData;
  const fotPrime = tElse2.slice(3);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Ternary-Condition</h2>
      {fs == "netflix" ? (
        <div>
          <h4 style={{ textAlign: "center" }}>Showing Netflix Data</h4>
          <table>
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Image</th>
                <th>Series Name</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {fotNetflix.map((nVal) => {
                return (
                  <>
                    <tr key={nVal.no}>
                      <td>{nVal.no}</td>
                      <td>{nVal.img}</td>
                      <td>{nVal.seriesName}</td>
                      <td>{nVal.link}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h4 style={{ textAlign: "center" }}>Showing Prime or other Data</h4>
          <table>
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Image</th>
                <th>Series Name</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {fotPrime.map((pVal) => {
                return (
                  <>
                    <tr key={pVal.no}>
                      <td>{pVal.no}</td>
                      <td>{pVal.img}</td>
                      <td>{pVal.seriesName}</td>
                      <td>{pVal.link}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default TernaryCondition;

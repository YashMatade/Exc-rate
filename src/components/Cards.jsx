import React from "react";
import { Card } from 'primereact/card';

const Cards = () => {
  let data = [
    {
      userId: 1,
      id: 1,
      title: "INR/USD",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "INR/USD",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "INR/USD",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "INR/USD",
      completed: false,
    },
    {
      userId: 1,
      id: 5,
      title: "INR/USD",
      completed: false,
    },
  ];

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-lg-1"></div>
        {data.map((data, i) => {
          return (
            <div className="col-lg-2 col-md-4 col-sm-1 mb-3">
              <Card title={data.title} subTitle={data.id}>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;

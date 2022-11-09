import React from "react";

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
      id: 1,
      title: "INR/USD",
      completed: false,
    },
    {
      userId: 1,
      id: 1,
      title: "INR/USD",
      completed: false,
    },
    {
      userId: 1,
      id: 1,
      title: "INR/USD",
      completed: false,
    },
    {
      userId: 1,
      id: 1,
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
              <div class="card bg-warning" style={{ width: "100%" }}>
                <div class="card-body">
                  <h5 class="card-title text-start">{data.title}</h5>
                  <h5 class="card-title text-end">{data.id}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;

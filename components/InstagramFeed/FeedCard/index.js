import React from "react";

const FeedCard = ({ datas }) => {
  return (
    <div
      className="flex"
      style={{
        marginLeft: -10,
        marginRight: -10,
      }}
    >
      {datas.map((data, index) => (
        <div key={index} id="feed" className="w-1/4 mx-2.5 bg-gray-100 text-sm">
          <div className="card-header pt-5 px-5 mb-8 flex justify-between items-center">
            <div className="font-bold flex flex-col text-sm">
              {data.displayName}
              <span className="font-medium">{data.date}</span>
            </div>
            <div className="rounded-full">
              <img
                src={data.image}
                height={36}
                width={36}
                className="bg-cover rounded-full"
              />
            </div>
          </div>
          <div className="card-body mb-8 px-5">{data.caption}</div>
          <div className="card-footer">
            <img src={data.feedImage} className="w-full bg-cover" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedCard;

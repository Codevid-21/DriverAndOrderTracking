import React from "react";

function OrderCard({ orderInfo }) {
  console.log("order", orderInfo)
  return (
    <>
      {
        orderInfo.map((order, i) => {
          return (
            <div key={i} className="orderCard">
              <div className="orderInfo">
                <h5>Order Information</h5>
                <p> Order ID : {order._id} </p>
                <p>Order Content : {order.detail} </p>
                <p> Price : {order.price}€ </p>
              </div>
              <div className="clientInfo">
                <h5>Client Information</h5>
                <p> Name : Uwe Smith </p>
                <p>Address : Elisabeth street 1 </p>
                <p> Phone : 0176 888 44 44 </p>
              </div>
              <div className="driverInfo">
                <img src="https://www.nicepng.com/png/detail/1010-10103271_chef-cook-cartoon-cute-kitchen-png-image-cooking.png" alt="" />
                <p>Driver :  </p>
              </div>
            </div>
          )
        })
      }
    </>
  );
}

export default OrderCard;

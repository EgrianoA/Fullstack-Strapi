module.exports = {
    routes: [
      {
        method: "POST",
        path: "/orders/midtrans",
        handler: "order.generateMidtransToken"
      }
    ]
  }
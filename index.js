var express = require("express");
var app = express();
const port = process.env.PORT;

var server = app.listen(port, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});

app.get("/gimmee", (req, res) => {
  res.send(json);
});

app.get("/gimmeSimple", (req, res) => {
  res.send(json2);
});

app.get("/Web/Session", (req, res) => {
  res.status(503);
  res.send(json3);
});

app.get("/users", (req, res) => {
  res.send(users);
});
//comment

var json = {
  success: true,
  message: "Tenders List",
  data: {
    tenders: [
      {
        name: "Punchh",
        paymentType: 30,
        subpaymentType: 35,
        promoButtonText: "Punchh Promo",
        signatureAmount: 0,
        loyaltyButtonText: "Punchh L",
        signatureRequired: false,
        maximumTransactionNumber: 0,
        maximumAmount: 0,
        uri: "https://punchh.dev.ent.appetize-dev.com",
        punchhConfig: {
          print_barcodes: "false",
          barcode_line_1: "this",
          barcode_line_2: "is",
          barcode_line_3: "a",
          barcode_line_4: "beautiful",
          barcode_line_5: "test",
          loyalty_type: "BANKED_REWARDS",
          short_key: "1234",
          location_key: "iej2uio4y23uio45r5t781y",
        },
      },
      {
        name: "Valutec Giftcard",
        uri: "https://valutec.dev.ent.appetize-dev.com",
        paymentType: 11,
        subpaymentType: 29,
        buttonText: "Valutec",
        allowCashOut: true,
        cashOutAmount: 10,
        cardPinRequired: true,
        requireManagerPin: true,
        valutecConfig: { ipAllowed: "true" },
      },
      {
        name: "Fortress",
        uri: "http://82.45.131.110/FGB_WebApplication/Appetize/eCash/",
        username: "Appetize_Ecash",
        password: "Appetize_3cash!32",
        paymentType: 11,
        subpaymentType: 5,
        buttonText: "Fortress BM",
        allowCashOut: false,
        maximumAmount: 0,
        signatureAmount: 0,
        maxCashoutAmount: 0,
        signatureRequired: false,
        maximumTransactionNumber: 0,
        requireManagerPin: true,
        additionalVouchersToPrint: 0,
      },
      { name: "LAVA", paymentType: 20, subpaymentType: 23 },
      { name: "Level Up", paymentType: 26, subpaymentType: 26 },
      { name: "Online order (Olo)", paymentType: 24, subpaymentType: 27 },
      {
        name: "Givex",
        paymentType: 11,
        subpaymentType: 7,
        buttonText: "GiveX BM",
        allowCashOut: true,
        maximumAmount: 1000,
        memberBenefits: false,
        offlineEnabled: false,
        requireManagerPin: false,
        signatureAmount: 500,
        maxAmountOffline: 0,
        maxCashoutAmount: 10,
        signatureRequired: true,
        additionalVouncher: 0,
        memberBenefitsLabel: "",
        maximumTransactionNumber: 3,
        username: "241872",
        password: "4799",
        uri: "https://beta-dataconnect.givex.com",
        port: "50104",
      },
      {
        name: "Skidata",
        paymentType: 31,
        subpaymentType: 34,
        uri: "https://skidata.dev.ent.appetize-dev.com",
        buttonText: "Skidata BBM'",
        allowCashOut: false,
        cashOutRequireManagerPin: false,
        maxCashoutAmount: 0,
        additionalVoucher: 0,
        signatureAmount: 0,
        maximumAmount: 3,
        maximumTransactionNumber: 0,
        signatureRequired: false,
        skidata_encryption: "",
        skidataParking: "",
        skidataParkingAccountNumber: "",
      },
      {
        name: "Stadis",
        uri: "test",
        username: "test",
        password: "test",
        siteId: "test",
        paymentType: 11,
        subpaymentType: 12,
        buttonText: "stadis",
        allowCashOut: true,
        maximumAmount: 0,
        signatureAmount: 0,
        maxCashoutAmount: 0,
        signatureRequired: true,
        maximumTransactionNumber: 0,
        requireManagerPin: true,
        additionalVouchersToPrint: 0,
      },
      {
        name: "Tessitura",
        uri: "https://tesstickets.mbayaq.org/TessituraService/",
        username: "restweb",
        password: "T3ssR3$t!",
        userGroup: "API",
        location: "restweb",
        paymentType: 11,
        subpaymentType: 37,
        buttonText: "tess",
        allowCashOut: false,
        maximumAmount: 0,
        signatureAmount: 0,
        maxCashoutAmount: 0,
        signatureRequired: false,
        maximumTransactionNumber: 0,
        requireManagerPin: false,
        additionalVouchersToPrint: 0,
      },
      { name: "Paid In Cash", paymentType: 2, subpaymentType: 0 },
      { name: "Credit Card", paymentType: 1, subpaymentType: 0 },
    ],
    config: {
      jwt:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2MSI6eyJ0eXBlIjoiYWN0aXZhdGUiLCJ1c2VySWQiOiIxODM2IiwiY2xhaW1zIjp7InZlbnVlSWQiOiIxNSIsInZlbmRvcklkIjoiMjM1IiwidmVuZG9yUm9sZUlkIjoiMTEyIn19LCJpYXQiOjE1ODMyMjM3NTQsImV4cCI6MTU4MzIyNzM1NH0.r34yfhPujPFLSRfZpZlnLQWnsLtY4eNek0WxhrhRkJw",
    },
  },
  errors: [],
  timestamp: "2020-03-03T00:22:34-08:00",
};
var json2 = {
  success: true,
  message: "Tenders List",
  data: {
    tenders: [
      {
        name: "Punchh",
        paymentType: 30,
        subpaymentType: 35,
      },
      {
        name: "LAVA",
        paymentType: 20,
        subpaymentType: 23,
      },
      {
        name: "Level Up",
        paymentType: 26,
        subpaymentType: 26,
      },
      {
        name: "Online order (Olo)",
        paymentType: 24,
        subpaymentType: 27,
      },
      {
        name: "Credit Card",
        paymentType: 1,
        subpaymentType: 0,
      },
    ],
  },
  errors: [],
  timestamp: "2020-03-03T00:22:34-08:00",
};

var json3 = {
  sessionKey: "1234123154353213pl",
  code: 123,
};

var users = [
  {
    name: "Peanut",
    address: "Peanut street",
    phone: 123,
    id: 0,
  },
  {
    name: "Caramel",
    address: "Caramel street",
    phone: 124,
    id: 1,
  },
  {
    name: "Ice",
    address: "Ice ice baby",
    phone: 665,
    id: 2,
  },
];

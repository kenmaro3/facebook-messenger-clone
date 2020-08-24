"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseApp = _firebase["default"].initializeApp({
  apiKey: "AIzaSyD5r5In3SC9YcIZqET-t-aHd-OsgouYBcs",
  authDomain: "facebook-messenger-clone-ad0a1.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-ad0a1.firebaseio.com",
  projectId: "facebook-messenger-clone-ad0a1",
  storageBucket: "facebook-messenger-clone-ad0a1.appspot.com",
  messagingSenderId: "300429933730",
  appId: "1:300429933730:web:6dc9f791a75f1f7b2fabfb",
  measurementId: "G-Z9PMS4K85R"
});

var db = firebaseApp.firestore();
var _default = db;
exports["default"] = _default;
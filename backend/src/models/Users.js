import { Schema, model } from "mongoose";
const mongoose = require('mongoose');

const Users = new Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    username: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
    },
    referral_father: {
      type: String,
    },
    cuadro_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cuadros",
    },
    //poolId: {
    //  type: mongoose.Schema.Types.ObjectId,
    //  ref: "Pools",
    //},
    referidos: {
      type: Array,
    },
    nivel: {
      type: Number,
      default: 10,
    },
    
    active:{
      type: Boolean, 
      default:false
    },
    complete:{
      type: Boolean, 
      default:false
    },
    direction:{
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

export default model("Users", Users);
import { Schema, model } from "mongoose";
const mongoose = require('mongoose');

const Admin = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    nivel: {
      type: Number,
      default: 10,
    },
    active:{
      type: Boolean, 
      default:false
    }   
  },
  {
    timestamps: true,
  }
);

export default model("Admin", Admin);
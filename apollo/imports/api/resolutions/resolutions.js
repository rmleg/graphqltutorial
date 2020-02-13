import { Mongo } from "meteor/mongo";

// New Mongo Collection called resolutions
const Resolutions = new Mongo.Collection("resolutions");

export default Resolutions;

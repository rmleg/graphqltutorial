import Resolutions from "./resolutions";

/* Resolutions.insert({
  name: "Test Resolution"
}); */

/* Resolutions.insert({
  name:
    "This resolution has another field that isn't in the GraphQL Resolutions schema",
  type: "test"
}); */

/* Resolutions.insert({
  name: "I will figure this out",
  title: "this is a title"
}); */

//const res = Resolutions.find({}).fetch();

//console.log(res);

export default {
  Query: {
    resolutions() {
      return Resolutions.find({}).fetch();
    }
  }
};

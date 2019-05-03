export default ({
  Query: {
    Users: () => {
      return [ 
        { firstname: "John", lastname: "Wick", email: "johnwick" },
        { firstname: "Bruce", lastname: "Wayne", email: " brucewayne" },
      ];
    },
    User: ()  => {
      return { firstname: "John", lastname: "Wick", email: "johnwick" }
    }
  }
})
export const resolvers = {
  Query: {
    hello: () => "Hello World",
    job: () => {
      return {
        title: "Software Engineer",
        company: "Google",
        location: "Mountain View, CA",
        description: "Work on the Google Search Engine",
        date: "2021-10-01",
      };
    },
  },
};

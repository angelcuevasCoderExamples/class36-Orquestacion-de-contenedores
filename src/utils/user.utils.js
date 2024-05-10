const { faker } = require("@faker-js/faker");
faker.locale = "es";

const generateUser = () => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    image: faker.image.imageUrl(),
  };
}

module.exports = {
  generateUser
}; 

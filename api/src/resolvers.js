/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
      
    pets(_, {input}, {models}) {
        return models.Pet.findMany(input)
    },

    pet(_, {input}, {models}){
        return models.Pet.findOne(input)
    }

  },
  Mutation: {
    new_pet(_, {input}, {models}) {
        
        models.Pet.create(input)
        return input
    }
  },

  Pet: {

    // user(_, __, {user}) {
    //     return user;   
    // }


    /*img(pet) {
      return pet.type === 'DOG'
        ? 'https://placedog.net/300/300'
        : 'http://placekitten.com/300/300'
    } */
  },
  User: {
    pets(_, __, {models, user}){
        return models.Pet.findMany({user: user.id})
    }
  }
}

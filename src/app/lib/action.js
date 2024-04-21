import {PlazerUser} from "../../../output/entities/Plazeruser"
import {AppDataSourse} from "../../../output/data-source"


// Server Component

    export const getUsers = async () => {
        try {
          // Connect to the database
          await AppDataSourse();
      
          // Fetch all users from the database
          const users = await PlazerUser.find();
      
          // Return the fetched users
          return users;
        } catch (err) {
          console.log(err);
          throw new Error("Failed to fetch users!");
        }  };
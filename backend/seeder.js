import  mongoose from 'mongoose'
import users from './data/users.js'
import team from './data/Team.js'
import User from './models/userModel.js'
import Team from './models/TeamModel.js'
import env from 'dotenv'
import connectDB from './config/db.js'
env.config()

connectDB()

const importData = async () => {
    try {
        await Team.deleteMany();
        await User.deleteMany();
        const createdUsers = await User.insertMany(users)
        const createTeam = await Team.insertMany(team)
        console.log('Data Importedsuccessfully!')
        process.exit()
        
    } catch (error) {
        console.error(`Error:${error}`)
        process.exit()      
    }
}

const destroyData = async () => {
    try {
        
        await User.deleteMany();
        await Team.deleteMany();

        
        console.log('Data destroyed successfully!')
        process.exit()
        
    } catch (error) {
        console.error(`Error:${error}`)
        process.exit()      
    }
}

if(process.argv[2]==='-d'){
  
  destroyData()
}
else
importData()


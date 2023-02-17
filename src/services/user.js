const User = require('../models/user');

   const getUserByEmail = async(email)=>{
        try {
            const user = await User.findOne({email});
            console.log(user);
            return user;
        } catch(error) {
            throw error;
        }
    }

    const getUserById = async (userId) => {
        const user = await User.findById(userId);
        return user;
    }

   const signup = async(data)=>{
        try {
            const user = await User.create(data);
            return user;
        } catch(error) {
            throw error;
        }
    }

    const signin = async(data)=>{
        try {
            const user = await getUserByEmail(data.email);
            if(!user) {
                throw {
                    message: 'no user found'
                };
            }
            if(!user.comparePassword(data.password)) {
                throw {
                    message: 'incorrect password',
                };
            }

            const token = user.genJWT();
            return token;
        } catch(error) {
            throw error;
        }
    }

module.exports = {
    signin,
    signup,
    getUserById,
}
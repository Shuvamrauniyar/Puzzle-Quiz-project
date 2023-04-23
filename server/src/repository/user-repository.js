const {User} = require('../models/index');

const createUser = async(data) => {
    try {
        console.log(data);
        const response = await User.create(data);
        return response;
    } catch (error) {
        throw {err:'error in repository layer while registering'};
    }
} 
async function signIn(email,inputPassword){
    try {
        // console.log(email," and ",inputPassword);
        const user = await User.findOne({
            where:{
                email: email
            }
        });
        //email is not found then error will be thrown from repo layer itself
        console.log(user);
        if(user.password !== inputPassword) {
            console.log("input password is incorrect");
            throw {err : "incorrect password"};;
        }
        return user;
    } catch (error) {
        console.log("Something went wrong in while signing in repo layer");
        if(error.err)
        throw error;
        else
        throw {error : "incorrect email"};
    }
}
const updateData = async(data) => {
    try {
        console.log(data.email);
        const userData = await User.findOne({
            where:{
                email:data.email
            }
        });
        // console.log(userData);
        if(!userData)
        throw{err:'missing email'};
        userData.time = data.time;
        userData.score = data.score;
        await userData.save();
        return userData;

    } catch (error) {
        if(error.err)
        throw error;
        else
        throw {err:'error in repository layer while updating'};
    }
} 
const getAll = async() => {
    try {
        const response = await User.findAll();
        return response;
    } catch (error) {
        throw {err:'error in repository layer'};
    }
} 
const getTopScorer = async() => {
    try {
        const response = await User.findAll({
                limit :10,
                order: [['score' ,'DESC']]
        });
        return response;
    } catch (error) {
        throw {err:'error in repository layer'};
    }
} 

module.exports = {
    createUser,
    signIn,
    updateData,
    getAll,
    getTopScorer
}

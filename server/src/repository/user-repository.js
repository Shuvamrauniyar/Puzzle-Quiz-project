const {User} = require('../models/index');

const createUser = async(data) => {
    try {
        const response = await User.create(data);
        return response;
    } catch (error) {
        throw {err:'error in repository layer while registering'};
    }
} 
const updateData = async(data) => {
    try {

        const userData = await User.findByPk(data.id);
        if(!userData)
        throw{err:'missing id'};
        userData.time = data.time;
        userData.score = data.score;
        await userData.save();
        return userData;

    } catch (error) {
        if(error.err)
        throw error;
        else
        throw {err:'error in repository layer'};
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
    updateData,
    getAll,
    getTopScorer
}

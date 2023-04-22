const userRepository = require('../repository/user-repository');

const create = async(req,res) => {
    try {
        const response = await userRepository.createUser(req.body);
        console.log(req.body);
        return res.status(201).json({
            message: ' Sucessfully registered ',
            err: {},
            data: response,
            success: true
        });
    } catch (error) {
        console.log(error);
      return res.status(500).json({
        data:{},
        success: false,
        message: 'Not able to register' ,
        err: error
    });
    }
}
const updateData = async(req,res) => {
    try {
        const response = await userRepository.updateData(req.body);
        return res.status(201).json({
            message: ' Sucessfully updated ',
            err: {},
            data: response,
            success: true
        });
    } catch (error) {
        console.log(error);
      return res.status(500).json({
        data:{},
        success: false,
        message: 'Not able to update' ,
        err: error
    });
    }
}
const getAll = async(req,res) => {
    try {
        const response = await userRepository.getAll();
        return res.status(200).json({
            message: ' Sucessfully fetched all data ',
            err: {},
            data: response,
            success: true
        });
    } catch (error) {
        console.log(error);
      return res.status(500).json({
        data:{},
        success: false,
        message: 'Not able to fetch data' ,
        err: error
    });
    }
}
const getTopScorer = async(req,res) => {
    try {
        const response = await userRepository.getTopScorer();
        return res.status(200).json({
            message: ' Sucessfully fetched topScorer list ',
            err: {},
            data: response,
            success: true
        });
    } catch (error) {
        console.log(error);
      return res.status(500).json({
        data:{},
        success: false,
        message: 'Not able to fetch list' ,
        err: error
    });
    }
}
module.exports = {
    create,
    updateData,
    getAll,
    getTopScorer
}
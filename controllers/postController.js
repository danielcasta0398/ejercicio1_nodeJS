const { Repair } = require('../models/repairsModel');
const { User } = require('../models/userModel');


const getRepairs = async ( req, res ) =>{
    try {
        const repairs = await Repair.findAll({
            include: [ {model : User} ]
        });
        res.status(200).json({repairs})
    } catch (error) {
        console.log(error);
    }
}

const getRepairsById = async (req,res) =>{
    try {
        const { repairs } = req;
        
        res.status(200).json({repairs})
    } catch (error) {
        console.log(error);
    }
}

const createRepair = async (req, res) =>{
    try {
        const { userId } = req.body;
        const newRepair = await Repair.create({

            userId
        })

        res.status(200).json({newRepair})
    } catch (error) {
        console.log(error);
    }
}

const updateRepairs = async (req,res) =>{
    try {
        const { repairs } = req
        const { status } = req.body

        await repairs.update( {status} )
        res.status(200).json({ status: 'success' })
    } catch (error) {
        
    }
}

module.exports = { createRepair, getRepairs, getRepairsById, updateRepairs }
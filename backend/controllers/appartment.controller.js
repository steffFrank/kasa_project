import Appartment from "../models/appartment.model.js"


export const getAllAppartments = async (req, res) => {
    try {
        const appartments = await Appartment.find();
        res.status(200).json(appartments);

    }catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

export const getAppartment = async (req, res) => {
    try {
        const { id } = req.params;
        const appartment = await Appartment.findById(id);
        if (!appartment) {
           return res.status(404).json({message: "appartment Not found"});
        }
        res.status(200).json(appartment);
    } catch(error) {
        console.log(error);
        res.status(500).json(error);
    }
}
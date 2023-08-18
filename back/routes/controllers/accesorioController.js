const Accesorie = require('../../models/accesorie');


exports.createAccesorie = async(req, res) =>{
    try {
        const newAccesorie = await Accesorie.create(req.body);
        res.status(201).json(newAccesorie);
    } catch (error) {
        console.error(error);
        res.status(400).json({error:'Error al crear accesorio'});
    }
};



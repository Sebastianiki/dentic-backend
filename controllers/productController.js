const Producto = require('../models/Products')

exports.obtenerProyectos = async (req, res) =>{
    try{
        const products = await Producto.find({})
        res.json({products})
    }catch(error){
        console.log(error)
        res.stattus(500).send('Ha ocurrido un error')
    }
}
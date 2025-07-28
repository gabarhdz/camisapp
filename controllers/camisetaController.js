const Camiseta = require('../models/Camiseta');


exports.getCamisetas = async (req, res) => {
  try {
    const camisetas = await Camiseta.find();
    res.json(camisetas);
  } catch (error) {
    res.status(500).json({ error: 'Error del servidor' });
  }
};

exports.getCamisetaById = async (req, res) => {
  try {
    const camiseta = await Camiseta.findById(req.params.id);
    if (!camiseta) return res.status(404).json({ error: 'Camiseta no encontrada' });
    res.json(camiseta);
  } catch (error) {
    res.status(500).json({ error: 'Error del servidor' });
  }
};

exports.createCamiseta = async (req, res) => {
  try {
   const nuevaCamiseta = new Camiseta(req.body);
   CamisetaGuardada=await nuevaCamiseta.save();
    res.status(201).json(CamisetaGuardada);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Error al crear camiseta' });
  }
};

exports.updateCamiseta = async (req, res) => {
  try {
    const camisetaActualizada = await  Camiseta.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!camisetaActualizadaActualizado) return res.status(404).json({ error: 'Camiseta no encontrada' });
    res.json(camisetaActualizada);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar camiseta' });
  }
};

exports.deleteCamiseta = async (req, res) => {
  try {
    const camisetaEliminada = await Camiseta.findByIdAndDelete(req.params.id);
    if (!camisetaEliminada) return res.status(404).json({ error: 'Camiseta no encontrada' });
    res.json({ message: 'Camiseta eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error del servidor' });
  }
};

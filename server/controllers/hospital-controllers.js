const Hospital = require('../db/models/hospital-schema');

const getHospitals = async (req, res) => {
  const hospitals = await Hospital.find();
  res.status(200).json({ message: 'Success', data: hospitals });
};

const postHospitals = async (req, res) => {
  const { body } = req;
  console.log(req.body);
  const hospitals = await Hospital.create();
  res.status(201).json({ message: 'Success', data: hospitals });
};

module.exports = { getHospitals, postHospitals };

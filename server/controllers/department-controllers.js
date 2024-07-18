const Department = require('../db/models/department-schema');

const getDepartments = async (req, res) => {
  const departments = await Department.find();
  res.status(200).json({ message: 'Success', data: departments });
};

const postDepartments = async (req, res) => {
  const { name } = req.body;
  const { originalname } = req.file;
  const department = await Department.create({
    name: name,
    image: `http://localhost:${process.env.PORT}/uploads/${originalname}`,
  });
  res.status(201).json({ message: 'Success', data: department });
};

module.exports = { getDepartments, postDepartments };

const getStudents = async (req, res) => {
    try {
        const student = await Student.find();
        res.status(200).json({ data: student });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
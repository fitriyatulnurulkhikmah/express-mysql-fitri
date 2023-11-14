const getAllUser = (req, res)=> {
    const data = {
        id: '001',
        name : "Fitriyatul Nurul Kh.",
        email : "khikmahnrl2011@gmail.com",
        address : "Malang"
    }
    res.json({
        massage: 'GET All users succes',
        data : data
    })
};

const createNewUser = (req, res)=>{
    console.log(req.body);
    res.json({
        massage: 'CREATE New users succes',
        data: req.body
    })
};

const updateUser = (req, res) => {
    const {idUser} = req.params;
    console.log('idUser: ' , idUser);
    res.json({
        massage: 'UPDATE User Succes',
        data: req.body,
    })
}
module.exports = {
    getAllUser,
    createNewUser,
    updateUser,
}
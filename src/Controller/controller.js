const service = require('../Services/services')

exports.createUser = async (req, res) => {
    try {
        let reqData = req.body;

        if(reqData) {
            const resData = await service.create(reqData);
            res.status(200).send({status: true, Message: "User created successfully", Response: resData});
        }
        else {
            res.status(400).send({status: false, Message: "Invalid request"});
        }
    } catch(error) {
        res.status(500).send({status: false, Message: "Something went wrong!"});
    }
} 

exports.getUserlist = async(req, res) => {
    try {
        const resData = await service.getUserList();
         return res.status(200).send({ Status: true, Message: "User list returned successfully", Response: resData})
    } catch(error) {
        res.status(500).send({status: false, Message: "Something went wrong!"});
    }
}
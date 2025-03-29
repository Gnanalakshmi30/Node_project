const User = require('../Model/userModel'); 
exports.create = async(data) => {
    try {
        const newUser = new User(data);
        const savedUser  = await newUser.save()
        .then(doc => {
            console.log('record saved:', doc);
        })
        .catch(error => {
            console.error('Error saving record', error);
        });
        return savedUser;
    } catch(error) {
        throw error;
    }
}

exports.getUserList = async() => {
    try {
      const result = await  UserModel.find({}).then(function (users) {
            res.json(users)
            }).catch(function (err) {
            console.log(err);
            })
        return result;
    } catch(error) {
        throw error;
    }
} 

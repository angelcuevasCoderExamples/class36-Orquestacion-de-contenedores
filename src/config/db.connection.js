
const { connect } = require('mongoose');
const {MONGO_URI} = require('./config')
const dbConnection = async() => {
    await connect(MONGO_URI);
    
};

module.exports = dbConnection;
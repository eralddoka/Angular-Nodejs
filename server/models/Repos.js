const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReposSchema = new Schema({
    username: {
        type: String
    },
    repos: {
        type: Object
    }
});

module.exports = Repos = mongoose.model('repos', ReposSchema);
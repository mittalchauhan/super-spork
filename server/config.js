require('dotenv').config()

exports.mongo_url = process.env.mongoURL
exports.port=parseInt(process.env.port) || 1400
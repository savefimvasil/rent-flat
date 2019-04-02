const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Post = new Schema({
  url: {
    type: String
  },
  parentPost: {
    type: Array
  },
  titleUA: {
    type: String
  },
  titleRU: {
    type: String
  },
  postBodyUA: {
    type: String
  },
  postBodyRU: {
    type: String
  },
  postBodyMiniUA: {
    type: String
  },
  postBodyMiniRU: {
    type: String
  },
  blockView: {
    type: String
  },
  sortType: {
    type: String
  }
},{
    collection: 'posts'
});

module.exports = mongoose.model('Post', Post);

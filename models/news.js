const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newsSchema = new Schema ({
  title: {type:String, required: [true, 'Proszę podaj tytuł']},
  body: {type: String, required: [true, 'Proszę podaj treść artykułu']},
  date: {type: Date, default: Date.now}
})

module.exports = mongoose.model("News", newsSchema);
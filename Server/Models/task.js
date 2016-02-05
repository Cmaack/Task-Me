var mongoose = require('mongoose');

var taskSchema = mongoose.Schema({

  //Todo stuff
  todo_name: { type: String },
  todo_deadline: {type: String },
  priority_level: {type : String,
  default : 'Moderate',
  enum : ['Unimportant', 'Low', 'Moderate', 'High', 'Urgent']},

  //phone stuff
  person_name: { type: String },
  phone_number: {type: String },
  email: {type: String },
  notes: {type : String},
  phone_deadline: {type : String },

    //appointment stuff
  appointment_name: { type: String },
  appointment_time: {type: String },
  appointment_description: {type : String},
  appointment_location: {type: String },
}, {timestamps: true });

module.exports = mongoose.model('Task', taskSchema);

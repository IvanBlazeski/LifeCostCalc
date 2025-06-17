const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  user:      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  category:  { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  amount:    { type: Number, required: true },
  note:      { type: String },
  date:      { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Expense', expenseSchema);

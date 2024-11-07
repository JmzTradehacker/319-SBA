import mongoose from 'mongoose';

const tradeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  cryptoSymbol: { type: String, required: true },
  amount: { type: Number, required: true },
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

const Trade = mongoose.model('Trade', tradeSchema);

export default Trade;

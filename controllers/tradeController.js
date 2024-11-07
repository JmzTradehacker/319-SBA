import Trade from '../models/Trade.js';

// Get all trades
export const getTrades = async (req, res) => {
  try {
    const trades = await Trade.find();
    res.status(200).json(trades);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving trades' });
  }
};

// Create trade
export const createTrade = async (req, res) => {
  try {
    const trade = await Trade.create(req.body);
    res.status(201).json(trade);
  } catch (error) {
    res.status(400).json({ message: 'Error creating trade' });
  }
};

// Update trade
export const updateTrade = async (req, res) => {
  try {
    const trade = await Trade.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(trade);
  } catch (error) {
    res.status(400).json({ message: 'Error updating trade' });
  }
};

// Delete trade
export const deleteTrade = async (req, res) => {
  try {
    await Trade.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Trade deleted' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting trade' });
  }
};

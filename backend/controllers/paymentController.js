const Payment = require('../models/Payment');
const Razorpay = require('razorpay');

const instance = new Razorpay({
  key_id: 'your_razorpay_key_id',
  key_secret: 'your_razorpay_key_secret'
});

exports.createPayment = async (req, res) => {
  const { employeeId, amount } = req.body;

  const options = {
    amount: amount * 100, // Razorpay works with the smallest unit (paise)
    currency: "INR",
    receipt: "receipt#1"
  };

  try {
    const order = await instance.orders.create(options);
    const newPayment = new Payment({ employeeId, amount, paymentDate: new Date(), status: 'Pending' });
    await newPayment.save();
    res.status(201).json({ payment: newPayment, order });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default function handler(req, res) {
  const menu = [
    { id: 'latte', name: 'Latte', description: 'Smooth and creamy espresso + milk', price: 180 },
    { id: 'espresso', name: 'Espresso', description: 'Bold single shot', price: 120 },
    { id: 'cappuccino', name: 'Cappuccino', description: 'Rich espresso with foamed milk', price: 160 }
  ]
  res.status(200).json(menu)
}

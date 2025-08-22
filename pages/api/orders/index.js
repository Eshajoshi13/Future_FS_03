import { readJson, writeJson } from '../../../lib/db'

function id() {
  return 'ord_' + Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-4)
}

export default function handler(req, res) {
  if (req.method === 'GET') {
    const orders = readJson('orders.json')
    return res.status(200).json(orders.reverse())
  }
  if (req.method === 'POST') {
    const { item } = req.body || {}
    if (!item) return res.status(400).json({ error: 'Missing item' })
    const orders = readJson('orders.json')
    const entry = { id: id(), item, createdAt: new Date().toISOString() }
    orders.push(entry)
    writeJson('orders.json', orders)
    return res.status(201).json(entry)
  }
  res.setHeader('Allow', ['GET', 'POST'])
  res.status(405).end('Method Not Allowed')
}

import { readJson, writeJson } from '../../lib/db'

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end('Method Not Allowed')
  }
  const { name, email, message } = req.body || {}
  if (!name || !email || !message) return res.status(400).json({ error: 'All fields are required' })
  const messages = readJson('messages.json')
  const entry = { id: 'msg_' + Math.random().toString(36).slice(2,8), name, email, message, createdAt: new Date().toISOString() }
  messages.push(entry)
  writeJson('messages.json', messages)
  return res.status(201).json({ ok: true })
}

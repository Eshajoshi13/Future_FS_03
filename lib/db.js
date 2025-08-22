import fs from 'fs'
import path from 'path'

const dataDir = path.join(process.cwd(), 'data')

export function ensureDataFiles() {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })
  const files = ['orders.json', 'messages.json']
  for (const f of files) {
    const p = path.join(dataDir, f)
    if (!fs.existsSync(p)) fs.writeFileSync(p, '[]', 'utf-8')
  }
}

export function readJson(file) {
  ensureDataFiles()
  const p = path.join(dataDir, file)
  const raw = fs.readFileSync(p, 'utf-8')
  return JSON.parse(raw || '[]')
}

export function writeJson(file, data) {
  ensureDataFiles()
  const p = path.join(dataDir, file)
  fs.writeFileSync(p, JSON.stringify(data, null, 2), 'utf-8')
}

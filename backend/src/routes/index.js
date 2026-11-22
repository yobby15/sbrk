import { Router } from 'express';
const r = Router();
r.get('/health', (_req, res) => res.json({ status: 'ok' }));
export default r;
import { createHmac, timingSafeEqual } from 'node:crypto';
export function sign(value){return createHmac('sha256',process.env.SESSION_SECRET||'').update(value).digest('base64url')}
export function valid(req){const raw=req.headers.cookie||'';const token=raw.split(';').map(x=>x.trim()).find(x=>x.startsWith('lunaro_session='))?.slice(15);if(!token)return false;const [exp,sig]=token.split('.');if(!exp||!sig||Number(exp)<Date.now())return false;const expected=sign(exp);try{return timingSafeEqual(Buffer.from(sig),Buffer.from(expected))}catch{return false}}
export function cookie(value,maxAge=60*60*12){return `lunaro_session=${value}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=${maxAge}`}
export function requireAuth(req,res){if(!valid(req)){res.status(401).json({error:'Unauthorized'});return false}return true}

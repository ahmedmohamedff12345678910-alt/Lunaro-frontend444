import {valid} from '../lib/auth.js';
export default function handler(req,res){if(req.method!=='GET')return res.status(405).end();res.status(valid(req)?200:401).json({authenticated:valid(req)})}

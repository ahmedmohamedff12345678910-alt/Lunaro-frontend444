import {readState} from '../lib/store.js';
export default async function handler(req,res){if(req.method!=='GET')return res.status(405).end();try{const data=await readState();res.setHeader('Cache-Control','no-store');res.status(200).json(data)}catch{res.status(200).json({projects:[],sections:[],links:[],offers:[],music:{enabled:false},theme:{}})}}

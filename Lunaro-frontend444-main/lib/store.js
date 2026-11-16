import { list, put } from '@vercel/blob';
const KEY='lunaro-cms/site-content.json';
export const defaults={projects:[],sections:[],links:[],offers:[],music:{enabled:false,url:'',title:''},theme:{cssUrl:'',name:'Default'},updatedAt:null};
export async function readState(){const {blobs}=await list({prefix:KEY,limit:10});const item=blobs.find(x=>x.pathname===KEY);if(!item)return defaults;try{const r=await fetch(item.url,{cache:'no-store'});if(!r.ok)return defaults;return {...defaults,...await r.json()}}catch{return defaults}}
export async function writeState(data){const clean={...defaults,...data,updatedAt:new Date().toISOString()};await put(KEY,JSON.stringify(clean),{access:'public',addRandomSuffix:false,allowOverwrite:true,contentType:'application/json'});return clean}

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const src=fs.readFileSync(path.join(root,'src/projects.ts'),'utf8');
const count=(src.match(/"id": "project-/g)||[]).length;
const ids=[...src.matchAll(/"id": "([^"]+)"/g)].map(x=>x[1]);
const images=[...src.matchAll(/"image": "([^"]+)"/g)].map(x=>x[1]);
const errors=[];
if(count!==72)errors.push(`Expected 72 projects, found ${count}`);
if(new Set(ids).size!==ids.length)errors.push('Duplicate project IDs detected');
if(images.length!==72)errors.push(`Expected 72 image paths, found ${images.length}`);
for(const image of images){const file=path.join(root,'public',image.replace(/^\//,''));if(!fs.existsSync(file))errors.push(`Missing image: ${image}`);else {const b=fs.readFileSync(file);const isSvg=b.toString('utf8',0,4)==='<svg';const isWebp=b.length>12&&b.toString('ascii',0,4)==='RIFF'&&b.toString('ascii',8,12)==='WEBP';if(!isSvg&&!isWebp)errors.push(`Invalid image file: ${image}`)}}
if(new Set(images).size!==images.length)errors.push('Duplicate image paths detected');
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log(`PASS: ${count} projects; unique IDs and image paths; all ${images.length} local image assets exist and have valid SVG/WebP signatures.`);

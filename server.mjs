import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const root=new URL('./',import.meta.url);
const routes=new Map([['/','index.html'],['/index.html','index.html'],['/styles.css','styles.css'],['/favicon.svg','favicon.svg'],['/assets/atmosphere-v1.png','assets/atmosphere-v1.png'],['/src/app.mjs','src/app.mjs'],['/src/model.mjs','src/model.mjs'],['/src/demo.mjs','src/demo.mjs'],['/src/guardclaw-report.mjs','src/guardclaw-report.mjs'],['/src/guardclaw-patterns.mjs','src/guardclaw-patterns.mjs'],['/examples/snapshot.json','examples/snapshot.json'],['/examples/empty.json','examples/empty.json']]);
for(const name of ['bricolage-grotesque-latin-wght-normal.woff2','geist-latin-wght-normal.woff2','geist-mono-latin-wght-normal.woff2'])routes.set(`/fonts/${name}`,`fonts/${name}`);
const server=http.createServer(async(req,res)=>{
 const headers={
 'Content-Security-Policy':"default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self'; connect-src 'none'; font-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'none'",
 'X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer','Cache-Control':'no-store',
 'Permissions-Policy':'camera=(), microphone=(), geolocation=()','Cross-Origin-Resource-Policy':'same-origin'
 };
 const host=req.headers.host;
 if(host!==`127.0.0.1:${port}`&&host!==`localhost:${port}`){res.writeHead(403,headers);return res.end('Forbidden host.');}
 if(req.method!=='GET'&&req.method!=='HEAD'){res.writeHead(405,{...headers,Allow:'GET, HEAD'});return res.end('Read-only server.');}
 let pathname;try{const url=new URL(req.url,'http://127.0.0.1');if(url.search)throw Error();pathname=url.pathname;}catch{res.writeHead(400,headers);return res.end('Invalid request.');}
 const file=routes.get(pathname);
 if(!file){res.writeHead(404,headers);return res.end('Not found.');}
 try{const data=await readFile(new URL(file,root));const type=file.endsWith('.png')?'image/png':file.endsWith('.woff2')?'font/woff2':file.endsWith('.svg')?'image/svg+xml':file.endsWith('.html')?'text/html':file.endsWith('.css')?'text/css':file.endsWith('.json')?'application/json':'text/javascript';res.writeHead(200,{...headers,'Content-Type':(file.endsWith('.woff2')||file.endsWith('.png'))?type:`${type}; charset=utf-8`});res.end(req.method==='HEAD'?undefined:data);}catch{res.writeHead(500,headers);res.end('Unable to read application file.');}
});
const port=Number(process.env.PORT || 4317);
if(!Number.isInteger(port)||port<1024||port>65535)throw Error('PORT must be 1024–65535.');
server.listen(port,'127.0.0.1',()=>console.log(`Dot Observatory: http://127.0.0.1:${port}\nServing only public-safe app routes from ${fileURLToPath(root)}\nStop with Ctrl+C.`));

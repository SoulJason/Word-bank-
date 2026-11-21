import fs from 'fs';
import {dictionary as cmu} from 'cmu-pronouncing-dictionary';
const D='node_modules/wordnet-db/dict/', OUT=process.argv[2];
const POS={noun:'n',verb:'v',adj:'adj',adv:'adv'};
const syn={}; // offset key -> {gloss, ex, words}
for(const p of Object.keys(POS)){
  for(const line of fs.readFileSync(D+'data.'+p,'utf8').split('\n')){
    if(!line||line[0]===' ')continue;
    const [head,gl]=line.split(' | ');const f=head.split(' ');
    const n=parseInt(f[3],16);const words=[];for(let i=0;i<n;i++)words.push(f[4+i*2].replace(/\(.*\)$/,'').replace(/_/g,' '));
    const g=(gl||'').trim();const exs=[...g.matchAll(/"([^"]+)"(\s*-\s*([^;"]+))?/g)].map(m=>m[3]?[m[1],m[3].trim()]:[m[1]]);
    let def=g.replace(/;?\s*"[^"]*"(\s*-\s*[^;"]+)?/g,'').replace(/[;\s]+$/,'').trim();
    syn[p+f[0]]={def,exs,words};
  }
}
const vowels=new Set(['AA','AE','AH','AO','AW','AY','EH','ER','EY','IH','IY','OW','OY','UH','UW']);
const V={AA:'ah',AE:'a',AH:'uh',AO:'aw',AW:'ow',AY:'eye',EH:'e',ER:'ur',EY:'ay',IH:'i',IY:'ee',OW:'oh',OY:'oy',UH:'uu',UW:'oo'};
const C={CH:'ch',DH:'th',HH:'h',JH:'j',NG:'ng',SH:'sh',TH:'th',ZH:'zh',Y:'y'};
const onsets=new Set(['S T','S P','S K','P L','P R','B L','B R','T R','D R','K L','K R','G L','G R','F L','F R','TH R','S T R','S P R','S K R','S L','S N','S M','S W','K W','T W']);
function respell(arp){
  const ph=arp.split(' ');const syl=[];let cur=[],stress=[];
  const idx=ph.map((p,i)=>vowels.has(p.replace(/\d/,''))?i:-1).filter(i=>i>=0);
  if(!idx.length)return null;
  let start=0;const bounds=[];
  for(let k=0;k<idx.length-1;k++){const a=idx[k],b=idx[k+1];const cons=ph.slice(a+1,b);let cut;
    if(cons.length<=1)cut=a+1;else{cut=b-1;for(let j=a+1;j<b-1;j++){if(onsets.has(ph.slice(j,b).join(' '))){cut=j;break}}}
    bounds.push(cut);}
  let s=0;const parts=[];for(const b of [...bounds,ph.length]){parts.push(ph.slice(s,b));s=b}
  return parts.map(pp=>{let st=false;const t=pp.map(p=>{const m=p.match(/^([A-Z]+)(\d)?$/);if(m[2]==='1')st=true;const b=m[1];return V[b]||C[b]||b.toLowerCase()}).join('');return st?t.toUpperCase():t}).join('-');
}
const lem=Object.create(null);
for(const p of Object.keys(POS)){
  for(const line of fs.readFileSync(D+'index.'+p,'utf8').split('\n')){
    if(!line||line[0]===' ')continue;const f=line.split(' ');const w=f[0];
    if(!/^[a-z][a-z'-]*[a-z]$/.test(w))continue;
    const sc=+f[2],pc=+f[3];const tag=+f[5+pc];const offs=f.slice(6+pc,6+pc+sc);
    (lem[w]??=[]);const grp=[];for(const o of offs.slice(0,4)){const s=syn[p+o];if(!s)continue;
      grp.push([POS[p],s.def,s.exs.slice(0,2),s.words.filter(x=>x!==w&&!x.includes(' ')).slice(0,4)]);}
    lem[w].push({tag,grp});
  }
}
const shards=Object.create(null);let n=0;
for(const [w,gs] of Object.entries(lem)){const senses=gs.sort((a,b)=>b.tag-a.tag||b.grp.length-a.grp.length).flatMap(g=>g.grp);if(!senses.length)continue;
  // order: keep pos groups but first-sense of each pos up front; cap 6
  const pr=Object.hasOwn(cmu,w)&&/^[A-Z0-9 ]+$/.test(cmu[w])?cmu[w]:null;const say=pr?respell(pr):null;
  (shards[w[0]]??=Object.create(null))[w]=[say,senses.slice(0,6)];n++;
}
fs.mkdirSync(OUT,{recursive:true});
for(const [k,v] of Object.entries(shards))fs.writeFileSync(`${OUT}/${k}.json`,JSON.stringify(v));
console.log(n,'words');
console.log(JSON.stringify(shards.a.ardent),JSON.stringify(shards.e.ebullient),JSON.stringify(shards.s.sanguine).slice(0,400));

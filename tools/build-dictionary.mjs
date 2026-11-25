import fs from 'fs';
import {execFileSync} from 'child_process';
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
    const raw=[];for(let i=0;i<n;i++)raw.push(f[4+i*2].replace(/\(.*\)$/,''));
    syn[p+f[0]]={def,exs,words,raw};
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
  return parts.map(pp=>{let st=false;const vi=pp.findIndex(p=>vowels.has(p.replace(/\d/,'')));
    // the "eye" vowel: "eye" alone, "y" after a consonant, with a silent e when the syllable closes (dyne, kwype)
    const t=pp.map((p,k)=>{const m=p.match(/^([A-Z]+)(\d)?$/);if(m[2]==='1')st=true;const b=m[1];
      if(b==='AY'&&k===vi&&vi>0)return 'y';return V[b]||C[b]||b.toLowerCase()}).join('')+(pp[vi]&&pp[vi].startsWith('AY')&&vi>0&&vi<pp.length-1?'e':'');
    return st?t.toUpperCase():t}).join('-');
}

// ---- pronunciations for words the CMU dictionary lacks: espeak-ng (free, offline), IPA -> ARPAbet -> respelling ----
const IPA=[['aɪ','AY'],['aʊ','AW'],['ɔɪ','OY'],['eɪ','EY'],['oʊ','OW'],['əʊ','OW'],['ɑː','AA'],['ɔː','AO'],['oː','AO'],['iː','IY'],['uː','UW'],['ɜː','ER'],
 ['tʃ','CH'],['dʒ','JH'],['ɑ','AA'],['ɔ','AO'],['ɒ','AA'],['o','OW'],['i','IY'],['u','UW'],['ɜ','ER'],['ɚ','ER'],['æ','AE'],['a','AE'],['ɛ','EH'],['e','EH'],
 ['ɪ','IH'],['ᵻ','IH'],['ʊ','UH'],['ʌ','AH'],['ə','AH'],['ɐ','AH'],['θ','TH'],['ð','DH'],['ʃ','SH'],['ʒ','ZH'],['ŋ','NG'],['ɹ','R'],['r','R'],['j','Y'],
 ['ɡ','G'],['g','G'],['ɾ','T'],['x','K'],['p','P'],['b','B'],['t','T'],['d','D'],['k','K'],['f','F'],['v','V'],['s','S'],['z','Z'],['m','M'],['n','N'],['l','L'],['w','W'],['h','HH']];
const VOW=new Set(['AY','AW','OY','EY','OW','AA','AO','IY','UW','ER','AE','EH','IH','UH','AH']);
function ipaToArpa(ipa){
  ipa=ipa.replace(/\([a-z-]+\)/g,'').replace(/[ˑ.‿ʔ]/g,'').trim();
  const out=[];let stress=0,i=0;
  while(i<ipa.length){
    const c=ipa[i];
    if(c==='ˈ'){stress=1;i++;continue} if(c==='ˌ'){stress=2;i++;continue}
    if(c==='ː'||c===' '||c==='-'){i++;continue}
    if(ipa[i+1]==='̩'){out.push('AH0');const m=IPA.find(([k])=>k===c);if(m)out.push(m[1]);i+=2;continue}
    const m=IPA.find(([k])=>ipa.startsWith(k,i));
    if(!m){i++;continue}
    if(VOW.has(m[1])){out.push(m[1]+(stress||0));stress=0}else if(!(m[1]==='R'&&out.length&&out[out.length-1].startsWith('ER')))out.push(m[1]);
    i+=m[0].length;
  }
  return out.some(x=>/\d/.test(x))?out.join(' '):null;
}
function espeakAll(words){
  const res=new Map();
  for(let i=0;i<words.length;i+=2000){
    const chunk=words.slice(i,i+2000);
    const outp=execFileSync('espeak-ng',['-q','--ipa','-v','en-us','--stdin'],{input:chunk.map(w=>w.replace(/-/g,' ')+'.').join('\n'),maxBuffer:64<<20}).toString().split('\n').filter(l=>l.trim());
    if(outp.length!==chunk.length){chunk.forEach(w=>{try{res.set(w,execFileSync('espeak-ng',['-q','--ipa','-v','en-us',w.replace(/-/g,' ')]).toString().trim())}catch(e){}});continue}
    chunk.forEach((w,k)=>res.set(w,outp[k].trim()));
  }
  return res;
}
const lem=Object.create(null);
for(const p of Object.keys(POS)){
  for(const line of fs.readFileSync(D+'index.'+p,'utf8').split('\n')){
    if(!line||line[0]===' ')continue;const f=line.split(' ');const w=f[0];
    if(!/^[a-z][a-z'-]*[a-z]$/.test(w))continue;
    const sc=+f[2],pc=+f[3];const tag=+f[5+pc];const offs=f.slice(6+pc,6+pc+sc);
    (lem[w]??=[]);const grp=[];let caps=0,tot=0;for(const o of offs){const s0=syn[p+o];if(s0){tot++;const m=s0.raw.find(x=>x.toLowerCase()===w);if(m&&m[0]!==m[0].toLowerCase())caps++}}
    for(const o of offs.slice(0,4)){const s=syn[p+o];if(!s)continue;
      grp.push([POS[p],s.def,s.exs.slice(0,2),s.words.filter(x=>x!==w&&!x.includes(' ')).slice(0,4)]);}
    lem[w].push({tag,grp,proper:tot>0&&caps===tot});
  }
}
const hasCmu=w=>Object.hasOwn(cmu,w)&&/^[A-Z0-9 ]+$/.test(cmu[w]);
const needSay=Object.keys(lem).filter(w=>!hasCmu(w));
const espeak=espeakAll(needSay);let filled=0;
const shards=Object.create(null);let n=0;
for(const [w,gs] of Object.entries(lem)){const senses=gs.sort((a,b)=>b.tag-a.tag||b.grp.length-a.grp.length).flatMap(g=>g.grp);if(!senses.length)continue;
  // order: keep pos groups but first-sense of each pos up front; cap 6
  let say=null;if(hasCmu(w))say=respell(cmu[w]);else if(espeak.has(w)){const a=ipaToArpa(espeak.get(w));if(a){say=respell(a);if(say)filled++}}
  const proper=gs.every(g=>g.proper);(shards[w[0]]??=Object.create(null))[w]=proper?[say,senses.slice(0,6),1]:[say,senses.slice(0,6)];n++;
}
fs.mkdirSync(OUT,{recursive:true});
for(const [k,v] of Object.entries(shards))fs.writeFileSync(`${OUT}/${k}.json`,JSON.stringify(v));
console.log(n,'words;',filled,'pronunciations from espeak-ng');
console.log(JSON.stringify(shards.a.ardent),JSON.stringify(shards.e.ebullient),JSON.stringify(shards.s.sanguine).slice(0,400));

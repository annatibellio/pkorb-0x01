'use strict';
const KEY='pkorb0x01_v2';
const T=(...l)=>l.join('\n');
const FS={"readme.txt": {"r": 0, "t": "ARCHIVE 001 :: recovered fragment\nThe creator is unknown. The header is missing.\nStart with evidence/header.bin\nTip: type \"help\" for the tools that still work."}, "evidence/header.bin": {"r": 0, "t": "ARCHIVE 001 :: header.bin (ascii gutter lost)\n00000000  46 4f 4c 4c 4f 57 20 54  48 45 20 52 41 42 42 49  |................|\n00000010  54                                                |.|\nEOF 17 bytes", "i": "data, 17 bytes, header invalid"}, "protocol/rabbit.log": {"r": 1, "t": "[rabbit] boot sequence ok\n[rabbit] node=7F3A state=listening\n[rabbit] CHECKSUM 0x00 (null)\n[rabbit] PAYLOAD b64:MDEwMDExMDAgMDEwMDExMTEgMDEwMDExMTEgMDEwMDEwMTEgMDAxMDAwMDAgMDEwMDAwMTEgMDEwMDExMDAgMDEwMDExMTEgMDEwMTAwMTEgMDEwMDAxMDEgMDEwMTAwMTA=\n[rabbit] note: payload is wrapped (b64) before transmission; inner format is 8-bit ASCII\n[rabbit] hop 3/3 complete", "i": "ASCII text, payload wrapped in base64"}, "meta/archive001.dat": {"r": 2, "b": 1, "i": "ARCHIVE 001 :: record schema v1\nauthor.id    : 7F3A\nauthor.alias : null\nauthor.email : null\nauthor.???   : [STRIPPED] type=STRING desc=\"what others call you\"\ntrace_id     : 7F3A-NULL\nnote: null = erased, not absent.", "s": "ARCHIVE 001\nschema v1\nauthor.id 7F3A\ntrace 7F3A-NULL"}, "logs/sys.log": {"r": 3, "t": "# host=archive001 tz=UTC\n2026-02-14T01:58:40Z id=91C2 evt=login ok\n2026-02-14T02:11:09Z id=7F3A evt=write frag=THE\n2026-02-14T02:19:33Z id=7F3A evt=write frag=CREATOR\n2026-02-14T02:30:12Z id=91C2 evt=cron backup\n2026-02-14T03:14:07Z id=7F3A evt=write frag=TRACE\n2026-02-14T03:20:00Z id=91C2 evt=logout"}, "logs/net.log": {"r": 3, "t": "# host=gateway tz=UTC-03:00\n2026-02-13 22:50:11 id=91C2 evt=ping\n2026-02-13 23:44:51 id=7F3A evt=upload frag=LEFT\n2026-02-14 00:02:26 id=7F3A evt=upload frag=A\n2026-02-14 00:15:00 id=91C2 evt=ping"}, "final/manifest.txt": {"r": 4, "t": "ARCHIVE 001 :: manifest\ncreator.NAME      : [STRIPPED]\ncreator.sig       : QU5OQQ==   (encoding: base64)\nrecipient.sha256  : d9afb8b95ca6ed576cb6cf0a3f7e1fda60684522008b880138f6ac4e0e233348\n                    (SHA-256 of the uppercase first name)\nstatus: experiment abandoned. trace preserved."}, "final/candidates.txt": {"r": 4, "t": "ADAM\nPHILIP\nLUCAS\nTHEO"}, ".rabbit_hole": {"r": 0, "x": 1, "t": "43 55 50   <- not every hex string is a clue. Some are just company for the trip.\nnull is not nothing."}};
const LETTER="ARCHIVE 001 // FINAL RECORD\n\nSTATUS: COMPLETE\nORIGIN: HUMAN\nCLASSIFICATION: PERSONAL\nSUBJECT: PHILIP KORB\n\nSe você chegou até aqui, parabéns. Você provou que, aparentemente, nem um coelho suspeito, arquivos incompletos ou códigos sem contexto são capazes de fazer você desistir de uma investigação.\n\nEu poderia dizer que tudo isso foi apenas um experimento. Uma brincadeira envolvendo códigos, sistemas, Linux, enigmas e algumas referências que talvez só você entendesse.\n\nMas nós dois sabemos que eu não teria dedicado tanto tempo a isso se fosse apenas isso.\n\nA verdade é que eu queria te dar alguma coisa diferente. Algo que não estivesse pronto numa prateleira, esperando alguém escolher. Eu queria criar algo que tivesse um pouco de você em cada detalhe e um pouco de mim em cada escolha.\n\nE, de alguma forma, transformar tudo isso em uma experiência que você pudesse descobrir por conta própria.\n\nTalvez seja porque eu goste de prestar atenção. Nas coisas que você gosta, nas coisas que você comenta, nos detalhes que outras pessoas talvez deixassem passar. Gosto da ideia de guardar pequenos pedaços das pessoas que são importantes para mim e encontrar maneiras de fazer com que elas se sintam especiais.\n\nEntão, sim. Existe uma pessoa por trás deste arquivo.\n\nUma pessoa que pensou em você enquanto escolhia cada detalhe. Que imaginou sua reação ao encontrar uma pista, descobrir um código ou perceber que uma coisa aparentemente aleatória tinha um significado.\n\nUma pessoa que queria te surpreender. E que, se você chegou até esta parte, provavelmente está sorrindo um pouquinho ao imaginar você lendo isso.\n\nO mistério nunca foi descobrir se havia alguém por trás do sistema. Era descobrir o que essa pessoa queria te dizer.\n\nE acho que agora posso finalmente responder.\n\nEu queria que você tivesse algo que fosse seu. Algo feito com carinho, com intenção e com aquela dose de criatividade que talvez seja a minha maneira um pouco peculiar de demonstrar afeto.\n\nPorque algumas pessoas merecem mais do que um presente escolhido às pressas. Merecem tempo, cuidado e a vontade genuína de fazer algo que tenha significado.\n\nE você é uma dessas pessoas para mim.\n\nNão sei se existe um jeito perfeito de explicar o carinho que sinto por você. Talvez nem tudo precise receber um nome imediatamente, nem toda coisa bonita precise ter seu futuro definido antes de poder ser vivida.\n\nMas eu sei que quis fazer isso por você. Sei que sorri enquanto imaginava você resolvendo as pistas. E sei que, entre tantos arquivos, códigos e mensagens escondidas, a parte mais sincera deste projeto é justamente a mais simples:\n\neu pensei em você.\n\nE espero que, quando olhar para esse presente, você se lembre disso.\n\nQue por trás de toda a estética de terminal, dos códigos e do coelho que parecia saber mais do que deveria, havia alguém querendo arrancar um sorriso seu.\n\nAlguém que quis transformar um sentimento em alguma coisa que você pudesse guardar.\n\nThe system was never the message. You were the reason I created it.\n\nCom carinho,\nAnna\n\n⸻\n\nEND OF RECORD_001\n\nPOSTSCRIPT.EXE\n\nmanda a foto do gordinho.\n\n[REQUEST: PENDING]";
async function loadFS(){return Promise.resolve()}
const N=s=>String(s).toUpperCase().normalize('NFD').replace(/[^A-Z0-9]/g,'');
const PH=[
{t:'01 // The Missing Header',o:'The header of ARCHIVE 001 is gone. Recover the message hidden in the bytes of evidence/header.bin.',
 h:['Repare no padrão dos caracteres dentro do bloco de bytes: eles não são aleatórios, e o terminal entende mais de uma forma de interpretar esse tipo de dado.'],
 ok:s=>N(s)==='FOLLOWTHERABBIT',fb:'No match. The header has 17 bytes; all of them should become readable text.',
 ex:'46 4F 4C 4C 4F 57... is ASCII in hex = FOLLOW THE RABBIT. NEW FILE: protocol/rabbit.log'},
{t:'02 // The Rabbit Protocol',o:'The protocol left a log. Not every line is noise: find the payload and translate it.',
 h:['Nem toda linha do log é ruído: uma delas carrega algo codificado, e o resultado da primeira decodificação ainda esconde outra camada por baixo.'],
 ok:s=>N(s)==='LOOKCLOSER',fb:'Not it. Did you group the bits 8 by 8?',
 ex:'Base64 wrapping 8-bit binary ASCII = LOOK CLOSER. Note the CHECKSUM 0x00 and trace 7F3A: null is not nothing. NEW FILE: meta/archive001.dat'},
{t:'03 // Metadata Is Evidence',o:'The record schema was sanitized. Which key of the author field was removed? (one word)',
 h:['Compare os campos que sobraram no arquivo: o que falta ali costuma aparecer em qualquer perfil de usuário, só que foi removido de propósito.'],
 ok:s=>N(s)==='NAME',fb:'Not that key. Think about what a profile stores about a person.',
 ex:'id, alias and email are all listed; the stripped field is described as "what others call you" = NAME. Author id 7F3A is now your filter. NEW FILES: logs/'},
{t:'04 // The Identity Hypothesis',o:'Two logs, two time zones, one sentence. Keep only author 7F3A and order the fragments by real time (UTC).',
 h:['Dois registros, dois fusos horários diferentes: antes de montar a frase, coloque os eventos na mesma referência de tempo.'],
 ok:s=>N(s)==='THECREATORLEFTATRACE',fb:'Wrong order or fragments. Did you convert the time zones?',
 ex:'Local net.log times +3h: LEFT 02:44Z, A 03:02Z. Sorted in UTC: THE, CREATOR, LEFT, A, TRACE. NEW FILES: final/'},
{t:'05 // The Human Behind the System',o:'The manifest ties everything together. Who created ARCHIVE 001, and for whom? Answer with both names.',
 h:['O campo NAME foi removido, mas a assinatura do criador ainda está ali, só que codificada. O destinatário não aparece como texto — compare os candidatos contra o que o manifesto guardou dele.'],
 ok:s=>{const n=N(s);return n.includes('ANNA')&&n.includes('PHILIP')},fb:'Incomplete. The answer must name the creator and the recipient.',
 ex:'sig QU5OQQ== = ANNA. SHA-256("PHILIP") matches the manifest.'}
];
const EV=['FOLLOW_THE_RABBIT (header.bin)','LOOK_CLOSER (rabbit.log)','NAME (stripped author field)','THE CREATOR LEFT A TRACE (sys.log + net.log)','ANNA -> PHILIP (manifest)'];

function load(){try{const o=JSON.parse(localStorage.getItem(KEY));
 if(o&&o.v===2&&Number.isInteger(o.p)&&o.p>=0&&o.p<=5&&Array.isArray(o.h)&&o.h.length===5&&o.h.every(n=>Number.isInteger(n)&&n>=0&&n<=1))
  return{v:2,p:o.p,h:o.h,frag:(Array.isArray(o.frag)?o.frag:[]).filter(x=>typeof x==='string').map(x=>x.slice(0,60)).slice(-12),hist:(Array.isArray(o.hist)?o.hist:[]).filter(x=>typeof x==='string').map(x=>x.slice(0,200)).slice(-50)}}catch(e){}
 return{v:2,p:0,h:[0,0,0,0,0],frag:[],hist:[]}}
let S=load();
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
const $=id=>document.getElementById(id);
const out=$('out');
function echo(s,c){String(s).split('\n').forEach(l=>{const d=document.createElement('div');d.textContent=l;if(c)d.className=c;out.appendChild(d)});
 while(out.childNodes.length>400)out.removeChild(out.firstChild);out.scrollTop=out.scrollHeight}

function render(){
 $('st').textContent='ARCHIVE 001 · STATUS: '+['ABANDONED','HEADER RECOVERED','PROTOCOL DECODED','AUTHOR FIELD IDENTIFIED','TIMELINE RECONSTRUCTED','RECORD COMPLETE'][S.p];
 const ch=$('chips');ch.textContent='';
 for(let i=0;i<5;i++){const s=document.createElement('span');s.className='chip'+(i<S.p?' done':i===S.p?' on':'');s.textContent='0'+(i+1);ch.appendChild(s)}
 const ev=$('ev');ev.textContent='';
 if(!S.p){const l=document.createElement('li');l.textContent='(none yet)';ev.appendChild(l)}
 for(let i=0;i<S.p;i++){const l=document.createElement('li');l.textContent=EV[i];ev.appendChild(l)}
 const fr=$('fr');fr.textContent='';(S.frag.length?S.frag:['(none yet)']).forEach(x=>{const l=document.createElement('li');l.textContent=x;fr.appendChild(l)});
 const hi=$('hi');hi.textContent='';(S.hist.length?S.hist.slice(-6):['(none yet)']).forEach(x=>{const l=document.createElement('li');l.textContent=x;hi.appendChild(l)});
 const done=S.p>=5;$('mission').style.display=done?'none':'';$('fin').style.display=done?'block':'none';
 if(done){const L=$('letter');if(!L.childNodes.length)LETTER.split(/\n\n+/).forEach((t,i)=>{const p=document.createElement('p');p.textContent=t;p.style.animationDelay=Math.min(i*0.7,20)+'s';L.appendChild(p)});return}
 const P=PH[S.p];$('mt').textContent=P.t;$('mo').textContent=P.o;
 const n=S.h[S.p];$('hb').textContent='Hint ('+n+'/1)';$('hb').disabled=n>=1;
 const hs=$('hints');hs.textContent='';
 P.h.slice(0,n).forEach((x,i)=>{const d=document.createElement('div');d.textContent='['+(i+1)+'] '+x;hs.appendChild(d)})}

const vis=all=>Object.keys(FS).filter(k=>FS[k].r<=S.p&&(all||!FS[k].x));
const find=a=>{a=String(a||'').replace(/^\.?\/+/,'').toLowerCase();return vis(1).find(k=>k===a||k.split('/').pop()===a)};
const pr=s=>s.replace(/[^\x20-\x7e]/g,'.');
function dec(kind,data){
 try{
  if(kind==='hex'){const h=data.replace(/0x/gi,'').replace(/[^0-9a-f]/gi,'');if(!h||h.length%2)return null;return pr(h.match(/../g).map(x=>String.fromCharCode(parseInt(x,16))).join(''))}
  if(kind==='bin'){const b=data.replace(/[^01]/g,'');if(!b||b.length%8)return null;return pr(b.match(/.{8}/g).map(x=>String.fromCharCode(parseInt(x,2))).join(''))}
  if(kind==='b64'){if(!/^[A-Za-z0-9+\/]+={0,2}$/.test(data.trim()))return null;return pr(atob(data.trim()))}
 }catch(e){}return null}
async function sha(s){if(!(window.crypto&&crypto.subtle))return null;
 const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return Array.from(new Uint8Array(b)).map(x=>x.toString(16).padStart(2,'0')).join('')}

async function run(l){await run0(l);render()}
async function run0(line){
 line=line.trim().slice(0,200);if(!line)return;
 echo('$ '+line,'c');S.hist.push(line);S.hist=S.hist.slice(-50);save();
 const a=line.split(/\s+/),c=a[0].toLowerCase(),er=m=>echo(m,'bad');
 switch(c){
 case'help':echo(T('ls [dir]        list files','cat <file>      read a file','file <file>     show file metadata','strings <file>  printable text of a file','grep <term> <file>  search a file','decode hex|bin|b64 <data>','hash <WORD>    SHA-256 of WORD (uppercased)','history  clear  status'),'d');break;
 case'ls':{let l=vis(a[1]==='-a');if(a[1]&&a[1]!=='.'&&a[1]!=='-a'){const d=a[1].replace(/^\.?\/+|\/+$/g,'').toLowerCase();l=l.filter(k=>k.startsWith(d+'/'));if(!l.length&&d!=='.'){er('ls: cannot access \''+a[1].slice(0,40)+'\': No such directory');break}}
  echo(l.join('\n'));break}
 case'cat':{if(!a[1]){er('cat: missing file operand');break}
  if(a[1]==='/dev/null'){echo('(0 bytes) ...null is not nothing.','d');break}
  const k=find(a[1]);if(!k){er('cat: '+a[1].slice(0,40)+': No such file or directory');break}
  if(FS[k].b){er('cat: '+k+': binary file. Try file or strings.');break}echo(FS[k].t);break}
 case'file':{const k=find(a[1]);if(!k){er('file: '+(a[1]||'').slice(0,40)+': cannot open');break}echo(FS[k].i||'ASCII text');break}
 case'strings':{const k=find(a[1]);if(!k){er('strings: '+(a[1]||'').slice(0,40)+': No such file');break}echo(FS[k].s||FS[k].t);break}
 case'grep':{if(a.length<3){er('usage: grep <term> <file>');break}
  const k=find(a[2]);if(!k){er('grep: '+a[2].slice(0,40)+': No such file or directory');break}
  const t=a[1].toLowerCase(),r=(FS[k].s||FS[k].t||'').split('\n').filter(l=>l.toLowerCase().includes(t));
  echo(r.length?r.join('\n'):'(no matches)',r.length?'':'d');break}
 case'decode':{const k=(a[1]||'').toLowerCase();if(!['hex','bin','b64'].includes(k)||a.length<3){er('usage: decode hex|bin|b64 <data>');break}
  const r=dec(k,a.slice(2).join(' '));if(r===null)er('decode: invalid '+k+' input');else{echo('> '+r,'ok');const f=(k+': '+r).slice(0,60);if(!S.frag.includes(f)){S.frag.push(f);S.frag=S.frag.slice(-12);save()}}break}
 case'hash':{if(!a[1]){er('usage: hash <WORD>');break}const h=await sha(a[1].toUpperCase());echo(h?h:'hash: unavailable (needs HTTPS or localhost)',h?'ok':'bad');break}
 case'history':echo(S.hist.map((x,i)=>(i+1)+'  '+x).join('\n'),'d');break;
 case'clear':out.textContent='';break;
 case'status':echo('phase '+Math.min(S.p+1,5)+'/5 · evidence '+S.p+' · hints '+S.h.reduce((x,y)=>x+y,0),'d');break;
 case'uname':echo('Linux archive001 6.6.0-rabbit #1 SMP PKORB x86_64 GNU/Linux','d');break;
 case'whoami':echo('guest. the archive remembers a different name.','d');break;
 case'rabbit':echo(T('(\\_/)','( \'.\')   follow me','/>  >o  null is not nothing'),'d');break;
 case'sudo':echo('guest is not in the sudoers file. This incident will be reported to the rabbit.','d');break;
 default:er(c.slice(0,30)+': command not found. Type "help".')}}

$('cf').addEventListener('submit',e=>{e.preventDefault();const i=$('ci');const v=i.value;i.value='';run(v)});
$('hb').addEventListener('click',()=>{if(S.p<5&&S.h[S.p]<1){S.h[S.p]++;save();render()}});
$('af').addEventListener('submit',e=>{e.preventDefault();const i=$('ai'),v=i.value;i.value='';
 if(!v.trim()){echo('ANSWER: empty input.','bad');return}
 const P=PH[S.p];if(!P)return;
 if(P.ok(v)){echo('ACCESS GRANTED\n'+P.ex,'ok');S.p++;save();render();if(S.p>=5)$('fin').scrollIntoView({behavior:'smooth'})}
 else echo('ANSWER REJECTED. '+P.fb,'bad')});
$('reset').addEventListener('click',()=>{if(!confirm('Erase all progress?'))return;
 try{localStorage.removeItem(KEY)}catch(e){}S={v:2,p:0,h:[0,0,0,0,0],frag:[],hist:[]};out.textContent='';boot();render()});
function boot(){echo('ARCHIVE 001 :: session opened','ok');echo('Type "ls" to see the evidence. Type "help" for tools.','d')}
loadFS().then(()=>{boot();render()}).catch(()=>{render();echo('ERROR: could not initialize.','bad')});

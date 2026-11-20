/* ====== PENGATURAN UTAMA (edit di sini) ====== */
const CONFIG={
  wa:'6285712819828', /* nomor WhatsApp format 62..., tanpa 0 di depan dan tanpa tanda + */
  instagram:'https://www.instagram.com/cilok_gajahan/?hl=id',
  gmaps:'https://www.google.com/maps/search/?api=1&query=Cilok+Gajahan+Yogyakarta',
  gofood:'https://gofood.co.id/yogyakarta/restaurant/cilok-gajahan-seturan-675925ea-c62e-4c00-a052-36786b196719'
};
const OUTLETS=[
  {n:'Pusat',a:'Jl. Polowijan No. 4, Yogyakarta',q:'Cilok Gajahan Jl. Polowijan 4 Yogyakarta'},
  {n:'Alfamidi Jakal Km 9,3',a:'Alfamidi, Jl. Kaliurang (Jakal) Km 9,3',q:'Cilok Gajahan outlet Alfamidi Jalan Kaliurang Km 9,3 Yogyakarta',link:'https://share.google/wsG1iSH5tslLtkIvF',embed:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.576187828122!2d110.39606387500429!3d-7.728536092289848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59502517ade1%3A0xcfa889a803baa816!2sCilok%20Gajahan%20JAKAL!5e0!3m2!1sen!2sid!4v1795193995670!5m2!1sen!2sid'},
  {n:'Seturan',a:'Jl. Seturan (selatan STIE YKPN), Yogyakarta',q:'Cilok Gajahan Seturan Yogyakarta'},
  {n:'Soepomo',a:'Jl. Soepomo No. 48, Yogyakarta',q:'Cilok Gajahan outlet Jalan Soepomo No. 48 Yogyakarta',link:'https://share.google/aM4J94142pc4asH2S',embed:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.843108545815!2d110.38744567500534!3d-7.80642829221412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57fc4e8e4e39%3A0x6bf0cd754a1f498d!2zQ2lsb2sgR2FqYWhhbiBKYW50dXJhbiAo6qaV6qa26qat6qa66qa06qaP6qeA6qaS6qaX6qay6qak6qeA6qaX6qak6qeA6qag6qa46qar6qak6qeAKQ!5e0!3m2!1sen!2sid!4v1795194025072!5m2!1sen!2sid'}
];
const MENU=[
 ["Tentang Kami","tentang-kami.html",[["Profil","tentang-kami.html"],["Tonggak Sejarah","tonggak-sejarah.html"]]],
 ["Menu","menu.html",[["Cilok Mateng","menu.html#m1"],["Sempol &amp; Olos","menu.html#m2"],["Frozen","menu.html#m3"]]],
 ["Event &amp; Promo","promo.html",[]],
 ["Kemitraan","kemitraan.html",[]],
 ["Review","review.html",[]],
 ["FAQ","faq.html",[]]
];
const JAM='11.00\u201318.00 WIB';
const wa=t=>`https://wa.me/${CONFIG.wa}?text=${encodeURIComponent(t)}`;
const cur=location.pathname.split('/').pop()||'index.html';
const lang=/googtrans=\/id\/en/.test(document.cookie)?'en':'id';

const nav=MENU.map(([t,u,s])=>`<li class="${s.length?'has-sub ':''}${cur==u||s.some(x=>x[1].split('#')[0]==cur)?'active':''}"><a href="${u}">${t}</a>${s.length?`<ul class="sub-menu">${s.map(x=>`<li><a href="${x[1]}">${x[0]}</a></li>`).join('')}</ul>`:''}</li>`).join('');
const col=(h,a)=>`<div><h4>${h}</h4><ul>${a.map(x=>`<li><a href="${x[1]}">${x[0]}</a></li>`).join('')}</ul></div>`;
document.body.insertAdjacentHTML('afterbegin',`
<div class="topbar"><div class="wrap"><div class="tb-l"><a data-gofood>Pesan via GoFood</a><a data-ig>Instagram</a><a data-wa="Halo Cilok Gajahan, saya mau tanya/pesan." target="_blank" rel="noopener noreferrer">WhatsApp</a></div>
<div class="lang notranslate"><button data-l="id" class="${lang=='id'?'on':''}">ID</button> | <button data-l="en" class="${lang=='en'?'on':''}">EN</button></div></div></div>
<header class="nav"><a class="brand" href="index.html"><img src="images/logo.png" alt="Logo Cilok Gajahan"><span class="notranslate">Cilok Gajahan</span></a>
<button class="burger" aria-label="Buka menu" aria-expanded="false">Menu</button>
<nav id="menu"><ul>${nav}<li><a href="hubungi-kami.html" class="btn-sm">Hubungi Kami</a></li></ul></nav></header>`);
document.body.insertAdjacentHTML('beforeend',`
<footer><div class="wrap foot-grid">
<div><h4 class="notranslate">Cilok Gajahan</h4><p>Cilok, sempol, dan olos sejak 2016.<br>Model bisnis kemitraan.</p><p><a data-ig>Instagram @cilok_gajahan</a></p><h4 style="margin-top:18px">Outlet</h4><p>${OUTLETS.map(o=>`<b>${o.n}</b>: ${o.a}`).join('<br>')}<br><b>Jam buka semua outlet:</b> ${JAM}</p></div>
${col('Tentang Kami',MENU[0][2])}${col('Menu',MENU[1][2].concat([["Kemitraan","kemitraan.html"]]))}${col('Informasi',[["Event &amp; Promo","promo.html"],["Review","review.html"],["FAQ","faq.html"],["Hubungi Kami","hubungi-kami.html"]])}
</div><div class="wrap copy">&copy; 2026 Cilok Gajahan. Semua hak dilindungi.</div></footer>
<a class="fab" data-wa="Halo Cilok Gajahan, saya mau pesan." target="_blank" rel="noopener noreferrer">Pesan via WhatsApp</a>`);

/* tautan WhatsApp & GoFood diisi dari CONFIG */
document.querySelectorAll('[data-wa]').forEach(a=>a.href=wa(a.dataset.wa));
document.querySelectorAll('[data-ig]').forEach(a=>{a.href=CONFIG.instagram;a.target='_blank';a.rel='noopener noreferrer';});
document.querySelectorAll('[data-gmaps]').forEach(a=>{a.href=CONFIG.gmaps;a.target='_blank';a.rel='noopener noreferrer';});
document.querySelectorAll('[data-gofood]').forEach(a=>{a.href=CONFIG.gofood;a.target='_blank';a.rel='noopener noreferrer';});
document.querySelectorAll('a[href="#"]').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
const bg=document.querySelector('.burger'),mn=document.getElementById('menu');
bg.addEventListener('click',()=>{const o=mn.classList.toggle('open');bg.setAttribute('aria-expanded',o);});

/* Bahasa ID/EN menggunakan Google Translate widget. Perlu internet; pada file:// browser boleh membatasi widget. */
function initGoogleTranslate(){
 if(!window.google || !google.translate) return;
 new google.translate.TranslateElement({pageLanguage:'id',includedLanguages:'en,id',autoDisplay:false},'gt');
}
 document.body.insertAdjacentHTML('beforeend','<div id="gt" style="position:fixed;left:12px;bottom:12px;z-index:100;background:#fff;padding:6px;border-radius:8px;box-shadow:0 2px 8px #0002"></div>');
 window.gtInit=initGoogleTranslate;
 const translateScript=document.createElement('script');translateScript.src='https://translate.google.com/translate_a/element.js?cb=gtInit';translateScript.onerror=()=>console.warn('Google Translate failed to load.');document.body.appendChild(translateScript);
 document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',()=>{
   if(b.dataset.l==='id'){
     document.cookie='googtrans=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';location.reload();return;
   }
   const select=document.querySelector('.goog-te-combo');
   if(select){select.value='en';select.dispatchEvent(new Event('change'));}
   else alert('Google Translate belum tersedia. Pastikan internet aktif dan buka website melalui hosting atau localhost.');
 }));
/* Peta outlet (tab per outlet) */
const mp=document.getElementById('maps');
if(mp){
 mp.innerHTML=`<div class="map-tabs">${OUTLETS.map((o,i)=>`<button data-i="${i}" aria-selected="${i==0}">${o.n}</button>`).join('')}</div><p class="map-addr" id="maddr"></p><iframe class="gmap" id="mframe" title="Peta lokasi outlet" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
 const show=i=>{mp.querySelectorAll('.map-tabs button').forEach((b,n)=>b.setAttribute('aria-selected',n==i));
  document.getElementById('maddr').innerHTML=OUTLETS[i].a+' \u00b7 Buka '+JAM+' · <a id="maplink" target="_blank" rel="noopener noreferrer">Buka Google Maps</a>';document.getElementById('maplink').href=OUTLETS[i].link||('https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(OUTLETS[i].q));
  document.getElementById('mframe').src=OUTLETS[i].embed||('https://www.google.com/maps?q='+encodeURIComponent(OUTLETS[i].q)+'&output=embed');};
 mp.querySelectorAll('.map-tabs button').forEach(b=>b.addEventListener('click',()=>show(+b.dataset.i)));show(0);
}

/* Filter Media & Publikasi */
const fb=document.querySelectorAll('.filters button');
if(fb.length){
 const f=k=>{fb.forEach(b=>b.setAttribute('aria-selected',b.dataset.f==k));document.querySelectorAll('#grid article').forEach(a=>a.hidden=!(k=='all'||a.dataset.cat==k));};
 fb.forEach(b=>b.addEventListener('click',()=>f(b.dataset.f)));
 const h=location.hash.slice(1);f([...fb].some(b=>b.dataset.f==h)?h:'all');
}

/* Formulir kontak -> WhatsApp */
const cf=document.getElementById('cf');
if(cf)cf.addEventListener('submit',e=>{e.preventDefault();
 const v=n=>cf.elements[n].value.trim();
 window.open(wa(`Halo Cilok Gajahan,\nNama: ${v('nama')}\nEmail: ${v('email')}\nPesan: ${v('pesan')}`),'_blank');
 document.getElementById('cm').textContent='WhatsApp dibuka. Tekan kirim di sana untuk mengirim pesan.';});

/* Formulir review -> WhatsApp */
const rf=document.getElementById('rf');
if(rf)rf.addEventListener('submit',e=>{e.preventDefault();
 const v=n=>rf.elements[n].value.trim();
 window.open(wa(`Review untuk Cilok Gajahan\nNama: ${v('nama')}\nRating: ${v('rating')}/5\nUlasan: ${v('ulasan')}`),'_blank');
 document.getElementById('rm').textContent='WhatsApp dibuka. Tekan kirim di sana untuk mengirim review.';});

/* Formulir pendaftaran mitra -> WhatsApp */
const mf=document.getElementById('mf');
if(mf)mf.addEventListener('submit',e=>{e.preventDefault();
 const v=n=>mf.elements[n].value.trim();
 window.open(wa(`Pendaftaran Kemitraan Cilok Gajahan\nNama: ${v('nama')}\nNo. HP: ${v('hp')}\nKota/lokasi: ${v('kota')}\nPesan: ${v('pesan')}`),'_blank');
 document.getElementById('mm').textContent='WhatsApp dibuka. Tekan kirim di sana untuk mengirim pendaftaran.';});

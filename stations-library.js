const stationRecords=[{"division":"CBA","station":"VILLA MARIA","manager":"Soledad Zaracho"},{"division":"TRELEW","station":"VIEDMA","manager":"Manuel Aguirre"},{"division":"MDP","station":"CARHU\u00c9","manager":"Analia Lacentre"},{"division":"ROSARIO","station":"VENADO TUERTO","manager":"Jes\u00fas Bruna"},{"division":"CBA","station":"VILLA MERCEDES 122","manager":"Javier Hornilla"},{"division":"MDP","station":"BOLIVAR","manager":"Analia Lacentre"},{"division":"MDP","station":"BAH\u00cdA BLANCA","manager":"Analia Lacentre"},{"division":"MDP","station":"NECOCHEA","manager":"Analia Lacentre"},{"division":"MDP","station":"MAR DEL PLATA COLON","manager":"Nicolas Lerga"},{"division":"CBA","station":"VILLA CARLOS PAZ","manager":"Soledad Zaracho"},{"division":"MDP","station":"TRENQUE LAUQUEN","manager":"Nicolas Lerga"},{"division":"TUCUMAN","station":"GOBERNADOR  GORDILLO","manager":"Bel\u00e9n Moya"},{"division":"ROSARIO","station":"CURUZU CUATIA","manager":"Jes\u00fas Bruna"},{"division":"ROSARIO","station":"POSADAS","manager":"Christian Cort\u00e9s"},{"division":"MDP","station":"CHASCOMUS","manager":"Analia Lacentre"},{"division":"CBA","station":"VILLA DEL DIQUE","manager":"Soledad Zaracho"},{"division":"TUCUMAN","station":"JUJUY","manager":"Federico Ficoseco"},{"division":"MDP","station":"LINCOLN","manager":"Nicolas Lerga"},{"division":"CF y GBA","station":"VILLA DEVOTO","manager":"Guillermina Bosch"},{"division":"ROSARIO","station":"BERNARDO DE IRIGOYEN","manager":"Christian Cort\u00e9s"},{"division":"CF y GBA","station":"ACCESO NORTE I","manager":"Guillermina Bosch"},{"division":"TUCUMAN","station":"HUALFIN","manager":"Federico Ficoseco"},{"division":"NEUQUEN","station":"CIPOLLETTI","manager":"Emiliano Squadroni"},{"division":"NEUQUEN","station":"CALEU CALEU","manager":"Emiliano Squadroni"},{"division":"ROSARIO","station":"ROQUE SAENZ PE\u00d1A","manager":"Christian Cort\u00e9s"},{"division":"CF y GBA","station":"OLIVOS","manager":"Gabriela Iglesias"},{"division":"MDP","station":"SANTA CLARA DEL MAR","manager":"Nicolas Lerga"},{"division":"CBA","station":"VILLA OJO DE AGUA","manager":"Soledad Zaracho"},{"division":"MDP","station":"DOLORES","manager":"Analia Lacentre"},{"division":"TUCUMAN","station":"CS TUCUMAN","manager":"Bel\u00e9n Moya"},{"division":"CBA","station":"CORDOBA CENTRO","manager":"Javier Hornilla"},{"division":"CF y GBA","station":"BARRACAS","manager":"Gabriela Iglesias"},{"division":"TRELEW","station":"TRELEW","manager":"Manuel Aguirre"},{"division":"CF y GBA","station":"PALERMO","manager":"Gabriela Iglesias"},{"division":"MDP","station":"MAR DEL PLATA BROWN","manager":"Nicolas Lerga"},{"division":"CBA","station":"RIO CUARTO","manager":"Soledad Zaracho"},{"division":"TUCUMAN","station":"SAN ANTONIO DE LA PAZ","manager":"Bel\u00e9n Moya"},{"division":"TUCUMAN","station":"US TUCUMAN","manager":"Federico Ficoseco"},{"division":"CF y GBA","station":"AVELLANEDA","manager":"Gabriela Iglesias"},{"division":"TRELEW","station":"RIO GALLEGOS","manager":"Manuel Aguirre"},{"division":"ROSARIO","station":"PUERTO IGUAZU","manager":"Christian Cort\u00e9s"},{"division":"ROSARIO","station":"ITA IBATE","manager":"Christian Cort\u00e9s"},{"division":"TUCUMAN","station":"ROS. DE LA FRONTERA","manager":"Federico Ficoseco"},{"division":"MDP","station":"SAN CLEMENTE","manager":"Nicolas Lerga"},{"division":"CBA","station":"CS CORDOBA","manager":"Soledad Zaracho"},{"division":"CF y GBA","station":"ARRECIFES","manager":"Gabriela Iglesias"},{"division":"MDP","station":"25 DE MAYO","manager":"Nicolas Lerga"},{"division":"CF y GBA","station":"FLORES","manager":"Guillermina Bosch"},{"division":"CBA","station":"SAN JUAN","manager":"Javier Hornilla"},{"division":"CF y GBA","station":"U.S. LA PLATA","manager":"Gabriela Iglesias"},{"division":"CF y GBA","station":"LANUS","manager":"Guillermina Bosch"},{"division":"ROSARIO","station":"FIRMAT","manager":"Jes\u00fas Bruna"},{"division":"CBA","station":"SAN LUIS","manager":"Javier Hornilla"},{"division":"MDP","station":"SAN CAYETANO","manager":"Analia Lacentre"},{"division":"TRELEW","station":"SIERRA GRANDE","manager":"Manuel Aguirre"},{"division":"NEUQUEN","station":"CHOELE CHOEL","manager":"Emiliano Squadroni"},{"division":"ROSARIO","station":"RUFINO","manager":"Jes\u00fas Bruna"},{"division":"CF y GBA","station":"BUEN AYRE NORTE","manager":"Guillermina Bosch"},{"division":"NEUQUEN","station":"SANTA ROSA ex OPESSA","manager":"Emiliano Squadroni"},{"division":"CF y GBA","station":"RIO TALA","manager":"Gabriela Iglesias"},{"division":"MDP","station":"SAMBOROMBON","manager":"Analia Lacentre"},{"division":"ROSARIO","station":"GUALEGUAYCHU","manager":"Jes\u00fas Bruna"},{"division":"TUCUMAN","station":"TARTAGAL","manager":"Federico Ficoseco"},{"division":"CF y GBA","station":"BELGRANO","manager":"Gabriela Iglesias"},{"division":"ROSARIO","station":"LA PAZ","manager":"Jes\u00fas Bruna"},{"division":"CBA","station":"SANTIAGO DEL ESTERO","manager":"Soledad Zaracho"},{"division":"NEUQUEN","station":"NEUQUEN","manager":"Emiliano Squadroni"},{"division":"CBA","station":"VALLE FERTIL","manager":"Javier Hornilla"},{"division":"CBA","station":"CANALS","manager":"Soledad Zaracho"},{"division":"CF y GBA","station":"MERCEDES","manager":"Guillermina Bosch"},{"division":"TRELEW","station":"LOS ALTARES","manager":"Manuel Aguirre"},{"division":"ROSARIO","station":"RAFAELA","manager":"Jes\u00fas Bruna"},{"division":"CF y GBA","station":"BUEN AYRE SUR","manager":"Guillermina Bosch"},{"division":"TUCUMAN","station":"SALTA","manager":"Federico Ficoseco"},{"division":"TRELEW","station":"GARAYALDE","manager":"Manuel Aguirre"},{"division":"ROSARIO","station":"SANTA FE","manager":"Jes\u00fas Bruna"},{"division":"MDP","station":"GORCHS","manager":"Nicolas Lerga"},{"division":"CBA","station":"SAN FRANCISCO","manager":"Soledad Zaracho"},{"division":"NEUQUEN","station":"CHOS MALAL","manager":"Emiliano Squadroni"},{"division":"TUCUMAN","station":"CAFAYATE","manager":"Federico Ficoseco"},{"division":"CBA","station":"JACHAL","manager":"Javier Hornilla"},{"division":"TUCUMAN","station":"CATAMARCA","manager":"Bel\u00e9n Moya"},{"division":"NEUQUEN","station":"ZAPALA","manager":"Emiliano Squadroni"},{"division":"TRELEW","station":"SARMIENTO","manager":"Manuel Aguirre"},{"division":"TRELEW","station":"ESQUEL","manager":"Manuel Aguirre"},{"division":"CBA","station":"LA FALDA","manager":"Soledad Zaracho"},{"division":"MDP","station":"MAR DEL PLATA INDEPENDENCIA","manager":"Nicolas Lerga"},{"division":"CF y GBA","station":"CARMEN DE ARECO","manager":"Guillermina Bosch"},{"division":"CF y GBA","station":"CENTRAL","manager":"Gabriela Iglesias"},{"division":"ROSARIO","station":"CERES","manager":"Jes\u00fas Bruna"},{"division":"CF y GBA","station":"US DON TORCUATO","manager":"Gabriela Iglesias"},{"division":"TUCUMAN","station":"TINOGASTA","manager":"Bel\u00e9n Moya"},{"division":"ROSARIO","station":"ELDORADO","manager":"Christian Cort\u00e9s"},{"division":"ROSARIO","station":"PASO DE LOS LIBRES","manager":"Jes\u00fas Bruna"},{"division":"NEUQUEN","station":"EL BOLSON","manager":"Emiliano Squadroni"},{"division":"TUCUMAN","station":"SAN MARTIN (CTA)","manager":"Bel\u00e9n Moya"},{"division":"ROSARIO","station":"OBERA","manager":"Christian Cort\u00e9s"},{"division":"CF y GBA","station":"SAN NICOLAS","manager":"Guillermina Bosch"},{"division":"TUCUMAN","station":"LA RIOJA","manager":"Bel\u00e9n Moya"},{"division":"MDP","station":"TANDIL","manager":"Analia Lacentre"},{"division":"CF y GBA","station":"C.S. LA PLATA","manager":"Gabriela Iglesias"},{"division":"TUCUMAN","station":"ANILLACO","manager":"Bel\u00e9n Moya"},{"division":"ROSARIO","station":"CONCORDIA","manager":"Jes\u00fas Bruna"},{"division":"TUCUMAN","station":"FAMATINA","manager":"Bel\u00e9n Moya"},{"division":"CBA","station":"LAS FLORES","manager":"Javier Hornilla"},{"division":"ROSARIO","station":"CORRIENTES","manager":"Christian Cort\u00e9s"},{"division":"TRELEW","station":"USHUAIA","manager":"Manuel Aguirre"},{"division":"CF y GBA","station":"US PILAR","manager":"Guillermina Bosch"},{"division":"TUCUMAN","station":"CHEPES","manager":"Bel\u00e9n Moya"},{"division":"TUCUMAN","station":"TACO POZO","manager":"Federico Ficoseco"},{"division":"MDP","station":"MIRAMAR","manager":"Nicolas Lerga"},{"division":"CF y GBA","station":"ACCESO NORTE II","manager":"Guillermina Bosch"},{"division":"CBA","station":"VILLA LA PAZ","manager":"Javier Hornilla"},{"division":"NEUQUEN","station":"LAGO MASCARDI","manager":"Emiliano Squadroni"},{"division":"MDP","station":"VILLA BORDEU","manager":"Analia Lacentre"},{"division":"MDP","station":"VILLA GESELL","manager":"Nicolas Lerga"},{"division":"ROSARIO","station":"INGENIERO JUAREZ","manager":"Christian Cort\u00e9s"},{"division":"CBA","station":"ASCOCHINGA","manager":"Soledad Zaracho"},{"division":"CBA","station":"CS MENDOZA","manager":"Javier Hornilla"},{"division":"ROSARIO","station":"US SUSANA","manager":"Jes\u00fas Bruna"},{"division":"NEUQUEN","station":"SANTA ROSA","manager":"Emiliano Squadroni"},{"division":"NEUQUEN","station":"VILLA LA ANGOSTURA","manager":"Emiliano Squadroni"},{"division":"NEUQUEN","station":"LOS MENUCOS","manager":"Emiliano Squadroni"},{"division":"TUCUMAN","station":"LA QUIACA","manager":"Federico Ficoseco"},{"division":"ROSARIO","station":"COLON (E.R)","manager":"Jes\u00fas Bruna"},{"division":"TUCUMAN","station":"HUMAHUACA","manager":"Federico Ficoseco"},{"division":"ROSARIO","station":"FORMOSA","manager":"Christian Cort\u00e9s"},{"division":"CF y GBA","station":"LUJAN","manager":"Guillermina Bosch"},{"division":"ROSARIO","station":"CLORINDA","manager":"Christian Cort\u00e9s"},{"division":"CF y GBA","station":"ING MASCHWITZ","manager":"Guillermina Bosch"},{"division":"TUCUMAN","station":"CACHI","manager":"Federico Ficoseco"},{"division":"TUCUMAN","station":"VILLA ALBERDI","manager":"Bel\u00e9n Moya"},{"division":"CBA","station":"VILLA MERCEDES 28","manager":"Javier Hornilla"},{"division":"TRELEW","station":"PUERTO PIRAMIDES","manager":"Manuel Aguirre"},{"division":"CF y GBA","station":"DELTA","manager":"Gabriela Iglesias"},{"division":"NEUQUEN","station":"SAN MARTIN DE LOS ANDES","manager":"Emiliano Squadroni"},{"division":"NEUQUEN","station":"COL. 25 DE MAYO","manager":"Emiliano Squadroni"},{"division":"CBA","station":"ENCON","manager":"Javier Hornilla"},{"division":"TUCUMAN","station":"PASO DE JAMA","manager":"Federico Ficoseco"},{"division":"ROSARIO","station":"TORTUGAS","manager":"Jes\u00fas Bruna"},{"division":"TRELEW","station":"SAN SEBASTIAN","manager":"Manuel Aguirre"}];

const stationDivisionMeta={
  "CBA":{slug:"cordoba",label:"Córdoba",accent:"#EA002A"},
  "CF y GBA":{slug:"capital-gba",label:"Capital Federal y GBA",accent:"#1E88E5"},
  "MDP":{slug:"mar-del-plata",label:"Mar del Plata",accent:"#FFC72A"},
  "NEUQUEN":{slug:"neuquen",label:"Neuquén",accent:"#20A486"},
  "ROSARIO":{slug:"rosario",label:"Rosario",accent:"#6B5DD3"},
  "TRELEW":{slug:"trelew",label:"Trelew",accent:"#E67E22"},
  "TUCUMAN":{slug:"tucuman",label:"Tucumán",accent:"#D53F8C"}
};

function stationEscapeHTML(value){
  return String(value).replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[char]));
}

function stationGroupForDivision(division){
  return stationDivisionMeta[division]||{slug:normalizeSearch(division).replace(/\s+/g,"-"),label:division,accent:"#6B7280"};
}

const stationGroups=Object.keys(stationDivisionMeta).map(division=>{
  const meta=stationDivisionMeta[division];
  return {...meta,division,stations:stationRecords.map((item,index)=>({...item,index})).filter(item=>item.division===division)};
});

function stationFolderIcon(){
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 20h18M5 20V8l7-4 7 4v12M8 11h2m4 0h2m-8 4h2m4 0h2"/></svg>`;
}

function stationPinIcon(){
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>`;
}

function renderStationsPage(){
  const total=stationRecords.length;
  return `<section class="stations-page" aria-labelledby="stations-title">
    <div class="stations-hero">
      <div>
        <p class="eyebrow">Red de establecimientos</p>
        <h1 id="stations-title">Estaciones por divisional</h1>
        <p>Consultá los establecimientos de cada divisional y su Gestor de Calidad responsable.</p>
      </div>
      <div class="stations-total" aria-label="${total} estaciones cargadas"><strong>${total}</strong><span>estaciones</span></div>
    </div>
    <div class="station-folders" aria-label="Divisionales">
      ${stationGroups.map(group=>`<article class="station-folder" style="--station-accent:${group.accent}">
        <div class="station-folder-icon">${stationFolderIcon()}</div>
        <div class="station-folder-copy">
          <p class="eyebrow">Divisional</p>
          <h2>${group.label}</h2>
          <p>Establecimientos y responsables asignados a la divisional.</p>
        </div>
        <div class="station-folder-footer">
          <span><strong>${group.stations.length}</strong> estaciones</span>
          <button class="btn station-folder-button" type="button" data-station-division="${group.slug}" aria-label="Ver estaciones de ${group.label}">Ver estaciones</button>
        </div>
      </article>`).join("")}
    </div>
  </section>`;
}

function renderStationDivision(slug){
  const group=stationGroups.find(item=>item.slug===slug);
  if(!group)return renderStationsPage();
  return `<section class="stations-page station-division-page" data-current-station-division="${group.slug}" aria-labelledby="division-title">
    <nav class="station-breadcrumb" aria-label="Ruta de navegación"><button type="button" data-view="estaciones">Estaciones</button><span aria-hidden="true">›</span><span aria-current="page">${group.label}</span></nav>
    <button class="station-back" type="button" data-view="estaciones" aria-label="Volver a divisionales">
      <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg> Volver a Estaciones
    </button>
    <div class="station-division-heading" style="--station-accent:${group.accent}">
      <div class="station-folder-icon">${stationFolderIcon()}</div>
      <div><p class="eyebrow">Divisional</p><h1 id="division-title">${group.label}</h1><p>${group.stations.length} estaciones disponibles</p></div>
    </div>
    <div class="station-toolbar">
      <label class="station-search">
        <span class="sr-only">Buscar estación en ${group.label}</span>
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>
        <input id="stationSearch" type="search" placeholder="Buscar estación..." autocomplete="off">
      </label>
      <p id="stationResultCount" aria-live="polite">${group.stations.length} estaciones</p>
    </div>
    <div id="stationCards" class="station-real-grid">${renderStationCards(group.stations)}</div>
    <div id="stationEmpty" class="card station-empty" hidden><h2>Sin resultados</h2><p>No encontramos estaciones con ese criterio.</p></div>
  </section>`;
}

function renderStationCards(items){
  return items.map(item=>`<article class="card station-real-card" data-station-search="${stationEscapeHTML(normalizeSearch(item.station))}">
    <div class="station-card-top"><span class="station-card-icon">${stationPinIcon()}</span><span class="badge">${stationEscapeHTML(stationGroupForDivision(item.division).label)}</span></div>
    <h2>${stationEscapeHTML(item.station)}</h2>
    <p>Consultá la asignación vigente del Gestor de Calidad.</p>
    <button class="btn ghost station-preview-button" type="button" data-station-preview="${item.index}" aria-label="Vista previa de ${stationEscapeHTML(item.station)}">Vista previa</button>
  </article>`).join("");
}

function openStationPreview(index){
  const item=stationRecords[Number(index)];
  if(!item)return;
  const group=stationGroupForDivision(item.division);
  const title=document.getElementById("modalTitle");
  const eyebrow=document.getElementById("modalEyebrow");
  const meta=document.getElementById("modalMeta");
  const body=document.getElementById("modalBody");
  const wrap=document.getElementById("modal");
  title.textContent=item.station;
  eyebrow.textContent="Estación";
  meta.innerHTML=`<span class="badge">${stationEscapeHTML(group.label)}</span>`;
  body.innerHTML=`<div class="station-preview-content">
    <div class="station-preview-mark" style="--station-accent:${group.accent}">${stationFolderIcon()}</div>
    <div class="station-manager-panel"><span>Gestor de Calidad a cargo</span><strong>${stationEscapeHTML(item.manager||"Sin asignación informada")}</strong></div>
    <p class="station-source-note">Información de asignación correspondiente al resumen anual vigente.</p>
  </div>`;
  wrap.classList.add("open");
  wrap.querySelector(".close").focus();
}

document.addEventListener("click",event=>{
  const divisionButton=event.target.closest("[data-station-division]");
  if(divisionButton){navigate("estaciones/"+divisionButton.dataset.stationDivision);return;}
  const previewButton=event.target.closest("[data-station-preview]");
  if(previewButton)openStationPreview(previewButton.dataset.stationPreview);
});

document.addEventListener("input",event=>{
  if(event.target.id!=="stationSearch")return;
  const query=normalizeSearch(event.target.value);
  const page=event.target.closest("[data-current-station-division]");
  const cards=[...page.querySelectorAll(".station-real-card")];
  let visible=0;
  cards.forEach(card=>{
    const match=!query||card.dataset.stationSearch.includes(query);
    card.hidden=!match;
    if(match)visible++;
  });
  page.querySelector("#stationResultCount").textContent=visible+" "+(visible===1?"estación":"estaciones");
  page.querySelector("#stationEmpty").hidden=visible!==0;
});


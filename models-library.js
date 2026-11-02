const campusModels=[{
  id:'registro-capacitaciones',
  title:'Registro de capacitaciones',
  category:'Registro',
  format:'PDF',
  description:'Planilla institucional para documentar la actividad, identificar asistentes y dejar constancia de la capacitación realizada.',
  fields:['Dependencia o concesionario','Temario desarrollado','Sector, DNI, nombre y firma de asistentes','Fecha y duración','Firma del concesionario','Firma del Gestor de Calidad'],
  file:'planilla-registro-capacitacion.pdf'
}];

function modelIcon(){return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h7l4 4v14H7z"></path><path d="M14 3v5h5M10 12h5M10 16h5"></path></svg>`}

function renderModelCards(list=campusModels){return `<div class="models-library-grid">${list.length?list.map(model=>`<article class="models-library-card"><div class="models-card-visual"><span class="models-card-icon">${modelIcon()}</span><span class="models-format">${model.format}</span><div class="models-document-lines"><i></i><i></i><i></i><i></i></div></div><div class="models-card-body"><span class="models-category">${model.category}</span><h2>${model.title}</h2><p>${model.description}</p><ul>${model.fields.slice(0,3).map(field=>`<li>${field}</li>`).join('')}</ul><div class="models-card-actions"><button class="btn ghost" data-model-preview="${model.id}">Vista previa</button><a class="btn" href="${model.file}" download>Descargar</a></div></div></article>`).join(''):`<article class="models-empty">No se encontraron modelos para esta búsqueda.</article>`}</div>`}

function renderModelsPage(){return `<section class="models-page" aria-labelledby="modelsTitle"><header class="models-hero"><div><span class="eyebrow">Documentos de trabajo</span><h1 id="modelsTitle">Modelos</h1><p>Plantillas institucionales para registrar, documentar y acompañar las actividades de Gestión de Calidad.</p></div><div class="models-hero-count"><strong>${campusModels.length}</strong><span>${campusModels.length===1?'modelo disponible':'modelos disponibles'}</span></div></header><div class="models-toolbar"><label class="models-search"><span class="sr-only">Buscar modelos</span><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg><input id="modelsSearch" type="search" placeholder="Buscar modelo o campo..." autocomplete="off"></label><span class="models-result-count" id="modelsResultCount">${campusModels.length} modelo disponible</span></div><div id="modelsList">${renderModelCards()}</div></section>`}

function openCampusModel(id){const model=campusModels.find(item=>item.id===id);if(!model)return;document.getElementById('modalEyebrow').textContent='Modelo institucional';document.getElementById('modalTitle').textContent=model.title;document.getElementById('modalMeta').innerHTML=`<span>${model.category}</span><span>${model.format}</span>`;document.getElementById('modalBody').innerHTML=`<p class="lead">${model.description}</p><section class="model-detail-section"><h3>Información que permite registrar</h3><ul class="model-detail-list">${model.fields.map(field=>`<li>${field}</li>`).join('')}</ul></section><div class="model-pdf-preview"><iframe src="${model.file}#page=1&view=FitH" title="Vista previa de ${model.title}"></iframe></div><div class="model-detail-actions"><a class="btn ghost" href="${model.file}" target="_blank" rel="noopener">Abrir original</a><a class="btn" href="${model.file}" download>Descargar PDF</a></div>`;document.getElementById('modal').classList.add('open');document.querySelector('.close').focus()}

document.addEventListener('click',event=>{const button=event.target.closest('[data-model-preview]');if(button)openCampusModel(button.dataset.modelPreview)});
document.addEventListener('input',event=>{if(event.target.id!=='modelsSearch')return;const query=event.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();const filtered=campusModels.filter(model=>[model.title,model.category,model.format,model.description,...model.fields].join(' ').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().includes(query));document.getElementById('modelsList').innerHTML=renderModelCards(filtered);document.getElementById('modelsResultCount').textContent=`${filtered.length} ${filtered.length===1?'modelo disponible':'modelos disponibles'}`});



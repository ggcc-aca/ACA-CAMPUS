function onboardingIcon(name){
  const paths={
    compass:'<circle cx="12" cy="12" r="9"></circle><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"></path>',
    operations:'<rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M7 8h10M7 12h6M7 16h8"></path>',
    admin:'<path d="M9 3h6l2 2h3v16H4V5h3l2-2Z"></path><path d="M9 12h6M9 16h6M9 8h6"></path>',
    image:'<rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><path d="m21 15-5-5L5 21"></path>',
    follow:'<path d="M4 12a8 8 0 1 0 2.3-5.7L4 8.6"></path><path d="M4 4v4.6h4.6M12 8v4l3 2"></path>',
    program:'<path d="M12 2 4 6v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6l-8-4Z"></path><path d="m9 12 2 2 4-4"></path>',
    visit:'<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"></path><circle cx="12" cy="10" r="2"></circle>',
    analysis:'<circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4M8 11l2 2 4-4"></path>',
    training:'<path d="m3 10 9-5 9 5-9 5-9-5Z"></path><path d="M7 12v5c3 2 7 2 10 0v-5"></path>',
    coordinate:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>',
    report:'<path d="M5 3h14v18H5z"></path><path d="M9 7h6M9 11h6M9 15h4"></path>'
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name]||paths.compass}</svg>`;
}

const onboardingAreas=[
  {icon:'operations',title:'Gestión operativa',text:'Seguimiento del Programa +YPF/ACA, incentivos, evaluaciones, resultados y controles periódicos en los establecimientos.'},
  {icon:'admin',title:'Gestión administrativa',text:'Acompañamiento de incidencias, compras, correcciones, carga de resultados y actualización de la información de cada establecimiento.'},
  {icon:'image',title:'Imagen institucional ACA/YPF',text:'Coordinación de imágenes vigentes, cartelería, señalización y proyectos para los distintos ámbitos de atención.'},
  {icon:'follow',title:'Control y seguimiento',text:'Acompañamiento de equipos, capacitaciones, auditorías, obras, reaperturas y necesidades de mantenimiento.'}
];

const onboardingImpact=[
  {icon:'operations',title:'Calidad en la operación',text:'Optimizar recursos, mejorar la satisfacción de socios y clientes y fortalecer la eficiencia para alcanzar resultados sostenibles.'},
  {icon:'coordinate',title:'Colaboración efectiva',text:'Conectar áreas mediante una comunicación fluida y trabajo conjunto para alcanzar objetivos e identificar oportunidades de mejora.'},
  {icon:'analysis',title:'Procesos fortalecidos',text:'Aplicar auditorías y revisiones periódicas para reconocer debilidades, implementar correcciones y sostener los estándares de calidad.'}
];

const onboardingPath=[
  {icon:'program',title:'Conocer programas y objetivos',text:'Comprender el Programa +YPF/ACA, sus objetivos, incentivos, evaluaciones y canales de comunicación de resultados.',items:['Monitoreo y ajuste de objetivos','Revisión periódica de incentivos','Cliente incógnito, APP, VOC y formación comercial']},
  {icon:'visit',title:'Observar en territorio',text:'Realizar visitas presenciales y Check GC para relevar procesos, servicios y condiciones en los establecimientos ACA.',items:['Estaciones de servicio','Hoteles, moteles y hosterías','Centros recreativos y campings']},
  {icon:'analysis',title:'Analizar y comunicar',text:'Revisar resultados, solicitar correcciones y comunicar hallazgos a las áreas y responsables involucrados.',items:['Resultados de evaluaciones','Observaciones y correcciones','Informes periódicos de avance']},
  {icon:'training',title:'Acompañar la formación',text:'Impulsar la participación, coordinar referentes y reuniones zonales, y evaluar el impacto de la capacitación en la gestión.',items:['Plataforma de aprendizaje YPF y referentes locales','Entrenadores dentro de los equipos','Reuniones zonales e intercambio de buenas prácticas']},
  {icon:'coordinate',title:'Coordinar soluciones',text:'Articular con concesionarios, divisionales, YPF, DISI, Compras y Mantenimiento para resolver necesidades operativas.',items:['Incidencias y soporte','Obras y cambios de imagen','Equipamiento y mantenimiento']},
  {icon:'report',title:'Dar seguimiento',text:'Mantener la trazabilidad de observaciones, acciones y resultados hasta su corrección o resolución.',items:['Tableros y reportes','Avance de obras y reaperturas','Seguimiento de temas pendientes']}
];

function onboardingEntry(){
  return `<section class="onboarding-entry" aria-labelledby="onboardingEntryTitle">
    <div class="onboarding-entry-icon">${onboardingIcon('compass')}</div>
    <div class="onboarding-entry-copy">
      <span class="eyebrow">Guía de incorporación</span>
      <h2 id="onboardingEntryTitle">Primeros pasos del Gestor</h2>
      <p>Conocé la misión, los ámbitos de gestión y el recorrido de trabajo que orienta el rol de Gestión de Calidad.</p>
    </div>
    <div class="onboarding-entry-meta">
      <span>4 áreas de gestión</span><span>6 momentos del trabajo</span>
    </div>
    <button class="btn onboarding-entry-action" data-view="primeros-pasos">Comenzar recorrido</button>
  </section>`;
}

function renderOnboardingPage(){
  return `<nav class="onboarding-breadcrumb" aria-label="Ruta de navegación"><a href="#inicio" data-view="inicio">Inicio</a><span aria-hidden="true">›</span><span aria-current="page">Primeros pasos del Gestor</span></nav>
  <button class="onboarding-back" data-view="inicio" aria-label="Volver a Inicio">← Volver a Inicio</button>
  <section class="onboarding-hero" aria-labelledby="onboardingTitle">
    <div><span class="eyebrow">Guía de incorporación</span><h1 id="onboardingTitle">Primeros pasos del Gestor</h1><p>Una mirada integral para comprender el rol, reconocer sus ámbitos de trabajo y empezar a desenvolverse dentro de Gestión de Calidad.</p></div>
    <div class="onboarding-hero-mark">${onboardingIcon('compass')}<span>Orientación para el rol</span></div>
  </section>
  <article class="onboarding-mission">
    <div class="onboarding-mission-icon">${onboardingIcon('coordinate')}</div>
    <div><span class="eyebrow">Misión del rol</span><h2>Colaborar para evaluar y fortalecer</h2><p>El Gestor de Calidad trabaja junto con las distintas áreas del ACA e YPF para evaluar y fortalecer los procesos operativos, los servicios ofrecidos y los resultados obtenidos.</p></div>
  </article>
  <section class="onboarding-section" aria-labelledby="areasTitle"><header><span class="eyebrow">El rol en una mirada</span><h2 id="areasTitle">Cuatro áreas que organizan la gestión</h2><p>Estas áreas reúnen las principales responsabilidades descriptas para el Gestor de Calidad.</p></header><div class="onboarding-areas">${onboardingAreas.map((area,index)=>`<article class="onboarding-area" style="--area-index:${index}"><span class="onboarding-area-icon">${onboardingIcon(area.icon)}</span><span class="onboarding-area-number">0${index+1}</span><h3>${area.title}</h3><p>${area.text}</p></article>`).join('')}</div></section>
  <section class="onboarding-impact" aria-labelledby="impactTitle"><header><span class="eyebrow">Nuestro aporte</span><h2 id="impactTitle">¿Qué buscamos mejorar?</h2><p>La gestión transforma la observación y el trabajo colaborativo en mejoras concretas para la operación.</p></header><div class="onboarding-impact-grid">${onboardingImpact.map((item,index)=>`<article><span class="onboarding-impact-icon">${onboardingIcon(item.icon)}</span><div><span class="onboarding-impact-number">0${index+1}</span><h3>${item.title}</h3><p>${item.text}</p></div></article>`).join('')}</div></section>
  <section class="onboarding-section" aria-labelledby="pathTitle"><header><span class="eyebrow">Mapa del trabajo</span><h2 id="pathTitle">De los objetivos al seguimiento</h2><p>Un recorrido práctico que sintetiza cómo se conectan las funciones del rol.</p></header><ol class="onboarding-path">${onboardingPath.map((step,index)=>`<li><article class="onboarding-step"><div class="onboarding-step-top"><span class="onboarding-step-icon">${onboardingIcon(step.icon)}</span><span class="onboarding-step-number">Paso ${index+1}</span></div><h3>${step.title}</h3><p>${step.text}</p><button class="onboarding-step-toggle" aria-expanded="false" aria-controls="onboarding-step-${index}">Ver tareas asociadas <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button><ul id="onboarding-step-${index}" hidden>${step.items.map(item=>`<li>${item}</li>`).join('')}</ul></article></li>`).join('')}</ol></section>
  <section class="onboarding-check" aria-labelledby="checkTitle"><div class="onboarding-check-copy"><span class="eyebrow">Chequeos y control de calidad</span><h2 id="checkTitle">De la visita a la corrección</h2><p>El seguimiento permite que cada observación se comunique, se gestione con los responsables y avance hacia su resolución.</p></div><ol>${['Visitas periódicas','Chequeo completo','Informe de observaciones','Seguimiento de correcciones'].map((item,index)=>`<li><span>0${index+1}</span><b>${item}</b></li>`).join('')}</ol></section>
  <section class="onboarding-workspace" aria-labelledby="workspaceTitle"><div><span class="eyebrow">ACA Campus como espacio de trabajo</span><h2 id="workspaceTitle">Todo el conocimiento, en un solo lugar</h2><p>Continuá el recorrido consultando capacitaciones, recursos operativos, modelos e indicadores disponibles en la plataforma.</p></div><div class="onboarding-links"><button data-view="academia">Explorar Academia</button><button data-view="herramientas">Abrir Herramientas</button><button data-view="modelos">Consultar Modelos</button><button data-view="indicadores">Ver Indicadores</button></div></section>`;
}

document.addEventListener('click',event=>{
  const button=event.target.closest('.onboarding-step-toggle');
  if(!button)return;
  const list=document.getElementById(button.getAttribute('aria-controls'));
  const expanded=button.getAttribute('aria-expanded')==='true';
  button.setAttribute('aria-expanded',String(!expanded));
  list.hidden=expanded;
  button.firstChild.textContent=expanded?'Ver tareas asociadas ':'Ocultar tareas ';
});



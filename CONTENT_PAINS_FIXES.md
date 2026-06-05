# Reto · Solución por página — Para validación con Infocorp

> **Estado**: Los pains/fixes fueron **inferidos** a partir de:
> 1. Features que Infocorp menciona en sus páginas de producto actuales
> 2. Conocimiento general del sector banca digital LATAM
> 3. Ingeniería inversa: "para qué feature de Infocorp existe, qué problema típico resuelve"
>
> **No vienen de research directo con clientes/prospects de Infocorp.** Funcionan como un placeholder verosímil que el equipo comercial puede validar/refinar.
>
> **Cómo usar este doc**: una pasada con el equipo de Sales / CX de Infocorp. Por cada pain, marcar:
> - ✅ Es real, así lo dicen → sin cambios
> - 🔄 Es real pero la frase debería decir [...] → editar
> - ❌ No es un pain prioritario → reemplazar por [...]
> - ➕ Falta un pain crítico que es [...] → agregar

---

## Resumen de cobertura

| Página | Tiene sección Reto/Solución | # pains | Estado |
|---|---|---|---|
| Soluciones / Personas | ❌ No | — | Tiene otra narrativa (personalización) |
| Soluciones / Pymes | ✅ Sí | 4 | Por validar |
| Soluciones / Corporativa | ✅ Sí | 4 | Por validar (ya con nuevo slider) |
| Soluciones / All Business | ❌ No | — | Tiene otra narrativa (spectrum 4 tiers) |
| Plataforma / IC Smart Platform | ✅ Sí | 3 | Por validar |
| Plataforma / IC Mobile Banking | ✅ Sí | 3 | Por validar |
| Plataforma / IC Web Banking | ✅ Sí | 3 | Por validar |
| Plataforma / IC Social Banking (SARA) | ✅ Sí | 3 | Por validar |
| Plataforma / IC Marketing Automation | ✅ Sí | 3 | Por validar |
| Plataforma / IC Analytics (GURU) | ✅ Sí | 3 | Por validar |
| Plataforma / IC Onboarding | ✅ Sí | 3 | Por validar |
| Plataforma / IC Open Finance | ✅ Sí | 3 | Por validar |
| Plataforma / IC Public Portal | ✅ Sí | 3 | Por validar |
| Plataforma / IC Personal Finance | ✅ Sí | 3 | Por validar |
| Plataforma / IC Back Office | ✅ Sí | 3 | Por validar |

Total: **13 páginas con Reto/Solución · 41 pares pain/fix a validar**

---

## SOLUCIONES

### Banca Pymes — `/soluciones/pymes`

> Foco: el dueño de la pyme y su contador.

| # | El reto (pain) | La solución (fix) |
|---|---|---|
| 1 | **Multi-firma que no funciona en mobile:** el dueño viaja, el contador autoriza desde la oficina, los pagos quedan colgados días esperando coordinación. | **Autogestión jerárquica de permisos.** El dueño define quién firma qué, hasta qué monto. El contador opera, el dueño aprueba desde el celu con biometría. |
| 2 | **Nómina manual mes a mes:** Excel con CBU's, mails para confirmar, errores que cuestan reputación. La Pyme termina pagando con tarjetas personales. | **Nómina batch + agenda.** Importás la planilla una vez, validás CBUs automáticamente, programás. El sistema paga sin que vuelvas a pensarlo. |
| 3 | **Cash flow opaco:** el dueño no sabe cuánta plata tiene la empresa hasta que el contador manda el reporte. Y el reporte llega tarde. | **Cash flow en tiempo real.** Dashboard con todos los movimientos pendientes, próximas obligaciones, capacidad real. Sin esperar al lunes para saber dónde estás parado. |
| 4 | **Crédito que tarda 3 semanas:** la oportunidad ya pasó. Cuando llegan los fondos, la Pyme ya pidió el préstamo a un competidor o se quedó sin negocio. | **Crédito digital con scoring automático.** El motor ya conoce la operación de la Pyme. Oferta pre-aprobada con un click, desembolso en horas. |

---

### Banca Corporativa — `/soluciones/corporativa`

> Foco: el CFO, la tesorería y compliance.

| # | El reto (pain) | La solución (fix) |
|---|---|---|
| 1 | **Multi-moneda con bancos distintos:** el CFO pide la posición de la semana y vienen 7 archivos de 7 bancos. Conciliar toma 3 días, y para entonces ya cambiaron las tasas. | **Multimoneda nativo con FX live.** Posición consolidada en USD, equivalentes en cualquier moneda, conciliación automática diaria. El CFO ve el cash global en un dashboard. |
| 2 | **Batch de nómina sin jerarquía:** 482 empleados, pago en USD, EUR y BRL, requiere 4 firmas configurables. La planilla espera porque el CFO viaja. | **Batch jerárquico con multi-firma móvil.** El CFO firma desde el celu con biometría. Los directores aprueban desde donde estén. La nómina sale a tiempo, siempre. |
| 3 | **Factoring que va y vuelve por mail:** el cliente quiere descuento sobre 200 facturas. Cada una con su due date. El admin hace Excel + scan + mail al gerente. Días perdidos. | **Factoring digital con scoring automático.** Subís las 200 facturas, GURU calcula tasa, vos aprobás. Liquidez instantánea sin pelearte con el banco. |
| 4 | **Audit que requiere meses:** auditoría externa pide trace de cada aprobación de 12 meses. El equipo de Cumplimiento reconstruye desde mails. Estrés y errores. | **Audit by design.** Cada aprobación, cada firma, cada movimiento queda registrado con timestamp y actor. Auditoría externa lista en un click. |

---

## PLATAFORMAS — Channels

### IC Mobile Banking — `/plataforma/ic-mobile-banking`

| # | El reto (pain) | La solución (fix) |
|---|---|---|
| 1 | **Apps que son web envueltas:** lentas, con UX importada de la web, sin gestos nativos. Los usuarios las desinstalan en 7 días. | **Nativo, no envoltorio.** Componentes de Apple HIG y Material You en su propia versión adaptada a banca. Gestos, transiciones y rendimiento que la app store premia. |
| 2 | **Push notificaciones genéricas:** "Hola cliente" cuando ya ese cliente se cayó del onboarding. Nadie las lee, todos las silencian. | **Push que entiende contexto.** Llega cuando hay un movimiento sospechoso, un sueldo nuevo, una oportunidad. Conectado a Smart Platform para saber qué y cuándo. |
| 3 | **Onboarding con 12 pasos:** formularios, OCR que falla, selfies con 4 intentos. La mitad abandona antes de tener cuenta. | **Onboarding biométrico en 8 segundos.** OCR + liveness en una sola sesión. Sin formularios, sin retomas. El usuario llega adentro la primera vez. |

---

### IC Web Banking — `/plataforma/ic-web-banking`

| # | El reto (pain) | La solución (fix) |
|---|---|---|
| 1 | **Webs corporativas pesadas:** 6 segundos de carga, frameworks duplicados, scripts de medición sobre scripts de medición. | **Performance budget de 1.8s.** Si una funcionalidad nueva rompe el budget, no entra. Core Web Vitals verde en producción. |
| 2 | **Versión "mobile" que es CSS achicado:** botones imposibles de tocar, formularios fuera de pantalla, scroll horizontal accidental. | **Touch-first responsive real.** Áreas táctiles, gestos y formularios pensados para el dedo antes que para el mouse. La compatibilidad con desktop viene gratis. |
| 3 | **Web y App que parecen bancos distintos:** mismo logo, distinto lenguaje, distinta lógica. El cliente se confunde y abandona. | **Design system compartido con la app.** Mismo lenguaje, mismas reglas, misma marca. El cliente abre la web o la app y sabe dónde está. |

---

### IC Social Banking (SARA) — `/plataforma/ic-social-banking`

| # | El reto (pain) | La solución (fix) |
|---|---|---|
| 1 | **60% de tus clientes no descarga apps:** bajo poder de teléfonos, dudas, falta de costumbre. Tu app premium solo llega a 4 de cada 10. | **Banca donde el cliente ya está.** Sin descargas, sin signup, sin tutoriales. Si tu cliente usa WhatsApp, ya sabe usar tu banco. |
| 2 | **Call center saturado:** 70% de las llamadas son "cuánto tengo" o "cómo transfiero". Tiempo de agentes en preguntas que un bot puede resolver. | **NLP entrenado en banca, no genérico.** Entiende "ponéme 200 lucas a Juan" tan bien como "transferir 200 a Juan Pérez". 90% de intents cubiertos. |
| 3 | **Chatbots genéricos no funcionan en banca:** "Lo siento, no entiendo" frustra al cliente, daña la marca y termina en una llamada igual. | **Handoff a humano sin fricción.** Si SARA detecta complejidad o frustración, pasa a un agente con todo el contexto. Cliente nunca repite la consulta. |

---

## PLATAFORMAS — Marketing

### IC Marketing Automation — `/plataforma/ic-marketing-automation`

| # | El reto (pain) | La solución (fix) |
|---|---|---|
| 1 | **Email blast manual:** el equipo de marketing arma un mail "para todos" cada lunes. 8% open rate, 0.4% conversión. | **Journey builder visual.** Drag-and-drop, condiciones, esperas, A/B tests. Tu equipo arma un flujo nuevo en horas, no semanas. |
| 2 | **Microsegmentación imposible:** hacer "joven · sueldo alto · usuario app" requiere queries SQL, equipo de data y 2 semanas. Para cada campaña. | **Microsegmentación con IA.** Definís el target en lenguaje natural; el modelo arma el segmento y lo mantiene vivo a medida que cambia el comportamiento. |
| 3 | **Reportes post-mortem:** el resultado de la campaña llega 3 días después. Cuando podrías corregir, ya pasó. | **Real-time analytics que sugiere.** Si el A está ganando 3 a 1, el sistema sugiere pasar todo el tráfico al A. Vos decidís, no esperás al lunes. |

---

## PLATAFORMAS — Data

### IC Analytics (GURU) — `/plataforma/ic-analytics`

| # | El reto (pain) | La solución (fix) |
|---|---|---|
| 1 | **Data warehouse caro y lento:** cada nuevo dashboard requiere ingestar tablas, escribir ETL y modelar. Para una respuesta de negocio, dos semanas. | **GURU responde en lenguaje natural.** "¿Qué clientes están por irse?" — GURU consulta, calcula, grafica y explica. En segundos. |
| 2 | **Equipo de data como cuello de botella:** 8 analistas, 60 stakeholders, 200 pedidos en la cola. Las preguntas urgentes esperan días. | **Modelos predictivos pre-entrenados.** Churn, propensión, scoring crediticio, detección de fraude. Listos de fábrica, ajustados a banca LATAM. |
| 3 | **Self-service que no funciona:** Tableau, Power BI, Looker — y nadie del negocio los usa porque aprender SQL no es su trabajo. | **Conectado a Smart Platform en tiempo real.** No hay data warehouse separado: los eventos del banco son la base de los insights. Sin lag, sin sincronizaciones. |

---

## PLATAFORMAS — Operations

### IC Onboarding & Origination — `/plataforma/ic-onboarding`

| # | El reto (pain) | La solución (fix) |
|---|---|---|
| 1 | **Formularios eternos:** 32 campos, 3 selfies, 4 reintentos. El 60% abandona antes de tener cuenta. Los que terminan, sienten que el banco les hizo perder el día. | **Biometría + liveness en una sola toma.** No hay reintentos: el algoritmo guía al usuario al frame exacto y captura cuando está bien. |
| 2 | **OCR que falla en el peor momento:** la foto del DNI sale movida, el sistema rechaza tres veces seguidas. El usuario cierra la app. | **OCR + KYC en tiempo real con IA.** Documento, validación PEP, sanciones, scoring — todo en paralelo, en menos de 8 segundos. |
| 3 | **KYC manual lento:** la solicitud queda 48 horas esperando aprobación. Para cuando llega el "bienvenido", el cliente ya abrió cuenta en otro banco. | **Firma digital + compliance por diseño.** Contratos electrónicos firmados con el mismo gesto. Trazabilidad y auditoría listas para Riesgos. |

---

### IC Open Finance — `/plataforma/ic-open-finance`

| # | El reto (pain) | La solución (fix) |
|---|---|---|
| 1 | **APIs propias inconsistentes:** cada equipo del banco diseñó su propio endpoint. La fintech tiene que entender 3 estilos distintos para mover una transacción. | **Un solo OpenAPI Spec.** Convenciones consistentes, versionado predecible, SDKs autogenerados en TypeScript, Python y Java. Todo del mismo lugar. |
| 2 | **Sin sandbox para devs:** probar con producción es riesgoso, probar con datos falsos es inútil. Los developers terminan adivinando hasta que algo rompe. | **Sandbox 1-click con datos reales sintéticos.** Cuentas, balances, transacciones — todo coherente. La fintech prueba flows completos sin firmar nada con el banco. |
| 3 | **Compliance regulatoria opaca:** "¿qué pide el regulador, exactamente?" termina siendo un PDF de 80 páginas y un equipo legal sobre el desarrollo. | **Compliance + auditoría nativos.** OAuth 2, scopes granulares, consentimiento del usuario, trazabilidad y reportes regulatorios listos para enviar. |

---

### IC Public Portal — `/plataforma/ic-public-portal`

| # | El reto (pain) | La solución (fix) |
|---|---|---|
| 1 | **Sitio brochure-ware:** muestra productos con tasas viejas, simuladores rotos y promociones desactualizadas. El que entra, abandona. | **Simuladores conectados al motor.** Tasas, fees y plazos vienen de Smart Platform. Si cambia la tasa, cambia el sitio. Sin intervención humana. |
| 2 | **CMS desconectado del banking core:** el equipo de marketing publica una tasa en el sitio, otra está en producto, una tercera en la app. Caos. | **Headless CMS visual.** El equipo de marketing arma páginas con bloques drag-and-drop, prevé en tiempo real y publica. Sin pedirle nada a IT. |
| 3 | **IT como cuello de botella:** cambiar un titular toma un sprint. El equipo de marketing termina haciéndolo "manualmente" — y eso significa por mail. | **A/B testing nativo + analytics.** Cada bloque puede tener variantes. El sitio aprende qué versión convierte mejor y ajusta automáticamente. |

---

### IC Personal Finance — `/plataforma/ic-personal-finance`

| # | El reto (pain) | La solución (fix) |
|---|---|---|
| 1 | **PFM que nadie abre:** categorías mal taggeadas, gráficos lindos sin insights. Tres semanas después de activarlo, el usuario lo ignora. | **Auto-categorización con 96% accuracy.** Modelo entrenado en consumo LATAM. Si se equivoca, el feedback del usuario lo enseña en tiempo real. |
| 2 | **Insights que no son insights:** "gastaste un 8% más este mes". OK, ¿y ahora qué? No hay acción sugerida, solo un dato suelto. | **Goals + nudges contextuales.** El cliente crea un objetivo y el sistema lo acompaña con micro-mensajes cuando importa. No spam, solo el empujoncito justo. |
| 3 | **Sin goals = sin behavior change:** el cliente quiere comprar una moto, ahorrar para vacaciones, salir de deudas. Ninguno aparece en su app. | **Wellness score que evoluciona.** Un número simple (0–100) que muestra avance. Combina ahorro, deuda, diversificación. Genera la sensación de progreso real. |

---

### IC Back Office — `/plataforma/ic-back-office`

| # | El reto (pain) | La solución (fix) |
|---|---|---|
| 1 | **Disputas que duran días:** cliente reclama un cargo, el ticket pasa por tres áreas, vuelve al agente original, llega un mail al gerente. Día 5. | **Console unificado.** Disputas, reconciliaciones, batch, fraude — todo en un solo lugar con queue priorizada. El agente no pierde el contexto. |
| 2 | **Sin visibility real-time:** el head de operaciones se entera de un pico de fraude por el reporte del lunes. Para entonces, ya perdió la batalla. | **Workflows AI-assisted.** GURU detecta el patrón, sugiere la resolución y prepara el refund. El agente aprueba con un click. La excepción se vuelve la regla. |
| 3 | **Auditoría = nightmare:** reconstruir quién hizo qué y cuándo requiere tres sprints. El equipo de Riesgos vive pidiendo capturas. | **Audit by design.** Cada click, cada cambio, cada aprobación queda registrada. Auditoría externa pide el log, no las capturas. |

---

## PLATAFORMA — Core

### IC Smart Platform — `/plataforma/ic-smart-platform`

| # | El reto (pain) | La solución (fix) |
|---|---|---|
| 1 | **Islas tecnológicas:** cada canal tiene su backend, su lógica, su roadmap. Duplicación que no escala. | **Una sola capa de orquestación** que absorbe las particularidades de los sistemas core y expone una experiencia consistente a cualquier canal. |
| 2 | **Experiencias inconsistentes:** el cliente paga distinto en web que en app. Cada canal "interpreta" el banco a su manera. | **Lo que se decide acá, se ve en todos lados:** reglas de negocio, productos, beneficios. Un solo lugar para gobernar la experiencia. |
| 3 | **Releases lentos:** cambiar algo simple — un nuevo producto, una promo — toma meses porque hay que tocar 5 sistemas. | **Releases en semanas, no meses,** con componentes reutilizables y APIs que aceleran la entrega sin sacrificar control ni compliance. |

---

## Cómo validar con Infocorp — proceso sugerido

### Paso 1 · Sesión con el equipo comercial (30–60 min)
Con un sales lead o head de cuentas, recorrer página por página y por cada par pain/fix marcar:

| Marca | Significado | Acción |
|---|---|---|
| ✅ | "Sí, así lo dicen, así lo escucho" | Sin cambios |
| 🔄 | "Es real pero la frase debería decir [...]" | Editar el texto |
| ❌ | "No es prioritario / no aplica" | Reemplazar |
| ➕ | "Falta el pain más grande que es [...]" | Agregar nuevo par |

### Paso 2 · Cross-check con casos reales
Si Infocorp tiene case studies o testimonios documentados (Banco Macro, Banco Industrial, etc.), revisar si las frases que usan los clientes coinciden con los pains de este doc.

### Paso 3 · Devolver al doc
Marcar los cambios en este mismo archivo (o copia anotada) y mandármelo de vuelta. Yo actualizo las páginas correspondientes en una sola pasada.

### Paso 4 · Imagen humana
Como tarea paralela: por cada par validado, definir qué tipo de **foto** representa el pain y la solución. Ejemplo Corporativa pair 1:
- Pain: "CFO frustrado mirando 7 PDFs distintos en su escritorio"
- Fix: "CFO en control viendo un dashboard unificado en su laptop"

Esto le da brief al fotógrafo / banco de imágenes / stock para que las 26 fotos resulten coherentes.

---

## Anexo · Páginas sin sección Reto/Solución hoy

Estas dos páginas usan narrativas distintas. Si querés llevar el patrón slider también a ellas, hay que reformular su contenido:

- **Soluciones / Personas** → hoy habla de personalización + capacidades + seguridad. Podríamos extraer 3-4 pain/fix de banca persona (apps que no fidelizan, productos no relevantes, sucursales saturadas, etc.).
- **Soluciones / All Business** → hoy muestra el spectrum de 4 tiers (mono, pyme, corporate, global). Podríamos extraer pain/fix transversales al desafío de atender todo el espectro empresa.

Si los validan, los agregamos.

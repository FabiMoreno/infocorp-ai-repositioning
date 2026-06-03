# Infocorp — AI Repositioning Web

Evolución del sitio web de **Infocorp Group** para incorporar la narrativa de IA en banca digital. Cliente: Nicolás Bril (Marketing Manager). Stakeholder: German Rama (VP Sales & Mkt).

## Premisa

> **Helping People Love Their Bank** — el claim core no se toca.
> La IA se posiciona como amplificador de capacidades humanas, no como reemplazo.

## Estructura del sitio

| Archivo | Página | Estado |
|---|---|---|
| `index.html` | Home — promesa + IC Banking Suite + casos | ✅ |
| `plataforma.html` | IC Banking Suite — landing general | ✅ |
| `plataforma-ic-smart-platform.html` | Plataforma individual — template aplicado a Smart Platform | ✅ |
| `soluciones-personas.html` | Solución Personas con **modular composer interactivo** | ✅ |

## Sistema de diseño

- **Tipografía**: Plus Jakarta Sans (Google Fonts)
- **Color base**: `#0063F2` (brand) + `#2CA4FF` (cyan accent)
- **Paleta navy**: `#051030` → `#0E2461`
- **Animaciones**: GSAP 3.12.5 + ScrollTrigger
- **Text split**: SplitType 0.3.4
- **No frameworks** — HTML + CSS + JS vanilla

### Acento por categoría (plataformas individuales)

| Categoría | Color | Plataformas |
|---|---|---|
| Core | Brand blue | IC Smart Platform |
| Channels | Cyan | IC Mobile · IC Web · IC Social Banking (SARA) |
| Marketing & CX | Purple | IC Marketing Automation |
| Data & Analytics | Amber | IC Analytics (GURU) |
| Operations | Green | IC Back Office · IC Onboarding · IC Public Portal · IC Personal Finance · IC Open Finance |

## Storytelling arc (plataformas individuales)

Las landings de cada plataforma siguen una narrativa de 5 preguntas:

1. **¿QUÉ?** — Hero
2. **¿POR QUÉ IMPORTA?** — Stats + Problem→Solution
3. **¿CÓMO FUNCIONA?** — Capabilities + In Action
4. **¿DÓNDE ENCAJA?** — Modular composer
5. **¿QUIÉN LA USA?** — Caso de éxito

## Desarrollo local

```bash
# Cualquier servidor estático funciona:
python3 -m http.server 3456
# o
npx serve .
```

Abrir `http://localhost:3456/`.

## Deploy

Sitio publicado en Netlify (build = static, no build step).

## Decisiones de copy

- ❌ No usar "ahora con IA" ni "plataforma inteligente" como cliché
- ✅ IA como evolución natural, no agregado oportunista
- ✅ Humanos al volante, IA como copiloto
- ✅ Tono cálido y empático, alineado con "Helping people love their bank"

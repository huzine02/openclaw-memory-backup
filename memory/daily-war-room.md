# HEUS Board — Daily War Room — 28/02/2026 (Samedi)

## 📊 KPI J-1 (27/02)
| Métrique | Valeur | Tendance |
|---|---|---|
| Users Clarity | 57 | ↗️ (vs ~22 GA moyenne) |
| Users GA4 | 6 | ⚠️ divergence massive vs Clarity |
| Bounce rate | 18.2% | ✅ meilleur de la semaine |
| Pages/session | ~12 | ✅ engagement exceptionnel |
| Returning users | 0 | 🔴 CRITIQUE — zéro rétention |
| Abonnés payants | 0 | 🔴 pas de conversion |
| Leads capturés | inconnu | ⚠️ à vérifier Firestore |

## 🎯 TOP 3 ACTIONS DU JOUR

### 1. FIX RÉTENTION — Zéro returning users
- **Owner** : Growth Engineer
- **Deadline** : 28/02 18h
- **Action** : Implémenter push notification PWA ou email J+1 de relance pour les visiteurs qui ont utilisé /analyseur. Vérifier que le popup lead magnet fonctionne et capture bien.
- **RAG** : 🔴

### 2. DIAGNOSTIC GA4 vs CLARITY — Écart x10
- **Owner** : Data Analyst
- **Deadline** : 28/02 16h
- **Action** : Vérifier que le tag GA4 G-YRJ14669GD fire correctement sur toutes les pages (surtout /analyseur et /calculateur). Comparer avec Clarity. Probable : ad-blockers ou tag mal injecté en SPA.
- **RAG** : 🟡

### 3. INDEXATION SEO — 63 articles enrichis, vérifier couverture
- **Owner** : Acquisition Ops
- **Deadline** : 28/02 20h
- **Action** : Vérifier dans GSC combien des 63 articles sont indexés. Relancer IndexNow pour ceux non indexés. Objectif : 50+ pages indexées.
- **RAG** : 🟡

## 📋 KPI CIBLE CE SOIR (28/02 23h)
- Users Clarity : ≥50 (maintenir)
- Diagnostic GA4 terminé → root cause identifiée
- Au moins 1 action rétention déployée ou spécifiée
- IndexNow relancé sur articles manquants

## 🚧 BLOCAGES À ESCALADER
1. **Token LinkedIn API** — potentiellement expiré (403 signalé). Si crons LinkedIn échouent → renouveler manuellement (OAuth). Owner : Hocine.
2. **Bing IndexNow 403** — bloqué côté Bing. Pas critique (Google prioritaire).
3. **LCP 6.95s** 🔴 — performance très mauvaise. Impact SEO direct. Besoin d'un sprint perf (images, lazy load, code splitting). Owner : SRE.

## 📊 STATUT RAG TÂCHES OUVERTES

| Tâche | Owner | Status |
|---|---|---|
| 63 articles enrichis 1800+ mots | ✅ DONE | 🟢 |
| Meta descriptions fixées | ✅ DONE | 🟢 |
| Titres 2025→2026 | ✅ DONE | 🟢 |
| Returning users = 0 | Growth Engineer | 🔴 |
| GA4 vs Clarity divergence | Data Analyst | 🔴 |
| LCP 6.95s | SRE | 🔴 |
| Lead magnet email : séquence santé | CRO | 🟡 pas commencé |
| Quora 1 réponse/jour | Acquisition Ops | 🟡 en cours |
| LinkedIn crons actifs | Acquisition Ops | 🟡 token à vérifier |
| Medium 2 articles/semaine | Acquisition Ops | 🟢 en cours |
| Reddit infiltration | Acquisition Ops | 🔴 pas commencé |
| Pinterest access token | Growth Engineer | 🔴 pas commencé |
| Reels/Shorts filmage | Hocine | 🔴 bloqué (besoin filmage) |
| Stripe rename BH Digital | Compliance | 🟡 mineur |
| Email contact@ configuré | ✅ DONE | 🟢 |
| Nouveau lead magnet santé | CRO | 🔴 pas commencé |

## 🧠 SIGNAL MARCHÉ
- Samedi = trafic organique généralement plus bas. Bon jour pour travail technique.
- 63 articles enrichis mais indexation pas encore vérifiée post-enrichissement.
- L'analyseur prise de sang reste le top asset (34% des sessions).

## ⚡ DÉCISION Chief Execution Officer
Aujourd'hui est un **jour technique** (samedi). Priorité absolue :
1. Comprendre pourquoi GA4 sous-reporte massivement → on ne peut pas piloter sans data fiable
2. Attaquer le LCP 6.95s → Google pénalise, c'est du trafic perdu
3. Préparer le mécanisme de rétention → 0 returning = fuite totale du funnel

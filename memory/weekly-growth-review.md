# HEUS Board — Weekly Startup Board — S10 / 02-08 Mars 2026

**Date:** 01/03/2026 14:00 (Europe/Paris)
**Standard:** HEUS-OPERATING-STANDARD v1
**Objectif nord-star:** 7k€/mois MRR

---

## 0) ÉTAT DES ENTRÉES

| Source | Statut | Données clés 7j |
|--------|--------|-----------------|
| GA4 | 🟡 Sous-reporte x10 vs Clarity | ~6 users/jour (non fiable) |
| Clarity | ✅ | 57 users pic J5, 0 returning, bounce 18.2% |
| Funnel | 🔴 | 0 lead capturé, 0 trial, 0€ MRR |
| Indexation | 🟡 | 63 articles soumis, IndexNow partiel (Bing 403) |
| Anti-ban | 🟡 | Quora OK (1x/sem), LinkedIn 403, Facebook suspendu |
| Crons social | 🟡 | TikTok ✅, Medium ✅, LinkedIn BLOCKED, Facebook SUSPENDED |

---

## 1) DÉCISIONS (5 max — CEO authority)

### D1 🔴 — LEAD CAPTURE = PRIORITÉ ABSOLUE SEMAINE
- **Pourquoi:** 0 lead capturé sur 100% du trafic = hémorragie totale (Preuve A — Clarity: 57 users, 0 conversion)
- **Action:** Formulaire email post-résultat /analyseur + log Firestore + event GA4 `lead_captured`
- **Owner:** CRO + Dev | **Deadline:** 02/03 soir
- **KPI:** ≥1 lead/jour dès activation
- **Score confiance:** 95% — blocker évident, pas d'alternative
- **Risque:** RGPD non audité → mitigation: CGV update en parallèle (Compliance)

### D2 🔴 — PONT ANALYSEUR → PRICING
- **Pourquoi:** 34% du trafic va sur /analyseur, 0% arrive sur /pricing (Preuve A — audit CRO 28/02, pont cassé)
- **Action:** CTA "Ton programme personnalisé →" post-résultat + event `view_pricing`
- **Owner:** CRO + Dev | **Deadline:** 02/03 soir
- **KPI:** Taux analyseur→pricing > 10%
- **Score confiance:** 90% — standard funnel SaaS
- **Risque:** CTA trop agressif → mitigation: A/B test semaine suivante

### D3 🟡 — FIX GA4 / TRACKING EVENTS
- **Pourquoi:** Pilotage à l'aveugle — divergence GA4/Clarity x10, 0 event custom (Preuve A — 4j sans data fiable)
- **Action:** 1) Diagnostiquer injection GA4 en SPA React 2) Ajouter 4 events: `calculator_used`, `analyseur_completed`, `view_pricing`, `checkout_start`
- **Owner:** Data Analyst | **Deadline:** 04/03
- **KPI:** Divergence GA4/Clarity < 2x, 4 events actifs
- **Score confiance:** 85% — probable problème tag SPA (Preuve C)
- **Risque:** Si tag cassé = 0 data indéfiniment

### D4 🟡 — LINKEDIN TOKEN RENEWAL (BLOQUANT HUMAIN)
- **Pourquoi:** Cron LinkedIn = SUCCESS apparent mais 403 réel depuis >7j (Preuve A — logs cron)
- **Action:** Hocine renouvelle OAuth token manuellement
- **Owner:** Hocine | **Deadline:** 02/03
- **KPI:** 1er post LinkedIn publié réellement
- **Score confiance:** 99% — action simple, juste bloquée par humain
- **Risque:** Chaque jour sans LinkedIn = canal #1 acquisition morte

### D5 🟡 — LCP PERFORMANCE < 2.5s
- **Pourquoi:** LCP 6.95s pénalise ranking Google sur 63 articles (Preuve B — Core Web Vitals doc officielle)
- **Action:** Lazy load images, code splitting React, preconnect CDN
- **Owner:** SRE | **Deadline:** 07/03
- **KPI:** LCP < 2.5s (Lighthouse)
- **Score confiance:** 80% — gains techniques standard mais effort significatif
- **Risque:** Si images non optimisées, gain limité

---

## 2) BACKLOG SEMAINE S10 (02-08 Mars)

| # | Tâche | Owner | Deadline | KPI cible | Statut |
|---|-------|-------|----------|-----------|--------|
| 1 | Lead capture email /analyseur | CRO+Dev | 02/03 | ≥1 lead/jour | 🔴 TODO |
| 2 | CTA analyseur→pricing | CRO+Dev | 02/03 | >10% clic | 🔴 TODO |
| 3 | Token LinkedIn OAuth | Hocine | 02/03 | Post réel publié | 🔴 BLOCKED |
| 4 | Fix GA4 SPA + 4 events | Data Analyst | 04/03 | Divergence <2x | 🟡 TODO |
| 5 | LCP < 2.5s | SRE | 07/03 | Lighthouse pass | 🟡 TODO |
| 6 | Audit indexation GSC 63 articles | Market Intel | 05/03 | 50+ indexées | 🟡 TODO |
| 7 | Désactiver Kaspersky browser ext | Hocine | 02/03 | Browser actions OK | 🔴 BLOCKED |
| 8 | SIRET visible homepage footer | Compliance | 03/03 | Conformité légale | 🟡 TODO |
| 9 | Séquence email J0/J1/J3/J7 (spec) | Growth Eng | 07/03 | Spec validée | 🟡 TODO |
| 10 | Stripe "BH Digital"→"Sèche 10 Sem" | Compliance | 03/03 | Confiance checkout | 🟡 TODO |

---

## 3) RISQUES + MITIGATION

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| 0€ MRR prolongé (pas de lead capture) | HAUTE si D1 retardé | CRITIQUE | D1 = priorité jour 1, pas négociable |
| LinkedIn mort indéfiniment (token) | MOYENNE | HAUT | Escalade Hocine, fallback = contenu organique LinkedIn manual |
| Google pénalise LCP 6.95s | HAUTE | HAUT | D5 planifié S10, monitoring Lighthouse |
| Ban Quora (2ème incident) | FAIBLE (réduit 1x/sem) | MOYEN | Throttle appliqué, 0 lien direct |
| Data aveugle (GA4 cassé) | HAUTE | HAUT | D3 + Clarity comme backup |
| Kaspersky bloque browser indéfiniment | MOYENNE | MOYEN | Facebook/Quora/Reddit suspendus jusqu'au fix |

---

## 4) KILL LIST — CE QU'ON ARRÊTE

| Item tué | Raison | Date |
|----------|--------|------|
| TikTok post #2/jour | 7 followers, ROI nul pour 2x/jour (Preuve A) | 01/03 |
| Facebook cron | Browser bloqué = 0 output réel, faux SUCCESS | 01/03 |
| Backup cron | 0 remote git = backup dans le vide | 01/03 |
| Nouveaux articles SEO | 63 suffisent, focus conversion pas volume | 01/03 |
| Multi-canal 7 canaux | Focus 2 max (LinkedIn + SEO) | 01/03 |

---

## 5) SCORE CONFIANCE PAR DÉCISION

| Décision | Score | Justification |
|----------|-------|---------------|
| D1 Lead capture | 95% | Blocker factuel, 0 lead = 0 revenu, solution évidente |
| D2 Pont pricing | 90% | Standard CRO, data interne confirme le trou |
| D3 Fix GA4 | 85% | Cause probable identifiée (SPA), solution technique claire |
| D4 LinkedIn token | 99% | Action simple, dépend uniquement de Hocine |
| D5 LCP perf | 80% | Impact SEO documenté, mais effort non trivial |

---

## 6) TABLEAU D'EXÉCUTION

### ✅ DONE (S9)
- Suppression cron TikTok #2
- Suspension crons Facebook + Backup
- Quora réduit 1x/semaine
- LinkedIn cron renforcé (check token + BLOCKED explicite)
- Daily traffic report enrichi (GA4+Clarity+GSC)
- HEUS Operating Standard créé et injecté
- Disaster Recovery plan créé
- 63 articles enrichis 1800+ mots
- 3 articles Medium publiés

### 🔄 IN PROGRESS
- Lead capture email (spec prête, dev à faire)
- CTA analyseur→pricing (spec prête)
- Diagnostic divergence GA4/Clarity

### 🔴 BLOCKED
- LinkedIn token OAuth (action Hocine)
- Kaspersky browser (action Hocine)
- Remote git backup (action Hocine)

### 📋 TODO S10
- 4 events GA4 custom
- LCP < 2.5s
- Audit indexation GSC
- SIRET homepage
- Stripe renaming
- Spec séquence email

---

## CEO — RECADRAGE

**Tâches >48h sans mouvement:**
- Token LinkedIn: ouvert depuis 28/02, toujours BLOCKED. **Hocine doit agir lundi matin.**
- Kaspersky: ouvert depuis 28/02. **Idem.**
- Ces 2 items bloquent 3 canaux d'acquisition. Non négociable.

**Replanification obligatoire:** Aucune cette semaine (audit S9 vient d'être fait, backlog S10 est frais).

---

## Méta
- **Standard appliqué:** HEUS-OPERATING-STANDARD v1
- **Preuves:** A (GA4, Clarity, Stripe, logs cron, audit CRO 28/02), B (Core Web Vitals Google, RGPD), C (protocoles test)
- **Prochaine revue:** Weekly Board lundi 09/03 09:00
- **Daily suivant:** War Room lundi 02/03 08:45

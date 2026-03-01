# HEUS Board — Operating Standard (v1)

Objectif: exécution business réaliste vers 7k€/mois (puis scale), basée sur preuves réelles, docs officielles et retours d'expérience concrets.

## 1) Niveau d'exigence (obligatoire)
Chaque sortie HEUS doit inclure:
- 1) Décisions actionnables (max 3/jour en daily, max 7/semaine en weekly)
- 2) Owner + deadline + KPI cible
- 3) Statut RAG + blocages + plan d'escalade
- 4) Niveau de preuve par recommandation:
  - A = données de prod internes (GA4/Clarity/Stripe/logs)
  - B = documentation officielle plateforme
  - C = hypothèse testable (avec protocole)

## 2) Sources autorisées (priorité)
1. Données internes: GA4, GSC, Clarity, Stripe, logs cron, résultats funnels
2. Documentation officielle récente des plateformes (LinkedIn, Meta/Facebook, TikTok, Google Search/GA4/GSC, Stripe)
3. RETEX concret (ce qui a marché/échoué sur Sèche 10 Semaines)

Interdit:
- Reco "influenceur" non vérifiée
- Tactiques à risque ban non conformes
- Recommandations sans KPI mesurable

## 3) Cadence HEUS Board (source de vérité)
- HEUS Daily Exec War Room: lun-ven 08:45 (Europe/Paris)
- HEUS Weekly Startup Board: lundi 09:00 (Europe/Paris)

## 4) KPI nord-star (pilotage revenu)
Priorité:
1. Leads qualifiés/jour
2. Trials démarrés/semaine
3. Trial -> payant (%)
4. MRR net hebdo
Secondaire:
- trafic brut, impressions, vanity metrics

## 5) Reality Check (anti-fantaisie)
Avant validation d'une action:
- Faisable avec les ressources actuelles ?
- Impact business <7 jours ?
- Risque plateforme/compliance acceptable ?
- Coût temps/effort justifié ?

## 6) Format de sortie standard
- Décision
- Pourquoi (preuve A/B/C + source)
- Action (owner, deadline)
- KPI cible
- Risques/mitigation
- Statut RAG

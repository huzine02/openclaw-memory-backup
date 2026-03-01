# Micro-test paid (5–10€) — prêt à lancer

Date: 2026-02-28
Objectif: baseline CPA/CPL sur /analyseur
Canal recommandé: Meta Ads (traffic)

## 1) Paramètres campagne
- Nom campagne: `MT-ANALYSEUR-FR-2026-03-01`
- Objectif: Traffic (ou Leads si formulaire onsite)
- Budget: 5 à 10€ total (24h)
- Zone: France
- Âge: 30–60
- Placements: Advantage+ (auto)

## 2) URL destination + UTM
URL:
`https://seche10semaines.fr/analyseur?utm_source=meta&utm_medium=paid_social&utm_campaign=mt_analyseur_fr_2026-03-01&utm_content=crea1_hook_glycemie`

## 3) Créa test (1 seule)
Hook texte:
"Votre glycémie/cholestérol vous inquiète ? Testez votre score métabolique en 60 secondes."

CTA: "Tester gratuitement"
Visuel: simple avant/après marqueurs (sans promesse médicale)

## 4) Événements à vérifier (checklist)
- [ ] GA4 reçoit `view_content` (ou page_view /analyseur)
- [ ] Pixel reçoit `ViewContent` sur /analyseur
- [ ] `Lead` + `generate_lead` à la capture email
- [ ] `InitiateCheckout` + `begin_checkout` au démarrage paiement
- [ ] `Purchase` + `purchase` sur page succès

## 5) KPI mini dashboard
- Spend
- Impressions
- Clicks
- CTR
- CPC
- Leads
- CPL
- Checkout starts
- Purchases
- CPA

## 6) Règles de décision (après 24h)
- Si CTR < 0.8% => retravailler hook/visuel
- Si CPC > 1.20€ => retravailler audience+créa
- Si clics > 40 et 0 lead => problème landing/bridge
- Si lead ok mais 0 checkout_start => problème CTA/pricing trust

## 7) Sortie attendue en fin de test
- baseline CPC
- baseline CPL
- premiers signaux CPA (même partiels)
- décision: scale / iterate / stop

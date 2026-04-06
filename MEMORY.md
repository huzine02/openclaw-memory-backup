# Sèche 10 Semaines — Contexte Projet

## Produit
- URL : https://seche10semaines.fr
- Stack : React (Vite) + Firebase Blaze + Stripe LIVE + Vercel
- Prix : 29€/mois, trial 7 jours gratuit
- Cible : Hommes 35-55 ans (sèche + santé métabolique)

## Métriques actuelles (06/03/2026)
- MRR : 0€ | Payants réels : 0 (les 9 "active" en base = Hocine/tests sans Stripe)
- Leads réels : 5 (hors tests) dont 2 le 06/03 via Meta Ads
- Meta Ads : 15€/jour depuis 05/03, coût/lead ~15€
- Drip emails : actifs mais sans tracking ouverture (Gmail SMTP)
- Pixel + CAPI : opérationnels, domaine vérifié
- Deploy : Vercel (prod) + Firebase Hosting (backup)
- 24 users inscrits, 6 ont eu Stripe (3 active, 2 cancelling, 1 cancelled)

## Données Clarity (15/02 → 03/03)
- 522 sessions | 519 users uniques | 0 returning
- Pages/session : 1.0 | 27 dead clicks (5%)
- Analyseur : 58 sessions, 6% complétion
- FacebookApp browser : 47 sessions (9%)

## Objectifs
- J+14 : 1er abonné payant, 30+ users/jour, 25%+ complétion analyseur
- J+30 : 10 abonnés, 290€ MRR

## Priorités
1. Réparer analyseur (UX 2 étapes + capture email)
2. Bridge score → CTA trial personnalisé
3. Contenu Facebook (2 posts/jour dans groupes)
4. SEO santé métabolique (10 articles à optimiser)

## ⚠️ INCIDENT 07/03/2026 — Site écrasé pendant pub active
- Le repo local `seche10-semaines-old` est INCOMPLET (pas de blog, pas calculateur, pas analyseur)
- Le VRAI repo est `C:\Users\huzine\projects\seche10-semaines` (ex-debug)
- Projet Vercel = `seche10-semaines-debug` → domaine `seche10semaines.fr`
- **JAMAIS déployer depuis `seche10-semaines-old`**
- **JAMAIS changer le `.vercel/project.json`**
- **Avant tout deploy Vercel : vérifier que le dossier contient blog + calculateur + analyseur**
- En cas de doute : NE PAS DEPLOYER, demander à Hocine

## LinkedIn Auto-Publication
- 68 posts générés, cron quotidien 8h Paris
- Token OAuth expire 7 mai 2026 (rappel cron 30 avril)
- client_id=7814yj5vh78ftk, person_urn=urn:li:person:gygD2msLxI
- Config dans scripts/linkedin/linkedin-config.json (.gitignore)
- Post #1 publié le 08/03

## Trial & Pricing
- Trial passé à 3 jours (21/03) — partout : front, emails, push, Stripe, Cloud Functions
- Page /pricing simplifiée (plus de jargon algo)
- CTA /pricing ajouté dans : articles blog, calculateur, analyseur, emails drip

## Système Email V4 (deploy 27/03/2026) — NE PAS TOUCHER
**Architecture : Cloud Tasks event-driven, PAS de cron.**
- Trigger : `onUserCreateScheduleEmails` (Firestore onCreate `users/{userId}`)
- Exécution : `processScheduledEmail` (HTTP via Cloud Tasks)
- Bounces : `brevoWebhook`
- Collection : `emails_sent` | Transport : Brevo SMTP (DKIM+SPF)
- 12 tags V4 : lead-teaser/roulette/deficit/essai/garantie/last + paid-welcome/j1/j3/j7/j14/j30
- Anciens tags V2/V3 (trial-*, activation-*, engagement-*, midtrial-*) = MORTS
- Anciennes fonctions (sendDripEmails, sendTrialEngagementEmails) = DÉSACTIVÉES
- RÈGLE : ne modifier que les textes/prix des templates, JAMAIS la logique/triggers/scheduling

## Passage Freemium (13/03/2026)
- Quiz funnel 11 écrans sur /quiz avec Google OAuth + email fallback
- Reverse trial 7 jours gratuit, sans CB
- Anciens drip emails DÉSACTIVÉS (return en début des 4 fonctions)
- sendGuideOnLeadCreated toujours actif
- /calculateur redirige vers /quiz (pubs Facebook)
- /setup redirige vers /quiz ou /dashboard selon auth
- Prix affiché dans email réactivation : 14,50€/mois (à confirmer)
- 44 anciens leads éligibles à email réactivation (test envoyé, en attente validation)

## Coupon Stripe (13/03/2026)
- Coupon `LANCEMENT50` : 50% off, forever, appliqué auto dans createCheckoutSession
- Prix Stripe = 29€/mois, affiché = 14,50€/mois grâce au coupon
- User free_trial → trial_period_days: 0 (paiement immédiat)
- User direct → trial_period_days: 14

## Emails Trial Engagement (13/03/2026) — REMPLACÉ PAR V4
- Ancien scheduler horaire `sendTrialEngagementEmails` → désactivé
- Remplacé par Cloud Tasks V4 (12 tags, event-driven, deploy 27/03)

## Bug Patterns à Retenir
- React setState + effet immédiat : toujours vérifier que le state est dispo dans useEffect via early return + deps
- Cloud Functions : TOUJOURS déployer après modification (`firebase deploy --only functions`), le code local ne suffit pas
- Vercel redirects preservent les query params automatiquement (utiliser vercel.json, pas React Navigate)
- PowerShell `Set-Content` corrompt l'UTF-8 des fichiers source → JAMAIS utiliser, utiliser Edit tool uniquement
- `\u00e9` dans du texte JSX brut s'affiche littéralement → utiliser des caractères réels (é, î, etc.)
- JAMAIS utiliser PowerShell `-replace` + `Set-Content` sur des fichiers avec accents/emojis → double-encode l'UTF-8, corrompt tout le fichier. Toujours utiliser l'outil Edit ou un script Node .cjs dédié

## Dashboard Par Phases (16/03/2026)
- dashPhase 1 (Trial J0-J3) : Onboarding + DailyQuests(kcal+streak) + Cibles macros + Poids simple
- dashPhase 2 (Trial J4-J7) : + Weekly Summary + Health Score flouté + Tour de taille + Quiz popup
- dashPhase 3 (Payant S1-S3) : + Streak/Badges + Timeline S1-S10 + Courbe poids + Progress Deltas
- dashPhase 4 (Payant S4+) : + Glycémie (si profil glycemie) + Lipides (si profil cardio)
- isPremium = subscriptionStatus 'active' ou 'trialing'
- TodayWidget fusionné dans DailyQuests (supprimé comme composant séparé)
- Profil : Guide/Communauté/Parrainage verrouillés si pas premium

## Gamification (16/03/2026)
- Weekly Quiz : 10 quiz (S1-S10), 3 questions, popup auto 8s, Firestore quizzesCompleted[]
- Daily Quests : 3 objectifs/jour (protéines, hydratation, quest rotative lundi=poids/autres=workout)
- Streak Freeze : 1 jour raté par 7 jours = streak protégé automatiquement

## Quiz V3 (14/03/2026)
- 6 écrans au lieu de 11, positionnement santé métabolique
- Flow: Hero → Déclencheur → Biométrie → Activité → Santé → Email gate → Résultats
- In-app browser: Google masqué, email seul
- Auth email: mot de passe déterministe btoa(email)
- Conversion quiz→inscription: ~100% (vs 10% avant)
- activite keys: sedentaire/leger/actif/tres_actif
- profilSante keys: standard/glycemie/cardio/glycemie_cardio
- declencheur: nouveau champ (ventre/sang/medecin/sante)

## Dashboard Progressive Disclosure (14/03/2026)
- 4 niveaux: L0(rien)→L3(tout)
- Checklist onboarding 3 tâches, seenPlan en localStorage
- Score Santé flouté L0-L1, visible L2+
- Streak/Badges floutés L0-L2, débloqués L3

## Emails Comportementaux (14/03/2026) — REMPLACÉ PAR V4
- Ancien système remplacé par Cloud Tasks V4 (voir section ci-dessus)
- visitedPricing flag toujours utilisé par V4 (conditionne lead-roulette)

## Commandes Hocine
- **"l'entonnoir"** ou **"donne moi l'entonnoir"** = rapport funnel complet depuis Firestore collection `funnel` (quiz steps + pricing + checkout + devices + sources)

## RÈGLES ABSOLUES
- JAMAIS produire de fichier .md de reporting/analyse/stratégie
- JAMAIS proposer un plan sans code exécutable
- Toujours donner du CODE ou des COMMANDES, pas des recommandations

# MEMORY.md — Mémoire Long Terme

## Projet Principal : Sèche 10 Semaines
- **Site** : https://seche10semaines.fr (Vercel, repo `seche10-semaines-debug`)
- **Repo** : C:\Users\huzine\projects\seche10-semaines-debug
- **GitHub** : https://github.com/huzine02/seche10-semaines-debug
- **Backup workspace OpenClaw** : https://github.com/huzine02/openclaw-memory-backup (tout sauf clés)
- **Stack** : React, Firebase (Blaze), Stripe LIVE, Vercel auto-deploy
- **Domaine** : OVH, DNS → Vercel
- **Prix** : 29€/mois récurrent (price_1T2ptbDWHAsAimG7RUeXVrjR)
- **Objectif** : 7000€/mois = 242 abonnés = ~2700 visiteurs qualifiés/mois

## Hocine (User)
- Nom complet : Hocine Bouhend
- Email : huzinepro@gmail.com
- SIRET : 509 791 885 00015 (BH Digital — Entreprise Individuelle)
- Adresse : 5 bis rue de la Bouvine, 34130 Candillargues
- Timezone : Europe/Paris
- Le projet NE DOIT PAS être visible depuis son profil LinkedIn pro

## LinkedIn API
- App : "Sèche 10 Semaines" sur compte **Hocine B.** (profil séparé du pro)
- Client ID : 7814yj5vh78ftk
- Client Secret : [REDACTED — stored in secure vault]
- Person URN : urn:li:person:gygD2msLxI
- Scope : w_member_social (profil perso uniquement)
- API : utiliser v2/ugcPosts (PAS l'API REST versionnée, elle bug)
- Token valide ~2 mois (renouvelé 01/03/2026)
- Scope: w_member_social uniquement (pas de lecture profil, pas de commentaires API)
- Commentaires avec lien: à poster manuellement par Hocine
- Redirect URI : https://seche10semaines.fr/auth/linkedin/callback

## Pinterest API
- App ID : 1548273
- App Secret : [REDACTED — stored in secure vault]
- TODO : obtenir access token (OAuth2)

## Gemini API
- Clé : [REDACTED — rotated/secure vault]
- (ancienne expirée : [REDACTED])

## WhatsApp Hocine
- Numéro : +33666573946

## Stripe
- Compte partagé avec Airbnb (Eden de Camargue) — à terme créer un 2ème
- TODO : changer nom → "BH Digital" sur dashboard.stripe.com/settings/public

## Site — Fonctionnalités live
- Landing page mobile-first avec cinéma de transformation (repositionnée double message sèche + santé 22/02)
- Blog SEO (**63 articles** : 30 sèche + 20 santé + 13 content gaps, tous enrichis citations + experts)
- Popup lead magnet (capture emails → Firestore "leads")
- Pages légales (CGV, mentions, RGPD, cookies)
- Guide PDF téléchargeable + envoi auto par email
- Dark mode
- Gamification (streaks, badges, progress ring)
- **Score Santé Métabolique** (HealthScore.tsx) — gauge SVG animée, 5 critères pondérés, export médecin
- **Trial gratuit 7 jours** (Stripe checkout)
- **PWA** (manifest.json, sw.js, icônes SVG)
- **Event tracking GA** (setup_complete, pricing_view, checkout_start, subscription_active, login_success, lead_captured)
- **Aperçu app** sur landing (3 cards animées)
- **Système parrainage** (ReferralBanner.tsx, code = 6 chars UID)
- **Pages statiques blog** pour SEO (public/blog/[slug]/index.html avec Schema.org, OG, Twitter Cards)
- **Meta Pixel Facebook** (ID 1956194787840150)
- Flow : Landing → Login → Setup → Pricing → Stripe (trial 7j) → Dashboard

## Stratégie Marketing (définie 20/02, exécutée 21/02)
1. ✅ Blog SEO — **30 articles** sur le site (5 originaux + 25 longue traîne)
2. ✅ Popup lead magnet — capture emails + ENVOI GUIDE AUTO par email
3. ✅ Page LinkedIn entreprise créée
4. ✅ 20 posts LinkedIn v2 expert (fichier linkedin-posts-v2.md)
5. ✅ LinkedIn API configurée, posts publiés (21/02)
6. ✅ Séquence drip 7 emails auto (Firebase Function sendDripEmails, toutes les heures)
7. ✅ 30 scripts vidéo Reels (fichier reels-scripts-30.md)
8. ✅ Cron LinkedIn auto lun/mer/ven 8h30
9. ✅ Cron revue hebdo lundi 9h
10. ✅ Google Analytics G-YRJ14669GD
11. ✅ Témoignages + urgence offre sur landing
12. ❌ Email contact@seche10semaines.fr — routage ImprovMX pas fait
13. ✅ Meta Pixel Facebook — ID 1956194787840150
14. ✅ Encodage UTF-8 définitif — 0 mojibake sur 30 articles
15. ✅ Trial gratuit 7 jours Stripe + Firebase Functions déployées
16. ✅ PWA (icônes SVG + manifest + service worker)
17. ✅ Event tracking GA (6 events clés)
18. ✅ Aperçu app landing + système parrainage
19. ✅ Pages statiques SEO (30 pages HTML, sitemap, robots.txt, Schema.org)
20. ✅ Google Search Console vérifié (fichier HTML)
21. ✅ Score Santé Métabolique sur Dashboard (HealthScore.tsx)
22. ⏳ 20 articles santé métabolique — 10 faits, 10 restants (cron 22/02 7h)

## Posts LinkedIn publiés
- 21/02 Post 1 (texte simple) : urn:li:share:7430912178561486848
- 21/02 Post 2 (image + texte expert) : urn:li:share:7430919488935473152
- 21/02 Post 3 : urn:li:share:7430983454798016512

## Feedback important
- Posts LinkedIn doivent être TRÈS PRO, niveau expert
- Images EN FRANÇAIS
- Poster au fur et à mesure (pas tout d'un coup)
- Firebase Blaze → peut envoyer emails directement (Cloud Function)
- TOUJOURS utiliser Opus 4.6 pour les agents (Sonnet produit trop de bugs)
- **Automatiser au MAXIMUM** toutes les tâches récurrentes — Hocine veut le minimum d'intervention manuelle (26/02)

## Stratégie Growth — Entonnoir Inversé (21/02)
**Objectif** : 7000€/mois = 242 abonnés = ~400 visiteurs qualifiés/jour
**Principe** : 100% gratuit → réinvestir les 1ers € → scale
**Canaux** :
1. SEO Blog (30+ articles longue traîne) → 100-200/jour en 2-3 mois
2. LinkedIn organique (1-2 posts/jour, images FR, niveau expert) → 50-150/jour
3. Reels/Shorts (30 scripts) → potentiel viral 100-500/jour
4. Reddit/Forums/Quora → 20-50/jour
5. Email nurturing (séquence 5 emails après capture guide) → 30-80/jour
**Phase 1** : Fondations (semaine 1) — SEO + LinkedIn + Email séquence
**Phase 2** : Accélération (sem 2-4) — Reels + Reddit + Guest posts
**Phase 3** : Scale (mois 2+) — Ads payantes avec revenus réinvestis
**Monitoring** : Google Analytics à installer

## Guide PDF par email ✅ (21/02)
- Firebase Function `sendGuideOnLeadCreated` déployée
- Trigger Firestore `onCreate` sur collection "leads"
- Envoi via Gmail SMTP (huzinepro@gmail.com, App Password)
- Firestore rules corrigées pour permettre l'écriture dans "leads"
- TESTÉ ET FONCTIONNEL

## Articles Santé Métabolique (nouveau canal SEO)
- Fichier : `src/data/healthArticles.ts`
- 10 articles écrits : prédiabète, glycémie, cholestérol, triglycérides, ventre 50 ans, HbA1c, régime prédiabète, stéatose hépatique, syndrome métabolique
- 10 articles restants (cron 22/02 7h) : tour de taille, graisse viscérale, insulino-résistance, diabète type 2, bilan lipidique, sport diabète, index glycémique, oméga-3, rapport TG/HDL, normes glycémie par âge
- TODO après : intégrer dans routing blog + générer HTML statique + sitemap

## Historique technique (résumé)
- 18/02 : Réécriture landing, plan d'audit
- 19/02 : Marathon debug (12 bugs), design upgrade, mise en PRODUCTION
- 20/02 : Fix Stripe récurrent, workflow corrigé, faux compteurs supprimés, marketing lancé
- 21/02 : LinkedIn API setup, 3 posts publiés, 30 articles SEO enrichis (refs scientifiques), pages statiques SEO, trial 7j, PWA, event tracking, Meta Pixel, encodage fixé, Score Santé Métabolique, 10/20 articles santé métabolique
- 22/02 : BrowserRouter, faux témoignages supprimés, section science ajoutée, disclaimer médical, landing double message, page À propos, FAQ Schema + BreadcrumbList 63 pages, llms.txt, robots.txt enrichi, homepage pré-rendue, Price ID corrigé, sitemap soumis GSC (67 URLs), 45 articles sèche enrichis (citations + experts), 20 articles santé enrichis (refs médicales + experts), 13 nouveaux articles SEO (content gaps 34k/mois), offre unifiée (7j gratuits + 29€/mois + annulation 1 clic), suppression garantie 14j et 49€ barré

## 🎯 PIVOT STRATÉGIQUE — Santé Métabolique (décidé 21/02 soir)
- **Objectif révisé** : 15 000€/mois (au lieu de 7 000€)
- **Nouveau prix** : 39€/mois + plan annuel 299€/an (25€/mois)
- **Niche** : prédiabète + cholestérol + syndrome métabolique (12M personnes en FR)
- **Avantages** : urgence médicale → conversion ×3, rétention 12+ mois (vs 3-4), LTV 290€+ (vs 87€)
- **Trafic nécessaire** : 13 000/mois (vs 42 000 avant) grâce au meilleur taux de conversion
- **Calcul** : 385 abonnés × 39€ = 15 015€/mois, churn 5%, trial→payant 75%, visiteur→trial 3-4%
- **Positionnement** : garder sèche + ajouter santé métabolique (même app, deux portes d'entrée)
- **Message clé** : "Votre médecin vous a parlé de prédiabète ? Inversez la tendance en 10 semaines."
- **SEO santé** : ~29 000 recherches/mois sur 20 mots-clés à concurrence très faible
- **Partenariats futurs** : médecins généralistes, pharmacies, mutuelles, AFD, influenceurs santé (Dr Jimmy Mohamed, Michel Cymes)
- **Timeline** : mois 1 → 975€, mois 2 → 3 120€, mois 3 → 6 630€, mois 4 → 11 310€, mois 5 → 15 015€

## Post Bridge API (validé 03/03/2026) ✅
- **Service** : Automation multi-plateformes (LinkedIn, Facebook, TikTok, Pinterest)
- **API Key** : pb_live_4HbamxcodV6L8qWqtMjy21
- **Prix** : $5/mois add-on
- **Test** : LinkedIn post réussi 03/03 00h10
- **Usage** : Scale rapide cross-platform (à partir du 03/03)
- **Comptes connectés** :
  - 47388 : LinkedIn Hocine (perso)
  - 47389 : LinkedIn Sèche 10 Semaines (page)
  - 47390 : TikTok seche10semaines
  - 47391 : Pinterest huzinepro
  - 47392 : Facebook Location rentable
- **Skill** : `~/.openclaw/workspace/skills/post-bridge/`

## Clé Gemini API (mise à jour 25/02)
- **Nouvelle** : [REDACTED — stored in secure vault]
- Ancienne (leaked) : [REDACTED]

## Google Analytics — Accès direct ✅ (25/02)
- Property ID : **475820965** (measurement ID: G-YRJ14669GD)
- Service account : seo-indexer@gen-lang-client-0092056535.iam.gserviceaccount.com
- Rôle : Responsable marketing
- API Analytics Data activée
- Script : `C:\Users\huzine\projects\MoneyPrinterTurbo\ga_report.py`

## Stratégie Growth — Synthèse 3 IA (25/02)
Top actions : Quora bombing, widget calculateur embarquable, pivot FB Reels/YT Shorts, analyseur prise de sang IA, infiltration forums
Erreurs : trafic vers landing au lieu du calculateur, articles non recyclés, trop TikTok pas assez FB/YT

## Pages live
- `/calculateur` — Calculateur déficit calorique (Mifflin-St Jeor) + Schema WebApplication + FAQPage
- `/analyseur` — Analyseur prise de sang IA (glycémie, cholestérol, HDL, LDL, triglycérides, tour de taille → score 0-100)
- `/widget` — Widget calculateur embarquable (iframe, ?embed=true)
- `public/widget.html` — Page démo + code embed + template pitch blogs

## Quora — Leçons apprises
- Compte Jim Josh **banni** le 25/02 (spam : 5 réponses en 10 min avec liens)
- 1er post avait fait **550 vues** → canal validé
- **Règle** : 1 réponse/jour max, pas de lien pendant 7 jours, profil crédible
- 10 réponses santé métabolique prêtes : `quora-reponses-SANTE-METAB.md`

## TODO global
- ✅ 20 articles santé métabolique complets (healthArticles.ts — 20 articles, 0 doublons)
- ✅ Articles santé intégrés dans blog (routing + 50 HTML statiques + sitemap 54 URLs)
- ✅ Encodage healthArticles.ts fixé (20/20 clean, script fix-health-final.cjs)
- ✅ Repositionner landing page (double message sèche + santé) — fait 22/02
- ❌ (PLUS TARD) Nouveau pricing 39€/mois — Hocine veut garder 29€ pour l'instant
- ❌ Nouveau lead magnet : "Les 5 signaux que votre corps envoie avant le diabète"
- ❌ Adapter séquence email pour segment santé
- ✅ Email contact@seche10semaines.fr (Zimbra, configuré par Hocine)
- ✅ Soumettre sitemap Google Search Console — fait 22/02
- ❌ Reddit/Quora (templates prêts)
- ❌ Filmer Reels (30 scripts prêts)
- ✅ Stripe : garder "BH Digital" (décision Hocine 01/03)
- ❌ Vrais témoignages (remplacer placeholders quand premiers clients)
- ❌ Partenariats médecins/pharmacies/mutuelles (phase 4)

## Gouvernance HEUS Board (validé 01/03/2026)
Rôles officiels (10):
1. Chief Execution Officer (X-Ops)
2. GM / Revenue Owner
3. Growth Engineer
4. Acquisition Ops
5. CRO / Funnel Engineer
6. Content Engineer
7. Data Analyst
8. SRE / Reliability
9. Compliance & Platform Safety
10. Market Intelligence Lead (Trafic 2026)

Cadence de revue (source de vérité):
- HEUS Daily Exec War Room: lun-ven 08:45 (Europe/Paris)
- HEUS Weekly Startup Board: lundi 09:00 (Europe/Paris)

Règle d'exécution:
- Chaque revue doit produire: décisions, owners, deadlines, KPI cible du jour/semaine, statut RAG, blocages à escalader.
- Les sorties doivent être loggées dans:
  - `memory/daily-war-room.md`
  - `memory/weekly-growth-review.md`

Note fiabilité:
- Les réunions HEUS Board sont définies dans les payloads des crons et doivent aussi être référencées dans MEMORY.md pour éviter toute perte de contexte.
- Nom officiel de l'équipe virtuelle: **HEUS Board** (High Execution & Unified Strategy Board).
- Standard d'exécution obligatoire: `memory/HEUS-OPERATING-STANDARD.md` (preuves A/B/C, sources officielles, RETEX concret, KPI revenu-first).
- Fil directeur stratégique permanent: `memory/HEUS-STRATEGY-THREAD.md` (source de continuité pour reprise après interruption).

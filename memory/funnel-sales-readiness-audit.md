# Audit CRO / Funnel — seche10semaines.fr
**Date:** 2026-02-28 | **Auditeur:** CRO SubAgent

---

## A) Verdict Global: **GO CONDITIONNEL** 🟡

Le site est fonctionnel et le tunnel est complet jusqu'au checkout Stripe. L'offre est claire, le pricing cohérent, la preuve sociale présente. **Quelques blockers critiques empêchent un GO ferme** — principalement l'absence de tracking événementiel custom et des frictions dans le parcours post-outil gratuit.

---

## B) Score /100

| Dimension | Score | Commentaire |
|---|---|---|
| **Offre** | 78/100 | Promesse claire, avatar défini (H 35-55), bon objection handling via FAQ, preuve sociale correcte (3 témoignages). Manque preuve RÉELLE (photos, screenshots, vidéos). |
| **Funnel** | 72/100 | Home → Analyseur/Calculateur → Pricing → Stripe OK. Mais /login redirige vers /pricing (pas d'espace membre visible). Pas de capture email avant checkout. |
| **Conversion Mobile** | 70/100 | Pages lisibles, CTAs visibles. Pas de test perf réel fait mais SPA React = potentiel TTI élevé. Formulaires analyseur/calculateur OK (peu de champs). |
| **Confiance** | 75/100 | Mentions légales, CGV, disclaimer médical présents. Stripe visible. Mais témoignages non vérifiables, pas de photos réelles, pas de mention SIRET visible sur home. |
| **TOTAL** | **74/100** | |

---

## C) Top 10 Blockers

| # | Blocker | Impact | Page |
|---|---|---|---|
| 1 | **Pas de capture email/lead avant checkout** — L'analyseur et le calculateur ne collectent aucun email. 100% du trafic non-converti est perdu. | 🔴 Critique | /analyseur, /calculateur |
| 2 | **Tracking événementiel inexistant** — Seuls PageView (GA4 + FB) sont en place. Aucun event custom (view_pricing, begin_checkout, calculator_used, analyseur_completed). Impossible d'optimiser sans data. | 🔴 Critique | Global |
| 3 | **Pas d'espace membre / login fonctionnel** — /login redirige vers /pricing. Les clients existants n'ont nulle part où aller. | 🔴 Critique | /login |
| 4 | **Témoignages non vérifiables** — "Marc, Laurent, Thomas" sans photos, sans nom de famille, sans lien. Crédibilité faible pour un public 35-55 méfiant. | 🟠 Élevé | Home, /pricing |
| 5 | **Aucun parcours post-outil gratuit vers le pricing** — Après résultats analyseur/calculateur, pas de CTA "Obtenir votre programme personnalisé" menant à /pricing. Le pont entre valeur gratuite et conversion est cassé. | 🟠 Élevé | /analyseur, /calculateur |
| 6 | **Nom d'entreprise "BH DIGITAL" sur Stripe** — Dépersonnalise l'expérience. L'utilisateur passe de "Sèche 10 Semaines" à "BH DIGITAL" au checkout → friction de confiance. | 🟠 Élevé | Stripe Checkout |
| 7 | **Pas de page /a-propos visible dans la nav** — Lien en footer uniquement. Pour un produit santé, la légitimité du fondateur est un levier de conversion majeur. | 🟡 Moyen | Nav |
| 8 | **Un seul plan tarifaire** — Pas d'ancrage psychologique. Un plan à 29€/mois seul ne crée pas de perception de valeur. Un plan 3 mois ou annuel augmenterait l'AOV et la conversion. | 🟡 Moyen | /pricing |
| 9 | **CTA principal Home → /analyseur, pas vers /pricing** — Le funnel principal pousse vers l'outil gratuit (bon pour engagement) mais sans bridge vers la vente. Risque de "touristes" qui utilisent l'outil et partent. | 🟡 Moyen | Home |
| 10 | **FAQ non ouverte par défaut** — Les objections clés (annulation, résultats 40+, temps/jour) sont cachées. Sur mobile, peu de gens cliquent les accordéons. | 🟢 Faible | Home |

---

## D) Plan 7 Jours Exécutable

| Jour | Action | Owner | Effort | KPI Done |
|---|---|---|---|---|
| J1 (sam) | **Ajouter capture email post-résultat** sur /analyseur et /calculateur (modal: "Recevez votre bilan complet par email") | Dev | M | Formulaire email visible après résultat |
| J1 (sam) | **Ajouter events GA4 + FB custom**: `calculator_used`, `analyseur_completed`, `view_pricing`, `checkout_start` | Dev | S | Events visibles dans GA4 DebugView |
| J2 (dim) | **Ajouter CTA vers /pricing après résultats** analyseur/calculateur ("Votre programme personnalisé est prêt → Commencer") | Dev | S | CTA cliquable menant à /pricing |
| J3 (lun) | **Renommer business name Stripe** en "Sèche 10 Semaines" au lieu de "BH DIGITAL" | Hocine | S | Nom visible sur page Stripe = Sèche 10 Semaines |
| J3 (lun) | **Ajouter photos/preuves aux témoignages** — même des avatars stylisés + screenshots résultats app | Design | M | Au moins 3 témoignages avec avatar |
| J4 (mar) | **Créer une vraie page /login** pour les membres existants (ou redirect vers dashboard) | Dev | M | /login affiche un formulaire de connexion |
| J5 (mer) | **Ajouter un plan 3 mois à 69€** (économie 18€) pour ancrage tarifaire | Dev + Stripe | S | 2 plans visibles sur /pricing |
| J6 (jeu) | **Ajouter page fondateur / about visible** dans la nav principale | Hocine | S | Lien "À propos" dans nav, page avec photo + histoire |
| J7 (ven) | **Ouvrir 2-3 FAQ par défaut sur mobile** + tester temps de chargement réel (Lighthouse) | Dev | S | FAQ visibles sans clic, score Lighthouse > 80 |
| J7 (ven) | **Séquence email post-lead** (3 emails: bilan → éducation → offre) via outil email (Brevo/Resend) | Hocine | L | Séquence configurée et testée |

---

## E) 3 Quick Wins Aujourd'hui

1. **🔥 Ajouter les 4 events de tracking** (GA4 + FB Pixel) — 1h de dev. Sans ça, toute dépense pub est aveugle.

2. **🔥 Ajouter un CTA "/pricing" après les résultats** du calculateur et de l'analyseur — 30 min. C'est le bridge manquant entre engagement gratuit et conversion.

3. **🔥 Renommer "BH DIGITAL" → "Sèche 10 Semaines"** dans Stripe Dashboard — 5 min. Friction de confiance gratuite à supprimer.

---

## Notes Techniques

- **Stack**: SPA React (Vite), hébergé (probablement Vercel/Netlify)
- **Tracking présent**: GA4 (G-YRJ14669GD), FB Pixel (1956194787840150), Microsoft Clarity (vlce1mufq2)
- **Tracking manquant**: Aucun event custom au-delà de PageView
- **Checkout**: Stripe Checkout (hosted), trial 7j, 29€/mois, fonctionnel ✅
- **Pages légales**: Mentions légales ✅, CGV ✅, Politique de confidentialité ✅
- **Funnel vérifié**: Home → /analyseur → /calculateur → /pricing → Stripe Checkout ✅

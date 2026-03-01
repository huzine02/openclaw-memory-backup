# HEUS Board — Weekly Growth Review — 28/02/2026 (Semaine 1)

## 📊 KPI 7 jours (21-27/02)
| Métrique | Valeur | Cible S1 | Status |
|----------|--------|----------|--------|
| Users/jour (moy) | **14.4** | 30 | 🔴 |
| Sessions totales | **141** | 200 | 🟡 |
| Pages vues | **598** | — | — |
| Bounce moyen | **36.8%** | <50% | 🟢 |
| Durée moy session | **372s (6min)** | >3min | 🟢 |
| Abonnés payants | **0** | 5 | 🔴 |
| Leads capturés | ? | 20 | ? |
| Articles indexés | 63 | 63 | 🟢 |
| Posts LinkedIn | 3-4 | 3 | 🟢 |

## Pic trafic : 22/02 = 31 users (post-lancement massif SEO+LinkedIn)
## Creux : 24/02 = 7 users → week-end mort
## Page #1 acquisition : /analyseur (34% sessions Clarity)

---

## 1️⃣ DÉCISIONS (5)

| # | Décision | Owner | Confiance |
|---|----------|-------|-----------|
| D1 | **TOUT le trafic social → /analyseur** (pas homepage) | Growth Engineer | 9/10 |
| D2 | **Renouveler token LinkedIn API** (403 détecté) — sans ça, crons morts | Acquisition Ops | 10/10 |
| D3 | **Fixer LCP 6.95s** — Core Web Vitals bloque SEO ranking | SRE/Reliability | 8/10 |
| D4 | **Lancer mini-funnel /analyseur → lead capture → email J0/J1/J3/J7** | CRO/Funnel Engineer | 8/10 |
| D5 | **Activer Facebook Reels + YouTube Shorts** (scripts prêts, exécution = 0) | Content Engineer | 7/10 |

## 2️⃣ BACKLOG 7 JOURS (S2 : 01-07/03)

| Tâche | Owner | Deadline | KPI cible |
|-------|-------|----------|-----------|
| Renouveler token LinkedIn OAuth | Acquisition Ops | 01/03 | Crons LinkedIn opérationnels |
| Fix LCP < 2.5s (/analyseur, landing) | SRE/Reliability | 03/03 | Core Web Vitals vert |
| Mini-funnel analyseur → email drip | CRO/Funnel Engineer | 04/03 | Taux lead capture > 5% |
| Publier 2 Reels/Shorts (scripts existants) | Content Engineer | 05/03 | +50 vues minimum |
| Quora réponse #3 et #4 (1/jour max) | Acquisition Ops | 03/03 | +100 vues Quora |
| Soumettre IndexNow batch Bing (fix 403) | Data Analyst | 02/03 | Pages indexées Bing > 0 |
| Tracker leads Firestore → dashboard GA | Data Analyst | 05/03 | Leads mesurables |

## 3️⃣ RISQUES + MITIGATION

| Risque | Impact | Probabilité | Mitigation |
|--------|--------|-------------|------------|
| Token LinkedIn expiré → 0 posts auto | Haut | **Confirmé** | Renouveler OAuth immédiatement |
| 0 abonnés payants S1 | Haut | Élevée | Funnel /analyseur + email drip prioritaire |
| LCP 6.95s → Google pénalise ranking | Moyen | Moyenne | Lazy load images, CDN, preconnect |
| 0 returning users (Clarity) | Haut | Confirmé | Email drip + PWA push notifications |
| Compte Quora fragile (ban précédent) | Moyen | Moyenne | 1 réponse/jour, 0 lien 7 jours |

## 4️⃣ KILL LIST

| On arrête | Raison |
|-----------|--------|
| Trafic vers homepage depuis social | /analyseur convertit 3x mieux |
| TikTok cron quotidien (pas de contenu vidéo réel) | Cron tourne à vide, 0 output |
| IndexNow Yandex (marché RU = 0 pertinence) | Waste of calls |

## 5️⃣ SCORE CONFIANCE PAR DÉCISION

- D1 (trafic → /analyseur) : **9/10** — data Clarity le prouve
- D2 (token LinkedIn) : **10/10** — bloquant confirmé
- D3 (fix LCP) : **8/10** — impact SEO prouvé mais pas mesuré localement
- D4 (funnel email) : **8/10** — 0 returning users = besoin critique de rétention
- D5 (Reels/Shorts) : **7/10** — potentiel élevé, mais exécution dépend de Hocine (filmer)

## 6️⃣ TABLEAU D'EXÉCUTION

| Tâche | Status |
|-------|--------|
| 63 articles SEO enrichis 1800+ mots | ✅ Done |
| Pages statiques SEO + Schema.org | ✅ Done |
| Sitemap soumis GSC (67 URLs) | ✅ Done |
| Score Santé Métabolique (HealthScore) | ✅ Done |
| Crons LinkedIn/Medium/Quora/Facebook | 🟡 In Progress (token LinkedIn 403) |
| Mini-funnel /analyseur → leads | 🔴 Blocked (pas encore implémenté) |
| Reels/Shorts vidéo | 🔴 Blocked (scripts prêts, besoin filmer) |
| Email contact@seche10semaines.fr | ✅ Done (Zimbra) |
| Vrai premier abonné payant | 🔴 Blocked |

---

## 📋 CEO NOTE
Semaine 1 = fondations solides (63 articles, SEO, analytics). Mais **0 conversion = 0 revenu**. S2 doit être 100% conversion : funnel /analyseur, email drip, et fix du token LinkedIn. Le trafic organique monte (6→31 users peak) mais trop lent sans canaux sociaux actifs. Priorité absolue : **transformer les visiteurs existants en leads puis en payants**.

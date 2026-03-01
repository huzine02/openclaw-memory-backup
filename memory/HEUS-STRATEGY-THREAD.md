# HEUS Strategy Thread — Source de continuité

Dernière mise à jour: 2026-03-01 18:06 (Europe/Paris)

## Objectif business
- Cible actuelle: 7 000€/mois = 242 abonnés × 29€
- Principe: revenue-first (leads -> trials -> payants -> MRR)

## Ligne stratégique (stable)
1. Acquisition qualifiée vers `/analyseur` (CTA principal)
2. Conversion funnel `/analyseur -> lead -> email -> trial -> payant`
3. Exécution quotidienne HEUS (daily war room) + arbitrage hebdo (weekly board)
4. Décisions fondées sur preuves: données internes + docs officielles + RETEX

## KPI nord-star
- Leads qualifiés/jour
- Trials/semaine
- Trial -> payant (%)
- MRR net hebdo

## État funnel (01/03/2026)
- ✅ Landing page optimisée (mobile-first, double message sèche+santé)
- ✅ /analyseur live (prise de sang IA, score 0-100)
- ✅ /calculateur live (déficit calorique Mifflin-St Jeor)
- ✅ Lead capture post-résultat /analyseur (email → Firestore)
- ✅ CTA pricing double (above_metrics + bottom_after_email)
- ✅ Stripe checkout fonctionnel (trial 7j + 29€/mois)
- ✅ Annulation inline fonctionnelle
- ✅ Email drip J0/J1/J3/J7
- ✅ GA4 events (analyzer_complete, lead_captured, view_pricing, checkout_start)
- ⚠️ Firebase Functions pas re-déployées (fix redirect serveur)
- 🔴 Maillage interne faible (pages/session = 1.0)
- 🔴 0 returning users

## Canaux acquisition — État réel
| Canal | Statut | Volume | Action |
|---|---|---|---|
| SEO Blog | ✅ 63 articles enrichis | 37/72 indexés GSC | Monitorer GSC 3-7 jours |
| Facebook groupes | ✅ ACTIF (3 posts/jour) | Source #1 (36 sessions) | Stratégie anti-ban → `memory/facebook-strategy.md` |
| LinkedIn | ✅ Cron actif | Token OK 01/03 | Posts lun/mer/ven 7h30 |
| Medium | ✅ Cron actif | 3 articles publiés | Mar/ven 9h |
| Quora | 🟡 Réduit | 1x/semaine (jeudi) | Compte Jim Josh banni |
| TikTok | 🟡 1 post/jour | 7 followers | Faible ROI mais maintenu |
| Reddit | 🔴 Pas commencé | 0 | Templates prêts |
| Pinterest | 🔴 Pas de token | 0 | TODO OAuth |
| Reels/Shorts | 🔴 Bloqué | 30 scripts prêts | Hocine doit filmer |

## Décisions stratégiques actives
1. **Prix = 29€/mois** (pas de changement pour l'instant, malgré pivot santé)
2. **FB Ads = NON** (fixer funnel d'abord, puis ads avec revenus)
3. **Stripe reste "BH Digital"** (décision Hocine 01/03)
4. **Facebook organique = priorité #1 acquisition** (source #1 réelle)
5. **Ratio FB 80/20** : 80% valeur pure, 20% avec lien en commentaire

## Priorités actives (court terme)
1. **Facebook organique** : exécuter stratégie quotidienne (3-4 posts + 10-15 commentaires)
2. **Maillage interne** : augmenter pages/session de 1.0 à 2.0+
3. **Rétention** : email follow-up post-outil (0 returning users → objectif 10%)
4. **Firebase deploy** : fix Stripe redirect serveur

## Protocole anti-perte du fil
- Toute décision stratégique doit être reflétée dans:
  - `MEMORY.md` (mémoire long terme)
  - `memory/HEUS-STRATEGY-THREAD.md` (ce fichier)
  - `memory/heus-open-tasks.md` (tâches opérationnelles)
  - log opérationnel concerné (`daily-war-room.md`, `weekly-growth-review.md`)
- Toute action exécutée doit être tracée dans:
  - `memory/heus-open-tasks.md` (section DONE avec heure + preuve)
  - `memory/YYYY-MM-DD.md` (journal du jour)
- Chaque revue HEUS doit terminer par:
  - Ce qu'on continue
  - Ce qu'on arrête
  - Prochaine action exécutable (<24h)

## Reprise après arrêt/redémarrage
1. Lire `MEMORY.md`
2. Lire `memory/HEUS-STRATEGY-THREAD.md` (ce fichier)
3. Lire `memory/heus-open-tasks.md` (tâches en cours)
4. Lire les 2 derniers fichiers journaliers `memory/YYYY-MM-DD.md`
5. Lire `memory/daily-war-room.md` et `memory/weekly-growth-review.md`
6. Reprendre sur la "prochaine action exécutable" la plus récente

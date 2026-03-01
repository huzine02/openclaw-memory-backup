# HEUS Open Tasks — Source de vérité opérationnelle

Dernière mise à jour: 2026-03-01 20:57 (Europe/Paris)
Mise à jour par: HEUS Board réunion extraordinaire 20h53

## Priorités actives (TOP) — Semaine 2 (02-08/03)

| Priorité | Tâche | Owner | Deadline | KPI cible | Statut | RAG |
|---|---|---|---|---|---|---|
| P0 | **Relire protocole FB avant CHAQUE session** | X-Ops | Permanent | 0 ban | ACTIF | 🔴 |
| P0 | Facebook organique quotidien (3-4 posts + 10-15 commentaires) | Acquisition Ops | Quotidien | ≥1 lead FB/jour | IN PROGRESS | 🟡 |
| P0 | Rejoindre 5-8 nouveaux groupes FB (0 lien pendant 14j) | Acquisition Ops | 05/03 | 8-12 groupes actifs | TODO | 🟡 |
| P1 | Maillage interne blog → /analyseur + /calculateur | CRO | 04/03 | Pages/session ≥ 2 | TODO | 🔴 |
| P1 | Email follow-up J+1 post-analyseur | Growth Eng | 05/03 | ≥10% returning | TODO | 🔴 |
| P1 | Firebase Functions re-deploy | SRE | 02/03 | Checkout fiable | TODO | 🟡 |
| P1 | UTM tracking sur liens Facebook | Data Analyst | 02/03 | Mesure ROI/groupe | TODO | 🟡 |
| P2 | Service account GA4 Data API | Hocine + Data | 03/03 | Rapports auto | TODO | 🟡 |
| P2 | 5 nouveaux templates Facebook | Content Eng | 03/03 | Varier les posts | TODO | 🟡 |
| P2 | Corriger domaine cron daily-traffic (.fr) | SRE | 02/03 | Plus de fausse alerte | TODO | 🟡 |
| P2 | Vérifier profil Huzine Bou (bio, photo, activité) | Compliance | 02/03 | Profil crédible | TODO | 🟡 |
| P2 | Audit indexation GSC — 63 articles | Market Intel | 05/03 | 50+ pages indexées | TODO | 🟡 |
| P2 | LCP < 2.5s (pass 2 : images, code split) | SRE | 07/03 | Lighthouse LCP < 2.5s | IN PROGRESS | 🟡 |
| P3 | Configurer remote git privé | Hocine + SRE | 08/03 | git push fonctionnel | TODO | 🟡 |
| P3 | Pinterest access token | Growth Eng | 15/03 | Canal additionnel | TODO | ⚪ |

## Planning exécution semaine 2

### Lundi 02/03
- [ ] Firebase Functions deploy (SRE)
- [ ] Corriger domaine cron daily-traffic (SRE)
- [ ] UTM tracking sur liens Facebook (Data)
- [ ] Vérifier profil Huzine Bou (Compliance)
- [ ] FB : Template 2 (santé/prédiabète) à 12h + commentaires valeur
- [ ] Rejoindre 2-3 nouveaux groupes (SANS poster)

### Mardi 03/03
- [ ] Service account GA4 Data API (Hocine)
- [ ] 5 nouveaux templates Facebook (Content Eng)
- [ ] FB : Engagement pur (mar = jour engage, 0 lien)

### Mercredi 04/03
- [ ] Maillage interne blog (CRO)
- [ ] FB : Template 3 (remise en forme) à 12h + lien à 19h

### Jeudi 05/03
- [ ] Email follow-up J+1 post-analyseur (Growth Eng)
- [ ] Rejoindre 2-3 groupes supplémentaires
- [ ] Audit indexation GSC
- [ ] FB : Engagement pur (jeu = jour engage)

### Vendredi 06/03
- [ ] FB : Nouveau template à 12h + lien à 19h (alterner /calculateur)
- [ ] Bilan semaine 2 préparation

## BLOCKED (action humaine requise)

| Tâche | Bloqué par | Depuis | Impact |
|---|---|---|---|
| Service account GA4 | Hocine — créer credentials | 22/02 | Rapports auto bloqués 8j |
| Remote git privé | Hocine — config remote | 01/03 | Backup = 0 protection |
| Reels/Shorts | Hocine — filmage | 22/02 | 30 scripts prêts, 0 vidéo |

## DONE aujourd'hui (01/03)

| Heure | Tâche | Preuve |
|---|---|---|
| matin | HEUS Board centralisé + Operating Standard + Disaster Recovery | Fichiers créés |
| 13h50-14h10 | D1-D5 terminés (lead capture, CTA, GA4, LinkedIn, LCP) | 5 commits |
| 14h30-15h00 | Crons nettoyés + 7 points board | Commits |
| 15h30-16h00 | Stripe checkout fixé + 1er paiement test réussi | commits + Hocine |
| 16h10-16h21 | Stratégie FB validée + 3 crons configurés | `facebook-strategy.md` |
| 17h53-18h05 | 3 posts FB publiés + 1 commentaire valeur | Browser |
| 18h12-18h20 | 6 commentaires valeur supplémentaires (PDurable) | Browser |
| 19h34 | Lien /analyseur en commentaire PDurable | Browser |
| 20h15-20h48 | Réponses Fred Pallady + Mikaël Kermabon + likes | Browser |
| 20h51 | Règle #0 anti-ban ajoutée dans stratégie FB | `facebook-strategy.md` |
| 20h53 | HEUS Board réunion extraordinaire — 10 décisions | Ce fichier |

**Score Facebook J1 : 3 posts, 9 commentaires valeur, 1 lien, 4 likes post, 8 réactions commentaire, 10+ commentaires reçus**

## Stratégie Facebook active
- **Référentiel** : `memory/facebook-strategy.md` (RELIRE AVANT CHAQUE SESSION)
- **Log exécution** : `memory/facebook-execution-01-03.md`
- **Crons** : posts lun/mer/ven 12h, liens 19h, engage mar/jeu/sam/dim 14h
- **Règle #0** : UN BAN CASSE TOUT — en cas de doute, NE PAS poster
- **Règle anti-ban** : 80% valeur / 20% promo, lien TOUJOURS en commentaire, 14j présence avant lien
- **Templates** : 3 prêts + 5 nouveaux à créer d'ici 03/03
- **Groupes actifs** : 3 (+ 5-8 à rejoindre d'ici 05/03)
- **Alterner URLs** : /analyseur et /calculateur en alternance

## Règles
1. Ce fichier = **source de vérité unique** des tâches HEUS.
2. Mise à jour obligatoire après chaque action, daily war room et weekly board.
3. Chaque tâche: owner, deadline, KPI, statut, RAG.
4. Tâche terminée → DONE avec date + heure + preuve.
5. Tâche BLOCKED >48h → escalade CEO au daily suivant.
6. **JAMAIS perdre une action exécutée** — tout doit être tracé ici + MEMORY.md.

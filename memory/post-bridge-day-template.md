# Post Bridge Test — Jour X/5 (DD/03/2026)

## Plan du Jour
- **Objectif** : X posts × 4 plateformes = X publications
- **Timing** : [heures prévues]
- **Templates** : [templates utilisés]

## Exécution

### Post #1 — [Heure]
**Template** : [nom]  
**Message** :
```
[texte du post]
```

**Plateformes** : LinkedIn (47388, 47389), TikTok (47390), Pinterest (47391), Facebook (47392)

**Commande** :
```powershell
$body = @{
  caption="[message]";
  social_accounts=@(47388,47389,47390,47391)
} | ConvertTo-Json
```

**Résultat** :
- ✅ / ❌ Post ID : `[id]`
- ✅ / ❌ Status : `[processing/published/failed]`
- Temps : [X] minutes

**Vérification 1h après** :
- LinkedIn Hocine (47388) : ✅ / ❌ [URL]
- LinkedIn Page (47389) : ✅ / ❌ [URL]
- TikTok (47390) : ✅ / ❌ [URL]
- Pinterest (47391) : ✅ / ❌ [URL]
- Facebook (47392) : ✅ / ❌ [URL]

**Reach (24h)** :
- LinkedIn : [X] impressions
- TikTok : [X] vues
- Pinterest : [X] impressions
- Facebook : [X] portée

**Engagement** :
- Likes : [X]
- Commentaires : [X]
- Partages : [X]
- **Total** : [X]

---

### Post #2 — [Heure]
[Même structure que Post #1]

---

### Post #3 — [Heure]
[Même structure que Post #1]

---

## Résumé Jour X

### Métriques
- **Posts programmés** : X
- **Publications réussies** : X/X (X%)
- **Reach total** : [X] impressions
- **Engagement total** : [X]
- **Temps total** : [X] minutes

### Problèmes Rencontrés
- [Liste des bugs, erreurs, limitations]

### Learnings
- [Ce qui a bien marché]
- [Ce qui a mal marché]
- [Ajustements pour demain]

### Score Jour X
- ✅ Taux succès >85% : OUI / NON
- ✅ Reach >2K : OUI / NON (objectif 10K sur 5j = 2K/jour)
- ✅ Temps <15 min : OUI / NON
- ✅ Qualité posts : OUI / NON (rendu correct sur toutes plateformes)

**Score final** : X/4

---

## Actions Demain
- [Ajustements prévus]
- [Templates à tester]
- [Points d'attention]

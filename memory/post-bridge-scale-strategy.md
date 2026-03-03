# Stratégie Scale Post Bridge — À partir du 03/03/2026

## Validation
- ✅ Test réussi : 03/03/2026 00h10
- ✅ Post LinkedIn processing
- ✅ API fonctionnelle
- ✅ 5 comptes connectés

## Avantage Scale
**1 API call = 5 plateformes simultanées**

Au lieu de :
- ❌ LinkedIn API (1 call)
- ❌ Facebook browser automation (instable)
- ❌ TikTok upload manuel
- ❌ Pinterest API séparée

**Maintenant** :
- ✅ 1 seul call Post Bridge → TOUT publié
- ✅ Stable (API officielle)
- ✅ Scheduling inclus
- ✅ $5/mois total (vs temps perdu)

## Comptes Connectés

| ID | Plateforme | Compte | Usage |
|----|------------|--------|-------|
| 47388 | LinkedIn | Hocine (perso) | Posts pro/expertise |
| 47389 | LinkedIn | Sèche 10 Semaines | Page officielle |
| 47390 | TikTok | seche10semaines | Vidéos courtes |
| 47391 | Pinterest | huzinepro | Pins visuels |
| 47392 | Facebook | Location rentable | ⚠️ Pas pour Sèche10 |

**⚠️ ATTENTION Facebook** : Compte "Location rentable" ≠ "Sèche 10 Semaines"
→ À connecter le bon compte Facebook dans Post Bridge dashboard

## Stratégie Quotidienne (à partir 03/03)

### Matin (7h30)
**LinkedIn + TikTok combo** :
```powershell
$body = @{
  caption="[Template expertise matinal]`n`n#nutrition #fitness #santé";
  social_accounts=@(47388,47389,47390)
} | ConvertTo-Json
# Post via Post Bridge API
```

### Midi (12h30)
**Full cross-platform** :
```powershell
$body = @{
  caption="[Template éducatif midi]`n`n#déficitcalorique #pertedepoids";
  social_accounts=@(47388,47389,47390,47391)
} | ConvertTo-Json
```

### Soir (19h00)
**LinkedIn focus** :
```powershell
$body = @{
  caption="[Template réflexion/story]`n`n#transformation #motivation";
  social_accounts=@(47388,47389)
} | ConvertTo-Json
```

## Templates Adaptés Multi-Plateformes

### Template 1 — Conseil Expert (tous canaux)
```
Le déficit calorique : simple mais mal compris.

300-500 kcal/jour (pas plus !) + protéines élevées = perte durable sans perdre de muscle.

Qui teste cette approche ? 👇

#nutrition #fitness #pertedepoids #santé
```

### Template 2 — Question Engagement (LinkedIn + TikTok)
```
Sondage rapide :

Vous perdez du poids principalement grâce à :
A) L'alimentation (80%)
B) Le sport (20%)
C) Les deux également

Réponse en commentaire ? 💬

#health #wellness #fitness
```

### Template 3 — Stat Choc (Pinterest + LinkedIn)
```
1 homme sur 3 de +45 ans est prédiabétique sans le savoir.

La bonne nouvelle : perdre 5-7% du poids réduit le risque de 58%.

Source : Étude DPP (Diabetes Prevention Program)

#santé #prédiabète #prévention
```

## Automatisation Cron (à configurer)

**Remplacer crons LinkedIn/TikTok séparés par Post Bridge unique** :

```json
{
  "name": "post-bridge-morning",
  "schedule": {"kind": "cron", "expr": "30 7 * * 1,3,5", "tz": "Europe/Paris"},
  "payload": {
    "kind": "systemEvent",
    "text": "Post matinal LinkedIn+TikTok via Post Bridge (Template expertise)"
  },
  "sessionTarget": "isolated"
}
```

## Métriques à Suivre

**Avant Post Bridge (baseline 02/03)** :
- LinkedIn : 1-2 posts/semaine (manuel)
- TikTok : 0 post (vidéos manquantes)
- Facebook : automation instable
- Pinterest : 0
- **Total** : ~2-3 posts/semaine, 1 plateforme

**Après Post Bridge (objectif 03/03+)** :
- **3 posts/jour × 4 plateformes** = 12 publications/jour
- **84 publications/semaine** (vs 2-3 avant)
- **Gain** : ×28 en volume, ×0 en temps (automatisé)

## Budget

- Post Bridge API : $5/mois
- Temps gagné : ~2h/jour (automation browser Facebook)
- ROI : massif (scale sans effort)

## Prochaines Étapes 03/03

1. ✅ Skill créée
2. ✅ API testée
3. ⏳ Corriger compte Facebook (connecter bon compte dans dashboard)
4. ⏳ Créer 10 templates cross-platform (matin)
5. ⏳ Configurer crons Post Bridge (remplacer anciens)
6. ⏳ Test batch : 3 posts simultanés sur 5 plateformes
7. ⏳ Monitoring : vérifier publications effectives

## Risques & Mitigations

**Risque 1** : Rate limits Post Bridge
→ Mitigation : espacer posts de 30 min minimum

**Risque 2** : Compte Facebook incorrect
→ Mitigation : vérifier dashboard Post Bridge, reconnecter si besoin

**Risque 3** : Contenu pas adapté à toutes plateformes
→ Mitigation : templates universels (pas de lien direct, focus valeur)

**Risque 4** : Ban multi-plateformes si contenu spam
→ Mitigation : rotation templates, ratio 90% valeur / 10% CTA

## Note Importante

**Post Bridge ≠ remplace protocole anti-ban Facebook**

Pour Facebook groupes :
- ✅ Continuer automation Chromium (posts groupes)
- ✅ Post Bridge pour Facebook PAGE seulement

Pour LinkedIn/TikTok/Pinterest :
- ✅ Post Bridge = méthode principale (stable + rapide)

---

**Activation** : 03/03/2026 matin (après War Room)
**Owner** : Acquisition Ops + Content Engineer
**Review** : Hebdo (KPI : publications/semaine, reach/platform)

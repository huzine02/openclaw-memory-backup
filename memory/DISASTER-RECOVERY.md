# Disaster Recovery — Sèche 10 Semaines / HEUS

## Objectif
Éviter toute perte stratégique/ops si le PC est perdu, cassé ou formaté.

## Niveau de protection
- P0 (actuel): mémoire locale + commits locaux
- P1 (à activer): dépôt Git distant privé + push quotidien
- P2 (option): archive chiffrée hebdomadaire hors Git (Drive/Dropbox)

## Procédure de reprise (nouvelle machine)
1. Cloner le repo de sauvegarde privé.
2. Ouvrir `MEMORY.md`.
3. Ouvrir `memory/HEUS-STRATEGY-THREAD.md`.
4. Lire les 2 derniers `memory/YYYY-MM-DD.md`.
5. Lire `memory/daily-war-room.md` + `memory/weekly-growth-review.md`.
6. Reprendre la prochaine action exécutable.

## Fichiers critiques à sauvegarder
- `MEMORY.md`
- `HEARTBEAT.md`
- `USER.md`
- `memory/*.md` (surtout HEUS-OPERATING-STANDARD, HEUS-STRATEGY-THREAD, war-room, weekly)

## Règle opérationnelle
- Toute décision stratégique doit être écrite.
- Commit après chaque bloc stratégique.
- Push distant quotidien (quand remote configuré).

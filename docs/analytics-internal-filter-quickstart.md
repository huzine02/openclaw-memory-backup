# Quickstart — Filtrer le trafic interne (GA + Clarity)

## Objectif
Éviter de mélanger vos tests manuels avec le trafic réel des prospects.

## Méthode simple recommandée
Utiliser un flag `internal_traffic=true` dans l'URL de test, puis marquer les événements analytics avec ce flag.

Exemple d'URL de test:
`https://seche10semaines.fr/?internal_traffic=true`

## Ce qu'il faut implémenter (dev)
1. Lire le query param `internal_traffic`.
2. Le stocker en `localStorage` (persistant pour la session).
3. Ajouter `internal_traffic: true/false` dans tous les events GA/Pixel/Clarity custom.
4. Créer un segment/filtre "internal_traffic=false" pour les dashboards business.

## Utilisation quotidienne
- Toi (tests): toujours ouvrir le site avec `?internal_traffic=true`
- Lecture KPI business: filtrer sur `internal_traffic=false`

## Contrôle rapide
- Vérifier qu'une session de test est bien marquée interne
- Vérifier qu'une session externe n'a pas le flag

## Pourquoi c'est critique
Avec peu de trafic, 5-10 sessions de test peuvent fausser complètement le taux de conversion.

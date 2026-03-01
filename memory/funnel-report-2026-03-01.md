# Funnel Report — 01/03/2026 (données 22/02 → 01/03)

## Entonnoir conversion

| Étape | Events | Users | Taux conversion |
|---|---|---|---|
| Page views (toutes) | 568 | 83 | 100% |
| Analyse complétée (analyzer_complete) | 1 | 1 | 1.2% |
| Lead capturé (lead_captured) | 0 | 0 | 0% |
| Vue pricing (view_pricing + pricing_view) | 44 | ~4 | 4.8% |
| Checkout démarré (checkout_start) | 9 | 3 | 3.6% |

## Analyse
- **83 users** sur la semaine
- **Le gros trou** : entre page_view et analyzer_complete → 1 seul user a complété l'analyseur
- **Bon signe** : 3 users ont démarré un checkout (9 events) → l'intention d'achat existe
- **lead_captured = 0** : normal, le formulaire email vient d'être ajouté aujourd'hui
- **pricing_view** fonctionne (39 events legacy + 5 new) → les gens arrivent sur /pricing

## Problèmes identifiés
1. L'analyseur ne convertit pas (1/83 = 1.2%) → UX à vérifier
2. 0 emails capturés → formulaire tout juste déployé, à monitorer
3. 3 users checkout mais 0 abonné → vérifier le flow Stripe

## Next
- Monitorer quotidiennement via le cron daily-traffic-report
- Re-évaluer après 7 jours de données avec les nouveaux events

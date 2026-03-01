// Script to inject article content into Medium editor via clipboard paste
// Run in browser console on the Medium editor page

const articleHTML = `
<p>Votre médecin vient de prononcer le mot « prédiabète ». Ou peut-être que personne ne l'a prononcé — mais votre corps, lui, essaie de vous parler depuis des mois.</p>

<p>En France, <strong>5 à 10 millions de personnes</strong> sont en situation de prédiabète sans le savoir. Leur glycémie à jeun se situe entre 1,00 et 1,25 g/L, ou leur HbA1c entre 5,7 % et 6,4 %. C'est un no man's land métabolique : pas encore diabétique, mais plus vraiment en bonne santé.</p>

<p>La bonne nouvelle ? Contrairement au diabète de type 2 installé, <strong>le prédiabète est réversible dans la majorité des cas</strong>. L'étude DPP (<em>Diabetes Prevention Program</em>, Knowler et al., 2002, <em>New England Journal of Medicine</em>) l'a prouvé : une modification du mode de vie réduit le risque de progression vers le diabète de <strong>58 %</strong> — presque deux fois plus efficace que la metformine.</p>

<p>Encore faut-il reconnaître les signaux. Voici les 5 que votre corps vous envoie.</p>

<h2>Signal n°1 : La fatigue post-repas systématique</h2>

<p>Vous connaissez ce coup de barre après le déjeuner ? Celui qui vous donne envie de dormir à 14h, au point que même un espresso ne suffit plus ?</p>

<p>Ce n'est pas normal. C'est le signe que votre glycémie fait des montagnes russes : un pic après le repas (parce que vos cellules résistent à l'insuline), suivi d'un crash quand l'insuline finit par faire son travail — en excès.</p>

<p><strong>Ce que ça révèle :</strong> Votre pancréas produit encore de l'insuline, mais vos cellules y répondent de moins en moins bien. C'est la définition même de l'insulino-résistance — le mécanisme central du prédiabète.</p>

<p><strong>Comment réagir :</strong></p>
<ul>
<li>Mangez vos légumes et protéines <strong>en premier</strong>, puis les glucides en dernier. Shukla et al. (2015, <em>Diabetes Care</em>) ont montré que cette simple habitude réduit le pic glycémique de <strong>37 %</strong>.</li>
<li>Marchez 15 à 20 minutes après chaque repas. Vos muscles captent le glucose directement, même sans insuline.</li>
</ul>

<h2>Signal n°2 : Le tour de taille qui augmente (même si le poids ne bouge pas)</h2>

<p>Votre balance affiche le même chiffre qu'il y a 5 ans, mais votre pantalon ne ferme plus. Ce n'est pas de la rétention d'eau — c'est de la <strong>graisse viscérale</strong>, celle qui s'installe autour de vos organes abdominaux.</p>

<p>Un tour de taille supérieur à <strong>94 cm chez l'homme</strong> est un signal d'alerte métabolique. Au-dessus de 102 cm, le risque de syndrome métabolique est multiplié par 3,5 (Wagenknecht et al., 2003, <em>Diabetes</em>).</p>

<p><strong>Ce que ça révèle :</strong> La graisse viscérale n'est pas passive. C'est un organe endocrine qui sécrète des cytokines inflammatoires, aggrave l'insulino-résistance et accélère la progression vers le diabète.</p>

<p><strong>Comment réagir :</strong></p>
<ul>
<li>Visez une perte de <strong>5 à 7 %</strong> de votre poids corporel. C'est souvent suffisant pour normaliser la glycémie.</li>
<li>La graisse viscérale est la <strong>première à partir</strong> quand vous adoptez un déficit calorique modéré combiné à de l'exercice.</li>
</ul>

<h2>Signal n°3 : La soif excessive et les envies de sucre</h2>

<p>Vous buvez plus qu'avant. Vous avez des envies de sucré en milieu d'après-midi. Ces deux symptômes sont liés : quand votre glycémie est chroniquement élevée, vos reins travaillent plus pour filtrer le glucose, ce qui augmente la soif. Et les crashes glycémiques déclenchent des envies de sucre rapide — votre cerveau cherche du carburant d'urgence.</p>

<p><strong>Ce que ça révèle :</strong> Votre régulation glycémique est instable. Votre corps oscille entre hyperglycémie (après les repas) et hypoglycémie réactive (2-3h après).</p>

<p><strong>Comment réagir :</strong></p>
<ul>
<li>Augmentez votre apport en <strong>fibres</strong> (30 g/jour minimum) : légumineuses, légumes verts, graines de chia, psyllium.</li>
<li>Éliminez les <strong>sucres liquides</strong> en priorité : sodas, jus de fruits, boissons sucrées. C'est la mesure la plus impactante.</li>
<li>1-2 cuillères à soupe de <strong>vinaigre de cidre</strong> dilué avant le repas peut réduire le pic glycémique de 20 à 35 %.</li>
</ul>

<h2>Signal n°4 : Le sommeil dégradé</h2>

<p>Vous dormez moins bien qu'avant. Réveils nocturnes, sommeil non réparateur, besoin d'uriner la nuit. Le lien avec le prédiabète est bidirectionnel : le mauvais sommeil aggrave l'insulino-résistance, et l'hyperglycémie perturbe le sommeil.</p>

<p>Spiegel et al. (1999, <em>The Lancet</em>) ont démontré qu'une restriction de sommeil à 4 heures par nuit pendant seulement 6 jours suffisait à <strong>induire un état pré-diabétique chez des sujets jeunes et en bonne santé</strong>.</p>

<p><strong>Ce que ça révèle :</strong> Le manque de sommeil augmente l'insulino-résistance de <strong>25 à 40 % dès le lendemain</strong>. Il élève aussi le cortisol et la ghréline (hormone de la faim), créant un cocktail métabolique toxique.</p>

<p><strong>Comment réagir :</strong></p>
<ul>
<li>Visez 7 à 8 heures par nuit, avec des horaires réguliers (même le week-end)</li>
<li>Chambre fraîche (18-19°C), sombre, sans écrans 1h avant</li>
<li>Le magnésium bisglycinate (300-400 mg le soir) améliore la qualité du sommeil et réduit le cortisol</li>
</ul>

<h2>Signal n°5 : La cicatrisation plus lente et les infections à répétition</h2>

<p>Des coupures qui mettent du temps à guérir. Des infections urinaires ou des mycoses plus fréquentes. Ce sont des signes subtils mais révélateurs : l'hyperglycémie chronique <strong>altère le système immunitaire</strong> et ralentit la réparation tissulaire.</p>

<p><strong>Ce que ça révèle :</strong> Votre glycémie est probablement élevée de manière chronique, pas juste après les repas.</p>

<p><strong>Comment réagir :</strong> Consultez votre médecin pour un bilan complet (glycémie à jeun + HbA1c). Et commencez les changements alimentaires et d'activité physique immédiatement.</p>

<h2>Les 5 piliers pour inverser la tendance</h2>

<p><strong>1. Repensez votre alimentation</strong> — Réduisez la charge glycémique. Remplacez les glucides raffinés par des versions complètes. Priorisez les protéines. Intégrez des graisses saines.</p>

<blockquote>« Le prédiabète n'est pas une maladie de l'excès de sucre dans le sang — c'est une maladie de l'excès d'insuline. » — Dr. Jason Fung, néphrologue</blockquote>

<p><strong>2. Bougez intelligemment</strong> — La combinaison exercice aérobie + musculation améliore l'HbA1c de <strong>-0,89 %</strong> en moyenne (Colberg et al., 2016, <em>Diabetes Care</em>).</p>

<p><strong>3. Perdez la graisse viscérale</strong> — Mesurez votre tour de taille, pas seulement votre poids. Visez -5 à 7 % de poids corporel.</p>

<p><strong>4. Optimisez votre sommeil</strong> — C'est un régulateur métabolique fondamental. Priorisez la régularité des horaires.</p>

<p><strong>5. Gérez le stress chronique</strong> — Le cortisol élève directement la glycémie. La cohérence cardiaque a des effets mesurables.</p>

<h2>Le résultat le plus encourageant</h2>

<p>L'étude finlandaise de prévention du diabète (Tuomilehto et al., 2001, <em>NEJM</em>) a montré que les participants ayant atteint au moins 4 des 5 objectifs de mode de vie avaient un risque de diabète réduit à <strong>0 %</strong>. Aucun d'entre eux n'a développé le diabète.</p>

<p>Pas un médicament. Pas une chirurgie. Juste des changements de mode de vie appliqués avec constance.</p>

<p>Le prédiabète est le meilleur diagnostic que vous puissiez recevoir. C'est votre corps qui vous envoie un avertissement clair — et vous avez encore le temps d'agir.</p>

<p><em>Si cet article vous a été utile, suivez-moi pour plus de contenu science-based sur la nutrition, la santé métabolique et la perte de gras. Je publie chaque semaine des analyses basées sur la recherche, pas sur les tendances.</em></p>
`;

// Inject via clipboard paste simulation
const editor = document.querySelector('[role=textbox]');
const lastP = editor.querySelector('p:last-of-type') || editor;
lastP.focus();

const blob = new Blob([articleHTML], {type: 'text/html'});
const clipboardItem = new ClipboardItem({'text/html': blob});
navigator.clipboard.write([clipboardItem]).then(() => {
    document.execCommand('paste');
    return 'pasted';
}).catch(e => e.message);

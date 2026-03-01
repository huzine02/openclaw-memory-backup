const https = require('https');

const TOKEN = 'pina_AEA7DHYXACOVYBIAGCAGKD3DQL4IVHABACGSPLQDXOKINV2SOKKQWYDG4WNVRNOSMPEZ5JUSMTT5DZPOMFJSQDEAY2VFL6IA';
const BOARDS = {
  seche: '1109433758145970180',
  sante: '1109433758145970181',
  recettes: '1109433758145970182',
};

function apiCall(method, path, body) {
  return new Promise((resolve, reject) => {
    const data = body ? JSON.stringify(body) : null;
    const opts = {
      hostname: 'api.pinterest.com',
      path,
      method,
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
        ...(data ? { 'Content-Length': Buffer.byteLength(data) } : {}),
      },
    };
    const req = https.request(opts, (res) => {
      let chunks = '';
      res.on('data', (d) => chunks += d);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, data: JSON.parse(chunks) }); }
        catch { resolve({ status: res.statusCode, data: chunks }); }
      });
    });
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

const pins = [
  {
    board_id: BOARDS.seche,
    title: 'Deficit Calorique Homme : Le Guide Complet Pour Secher Efficacement',
    description: 'Comment calculer ton deficit calorique pour une seche reussie ? -300 a -500 kcal/jour, 2g de proteines par kg. Utilise la formule Mifflin-St Jeor. Guide complet sur seche10semaines.fr #seche #deficitcalorique #pertedegras #musculation #nutrition #fitnesshomme',
    link: 'https://seche10semaines.fr/calculateur',
    image: 'https://seche10semaines.fr/blog-images/blog-img-programme-seche-homme-guide-complet.png',
  },
  {
    board_id: BOARDS.seche,
    title: '5 Erreurs Qui Sabotent Ta Seche (et comment les eviter)',
    description: 'Tu ne perds pas de gras malgre tes efforts ? Les 5 erreurs les plus courantes : couper trop fort, manquer de proteines, supprimer les glucides, trop de cardio, manquer de patience. Programme complet sur seche10semaines.fr #erreurs #seche #pertedegras #musculation',
    link: 'https://seche10semaines.fr/blog/programme-seche-homme-guide-complet',
    image: 'https://seche10semaines.fr/blog-images/blog-img-perdre-du-ventre-apres-40-ans.png',
  },
  {
    board_id: BOARDS.seche,
    title: 'Proteines Apres 40 Ans : Combien Par Jour ?',
    description: 'Apres 40 ans, minimum 1.6g/kg, optimal 2.0g/kg. Pour 80kg = 160g/jour. Sources : oeuf 13g, poulet 31g/100g, whey 25g/dose, saumon 25g/100g. Calcule tes besoins sur seche10semaines.fr #proteines #apres40ans #nutrition #musculation #seche',
    link: 'https://seche10semaines.fr/calculateur',
    image: 'https://seche10semaines.fr/blog-images/blog-img-plan-alimentaire-perte-de-poids-homme.png',
  },
  {
    board_id: BOARDS.sante,
    title: 'Prediabete Homme : 1 Sur 3 Apres 45 Ans',
    description: 'Glycemie a jeun entre 1.10 et 1.26 g/L. 90% ne le savent pas. Perdre 5-7% de son poids reduit le risque de diabete de 58% (etude DPP, NEJM 2002). Calcule ton objectif sur seche10semaines.fr #prediabete #diabete #santehomme #glycemie #prevention',
    link: 'https://seche10semaines.fr/blog/prediabete-que-faire',
    image: 'https://seche10semaines.fr/blog-images/blog-img-prediabete-que-faire.png',
  },
  {
    board_id: BOARDS.sante,
    title: 'Tour de Taille Homme : Le Chiffre Sante Que Tu Dois Connaitre',
    description: 'Moins de 94cm = normal. 94-102cm = risque modere. Plus de 102cm = risque eleve (OMS). Plus fiable que IMC. Mesure-toi et agis. seche10semaines.fr #tourdetaille #santehomme #graissevisceralesante #prevention',
    link: 'https://seche10semaines.fr/calculateur',
    image: 'https://seche10semaines.fr/blog-images/blog-img-cholesterol-regime-alimentaire-homme.png',
  },
  {
    board_id: BOARDS.recettes,
    title: 'Menu Seche 1800 kcal : Journee Type Pour Homme (160g Proteines)',
    description: 'PDJ : 3 oeufs + pain complet 400kcal. Dejeuner : poulet + riz + legumes 550kcal. Collation : whey + banane 250kcal. Diner : saumon + patate douce 500kcal. Plus de menus sur seche10semaines.fr #menusseche #mealprep #1800kcal #proteines #nutrition',
    link: 'https://seche10semaines.fr/calculateur',
    image: 'https://seche10semaines.fr/blog-images/blog-img-seche-debutant-conseils.png',
  },
];

async function main() {
  for (const p of pins) {
    console.log(`Creating pin: ${p.title}`);
    const res = await apiCall('POST', '/v5/pins', {
      board_id: p.board_id,
      title: p.title,
      description: p.description,
      link: p.link,
      media_source: { source_type: 'image_url', url: p.image },
    });
    console.log(`  Status: ${res.status}`, JSON.stringify(res.data).substring(0, 200));
    // Small delay between pins
    await new Promise(r => setTimeout(r, 1000));
  }
  console.log('\nDone!');
}

main().catch(console.error);

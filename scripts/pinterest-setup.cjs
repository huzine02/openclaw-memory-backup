const https = require('https');

const TOKEN = 'pina_AEA7DHYXACOVYBIAGCAGKD3DQL4IVHABACGSPLQDXOKINV2SOKKQWYDG4WNVRNOSMPEZ5JUSMTT5DZPOMFJSQDEAY2VFL6IA';

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

async function main() {
  // Create 3 boards
  const boards = [
    { name: 'Seche et perte de gras', description: 'Conseils nutrition et seche pour hommes 35-55 ans. Programmes personnalises par algorithme. seche10semaines.fr' },
    { name: 'Sante metabolique', description: 'Prediabete, glycemie, cholesterol : guides pratiques bases sur la science. seche10semaines.fr' },
    { name: 'Recettes et plans repas', description: 'Idees repas et menus pour seche et sante metabolique. Plans personnalises. seche10semaines.fr' },
  ];

  const boardIds = [];
  for (const b of boards) {
    console.log(`Creating board: ${b.name}`);
    const res = await apiCall('POST', '/v5/boards', { name: b.name, description: b.description, privacy: 'PUBLIC' });
    console.log(`  Status: ${res.status}`, JSON.stringify(res.data).substring(0, 200));
    if (res.data && res.data.id) boardIds.push({ name: b.name, id: res.data.id });
  }

  console.log('\nBoards created:', JSON.stringify(boardIds, null, 2));

  // Create pins with image URLs from the infographics
  // We'll use the site URL as link and describe each pin
  const pins = [
    { board: 0, title: 'Deficit calorique apres 40 ans : le guide complet', description: 'Comment calculer son deficit calorique apres 40 ans ? Formule Mifflin-St Jeor + cyclage calorique. Guide gratuit sur seche10semaines.fr', link: 'https://seche10semaines.fr/calculateur', image: 'https://seche10semaines.fr/blog-images/blog-img-programme-seche-homme-guide-complet.png' },
    { board: 0, title: '5 erreurs de seche apres 40 ans', description: 'Les erreurs les plus courantes qui empechent de perdre du gras apres 40 ans. Decouvrez les solutions.', link: 'https://seche10semaines.fr/blog/programme-seche-homme-guide-complet', image: 'https://seche10semaines.fr/blog-images/blog-img-perdre-du-ventre-apres-40-ans.png' },
    { board: 0, title: 'Proteines apres 40 ans : combien par jour ?', description: '2.0 a 2.2g/kg en deficit calorique pour preserver la masse musculaire (Helms et al. 2014).', link: 'https://seche10semaines.fr/blog/plan-alimentaire-perte-de-poids-homme', image: 'https://seche10semaines.fr/blog-images/blog-img-plan-alimentaire-perte-de-poids-homme.png' },
    { board: 1, title: 'Prediabete : que faire concretement ?', description: 'En France, 1 personne sur 3 est prediabetique sans le savoir. Voici comment inverser la tendance naturellement.', link: 'https://seche10semaines.fr/blog/prediabete-que-faire', image: 'https://seche10semaines.fr/blog-images/blog-img-prediabete-que-faire.png' },
    { board: 1, title: 'Glycemie a jeun elevee : causes et solutions', description: 'Comprendre et faire baisser sa glycemie naturellement. Guide base sur la recherche medicale.', link: 'https://seche10semaines.fr/blog/glycemie-a-jeun-elevee-causes-solutions', image: 'https://seche10semaines.fr/blog-images/blog-img-glycemie-a-jeun-elevee-causes-solutions.png' },
    { board: 1, title: 'Tour de taille : le vrai indicateur de sante', description: 'Plus fiable que le poids sur la balance. Decouvrez les seuils critiques et comment agir.', link: 'https://seche10semaines.fr/blog/cholesterol-regime-alimentaire-homme', image: 'https://seche10semaines.fr/blog-images/blog-img-cholesterol-regime-alimentaire-homme.png' },
  ];

  for (const p of pins) {
    if (!boardIds[p.board]) { console.log(`Skipping pin "${p.title}" - no board`); continue; }
    console.log(`Creating pin: ${p.title}`);
    const res = await apiCall('POST', '/v5/pins', {
      board_id: boardIds[p.board].id,
      title: p.title,
      description: p.description,
      link: p.link,
      media_source: { source_type: 'image_url', url: p.image },
    });
    console.log(`  Status: ${res.status}`, JSON.stringify(res.data).substring(0, 150));
  }

  console.log('\nDone!');
}

main().catch(console.error);

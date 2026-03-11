import fs from 'fs';
import path from 'path';

const images = {
    // Hero
    'feature-image.png': 'http://localhost:3845/assets/cd37e314fd7534f68b44a1d1b010b6a57e5b0ab8.png',

    // Image and Text
    'automation.png': 'http://localhost:3845/assets/65e3a2c56156a8736698ee26c0b388017e0a9687.png',
    'cloud.png': 'http://localhost:3845/assets/e4dc2105c13e3f01e471b1293775af1f99dbc087.png',
    'user-experience.png': 'http://localhost:3845/assets/ef5527586d4529461250af2e2c2425998c7ab5db.png',

    // App Showcase
    'zenbook.png': 'http://localhost:3845/assets/de2adabccd10cbc184b35f37570e651aa26c84a0.png',

    // Contact
    'contact-image.png': 'http://localhost:3845/assets/ae76fef488b11b2b72e8d89b17c21018d404edf2.png',

    // Testimonials
    'testimonial-avatar.png': 'http://localhost:3845/assets/7422dc28005a06a588947a41b89ddcd1fc5f3b2a.png',
    'quote-icon.svg': 'http://localhost:3845/assets/7793c30feadd3f15744afb4ae5ecd00d1e1c246f.svg',
    'chevron-left.svg': 'http://localhost:3845/assets/2df8261fa6be6dee25a6f6ef614b9beb944fa3ab.svg',
    'chevron-right.svg': 'http://localhost:3845/assets/385aade101cd519a2853e197965d66d79c9932e2.svg',

    // Header / Footer brand
    'brand-logo.svg': 'http://localhost:3845/assets/daa809a606c862b2d20b76b08f5b6c69322362aa.svg',

    // Partners logos
    'partner-cpval.png': 'http://localhost:3845/assets/bfef57a8277299b17f805f50ed19507149820746.png',
    'partner-pkso.png': 'http://localhost:3845/assets/7079ac792ebc352e2c1d8a5da8631275492e22ad.png',
    'partner-visana.png': 'http://localhost:3845/assets/c1c1e5a830ba9c2a922695653c54ce173120f7d9.png',
    'partner-sgpk.png': 'http://localhost:3845/assets/28f5e0b004ae02241a22e601c2cd9e294e8953b9.png',
    'partner-wwz.png': 'http://localhost:3845/assets/dedd0b72e401d25e98dff7b6f44864d87a1ac5b3.png',
    'partner-jura.png': 'http://localhost:3845/assets/926d7b6ba2606fa0b8821b0bd6816a69ae770f8e.png',
    'partner-ascaro.png': 'http://localhost:3845/assets/8ad53fece7c64663e7e2adec621fac348f608684.png',
    'partner-roche.png': 'http://localhost:3845/assets/abef2435163fe409856f214429bf28a9782e9709.png',
    'partner-pkar.png': 'http://localhost:3845/assets/f143497600e013ba1f9440c9bdeb502b0fa68927.png',
    'partner-aregger.png': 'http://localhost:3845/assets/99d83f7594a12abdfc2be952562bdee37e4747e1.png',
    'partner-swisslos.png': 'http://localhost:3845/assets/5eba255d2321bb0a2cf5fe95571d9eb47b07a327.png',
    'partner-medpension.png': 'http://localhost:3845/assets/581143c322d97c2121f3044378f0ff09b8df80cc.png',
    'partner-propublic.svg': 'http://localhost:3845/assets/fdb61da18699879510a3fcde025d0bf860ef8a16.svg',
    'partner-leuthard.svg': 'http://localhost:3845/assets/3343aee541e5e6e549b242ae86ad5ebc8f10f8bb.svg',

    // Features Grid icons
    'icon-feature-0.svg': 'http://localhost:3845/assets/c3fd56e034223b7a9184249fbb241c0b0af97637.svg',
    'icon-feature-1.svg': 'http://localhost:3845/assets/76d25ea41eb094d048e51b57d08303bfa1951079.svg',
    'icon-feature-2.svg': 'http://localhost:3845/assets/7cf3b9b4b1b2ec497ed2b70b9f75902764be0599.svg',
    'icon-feature-3.svg': 'http://localhost:3845/assets/4bfdeab255cafe9eebff3d890484907948864647.svg',
    'icon-feature-4.svg': 'http://localhost:3845/assets/84014a088c725f056d5def6fb4a0da7767b5e2b1.svg',
    'icon-feature-5.svg': 'http://localhost:3845/assets/6235e667cd521e74248f8d8aee3f60dac4f639f7.svg',

    // Footer social icons
    'icon-linkedin.svg': 'http://localhost:3845/assets/383f22207a262b2bf4f7ded35f9dc6effafc2849.svg',
    'icon-youtube.svg': 'http://localhost:3845/assets/31bd9b684e468926610e219b126637942e215669.svg',
    'icon-arrow-up-right.svg': 'http://localhost:3845/assets/0671d21e09727110f843749fba5c38834f128642.svg',
};

async function download() {
    for (const [filename, url] of Object.entries(images)) {
        try {
            console.log(`Downloading ${filename}...`);
            const res = await fetch(url);
            if (!res.ok) throw new Error(`Status ${res.status}`);
            const buffer = await res.arrayBuffer();
            fs.writeFileSync(path.join('public', 'assets', filename), Buffer.from(buffer));
            console.log(`✓ Saved ${filename}`);
        } catch (e) {
            console.error(`✗ Error downloading ${filename}: ${e.message}`);
        }
    }
    console.log('\nDone!');
}

download();

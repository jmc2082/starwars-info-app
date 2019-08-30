// Characters
const characters = [
    {
      id: 0,
      name: 'Count Dooku',
      slug_name: 'count_dooku',
      description: `Count Dooku was a menacing Sith Lord and central figure in the Clone Wars. Once a Jedi -- trained by Yoda -- he became disillusioned with the Jedi Order and thirsted for greater power.`,
      img_url: 'https://res.cloudinary.com/dtazd4jh1/image/upload/c_fill,h_250,w_250/v1566433465/starwars_characters/dooku_kg9bww.jpg'
    },
    {
      id: 1,
      name: 'Rey',
      slug_name: 'rey',
      description: `Rey is a Jakku scavenger, a survivor toughened by life on a harsh desert planet. When the fugitive droid BB-8 appeals to her for help, Rey finds herself drawn into a galaxy-spanning conflict. Despite dismissing herself as 'no one,' she learns that her life is being shaped by the mysterious power of the Force.`,
      img_url: 'https://res.cloudinary.com/dtazd4jh1/image/upload/c_fill,h_250,w_250/v1566433465/starwars_characters/rey_o8gogx.jpg'
    },
    {
      id: 2,
      name: 'Yoda',
      slug_name: 'yoda',
      description: `Yoda was a legendary Jedi Master and stronger than most in his connection with the Force. Small in size but wise and powerful, he trained Jedi for over 800 years, playing integral roles in the Clone Wars, the instruction of Luke Skywalker, and unlocking the path to immortality.`,
      img_url: 'https://res.cloudinary.com/dtazd4jh1/image/upload/c_fill,h_250,w_250/v1566433465/starwars_characters/yoda_r2ndco.jpg'
    },
    {
      id: 3,
      name: `Padmé Amidala`,
      slug_name: 'padmé_zmidala',
      description: `Padmé Amidala was a courageous, hopeful leader, serving as Queen and then Senator of Naboo -- and was also handy with a blaster. Despite her ideals and all she did for the cause of peace, her secret, forbidden marriage to Jedi Anakin Skywalker would prove to have dire consequences for the galaxy.`,
      img_url: 'https://res.cloudinary.com/dtazd4jh1/image/upload/c_fill,h_250,w_250/v1566433465/starwars_characters/padme_vvzcqu.jpg'
    },
    {
      id: 4,
      name: 'Princess Leia',
      slug_name: 'princess_leia',
      description: `Princess Leia Organa was one of the Rebel Alliance's greatest leaders, fearless on the battlefield and dedicated to ending the tyranny of the Empire. Daughter of Padmé Amidala and Anakin Skywalker, sister of Luke Skywalker, and with a soft spot for scoundrels, Leia ranks among the galaxy's great heroes.`,
      img_url: 'https://res.cloudinary.com/dtazd4jh1/image/upload/c_fill,h_250,w_250/v1566433465/starwars_characters/leia_oceodh.jpg'
    },
    {
      id: 5,
      name: 'Jar Jar Binks',
      slug_name: 'jar_jar_binks',
      description: `A clumsy, well-meaning Gungan outcast on Naboo, Jar Jar Binks struggled to prove his worth throughout his life. Putting his awkward past behind him, Jar Jar left the swamps of Naboo to enter the even murkier waters of Coruscant politics, becoming a representative for his people in the galactic capital. `,
      img_url: 'https://res.cloudinary.com/dtazd4jh1/image/upload/c_fill,h_250,w_250/v1566433465/starwars_characters/Jar_Jar_dxkrhl.jpg'
    },
    {
      id: 6,
      name: 'Darth Maul',
      slug_name: 'darth_maul',
      description: `A deadly, agile Sith Lord trained by the evil Darth Sidious, Darth Maul was a formidable warrior and scheming mastermind. He wielded an intimidating double-bladed lightsaber and fought with a menacing ferocity.`,
      img_url: 'https://res.cloudinary.com/dtazd4jh1/image/upload/c_fill,h_250,w_250/v1566433465/starwars_characters/darth_maul_atqyfg.jpg'
    },
    {
      id: 7,
      name: 'Lando Calrissian',
      slug_name: 'lando_calrissian',
      description: `The stout and stern leader of the Gungans, Boss Nass was a proud keeper of his people's ways. His booming voice issued decrees on behalf of all the Gungans of Otoh Gunga. He kept a tight rein on Gungan affairs, continuing a longstanding custom of isolationism.`,
      img_url: 'https://res.cloudinary.com/dtazd4jh1/image/upload/c_fill,h_250,w_250/v1566433465/starwars_characters/lando_ngvb39.jpg'
    },
    {
      id: 8,
      name: 'Boss Nass',
      slug_name: 'boss_nass',
      description: `Once a smooth-talking smuggler, Lando Calrissian changed from a get-rich-quick schemer to a selfless leader in the fight against the Empire. From adventures with the Ghost crew of rebels to the attack on Death Star II, his quick wit and daring proved to be invaluable.`,
      img_url: 'https://res.cloudinary.com/dtazd4jh1/image/upload/c_fill,h_250,w_250/v1566433465/starwars_characters/BossNass_dxhffy.jpg'
    },
    {
      id: 9,
      name: 'Obi-Wan Kenobi',
      slug_name: 'obi-wan_kenobi',
      description: `A legendary Jedi Master, Obi-Wan Kenobi was a noble man and gifted in the ways of the Force. He trained Anakin Skywalker, served as a general in the Republic Army during the Clone Wars, and guided Luke Skywalker as a mentor.`,
      img_url: 'https://res.cloudinary.com/dtazd4jh1/image/upload/c_fill,h_250,w_250/v1566433465/starwars_characters/obi-wan-kenobi_qdszrj.jpg'
    },
    {
      id: 10,
      name: 'Finn',
      slug_name: 'finn',
      description: `FN-2187 was trained since birth to serve the First Order as a stormtrooper, but a skirmish on Jakku awakened his conscience and drove him down a different path, one that proved both heroic and dangerous.`,
      img_url: 'https://res.cloudinary.com/dtazd4jh1/image/upload/c_fill,h_250,w_250/v1566433465/starwars_characters/fin_uznqd9.jpg'
    },
    {
      id: 11,
      name: 'Darth Vader',
      slug_name: 'darth_vader',
      description: `Discovered as a slave on Tatooine by Qui-Gon Jinn and Obi-Wan Kenobi, Anakin Skywalker had the potential to become one of the most powerful Jedi ever, and was believed by some to be the prophesied Chosen One who would bring balance to the Force.`,
      img_url: 'https://res.cloudinary.com/dtazd4jh1/image/upload/c_fill,h_250,w_250/v1566433465/starwars_characters/darth-vader_o8grou.jpg'
    },
    {
      id: 12,
      name: 'Kylo Ren',
      slug_name: 'kylo_ren',
      description: `A dark warrior strong with the Force, Kylo Ren commands First Order missions with a temper as fiery as his unconventional lightsaber. As a leader of the First Order and a student of Supreme Leader Snoke, he seeks to destroy the New Republic, the Resistance and the legacy of the Jedi.`,
      img_url: 'https://res.cloudinary.com/dtazd4jh1/image/upload/c_fill,h_250,w_250/v1566433465/starwars_characters/chump_lol_nyi0xm.jpg'
    }
];

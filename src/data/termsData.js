export const termsData = {
  // CHEMISTRY FOUNDATIONS
  atom: {
    id: 'atom',
    name: 'Atom',
    category: 'chemistry',
    shortDef: 'Made of protons, neutrons, electrons',
    definition: 'The basic unit of matter, consisting of a nucleus (protons and neutrons) surrounded by electrons.',
    detailedExplanation: 'Atoms are the fundamental building blocks of all matter. The nucleus contains positively charged protons and neutral neutrons, while negatively charged electrons orbit around the nucleus in energy levels. The number of protons determines what element the atom is.',
    example: 'A carbon atom has 6 protons, 6 neutrons, and 6 electrons. All organic compounds are built from carbon atoms.',
    relatedTerms: ['proton', 'neutron', 'electron', 'organicCompound'],
    position: { x: 15, y: 15 }
  },
  proton: {
    id: 'proton',
    name: 'Proton',
    category: 'chemistry',
    shortDef: 'Positively charged particle in nucleus',
    definition: 'A subatomic particle with a positive electrical charge found in the nucleus of an atom.',
    detailedExplanation: 'Protons have a charge of +1 and determine the atomic number of an element. The number of protons defines what element an atom is and cannot change without changing the element itself.',
    example: 'Hydrogen has 1 proton, Carbon has 6 protons, Oxygen has 8 protons.',
    relatedTerms: ['atom', 'neutron', 'electron'],
    position: { x: 10, y: 20 }
  },
  neutron: {
    id: 'neutron',
    name: 'Neutron',
    category: 'chemistry',
    shortDef: 'Neutral particle in nucleus',
    definition: 'A subatomic particle with no electrical charge found in the nucleus of an atom.',
    detailedExplanation: 'Neutrons have no charge (neutral) and add mass to the atom. Different numbers of neutrons create isotopes of the same element.',
    example: 'Carbon-12 has 6 neutrons, while Carbon-14 has 8 neutrons - both are carbon isotopes.',
    relatedTerms: ['atom', 'proton', 'electron'],
    position: { x: 20, y: 20 }
  },
  electron: {
    id: 'electron',
    name: 'Electron',
    category: 'chemistry',
    shortDef: 'Negatively charged particle orbiting nucleus',
    definition: 'A subatomic particle with a negative electrical charge that orbits the nucleus of an atom.',
    detailedExplanation: 'Electrons have a charge of -1 and are involved in chemical bonding. They exist in energy levels (shells) around the nucleus and can be shared or transferred between atoms to form molecules.',
    example: 'When atoms share electrons, they form covalent bonds - like in water (H₂O).',
    relatedTerms: ['atom', 'proton', 'neutron'],
    position: { x: 15, y: 25 }
  },
  organicCompound: {
    id: 'organicCompound',
    name: 'Organic Compound',
    category: 'chemistry',
    shortDef: 'Carbon-based molecule (life\'s building blocks)',
    definition: 'A molecule containing carbon atoms bonded to hydrogen and often other elements.',
    detailedExplanation: 'Organic compounds are the foundation of all living things. Carbon can form four bonds, allowing it to create complex, diverse molecules including all macromolecules.',
    example: 'Glucose (C₆H₁₂O₆), proteins, DNA, and fats are all organic compounds.',
    relatedTerms: ['atom', 'macromolecule', 'carbohydrates', 'proteins', 'lipids', 'nucleicAcids'],
    position: { x: 25, y: 15 }
  },
  acidBase: {
    id: 'acidBase',
    name: 'Acid/Base',
    category: 'chemistry',
    shortDef: 'Affect pH; influence enzyme activity',
    definition: 'Acids release H⁺ ions (pH < 7), bases accept H⁺ ions (pH > 7).',
    detailedExplanation: 'The pH scale measures how acidic or basic a solution is. pH affects enzyme shape and function - most enzymes work best at specific pH levels. Changes in pH can denature proteins.',
    example: 'Stomach acid (pH ~2) helps digest food, while blood maintains pH ~7.4 for optimal enzyme function.',
    relatedTerms: ['enzyme', 'proteins'],
    position: { x: 5, y: 10 }
  },
  conservationOfMatter: {
    id: 'conservationOfMatter',
    name: 'Law of Conservation of Matter',
    category: 'chemistry',
    shortDef: 'Matter can\'t be created or destroyed',
    definition: 'In chemical reactions, matter is rearranged but the total amount remains constant.',
    detailedExplanation: 'Atoms are not created or destroyed in chemical reactions - they are simply rearranged into new molecules. This means chemical equations must be balanced.',
    example: 'In cellular respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O - all atoms are accounted for on both sides.',
    relatedTerms: ['dehydrationSynthesis', 'hydrolysis'],
    position: { x: 30, y: 10 }
  },

  // MACROMOLECULES
  macromolecule: {
    id: 'macromolecule',
    name: 'Macromolecule',
    category: 'macromolecules',
    shortDef: 'Large molecule made of smaller units',
    definition: 'A very large molecule formed by joining smaller molecular units (monomers).',
    detailedExplanation: 'The four main types of biological macromolecules are carbohydrates, lipids, proteins, and nucleic acids. They are essential for life and perform diverse functions.',
    example: 'Starch is a macromolecule made of glucose monomers; DNA is a macromolecule made of nucleotides.',
    relatedTerms: ['monomerPolymer', 'carbohydrates', 'proteins', 'lipids', 'nucleicAcids'],
    position: { x: 12, y: 40 }
  },
  monomerPolymer: {
    id: 'monomerPolymer',
    name: 'Monomer vs Polymer',
    category: 'macromolecules',
    shortDef: 'Small building blocks vs large molecules',
    definition: 'Monomers are small molecular units; polymers are large molecules made of many monomers.',
    detailedExplanation: 'Monomers link together through dehydration synthesis to form polymers. Polymers can be broken down into monomers through hydrolysis.',
    example: 'Glucose (monomer) → Starch (polymer); Amino acid (monomer) → Protein (polymer).',
    relatedTerms: ['macromolecule', 'dehydrationSynthesis', 'hydrolysis'],
    position: { x: 5, y: 45 }
  },
  dehydrationSynthesis: {
    id: 'dehydrationSynthesis',
    name: 'Dehydration Synthesis',
    category: 'macromolecules',
    shortDef: 'Builds polymers by removing water',
    definition: 'A chemical reaction that joins monomers by removing a water molecule.',
    detailedExplanation: 'During dehydration synthesis, a hydrogen (H) from one monomer and a hydroxyl group (OH) from another combine to form water (H₂O), allowing the monomers to bond together.',
    example: 'Two glucose molecules join to form maltose, releasing one water molecule.',
    relatedTerms: ['monomerPolymer', 'hydrolysis', 'enzyme', 'macromolecule'],
    position: { x: 20, y: 50 }
  },
  hydrolysis: {
    id: 'hydrolysis',
    name: 'Hydrolysis',
    category: 'macromolecules',
    shortDef: 'Breaks polymers by adding water',
    definition: 'A chemical reaction that breaks apart polymers by adding a water molecule.',
    detailedExplanation: 'During hydrolysis, water is split into H and OH, which attach to the broken bonds of the polymer, separating it into monomers. This is how food is digested.',
    example: 'Starch is broken down into glucose molecules through hydrolysis during digestion.',
    relatedTerms: ['monomerPolymer', 'dehydrationSynthesis', 'enzyme', 'macromolecule'],
    position: { x: 25, y: 50 }
  },
  carbohydrates: {
    id: 'carbohydrates',
    name: 'Carbohydrates',
    category: 'macromolecules',
    shortDef: 'Quick energy; made of monosaccharides',
    definition: 'Organic compounds made of carbon, hydrogen, and oxygen; primary energy source for cells.',
    detailedExplanation: 'Carbohydrates include sugars and starches. They provide quick energy because they are easily broken down into glucose, which cells use in cellular respiration.',
    example: 'Bread, pasta, and fruit contain carbohydrates. Glucose is used in cellular respiration to make ATP.',
    relatedTerms: ['monosaccharides', 'macromolecule', 'organicCompound'],
    position: { x: 8, y: 55 }
  },
  monosaccharides: {
    id: 'monosaccharides',
    name: 'Monosaccharides',
    category: 'macromolecules',
    shortDef: 'Simple sugars (glucose, fructose)',
    definition: 'The simplest form of carbohydrates; single sugar molecules.',
    detailedExplanation: 'Monosaccharides are the monomers of carbohydrates. They have the general formula (CH₂O)n and can link together to form disaccharides and polysaccharides.',
    example: 'Glucose (blood sugar), fructose (fruit sugar), and galactose (in milk) are monosaccharides.',
    relatedTerms: ['carbohydrates', 'monomerPolymer'],
    position: { x: 8, y: 60 }
  },
  proteins: {
    id: 'proteins',
    name: 'Proteins',
    category: 'macromolecules',
    shortDef: 'Chains of amino acids; shape determines function',
    definition: 'Large, complex molecules made of amino acid chains; perform most cell functions.',
    detailedExplanation: 'Proteins have diverse roles: enzymes, structure, transport, defense, and signaling. Their 3D shape determines their function. Temperature and pH changes can denature (unfold) proteins, destroying their function.',
    example: 'Enzymes (like amylase), antibodies, hemoglobin, and muscle fibers are all proteins.',
    relatedTerms: ['aminoAcids', 'rGroup', 'enzyme', 'macromolecule'],
    position: { x: 15, y: 55 }
  },
  aminoAcids: {
    id: 'aminoAcids',
    name: 'Amino Acids',
    category: 'macromolecules',
    shortDef: 'Building blocks of proteins',
    definition: 'Organic molecules that serve as the monomers of proteins.',
    detailedExplanation: 'There are 20 different amino acids. Each has an amino group, carboxyl group, hydrogen, and a unique R-group attached to a central carbon. They link via peptide bonds.',
    example: 'Glycine, alanine, and tryptophan are amino acids. Different sequences create different proteins.',
    relatedTerms: ['proteins', 'rGroup', 'monomerPolymer'],
    position: { x: 15, y: 60 }
  },
  rGroup: {
    id: 'rGroup',
    name: 'R-group',
    category: 'macromolecules',
    shortDef: 'Side chain that makes each amino acid unique',
    definition: 'The variable side chain of an amino acid that gives it unique properties.',
    detailedExplanation: 'The R-group (or side chain) determines an amino acid\'s chemical properties - whether it\'s hydrophobic, hydrophilic, acidic, or basic. This affects how proteins fold.',
    example: 'Some R-groups are hydrophobic (like in leucine), others are hydrophilic (like in serine).',
    relatedTerms: ['aminoAcids', 'proteins', 'hydrophobic', 'hydrophilic'],
    position: { x: 20, y: 60 }
  },
  lipids: {
    id: 'lipids',
    name: 'Lipids',
    category: 'macromolecules',
    shortDef: 'Hydrophobic energy storage; form membranes',
    definition: 'Hydrophobic (water-fearing) organic molecules including fats, oils, and phospholipids.',
    detailedExplanation: 'Lipids store long-term energy, insulate the body, and form cell membranes. Unlike other macromolecules, they are not true polymers.',
    example: 'Butter and olive oil are fats; phospholipids make up cell membranes.',
    relatedTerms: ['phospholipids', 'hydrophobic', 'macromolecule', 'cellMembrane'],
    position: { x: 25, y: 55 }
  },
  nucleicAcids: {
    id: 'nucleicAcids',
    name: 'Nucleic Acids',
    category: 'macromolecules',
    shortDef: 'DNA/RNA; built from nucleotides',
    definition: 'Macromolecules that store and transmit genetic information.',
    detailedExplanation: 'DNA (deoxyribonucleic acid) stores genetic instructions. RNA (ribonucleic acid) helps make proteins. Both are polymers of nucleotides.',
    example: 'Your DNA contains all the instructions to make you. mRNA carries genetic information from DNA to ribosomes.',
    relatedTerms: ['macromolecule', 'organicCompound'],
    position: { x: 30, y: 55 }
  },
  enzyme: {
    id: 'enzyme',
    name: 'Enzyme',
    category: 'macromolecules',
    shortDef: 'Protein that speeds reactions',
    definition: 'A biological catalyst (usually a protein) that speeds up chemical reactions.',
    detailedExplanation: 'Enzymes lower activation energy, allowing reactions to occur faster at body temperature. They are specific to substrates (lock-and-key model) and are reusable. pH and temperature changes can denature enzymes.',
    example: 'Amylase breaks down starch in your mouth; catalase breaks down hydrogen peroxide in cells.',
    relatedTerms: ['proteins', 'dehydrationSynthesis', 'hydrolysis', 'acidBase'],
    position: { x: 22, y: 45 }
  },

  // CELL STRUCTURES
  cellMembrane: {
    id: 'cellMembrane',
    name: 'Cell Membrane',
    category: 'cellStructures',
    shortDef: 'Phospholipid bilayer with proteins',
    definition: 'The semi-permeable barrier that surrounds all cells and controls what enters and exits.',
    detailedExplanation: 'The cell membrane is made of a phospholipid bilayer with embedded proteins. It maintains homeostasis by regulating transport. It\'s selectively permeable - some things pass freely, others need help.',
    example: 'The cell membrane lets oxygen in and waste out, while keeping important molecules inside the cell.',
    relatedTerms: ['phospholipids', 'hydrophobic', 'hydrophilic', 'passiveTransport', 'activeTransport', 'homeostasis'],
    position: { x: 50, y: 40 }
  },
  phospholipids: {
    id: 'phospholipids',
    name: 'Phospholipids',
    category: 'cellStructures',
    shortDef: 'Have hydrophobic tails + hydrophilic heads',
    definition: 'Lipid molecules with a hydrophilic phosphate head and two hydrophobic fatty acid tails.',
    detailedExplanation: 'Phospholipids arrange in a bilayer with heads facing water (inside and outside cell) and tails facing each other. This creates a barrier that water and charged molecules cannot easily cross.',
    example: 'In the cell membrane, phospholipid bilayer keeps the cell\'s contents separate from its environment.',
    relatedTerms: ['cellMembrane', 'lipids', 'hydrophobic', 'hydrophilic'],
    position: { x: 50, y: 50 }
  },
  hydrophobic: {
    id: 'hydrophobic',
    name: 'Hydrophobic',
    category: 'cellStructures',
    shortDef: 'Water-fearing; repels water',
    definition: 'A property of molecules that do not interact with or dissolve in water.',
    detailedExplanation: 'Hydrophobic molecules are nonpolar and do not form hydrogen bonds with water. The fatty acid tails of phospholipids are hydrophobic, creating a barrier in membranes.',
    example: 'Oil is hydrophobic - it doesn\'t mix with water. The inside of the cell membrane is hydrophobic.',
    relatedTerms: ['hydrophilic', 'phospholipids', 'lipids'],
    position: { x: 55, y: 50 }
  },
  hydrophilic: {
    id: 'hydrophilic',
    name: 'Hydrophilic',
    category: 'cellStructures',
    shortDef: 'Water-loving; attracts water',
    definition: 'A property of molecules that interact with and dissolve in water.',
    detailedExplanation: 'Hydrophilic molecules are polar or charged and can form hydrogen bonds with water. The phosphate heads of phospholipids are hydrophilic, facing the watery environments.',
    example: 'Sugar is hydrophilic - it dissolves in water. The outer surfaces of the cell membrane are hydrophilic.',
    relatedTerms: ['hydrophobic', 'phospholipids'],
    position: { x: 45, y: 50 }
  },
  organelle: {
    id: 'organelle',
    name: 'Organelle',
    category: 'cellStructures',
    shortDef: 'Specialized structure inside a cell',
    definition: 'A specialized subunit within a cell that has a specific function.',
    detailedExplanation: 'Organelles are like tiny organs within cells. Examples include mitochondria (energy), nucleus (genetic control), ribosomes (protein synthesis), and more.',
    example: 'Mitochondria produce ATP; chloroplasts (in plants) perform photosynthesis; the nucleus contains DNA.',
    relatedTerms: ['cellMembrane'],
    position: { x: 50, y: 30 }
  },

  // TRANSPORT & SOLUTIONS
  passiveTransport: {
    id: 'passiveTransport',
    name: 'Passive Transport',
    category: 'transport',
    shortDef: 'No energy; includes diffusion & osmosis',
    definition: 'Movement of substances across membranes without energy input (no ATP required).',
    detailedExplanation: 'Passive transport moves substances from high to low concentration (down the concentration gradient). It includes simple diffusion, facilitated diffusion, and osmosis.',
    example: 'Oxygen diffuses into cells; carbon dioxide diffuses out - both passive.',
    relatedTerms: ['diffusion', 'osmosis', 'facilitatedDiffusion', 'activeTransport', 'cellMembrane'],
    position: { x: 70, y: 35 }
  },
  activeTransport: {
    id: 'activeTransport',
    name: 'Active Transport',
    category: 'transport',
    shortDef: 'Requires energy (ATP)',
    definition: 'Movement of substances across membranes using energy (ATP).',
    detailedExplanation: 'Active transport moves substances against their concentration gradient (from low to high concentration). It requires protein pumps and ATP. Includes endocytosis and exocytosis for large molecules.',
    example: 'Sodium-potassium pump maintains ion balance; neurons use this to send signals.',
    relatedTerms: ['passiveTransport', 'endocytosis', 'exocytosis', 'cellMembrane'],
    position: { x: 70, y: 45 }
  },
  diffusion: {
    id: 'diffusion',
    name: 'Diffusion',
    category: 'transport',
    shortDef: 'Molecules spread high → low concentration',
    definition: 'The movement of molecules from an area of high concentration to low concentration.',
    detailedExplanation: 'Diffusion continues until equilibrium is reached (equal concentration everywhere). It\'s a form of passive transport that doesn\'t require energy - molecules move due to random motion.',
    example: 'Perfume spreading through a room; oxygen entering cells from the bloodstream.',
    relatedTerms: ['passiveTransport', 'osmosis', 'homeostasis'],
    position: { x: 75, y: 30 }
  },
  osmosis: {
    id: 'osmosis',
    name: 'Osmosis',
    category: 'transport',
    shortDef: 'Water movement across membranes',
    definition: 'The diffusion of water across a selectively permeable membrane.',
    detailedExplanation: 'Water moves from areas of high water concentration (low solute) to low water concentration (high solute). It\'s passive transport specific to water.',
    example: 'If you put a cell in pure water, water enters the cell by osmosis, potentially causing it to burst.',
    relatedTerms: ['diffusion', 'passiveTransport', 'hypertonic', 'hypotonic', 'isotonic', 'homeostasis'],
    position: { x: 80, y: 30 }
  },
  facilitatedDiffusion: {
    id: 'facilitatedDiffusion',
    name: 'Facilitated Diffusion',
    category: 'transport',
    shortDef: 'Uses channel/carrier proteins',
    definition: 'Passive transport that uses protein channels or carriers to move substances across membranes.',
    detailedExplanation: 'Some molecules (like glucose) are too large or charged to cross the membrane directly. They use specific protein channels. Still passive - no energy needed, moves high to low concentration.',
    example: 'Glucose enters cells through glucose transporter proteins via facilitated diffusion.',
    relatedTerms: ['passiveTransport', 'diffusion', 'cellMembrane'],
    position: { x: 75, y: 40 }
  },
  endocytosis: {
    id: 'endocytosis',
    name: 'Endocytosis',
    category: 'transport',
    shortDef: 'Bulk transport INTO cell',
    definition: 'Process of taking large materials into the cell by engulfing them in a vesicle.',
    detailedExplanation: 'The cell membrane folds inward around materials, forming a vesicle that pinches off into the cell. Requires ATP (active transport). Used for large molecules or particles.',
    example: 'White blood cells use endocytosis to engulf bacteria; cells take in cholesterol this way.',
    relatedTerms: ['activeTransport', 'exocytosis', 'cellMembrane'],
    position: { x: 65, y: 50 }
  },
  exocytosis: {
    id: 'exocytosis',
    name: 'Exocytosis',
    category: 'transport',
    shortDef: 'Bulk transport OUT OF cell',
    definition: 'Process of expelling large materials from the cell by fusing vesicles with the membrane.',
    detailedExplanation: 'Vesicles inside the cell fuse with the cell membrane and release their contents outside. Requires ATP (active transport). Used to remove waste or secrete substances.',
    example: 'Neurons release neurotransmitters via exocytosis; pancreas cells secrete insulin this way.',
    relatedTerms: ['activeTransport', 'endocytosis', 'cellMembrane'],
    position: { x: 70, y: 50 }
  },
  hypertonic: {
    id: 'hypertonic',
    name: 'Hypertonic',
    category: 'transport',
    shortDef: 'High solute; water leaves cell (shrinks)',
    definition: 'A solution with a higher solute concentration than inside the cell.',
    detailedExplanation: 'In a hypertonic solution, water moves OUT of the cell by osmosis (toward higher solute concentration). The cell shrinks/shrivels.',
    example: 'Placing a cell in salt water - the cell loses water and shrivels.',
    relatedTerms: ['hypotonic', 'isotonic', 'osmosis', 'homeostasis'],
    position: { x: 85, y: 40 }
  },
  hypotonic: {
    id: 'hypotonic',
    name: 'Hypotonic',
    category: 'transport',
    shortDef: 'Low solute; water enters cell (swells)',
    definition: 'A solution with a lower solute concentration than inside the cell.',
    detailedExplanation: 'In a hypotonic solution, water moves INTO the cell by osmosis (toward higher solute concentration). The cell swells and may burst.',
    example: 'Placing a cell in distilled water - the cell gains water and may burst (lyse).',
    relatedTerms: ['hypertonic', 'isotonic', 'osmosis', 'homeostasis'],
    position: { x: 85, y: 35 }
  },
  isotonic: {
    id: 'isotonic',
    name: 'Isotonic',
    category: 'transport',
    shortDef: 'Equal solute; no net water movement',
    definition: 'A solution with the same solute concentration as inside the cell.',
    detailedExplanation: 'In an isotonic solution, water moves equally in and out of the cell - no net change. The cell maintains its normal shape.',
    example: 'Your blood cells are in an isotonic solution (blood plasma). IV fluids are isotonic to prevent cell damage.',
    relatedTerms: ['hypertonic', 'hypotonic', 'osmosis', 'homeostasis'],
    position: { x: 85, y: 45 }
  },
  homeostasis: {
    id: 'homeostasis',
    name: 'Homeostasis',
    category: 'transport',
    shortDef: 'Maintaining internal balance',
    definition: 'The maintenance of stable internal conditions despite changes in the external environment.',
    detailedExplanation: 'Cells and organisms constantly regulate temperature, pH, water balance, and nutrient levels. The cell membrane plays a key role through selective transport.',
    example: 'Your body maintains 98.6°F, blood pH of 7.4, and balanced water/salt levels.',
    relatedTerms: ['cellMembrane', 'osmosis', 'isotonic', 'hypertonic', 'hypotonic'],
    position: { x: 80, y: 50 }
  }
};

// Category metadata
export const categories = {
  chemistry: {
    id: 'chemistry',
    name: 'Chemistry Foundations',
    color: '#6366f1', // Indigo
    description: 'Basic building blocks of matter and chemical principles'
  },
  macromolecules: {
    id: 'macromolecules',
    name: 'Macromolecules',
    color: '#8b5cf6', // Purple
    description: 'Large biological molecules essential for life'
  },
  cellStructures: {
    id: 'cellStructures',
    name: 'Cell Structures',
    color: '#ec4899', // Pink
    description: 'Components that make up cells'
  },
  transport: {
    id: 'transport',
    name: 'Transport & Solutions',
    color: '#06b6d4', // Cyan
    description: 'How substances move in and out of cells'
  }
};

// Get terms by category
export const getTermsByCategory = (categoryId) => {
  return Object.values(termsData).filter(term => term.category === categoryId);
};

import AtomDiagram from './AtomDiagram';
import PhospholipidBilayer from './PhospholipidBilayer';
import EnzymeDiagram from './EnzymeDiagram';
import DehydrationSynthesis from './DehydrationSynthesis';
import HydrolysisDiagram from './HydrolysisDiagram';
import OsmosisDiagram from './OsmosisDiagram';
import DiffusionDiagram from './DiffusionDiagram';
import TransportDiagram from './TransportDiagram';
import TonicityDiagram from './TonicityDiagram';
import ProteinDiagram from './ProteinDiagram';
import CarbohydrateDiagram from './CarbohydrateDiagram';
import DNADiagram from './DNADiagram';
import LipidDiagram from './LipidDiagram';
import EndoExoDiagram from './EndoExoDiagram';

function DiagramSelector({ termId, size = 'small', animate = false }) {
  const diagramMap = {
    // Chemistry
    atom: AtomDiagram,
    proton: AtomDiagram,
    neutron: AtomDiagram,
    electron: AtomDiagram,
    organicCompound: CarbohydrateDiagram,
    acidBase: DNADiagram,
    conservationOfMatter: DehydrationSynthesis,
    
    // Macromolecules
    macromolecule: ProteinDiagram,
    monomerPolymer: DehydrationSynthesis,
    dehydrationSynthesis: DehydrationSynthesis,
    hydrolysis: HydrolysisDiagram,
    carbohydrates: CarbohydrateDiagram,
    monosaccharides: CarbohydrateDiagram,
    proteins: ProteinDiagram,
    aminoAcids: ProteinDiagram,
    rGroup: ProteinDiagram,
    lipids: LipidDiagram,
    nucleicAcids: DNADiagram,
    enzyme: EnzymeDiagram,
    
    // Cell Structures
    cellMembrane: PhospholipidBilayer,
    phospholipids: PhospholipidBilayer,
    hydrophobic: PhospholipidBilayer,
    hydrophilic: PhospholipidBilayer,
    organelle: PhospholipidBilayer,
    
    // Transport
    passiveTransport: TransportDiagram,
    activeTransport: TransportDiagram,
    diffusion: DiffusionDiagram,
    osmosis: OsmosisDiagram,
    facilitatedDiffusion: TransportDiagram,
    endocytosis: EndoExoDiagram,
    exocytosis: EndoExoDiagram,
    hypertonic: TonicityDiagram,
    hypotonic: TonicityDiagram,
    isotonic: TonicityDiagram,
    homeostasis: OsmosisDiagram,
  };

  const DiagramComponent = diagramMap[termId] || AtomDiagram;

  return <DiagramComponent size={size} animate={animate} termId={termId} />;
}

export default DiagramSelector;

import { useState } from 'react';
import FlowchartMap from './components/FlowchartMap';
import DetailPanel from './components/DetailPanel';
import './styles/index.css';

function App() {
  const [selectedTerm, setSelectedTerm] = useState(null);

  const handleTermClick = (termId) => {
    setSelectedTerm(termId);
  };

  const handleCloseDetail = () => {
    setSelectedTerm(null);
  };

  return (
    <div className="app">
      <FlowchartMap onTermClick={handleTermClick} selectedTerm={selectedTerm} />
      <DetailPanel 
        termId={selectedTerm} 
        onClose={handleCloseDetail}
        onTermClick={handleTermClick}
      />
    </div>
  );
}

export default App;

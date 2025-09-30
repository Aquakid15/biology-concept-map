import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import CategoryPanel from './CategoryPanel';
import { categories } from '../data/termsData';
import './MainMap.css';

function MainMap({ onTermClick, selectedTerm }) {
  const [hubMinimized, setHubMinimized] = useState(false);
  const [instructionsMinimized, setInstructionsMinimized] = useState(false);

  return (
    <div className="main-map">
      {/* Header */}
      <motion.header 
        className="map-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Biology Concept Map</h1>
        <p className="subtitle">Interactive Study Guide: Life at the Molecular & Cellular Level</p>
      </motion.header>

      {/* Main content area */}
      <div className="map-content">
        <div className="categories-grid">
          {Object.values(categories).map((category, index) => (
            <CategoryPanel
              key={category.id}
              category={category}
              onTermClick={onTermClick}
              selectedTerm={selectedTerm}
              index={index}
            />
          ))}
        </div>

        {/* Central connecting visual */}
        <motion.div 
          className={`central-hub glass ${hubMinimized ? 'minimized' : ''}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            width: hubMinimized ? 60 : 280,
            height: hubMinimized ? 60 : 'auto'
          }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <button 
            className="minimize-button"
            onClick={() => setHubMinimized(!hubMinimized)}
            title={hubMinimized ? "Expand" : "Minimize"}
          >
            {hubMinimized ? '📖' : '−'}
          </button>
          
          <AnimatePresence>
            {!hubMinimized && (
              <motion.div 
                className="hub-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="hub-icon">🧬</div>
                <h3>The Cell</h3>
                <p>All concepts connect to support cellular life</p>
              </motion.div>
            )}
          </AnimatePresence>
          
          {hubMinimized && (
            <motion.div 
              className="hub-icon-mini"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              🧬
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Instructions */}
      <motion.div 
        className={`instructions glass ${instructionsMinimized ? 'minimized' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          width: instructionsMinimized ? 50 : 'auto',
          height: instructionsMinimized ? 50 : 'auto'
        }}
        transition={{ delay: 1, duration: 0.4 }}
      >
        <button 
          className="minimize-button"
          onClick={() => setInstructionsMinimized(!instructionsMinimized)}
          title={instructionsMinimized ? "Show help" : "Hide help"}
        >
          {instructionsMinimized ? '💡' : '−'}
        </button>
        
        <AnimatePresence>
          {!instructionsMinimized && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              💡 <strong>Hover</strong> over terms • <strong>Click</strong> to explore
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default MainMap;

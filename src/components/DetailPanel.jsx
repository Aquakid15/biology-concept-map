import { motion, AnimatePresence } from 'framer-motion';
import { termsData } from '../data/termsData';
import DiagramSelector from './diagrams/DiagramSelector';
import './DetailPanel.css';

function DetailPanel({ termId, onClose, onTermClick }) {
  const term = termId ? termsData[termId] : null;

  if (!term) return null;

  const panelVariants = {
    hidden: { 
      x: '100%',
      opacity: 0 
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 200
      }
    },
    exit: { 
      x: '100%',
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <AnimatePresence>
      {term && (
        <>
          {/* Backdrop */}
          <motion.div 
            className="detail-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Detail Panel */}
          <motion.div
            className="detail-panel glass-strong"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close button */}
            <button className="close-button" onClick={onClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="detail-content">
              {/* Main diagram */}
              <motion.div 
                className="detail-diagram"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <DiagramSelector 
                  termId={term.id} 
                  size="large" 
                  animate={true}
                />
              </motion.div>

              {/* Term name */}
              <motion.h2 
                className="detail-title"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {term.name}
              </motion.h2>

              {/* Definition */}
              <motion.div 
                className="detail-section"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <h3>Definition</h3>
                <p>{term.definition}</p>
              </motion.div>

              {/* Detailed explanation */}
              <motion.div 
                className="detail-section"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h3>How it Works</h3>
                <p>{term.detailedExplanation}</p>
              </motion.div>

              {/* Example */}
              <motion.div 
                className="detail-section example-section"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45 }}
              >
                <h3>Real Example</h3>
                <p>💡 {term.example}</p>
              </motion.div>

              {/* Related terms */}
              {term.relatedTerms && term.relatedTerms.length > 0 && (
                <motion.div 
                  className="detail-section"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3>Related Concepts</h3>
                  <div className="related-terms">
                    {term.relatedTerms.map((relatedId, index) => {
                      const relatedTerm = termsData[relatedId];
                      if (!relatedTerm) return null;
                      return (
                        <motion.button
                          key={relatedId}
                          className="related-term-chip glass"
                          onClick={() => onTermClick(relatedId)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.5 + (index * 0.05) }}
                        >
                          {relatedTerm.name}
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default DetailPanel;

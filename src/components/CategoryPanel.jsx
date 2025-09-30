import { motion } from 'framer-motion';
import TermNode from './TermNode';
import { getTermsByCategory } from '../data/termsData';
import './CategoryPanel.css';

function CategoryPanel({ category, onTermClick, selectedTerm, index }) {
  const terms = getTermsByCategory(category.id);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        when: "beforeChildren",
        staggerChildren: 0.08
      }
    }
  };

  return (
    <motion.div 
      className="category-panel glass"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ '--category-color': category.color }}
    >
      <div className="category-header">
        <div className="category-color-bar" style={{ background: category.color }}></div>
        <h2>{category.name}</h2>
        <p className="category-description">{category.description}</p>
      </div>

      <div className="terms-container">
        {terms.map((term) => (
          <TermNode
            key={term.id}
            term={term}
            categoryColor={category.color}
            onClick={() => onTermClick(term.id)}
            isSelected={selectedTerm === term.id}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default CategoryPanel;

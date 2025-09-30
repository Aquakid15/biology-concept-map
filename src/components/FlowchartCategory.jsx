import { motion } from 'framer-motion';
import FlowchartTerm from './FlowchartTerm';
import './FlowchartCategory.css';

function FlowchartCategory({ category, terms, onTermClick, selectedTerm, onHover }) {
  return (
    <motion.div 
      className="flowchart-category glass"
      style={{ '--category-color': category.color }}
      onMouseEnter={() => onHover(category.id)}
      onMouseLeave={() => onHover(null)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Category Header */}
      <div className="category-header">
        <div className="category-color-bar" style={{ background: category.color }}></div>
        <h2>{category.name}</h2>
        <p className="category-desc">{category.description}</p>
      </div>

      {/* Terms Grid */}
      <div className="category-terms">
        {terms.map((term, index) => (
          <FlowchartTerm
            key={term.id}
            term={term}
            categoryColor={category.color}
            isSelected={selectedTerm === term.id}
            onClick={() => onTermClick(term.id)}
            delay={index * 0.05}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default FlowchartCategory;

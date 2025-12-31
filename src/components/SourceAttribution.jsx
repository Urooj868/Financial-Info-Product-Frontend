import "./SourceAttribution.css";

const SourceAttribution = ({ sources }) => {
  console.log(sources, "sources");
  return (
    <div className="source-attribution">
      <p className="sources-label">📚 Sources:</p>
      <div className="sources-list">
        {sources?.map((source, index) => (
          <div key={index} className="source-item">
            <span className="source-icon">📄</span>
            <span className="source-text">{source?.id}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SourceAttribution;

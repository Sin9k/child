import './ChildComponent.css';

export const ChildComponent = () => {
  return (
    <div className="child-container">
      <div className="child-badge">CHILD</div>
      <div className="child-content">
        <span className="child-label">Remote Component from child app</span>
        <button>Click me!</button>
      </div>
    </div>
  );
};

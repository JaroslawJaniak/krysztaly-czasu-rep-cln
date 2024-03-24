const WindowInnerSize = () => {
  return (
    <div className="window__InnerSize">
      <span id="window__InnerWidth" className="window__InnerWidth">
        {window.innerWidth}
      </span>
      <span> x </span>
      <span id="window__InnerHeight" className="window__InnerHeight">
        {window.innerHeight}
      </span>
    </div>
  );
};

export default WindowInnerSize;

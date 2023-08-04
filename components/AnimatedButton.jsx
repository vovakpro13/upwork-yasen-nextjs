const AnimatedButton = ({ type, children, classname }) => {
  const animateLink = (e) => {
    const link = e.currentTarget;
    const { offsetX: x, offsetY: y } = e.nativeEvent;
    const { offsetWidth: width, offsetHeight: height } = e.currentTarget;

    const intensity = 20;
    const xMove = (x / width) * (intensity * 2) - intensity;
    const yMove = (y / height) * (intensity * 2) - intensity;
    link.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === "mouseleave") {
      link.style.transform = "";
    }
  };

  return (
    <button
    type={type}
      className={classname}
      onMouseMove={animateLink}
      onMouseLeave={animateLink}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;

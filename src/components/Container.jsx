function Container({ id, children, className = "" }) {
  return (
    <section id={id} className={`section-pad relative mx-auto w-full max-w-7xl ${className}`}>
      {children}
    </section>
  );
}

export default Container;

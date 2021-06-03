function PageContainer({ className, children }) {
  return (
    <section
      className={`row page-section overflow-hidden w-100 m-0 py-5 ${
        className ?? ""
      }`}
    >
      {children}
    </section>
  );
}
export default PageContainer;

function Group({ title, children }) {
  return (
    <div style={{ marginTop: '0.625rem', marginBottom: '0.625rem' }}>
      <h6>{title}</h6>
      <div>{children}</div>
    </div>
  );
}

export default Group;

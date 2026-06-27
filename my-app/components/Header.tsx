type HeaderProps = {
  username: string;
};

export default function Header({ username }: HeaderProps) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <h2>🥕 REASN</h2>

      <div>
        👤 {username}
      </div>
    </header>
  );
}
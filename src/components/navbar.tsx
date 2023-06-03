import styles from "../styles/Home.module.css";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "just",
          minHeight: "10vh",
          fontSize: "20px",
        }}
      >
        <span>
          <img
            src="/logo.jpg"
            style={{
              padding: "3px",
              width: "22px",
            }}
          />
        </span>
        NonFungible Time
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      ></div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
// Link → ใช้เปลี่ยนหน้าแบบ ไม่ reload
// useFavorites → ดึงข้อมูล favorites จาก Context

function Navbar() {
  // favorites = array ของ post ที่ถูกกด
  const { favorites } = useFavorites();

  return (
    <nav
      style={{
        background: "#1e40af",
        color: "white",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* กดแล้วกลับหน้า / */}
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <h1 style={{ margin: 0, fontSize: "1.5rem" }}>DevBoard</h1>
      </Link>

      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          หน้าหลัก
        </Link>
        <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>
          สมาชิก
        </Link>
        <Link
          to="/favorites"
          style={{
            color: "white",
            textDecoration: "none",
            // ถ้ามี favorites → พื้นหลัง “แดง” ถ้าไม่มี → โปร่งใส
            background: favorites.length > 0 ? "#e53e3e" : "transparent",
            padding: "0.25rem 0.75rem",
            borderRadius: "20px",
            fontSize: "0.9rem",
          }}
        >
          {/* ถ้ามีรายการ → แสดง (จำนวน) ถ้าไม่มี → ไม่โชว์ตัวเลข */}
          ❤️ ถูกใจ {favorites.length > 0 && `(${favorites.length})`}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

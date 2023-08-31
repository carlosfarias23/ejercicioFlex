import Link from "next/link";
import styles from "./navigation.module.css"
const links = [{
    label: "nosotros",
    route: "/nosotros"
}]
export function Navigation () {
    return (
        <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
    )
}
import styles from './header.module.css';

function Header(){
    return(
        <header className={`${styles.a} ${styles.b}`}>
            <a>Вставила тег Header из файла header.jsx</a>
        </header>
    );
}
export default Header;
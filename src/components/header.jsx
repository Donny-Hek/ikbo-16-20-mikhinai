import styles from './header.module.css';

function Header(props) {
    return (
        <div>
            <header className={`${styles.a} ${styles.b}`}>
                <a>Вставила тег Header из файла header.jsx</a>
            </header>
            <main>
                <p>{props.name}, привет!</p>
                <a href='/'>Выход</a>
            </main>
        </div>
    );
}
export default Header;
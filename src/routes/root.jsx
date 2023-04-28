import styles from '../components/root.module.css';
export default function Root() {
    return (
        <>
            <div id="sidebar" className={`${styles.sidebar}`}>
                <h3>Pract App</h3>
                <nav>
                    <a href="/">Главная</a><br/>
                    <a href="/header">Header</a>
                </nav>
            </div>
            <div id="detail" className={`${styles.detail}`}></div>
        </>
    );
}
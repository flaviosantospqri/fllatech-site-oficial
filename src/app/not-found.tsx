
import Link from 'next/link';
import "../app/styles/not-found.scss"

const NotFoundPage = () => {
    return (
        <div className="not-found">
            <div className="glow"></div>
            <h1>404</h1>
            <p>Essa página não contratou a Fllatech e se perdeu</p>
            <Link href="/" className="btn-home">Voltar</Link>
        </div>
    );
};

export default NotFoundPage;

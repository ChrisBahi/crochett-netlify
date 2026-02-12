import Head from 'next/head';

export default function LegalPage() {
    return (
        <>
            <Head>
                <title>Mentions legales et RGPD</title>
                <meta name="description" content="Mentions legales et politique de confidentialite" />
            </Head>
            <main className="page">
                <section className="card">
                    <h1>Mentions legales et politique de confidentialite (RGPD)</h1>
                    <p className="muted">Derniere mise a jour : 12 fevrier 2026</p>

                    <h2>1. Editeur du site</h2>
                    <p>
                        Site : <strong>crochett.ai</strong>
                        <br />
                        Editeur : <strong>[A completer : nom de la societe ou nom complet]</strong>
                        <br />
                        Forme juridique : <strong>[A completer]</strong>
                        <br />
                        SIREN / SIRET : <strong>[A completer]</strong>
                        <br />
                        Adresse : <strong>[A completer]</strong>
                        <br />
                        Email de contact : <strong>b@crochett.ai</strong>
                    </p>

                    <h2>2. Hebergement</h2>
                    <p>
                        Hebergeur : <strong>Hostinger International Ltd.</strong>
                        <br />
                        Site :{' '}
                        <a href="https://www.hostinger.com" target="_blank" rel="noreferrer">
                            www.hostinger.com
                        </a>
                    </p>

                    <h2>3. Donnees collectees via le formulaire</h2>
                    <ul>
                        <li>Nom</li>
                        <li>Email</li>
                        <li>Telephone</li>
                        <li>Type de demande</li>
                        <li>Message</li>
                    </ul>

                    <h2>4. Finalite du traitement</h2>
                    <ul>
                        <li>Repondre a votre demande</li>
                        <li>Vous recontacter au sujet de votre message</li>
                    </ul>

                    <h2>5. Base legale</h2>
                    <p>
                        Le traitement est fonde sur votre consentement, materialise par la case a cocher avant l&apos;envoi
                        du formulaire.
                    </p>

                    <h2>6. Duree de conservation</h2>
                    <p>
                        Les donnees sont conservees pendant une duree maximale de <strong>[A completer : ex. 12 mois]</strong>
                        , puis supprimees.
                    </p>

                    <h2>7. Destinataires des donnees</h2>
                    <p>
                        Les donnees sont recues par l&apos;editeur du site a l&apos;adresse <strong>b@crochett.ai</strong>.
                        Le service FormSubmit est utilise comme intermediaire technique d&apos;envoi du formulaire.
                    </p>

                    <h2>8. Vos droits</h2>
                    <p>
                        Conformement au RGPD, vous disposez des droits d&apos;acces, de rectification, d&apos;effacement, de
                        limitation et d&apos;opposition. Vous pouvez exercer ces droits en ecrivant a{' '}
                        <strong>b@crochett.ai</strong>.
                    </p>

                    <h2>9. Cookies</h2>
                    <p>
                        Ce site n&apos;utilise pas de cookies de suivi ou de publicite a ce jour. Si cela change, une
                        banniere et une politique cookies dediee seront ajoutees.
                    </p>

                    <h2>10. Contact</h2>
                    <p>
                        Pour toute question sur la protection des donnees : <strong>b@crochett.ai</strong>
                    </p>

                    <p>
                        <a href="/">Retour au formulaire</a>
                    </p>
                </section>
            </main>
            <style jsx>{`
                .page {
                    min-height: 100vh;
                    padding: 24px;
                    background: radial-gradient(circle at 0% 0%, #d1fae5 0%, transparent 40%),
                        radial-gradient(circle at 100% 100%, #fef3c7 0%, transparent 35%), #f4f1ea;
                }
                .card {
                    width: min(900px, 100%);
                    margin: 0 auto;
                    background: #fffdf8;
                    border: 1px solid #d6d3d1;
                    border-radius: 16px;
                    padding: 28px;
                    box-shadow: 0 10px 35px rgba(15, 23, 42, 0.08);
                }
                h1 {
                    margin: 0 0 16px;
                    font-size: clamp(1.6rem, 4vw, 2rem);
                }
                h2 {
                    margin: 24px 0 10px;
                    font-size: 1.1rem;
                }
                p,
                li {
                    line-height: 1.6;
                }
                ul {
                    margin: 8px 0;
                    padding-left: 20px;
                }
                .muted {
                    color: #6b7280;
                }
                a {
                    color: #0f766e;
                    text-decoration: none;
                    font-weight: 600;
                }
                a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </>
    );
}

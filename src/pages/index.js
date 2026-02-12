import Head from 'next/head';

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Demandes en ligne | crochett.ai</title>
                <meta name="description" content="Formulaire de demande rapide pour crochett.ai" />
            </Head>
            <main className="page">
                <section className="card">
                    <h1>Deposez votre demande en 1 minute</h1>
                    <p className="subtitle">
                        Remplissez le formulaire et votre demande est envoyee automatiquement, sans appel.
                    </p>

                    <form action="https://formsubmit.co/291abbc1269c2546b749ce27a857b4a4" method="POST">
                        <div className="grid">
                            <div>
                                <label htmlFor="nom">
                                    Nom complet <span className="required">*</span>
                                </label>
                                <input id="nom" name="nom" type="text" required />
                            </div>
                            <div>
                                <label htmlFor="email">
                                    Email <span className="required">*</span>
                                </label>
                                <input id="email" name="email" type="email" required />
                            </div>
                        </div>

                        <div className="grid">
                            <div>
                                <label htmlFor="telephone">Telephone</label>
                                <input id="telephone" name="telephone" type="tel" />
                            </div>
                            <div>
                                <label htmlFor="type">
                                    Type de demande <span className="required">*</span>
                                </label>
                                <select id="type" name="type_demande" required>
                                    <option value="">Selectionner</option>
                                    <option>Information</option>
                                    <option>Devis</option>
                                    <option>Support</option>
                                    <option>Autre</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message">
                                Votre demande <span className="required">*</span>
                            </label>
                            <textarea id="message" name="message" required />
                        </div>

                        <label className="consent" htmlFor="consentement">
                            <input id="consentement" name="consentement" type="checkbox" required />
                            J&apos;accepte d&apos;etre recontacte(e) par email concernant cette demande.
                        </label>

                        <input type="hidden" name="_subject" value="Nouvelle demande depuis la page unique" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_next" value="https://crochett.ai/thank-you" />

                        <button type="submit">Envoyer ma demande</button>
                        <p className="note">
                            Les demandes sont envoyees automatiquement a <strong>b@crochett.ai</strong> via une cle
                            securisee.
                        </p>
                        <p className="note">
                            Redirection apres envoi: <code>https://crochett.ai/thank-you</code>.
                        </p>
                        <p className="note">
                            <a href="/legal">Mentions legales &amp; RGPD</a>
                        </p>
                    </form>
                </section>
            </main>
            <style jsx>{`
                .page {
                    min-height: 100vh;
                    padding: 24px;
                    display: grid;
                    place-items: center;
                    background: radial-gradient(circle at 0% 0%, #d1fae5 0%, transparent 40%),
                        radial-gradient(circle at 100% 100%, #fef3c7 0%, transparent 35%), #f4f1ea;
                }
                .card {
                    width: min(760px, 100%);
                    background: #fffdf8;
                    border: 1px solid #d6d3d1;
                    border-radius: 16px;
                    padding: 28px;
                    box-shadow: 0 10px 35px rgba(15, 23, 42, 0.08);
                }
                h1 {
                    margin: 0 0 8px;
                    font-size: clamp(1.6rem, 4vw, 2.1rem);
                    line-height: 1.15;
                    color: #1f2937;
                }
                .subtitle {
                    margin: 0 0 24px;
                    color: #6b7280;
                }
                form {
                    display: grid;
                    gap: 14px;
                }
                .grid {
                    display: grid;
                    gap: 14px;
                    grid-template-columns: 1fr 1fr;
                }
                @media (max-width: 700px) {
                    .grid {
                        grid-template-columns: 1fr;
                    }
                }
                label {
                    display: block;
                    margin-bottom: 6px;
                    font-weight: 600;
                    color: #1f2937;
                }
                input,
                select,
                textarea,
                button {
                    width: 100%;
                    border-radius: 10px;
                    border: 1px solid #d6d3d1;
                    padding: 11px 12px;
                    font: inherit;
                    background: #fff;
                }
                textarea {
                    min-height: 130px;
                    resize: vertical;
                }
                .required {
                    color: #b91c1c;
                }
                .consent {
                    display: flex;
                    gap: 10px;
                    align-items: flex-start;
                    color: #6b7280;
                    font-weight: 500;
                }
                .consent input {
                    width: 18px;
                    height: 18px;
                    margin-top: 2px;
                }
                button {
                    border: 0;
                    background: #0f766e;
                    color: #fff;
                    font-weight: 700;
                    margin-top: 4px;
                    cursor: pointer;
                }
                .note {
                    margin: 4px 0 0;
                    font-size: 0.9rem;
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

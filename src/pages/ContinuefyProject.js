import React from 'react';
import { Link } from 'react-router-dom';
import appPreview from '../assets/app-preview.webp';
import classes from '../components/project/continuefyproject.module.css';

const ContinuefyProject = () => {
    return (
        <main className={classes.main}>
            <section className={classes.hero}>
                <div className={classes.heroContent}>
                    <p className={classes.eyebrow}>Project case study</p>
                    <h1>Continuefy</h1>
                    <p className={classes.summaryText}>
                        Continuefy is a browser-first AI workflow tool that captures a shared AI chat link,
                        extracts the relevant context, and turns it into a structured continuation prompt that
                        can be pasted into a fresh chat without losing the thread.
                    </p>
                    <div className={classes.meta}>
                        <span>Browser Extension</span>
                        <span>Next.js</span>
                        <span>AI Continuation</span>
                        <span>Context Recovery</span>
                    </div>
                </div>

                <div className={classes.heroImage}>
                    <img
                        src={appPreview}
                        alt="Continuefy interface preview"
                    />
                </div>
            </section>

            <section className={classes.grid}>
                <article className={classes.card}>
                    <h3>What it does</h3>
                    <p>
                        Continuefy helps users continue AI conversations across platforms by converting a shared chat
                        link into a clean continuation prompt. Instead of losing the original context, the user can
                        re-open the conversation in a new chat and keep the meaningful thread going.
                    </p>
                    <ul className={classes.cardList}>
                        <li>Read shared chat URLs from supported AI platforms.</li>
                        <li>Extract the conversation context and summarize it into a reusable prompt.</li>
                        <li>Support users in continuing the conversation in a fresh chat window.</li>
                        <li>Reduce friction across ChatGPT, Claude, Gemini, Meta AI, Manus, Grok, and more.</li>
                    </ul>
                </article>

                <article className={classes.card}>
                    <h3>Current version</h3>
                    <p>
                        The current version combines a browser extension and a web app flow. The extension detects the
                        active AI chat page, packages the current conversation state, and sends it into Continuefy for
                        processing. The web experience then generates a structured continuation prompt and gives the
                        user a clean handoff to continue in a new chat.
                    </p>
                    <ul className={classes.cardList}>
                        <li>Chrome Extension</li>
                        <li>Firebase Auth</li>
                        <li>Stripe Billing</li>
                        <li>AI Processing</li>
                        <li>Continuation UI</li>
                    </ul>
                </article>

                <article className={classes.card}>
                    <h3>How the extension works</h3>
                    <p>
                        The extension monitors supported AI chat pages and reads the conversation structure from the page.
                        Once the user triggers Continuefy, the extension prepares the necessary payload and opens the
                        continuation workflow in a clean browser flow. It can also keep track of the active platform and
                        guide the user back into the same ecosystem with the generated prompt.
                    </p>
                </article>

                <article className={classes.card}>
                    <h3>Product workflow</h3>
                    <p>
                        A user pastes a shared link or opens an AI chat from the extension. Continuefy processes the
                        data, turns it into a continuation prompt, and then gives the user a ready-to-copy prompt to
                        paste into a new chat. The design focuses on preserving context and minimizing the friction of
                        resuming long conversations.
                    </p>
                </article>
            </section>

            <section className={classes.cta}>
                <a href="https://www.continuefy.com/" target="_blank" rel="noopener noreferrer" className={classes.ctaCard}>
                    <h3>Website</h3>
                    <span className={classes.ctaLink}>www.continuefy.com</span>
                </a>
                <a href="https://chromewebstore.google.com/detail/enjefhhhnplfkfnigcmbffepgldfhdih?utm_source=item-share-cb" target="_blank" rel="noopener noreferrer" className={classes.ctaCard}>
                    <h3>Chrome Extension</h3>
                    <span className={classes.ctaLink}>Chrome Web Store</span>
                </a>
            </section>

            <Link to="/" className={classes.back}>
                ← Back to projects
            </Link>
        </main>
    );
};

export default ContinuefyProject;

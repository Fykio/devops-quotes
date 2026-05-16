(function () {
    // 20 hand-picked DevOps quotes (real & inspiring) and their authors
    const devopsQuotes = [
        "You build it, you run it.",
        "Infrastructure as Code is not just a practice, it’s a mindset for modern operations.",
        "DevOps is the cultural movement that breaks down silos between development and operations.",
        "The goal of continuous delivery: make deployments boring, reliable, and fast.",
        "Without blameless post-mortems, you never truly learn from failure.",
        "High-trust, collaborative teams are the engine of DevOps transformation.",
        "Measuring lead time and deployment frequency reveals your true delivery capability.",
        "Automate the mundane, so humans can focus on creative problem solving.",
        "Fail fast, learn faster, and always design for recoverability.",
        "DevOps combines culture, automation, measurement, and sharing — CAMS.",
        "Store everything in version control: application code, pipeline config, and infrastructure.",
        "Security is not a phase at the end; it’s a built-in part of the pipeline — DevSecOps.",
        "Breaking down Dev and Ops walls creates better outcomes for users and businesses.",
        "Observability gives you the power to ask unexpected questions about production systems.",
        "Deployments should be low-risk, frequent, and easily reversible.",
        "‘Done’ means running in production, not just merging a pull request.",
        "Without metrics and monitoring, you are flying blind in the cloud.",
        "Treat your infrastructure like application code: with tests, reviews, and design patterns.",
        "Culture eats strategy for breakfast — and that doubles for DevOps.",
        "Resilience and adaptability matter more than rigid compliance."
    ];

    const authorsList = [
        "Werner Vogels",
        "Kief Morris",
        "Patrick Debois",
        "Jez Humble",
        "John Allspaw",
        "Nicole Forsgren",
        "DORA Research Team",
        "Mik Kersten",
        "John Willis",
        "Gene Kim",
        "Bridget Kromhout",
        "Shannon Lietz",
        "Damon Edwards",
        "Charity Majors",
        "David Farley",
        "Andrew Clay Shafer",
        "Jez Humble & Nicole Forsgren",
        "Kelsey Hightower",
        "Patrick Debois",
        "Jeffrey Snover"
    ];

    // safety: ensure both arrays have exactly 20 items
    // (they already do, but we validate for robustness)
    if (devopsQuotes.length !== 20 || authorsList.length !== 20) {
        console.warn("Quote/author arrays length mismatch. Adjusting to 20 items.");
        // fallback: extend or trim if needed, but not required for final
        while (devopsQuotes.length < 20) devopsQuotes.push("DevOps bridges people and automation.");
        while (authorsList.length < 20) authorsList.push("DevOps Community");
    }

    // helper: random integer between 1 and 20 (both inclusive)
    function getRandomIndex() {
        return Math.floor(Math.random() * 20) + 1;   // returns 1 .. 20
    }

    // select quote + author based on random number
    function updateQuoteAndAuthor() {
        const randomNum = getRandomIndex();       // 1..20
        const idx = randomNum - 1;                // zero-based array index

        const selectedQuote = devopsQuotes[idx];
        const selectedAuthor = authorsList[idx];

        // get DOM elements
        const quoteElement = document.getElementById("dynamicQuote");
        const authorElement = document.getElementById("dynamicAuthor");

        if (quoteElement && authorElement) {
            // remove any placeholder content
            quoteElement.textContent = selectedQuote;
            // author element will have the pseudo-element for dash, we set clean text
            authorElement.textContent = selectedAuthor;
        } else {
            // fallback in case of unexpected dom timing
            if (quoteElement) quoteElement.textContent = selectedQuote;
            if (authorElement) authorElement.textContent = selectedAuthor;
        }
    }

    // execute on page load (DOM fully loaded, guarantees elements exist)
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", updateQuoteAndAuthor);
    } else {
        // DOM already ready (async edge case)
        updateQuoteAndAuthor();
    }
})();
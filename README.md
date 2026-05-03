PacketWords 🛡️
Multilingual Cybersecurity Dictionary (EN / UK / PL)

PacketWords is an autonomous, single-page web application designed to help users navigate the complex terminology of the cybersecurity domain. It acts as a lightweight, lightning-fast dictionary with a focus on linguistic accuracy.

🎯 The Problem It Solves
Cybersecurity terminology is heavily dominated by English, which creates localization challenges for Ukrainian and Polish professionals. Direct translations often lose their technical meaning, and standard web dictionaries require an internet connection.

PacketWords solves this by:

Providing Verified Terminology: Offering an academically verified, trilingual glossary (130 core terms) with precise contextual notes.

Offline Autonomy: Injecting the JSON database directly into the JavaScript execution context. The app requires zero server requests (fetch), meaning it works instantly and securely in strictly isolated or offline environments.

Lexicographic Search Precision: Using advanced Regex with word-boundary constraints to prevent false-positive matches (e.g., distinguishing the root word from parts of larger words).

⚙️ Core Features
Omni-lingual Search: Users can search in English, Ukrainian, or Polish simultaneously, regardless of the active UI language.

Dynamic Localization: The interface not only translates buttons but dynamically re-centers the visual hierarchy. If the Polish UI is selected, the Polish term becomes the primary header.

Zen Mode: A distraction-free UI mode for focused study sessions.

Dynamic Alphabetical Index: Automatically adapts character sets (including Cyrillic and Polish diacritics) based on the selected language.

🛠️ Technology Stack & Methodology
This project was developed using a Hybrid AI-Assisted Development approach:

Frontend Technologies: HTML5, modern CSS3 (Variables, Grid/Flexbox), and Vanilla JavaScript (ES6+).

Data Structure: JSON (converted from raw Excel glossaries).

Manual Development & QA: Visual Studio Code (VS Code) was used for manual code review, precise CSS adjustments (e.g., accessibility focus states, UI alignment), and DOM attribute corrections to ensure browser security compliance.

AI Tooling:

Google AI Studio (Gemini): Utilized for initial semantic HTML structuring and base UI/UX design generation.

Antigravity (Claude Opus): Utilized as the primary advanced reasoning engine for complex logic refactoring, Regex search algorithm refinement, and dynamic JSON data integration.

Role: The human developer acted as the Computational Linguist, QA Tester, and Prompt Engineer—structuring the data, defining search logic rules, manually refining the generated code in VS Code, and strictly parameterizing the AI environments to eliminate hallucinations.

🚀 How to Run Locally
Because the application is fully autonomous and has no backend dependencies, running it is incredibly simple:

Clone or Download this repository to your local machine.

Unzip the folder (if downloaded as a .zip).

Double-click the index.html file to open it directly in any modern web browser (Chrome, Edge, Firefox, Safari).
No local server (like Node.js or Live Server) is required.

🎓 Academic Context
This project was created as a practical implementation for a term paper on "Linguistic Support of IT Projects: Cybersecurity". It demonstrates the critical role of a linguist in structuring data for machine consumption and optimizing search algorithms for natural language processing.

Designed and Developed by Olena Rupa

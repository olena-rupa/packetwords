/* ============================================================
   PacketWords — Cybersecurity Terminology Explained
   Main Application Logic (Vanilla ES6+)
   ============================================================ */

// ── DATA: Glossary entries (autonomous, no fetch) ──
const glossaryData = [
  {
    "ID": "1",
    "Ukrainian_term": "контроль доступу",
    "English_term": "access control",
    "Polish_term": "kontrola dostępu",
    "Notes": "The process of granting or denying specific requests to obtain and use information, related information processing services, and to enter specific physical facilities."
  },
  {
    "ID": "2",
    "Ukrainian_term": "активна атака",
    "English_term": "active attack",
    "Polish_term": "atak aktywny",
    "Notes": "An actual assault perpetrated by an intentional threat source that attempts to alter a system, its resources, its data, or its operations."
  },
  {
    "ID": "3",
    "Ukrainian_term": "розширена стійка загроза",
    "English_term": "advanced persistent threat",
    "Polish_term": "zaawansowane trwałe zagrożenie",
    "Notes": "An adversary that possesses sophisticated levels of expertise and significant resources which allow it to create opportunities to achieve its objectives by using multiple attack vectors (e.g., cyber, physical, and deception)."
  },
  {
    "ID": "4",
    "Ukrainian_term": "противник",
    "English_term": "adversary",
    "Polish_term": "przeciwnik",
    "Notes": "An individual, group, organization, or government that conducts or has the intent to conduct detrimental activities."
  },
  {
    "ID": "5",
    "Ukrainian_term": "сповіщення",
    "English_term": "alert",
    "Polish_term": "alert",
    "Notes": "A notification that a specific attack has been detected or directed at an organization’s information systems."
  },
  {
    "ID": "6",
    "Ukrainian_term": "поверхня атаки",
    "English_term": "attack surface",
    "Polish_term": "powierzchnia ataku",
    "Notes": "The set of ways in which an adversary can enter a system and potentially cause damage."
  },
  {
    "ID": "7",
    "Ukrainian_term": "автентифікація",
    "English_term": "authentication",
    "Polish_term": "uwierzytelnianie",
    "Notes": "The process of verifying the identity or other attributes of an entity (user, process, or device)."
  },
  {
    "ID": "8",
    "Ukrainian_term": "автентичність",
    "English_term": "authenticity",
    "Polish_term": "autentyczność",
    "Notes": "A property achieved through cryptographic methods of being genuine and being able to be verified and trusted, resulting in confidence in the validity of a transmission, information or a message, or sender of information or a message."
  },
  {
    "ID": "9",
    "Ukrainian_term": "авторизація",
    "English_term": "authorization",
    "Polish_term": "autoryzacja",
    "Notes": "A process of determining, by evaluating applicable access control information, whether a subject is allowed to have the specified types of access to a particular resource."
  },
  {
    "ID": "10",
    "Ukrainian_term": "доступність",
    "English_term": "availability",
    "Polish_term": "dostępność",
    "Notes": "The property of being accessible and usable upon demand."
  },
  {
    "ID": "11",
    "Ukrainian_term": "бекдор",
    "English_term": "backdoor",
    "Polish_term": "backdoor",
    "Notes": "A backdoor refers to any method by which authorized and unauthorized users are able to get around normal security measures and gain high level user access (aka root access) on a computer system, network, or software application"
  },
  {
    "ID": "12",
    "Ukrainian_term": "біометрія",
    "English_term": "biometric",
    "Polish_term": "biometria",
    "Notes": "use unique physical or behavioral traits like fingerprints, facial features, and voice patterns for cybersecurity authentication"
  },
  {
    "ID": "13",
    "Ukrainian_term": "синя команда",
    "English_term": "blue team",
    "Polish_term": "blue team",
    "Notes": "A group that defends an enterprise's information systems when mock attackers (i.e., the Red Team) attack, typically as part of an operational exercise conducted according to rules established and monitored by a neutral group (i.e., the White Team)."
  },
  {
    "ID": "14",
    "Ukrainian_term": "бот",
    "English_term": "bot",
    "Polish_term": "bot",
    "Notes": "A computer connected to the Internet that has been surreptitiously / secretly compromised with malicious logic to perform activities under remote the command and control of a remote administrator."
  },
  {
    "ID": "15",
    "Ukrainian_term": "ботнет",
    "English_term": "botnet",
    "Polish_term": "botnet",
    "Notes": "A collection of computers compromised by malicious code and controlled across a network."
  },
  {
    "ID": "16",
    "Ukrainian_term": "шифр",
    "English_term": "cipher",
    "Polish_term": "szyfr",
    "Notes": "Cryptographic algorithm"
  },
  {
    "ID": "17",
    "Ukrainian_term": "шифротекст",
    "English_term": "ciphertext",
    "Polish_term": "szyfrogram",
    "Notes": "Data or information in its encrypted form."
  },
  {
    "ID": "18",
    "Ukrainian_term": "хмарні обчислення",
    "English_term": "cloud computing",
    "Polish_term": "chmura obliczeniowa",
    "Notes": "A model for enabling on-demand network access to a shared pool of configurable computing capabilities or resources (e.g., networks, servers, storage, applications, and services) that can be rapidly provisioned and released with minimal management effort or service provider interaction."
  },
  {
    "ID": "19",
    "Ukrainian_term": "конфіденційність",
    "English_term": "confidentiality",
    "Polish_term": "poufność",
    "Notes": "A property that information is not disclosed to users, processes, or devices unless they have been authorized to access the information."
  },
  {
    "ID": "20",
    "Ukrainian_term": "план безперервності діяльності",
    "English_term": "continuity of operations plan",
    "Polish_term": "plan ciągłości działania",
    "Notes": "A document that sets forth procedures for the continued performance of core capabilities and critical operations during any disruption or potential disruption."
  },
  {
    "ID": "21",
    "Ukrainian_term": "критична інфраструктура",
    "English_term": "critical infrastructure",
    "Polish_term": "infrastruktura krytyczna",
    "Notes": "The systems and assets, whether physical or virtual, so vital to society that the incapacity or destruction of such may have a debilitating impact on the security, economy, public health or safety, environment, or any combination of these matters."
  },
  {
    "ID": "22",
    "Ukrainian_term": "криптоаналіз",
    "English_term": "cryptanalysis",
    "Polish_term": "kryptoanaliza",
    "Notes": "The operations performed in defeating or circumventing cryptographic protection of information by applying mathematical techniques and without an initial knowledge of the key employed in providing the protection."
  },
  {
    "ID": "23",
    "Ukrainian_term": "криптографія",
    "English_term": "cryptography",
    "Polish_term": "kryptografia",
    "Notes": "The use of mathematical techniques to provide security services, such as confidentiality, data integrity, entity authentication, and data origin authentication."
  },
  {
    "ID": "24",
    "Ukrainian_term": "криптоджекінг",
    "English_term": "cryptojacking",
    "Polish_term": "cryptojacking",
    "Notes": "a type of cybercrime that involves the unauthorized use of a target's devices (computers, smartphones, tablets, or even servers) by cybercriminals to mine for cryptocurrency"
  },
  {
    "ID": "25",
    "Ukrainian_term": "кібернавчання",
    "English_term": "cyber exercise",
    "Polish_term": "ćwiczenie cybernetyczne",
    "Notes": "A planned event during which an organization simulates a cyber disruption to develop or test capabilities such as preventing, detecting, mitigating, responding to or recovering from the disruption."
  },
  {
    "ID": "26",
    "Ukrainian_term": "кібератака",
    "English_term": "cyberattack",
    "Polish_term": "cyberatak",
    "Notes": "a malicious and deliberate attempt to breach the information system"
  },
  {
    "ID": "27",
    "Ukrainian_term": "кібербезпека",
    "English_term": "cybersecurity",
    "Polish_term": "cyberbezpieczeństwo",
    "Notes": "The activity or process, ability or capability, or state whereby information and communications systems and the information contained therein are protected from and/or defended against damage, unauthorized use or modification, or exploitation."
  },
  {
    "ID": "28",
    "Ukrainian_term": "агрегація даних",
    "English_term": "data aggregation",
    "Polish_term": "agregacja danych",
    "Notes": "The process of gathering and combining data from different sources, so that the combined data reveals new information."
  },
  {
    "ID": "29",
    "Ukrainian_term": "витік даних",
    "English_term": "data breach",
    "Polish_term": "wyciek danych",
    "Notes": "The unauthorized movement or disclosure of sensitive information to a party, usually outside the organization, that is not authorized to have or see the information."
  },
  {
    "ID": "30",
    "Ukrainian_term": "цілісність даних",
    "English_term": "data integrity",
    "Polish_term": "integralność danych",
    "Notes": "The property that data is complete, intact, and trusted and has not been modified or destroyed in an unauthorized or accidental manner."
  },
  {
    "ID": "31",
    "Ukrainian_term": "запобігання втраті даних",
    "English_term": "data loss prevention",
    "Polish_term": "zapobieganie utracie danych",
    "Notes": "A set of procedures and mechanisms to stop sensitive data from leaving a security boundary."
  },
  {
    "ID": "32",
    "Ukrainian_term": "видобування даних",
    "English_term": "data mining",
    "Polish_term": "eksploracja danych",
    "Notes": "The process or techniques used to analyze large sets of existing information to discover previously unrevealed patterns or correlations."
  },
  {
    "ID": "33",
    "Ukrainian_term": "крадіжка даних",
    "English_term": "data theft",
    "Polish_term": "kradzież danych",
    "Notes": "The deliberate or intentional act of stealing of information."
  },
  {
    "ID": "34",
    "Ukrainian_term": "DDoS-атака",
    "English_term": "DDoS",
    "Polish_term": "DDoS",
    "Notes": "Distributed Denial-of-Service"
  },
  {
    "ID": "35",
    "Ukrainian_term": "дешифрування",
    "English_term": "decryption",
    "Polish_term": "deszyfrowanie",
    "Notes": "The process of transforming ciphertext into its original plaintext."
  },
  {
    "ID": "36",
    "Ukrainian_term": "діпфейк",
    "English_term": "deepfake",
    "Polish_term": "deepfake",
    "Notes": "synthetic media that have been digitally manipulated to replace one person's likeness convincingly with that of another"
  },
  {
    "ID": "37",
    "Ukrainian_term": "відмова в обслуговуванні",
    "English_term": "denial of service",
    "Polish_term": "odmowa usługi",
    "Notes": "An attack that prevents or impairs the authorized use of information system resources or services."
  },
  {
    "ID": "38",
    "Ukrainian_term": "DevOps (практика DevOps)",
    "English_term": "DevOps",
    "Polish_term": "DevOps (praktyki DevOps)",
    "Notes": "The combination of cultural philosophies, practices, and tools that increases an organization's ability to deliver applications and services"
  },
  {
    "ID": "39",
    "Ukrainian_term": "DevSecOps (методологія DevSecOps)",
    "English_term": "DevSecOps ",
    "Polish_term": "DevSecOps (metodologia DevSecOps)",
    "Notes": "Blend of development, security, and operations"
  },
  {
    "ID": "40",
    "Ukrainian_term": "цифрова криміналістика",
    "English_term": "digital forensics",
    "Polish_term": "informatyka śledcza",
    "Notes": "The processes and specialized techniques for gathering, retaining, and analyzing system-related data (digital evidence) for investigative purposes."
  },
  {
    "ID": "41",
    "Ukrainian_term": "цифровий підпис",
    "English_term": "digital signature",
    "Polish_term": "podpis cyfrowy",
    "Notes": "A value computed with a cryptographic process using a private key and then appended to a data object, thereby digitally signing the data."
  },
  {
    "ID": "42",
    "Ukrainian_term": "порушення роботи",
    "English_term": "disruption",
    "Polish_term": "zakłócenie",
    "Notes": "An event which causes unplanned interruption in operations or functions for an unacceptable length of time."
  },
  {
    "ID": "43",
    "Ukrainian_term": "розподілена відмова в обслуговуванні",
    "English_term": "distributed denial of service",
    "Polish_term": "rozproszona odmowa usługi",
    "Notes": "A denial of service technique that uses numerous systems to perform the attack simultaneously."
  },
  {
    "ID": "44",
    "Ukrainian_term": "шифрування",
    "English_term": "encryption",
    "Polish_term": "szyfrowanie",
    "Notes": "The process of transforming plaintext into ciphertext."
  },
  {
    "ID": "45",
    "Ukrainian_term": "корпоративне управління ризиками",
    "English_term": "enterprise risk management",
    "Polish_term": "zarządzanie ryzykiem korporacyjnym",
    "Notes": "A comprehensive approach to risk management that engages people, processes, and systems across an organization to improve the quality of decision making for managing risks that may hinder an organization’s ability to achieve its objectives."
  },
  {
    "ID": "46",
    "Ukrainian_term": "подія",
    "English_term": "event",
    "Polish_term": "zdarzenie",
    "Notes": "An observable occurrence in an information system or network."
  },
  {
    "ID": "47",
    "Ukrainian_term": "ексфільтрація",
    "English_term": "exfiltration",
    "Polish_term": "eksfiltracja",
    "Notes": "The unauthorized transfer of information from an information system."
  },
  {
    "ID": "48",
    "Ukrainian_term": "експлойт",
    "English_term": "exploit",
    "Polish_term": "exploit",
    "Notes": "A technique to breach the security of a network or information system in violation of security policy."
  },
  {
    "ID": "49",
    "Ukrainian_term": "незахищеність",
    "English_term": "exposure",
    "Polish_term": "ekspozycja",
    "Notes": "The condition of being unprotected, thereby allowing access to information or access to capabilities that an attacker can use to enter a system or network."
  },
  {
    "ID": "50",
    "Ukrainian_term": "відмова",
    "English_term": "failure",
    "Polish_term": "awaria",
    "Notes": "The inability of a system or component to perform its required functions within specified performance requirements."
  },
  {
    "ID": "51",
    "Ukrainian_term": "міжмережевий екран",
    "English_term": "firewall",
    "Polish_term": "zapora sieciowa",
    "Notes": "A capability to limit network traffic between networks and/or information systems."
  },
  {
    "ID": "52",
    "Ukrainian_term": "хакер",
    "English_term": "hacker",
    "Polish_term": "haker",
    "Notes": "An unauthorized user who attempts to or gains access to an information system."
  },
  {
    "ID": "53",
    "Ukrainian_term": "геш-значення",
    "English_term": "hash value",
    "Polish_term": "wartość skrótu",
    "Notes": "A numeric value resulting from applying a mathematical algorithm against a set of data such as a file."
  },
  {
    "ID": "54",
    "Ukrainian_term": "гешування",
    "English_term": "hashing",
    "Polish_term": "haszowanie",
    "Notes": "A process of applying a mathematical algorithm against a set of data to produce a numeric value (a 'hash value') that represents the data."
  },
  {
    "ID": "55",
    "Ukrainian_term": "приманка",
    "English_term": "honeypot",
    "Polish_term": "honeypot",
    "Notes": "a computer security mechanism set to detect, deflect, or, in some manner, counteract attempts at unauthorized use of information"
  },
  {
    "ID": "56",
    "Ukrainian_term": "керування ідентифікацією та доступом",
    "English_term": "identity and access management",
    "Polish_term": "zarządzanie tożsamością i dostępem",
    "Notes": "The methods and processes used to manage subjects and their authentication and authorizations to access specific objects."
  },
  {
    "ID": "57",
    "Ukrainian_term": "інцидент",
    "English_term": "incident",
    "Polish_term": "incydent",
    "Notes": "An occurrence that actually or potentially results in adverse consequences to (adverse effects on) (poses a threat to) an information system or the information that the system processes, stores, or transmits and that may require a response action to mitigate the consequences."
  },
  {
    "ID": "58",
    "Ukrainian_term": "управління інцидентами",
    "English_term": "incident management",
    "Polish_term": "zarządzanie incydentami",
    "Notes": "The management and coordination of activities associated with an actual or potential occurrence of an event that may result in adverse consequences to information or information systems."
  },
  {
    "ID": "59",
    "Ukrainian_term": "реагування на інциденти",
    "English_term": "incident response",
    "Polish_term": "odpowiedź na incydent",
    "Notes": "The activities that address the short-term, direct effects of an incident and may also support short-term recovery."
  },
  {
    "ID": "60",
    "Ukrainian_term": "план реагування на інциденти",
    "English_term": "incident response plan",
    "Polish_term": "plan reagowania na incydenty",
    "Notes": "A set of predetermined and documented procedures to detect and respond to a cyber incident."
  },
  {
    "ID": "61",
    "Ukrainian_term": "індикатор",
    "English_term": "indicator",
    "Polish_term": "wskaźnik",
    "Notes": "An occurrence or sign that an incident may have occurred or may be in progress."
  },
  {
    "ID": "62",
    "Ukrainian_term": "промислова система управління",
    "English_term": "industrial control system",
    "Polish_term": "przemysłowy system sterowania",
    "Notes": "An information system used to control industrial processes such as manufacturing, product handling, production, and distribution or to control infrastructure assets."
  },
  {
    "ID": "63",
    "Ukrainian_term": "гарантування інформації",
    "English_term": "information assurance",
    "Polish_term": "zapewnienie bezpieczeństwa informacji",
    "Notes": "The measures that protect and defend information and information systems by ensuring their availability, integrity, and confidentiality."
  },
  {
    "ID": "64",
    "Ukrainian_term": "політика інформаційної безпеки",
    "English_term": "information security policy",
    "Polish_term": "polityka bezpieczeństwa informacji",
    "Notes": "An aggregate of directives, regulations, rules, and practices that prescribe how an organization manages, protects, and distributes information."
  },
  {
    "ID": "65",
    "Ukrainian_term": "обмін інформацією",
    "English_term": "information sharing",
    "Polish_term": "wymiana informacji",
    "Notes": "An exchange of data, information, and/or knowledge to manage risks or respond to incidents."
  },
  {
    "ID": "66",
    "Ukrainian_term": "стійкість інформаційної системи",
    "English_term": "information system resilience",
    "Polish_term": "odporność systemu informacyjnego",
    "Notes": "The ability of a system to continue to operate under adverse conditions or stress, even if in a degraded or debilitated state, while maintaining essential operational capabilities."
  },
  {
    "ID": "67",
    "Ukrainian_term": "інформаційні технології",
    "English_term": "information technology",
    "Polish_term": "technologia informacyjna",
    "Notes": "Any equipment or interconnected system or subsystem of equipment that processes, transmits, receives, or interchanges data or information."
  },
  {
    "ID": "68",
    "Ukrainian_term": "цілісність",
    "English_term": "integrity",
    "Polish_term": "integralność",
    "Notes": "The property whereby information, an information system, or a component of a system has not been modified or destroyed in an unauthorized manner."
  },
  {
    "ID": "69",
    "Ukrainian_term": "вторгнення",
    "English_term": "intrusion",
    "Polish_term": "włamanie",
    "Notes": "An unauthorized act of bypassing the security mechanisms of a network or information system."
  },
  {
    "ID": "70",
    "Ukrainian_term": "виявлення вторгнень",
    "English_term": "intrusion detection",
    "Polish_term": "wykrywanie włamań",
    "Notes": "The process and methods for analyzing information from networks and information systems to determine if a security breach or security violation has occurred."
  },
  {
    "ID": "71",
    "Ukrainian_term": "кейлогер",
    "English_term": "keylogger",
    "Polish_term": "keylogger",
    "Notes": "a tool that record what a person types on a device"
  },
  {
    "ID": "72",
    "Ukrainian_term": "зловмисний код",
    "English_term": "malicious code",
    "Polish_term": "złośliwy kod",
    "Notes": "Program code intended to perform an unauthorized function or process that will have adverse impact on the confidentiality, integrity, or availability of an information system."
  },
  {
    "ID": "73",
    "Ukrainian_term": "шкідливе програмне забезпечення",
    "English_term": "malware",
    "Polish_term": "złośliwe oprogramowanie",
    "Notes": "Software that compromises the operation of a system by performing an unauthorized function or process."
  },
  {
    "ID": "74",
    "Ukrainian_term": "пом'якшення наслідків",
    "English_term": "mitigation",
    "Polish_term": "łagodzenie skutków",
    "Notes": "The application of one or more measures to reduce the likelihood of an unwanted occurrence and/or lessen its consequences."
  },
  {
    "ID": "75",
    "Ukrainian_term": "стійкість мережі",
    "English_term": "network resilience",
    "Polish_term": "odporność sieci",
    "Notes": "A computing infrastructure that provides continuous business operation (i.e., highly resistant to disruption and able to operate in a degraded mode if damaged), rapid recovery if failure does occur, and the ability to scale to meet rapid or unpredictable demands."
  },
  {
    "ID": "76",
    "Ukrainian_term": "неспростовність",
    "English_term": "non-repudiation",
    "Polish_term": "niezaprzeczalność",
    "Notes": "A property achieved through cryptographic methods to protect against an individual or entity falsely denying having performed a particular action related to data."
  },
  {
    "ID": "77",
    "Ukrainian_term": "пасивна атака",
    "English_term": "passive attack",
    "Polish_term": "atak pasywny",
    "Notes": "An actual assault perpetrated by an intentional threat source that attempts to learn or make use of information from a system, but does not attempt to alter the system, its resources, its data, or its operations."
  },
  {
    "ID": "78",
    "Ukrainian_term": "пароль",
    "English_term": "password",
    "Polish_term": "hasło",
    "Notes": "A string of characters (letters, numbers, and other symbols) used to authenticate an identity or to verify access authorization."
  },
  {
    "ID": "79",
    "Ukrainian_term": "тестування на проникнення",
    "English_term": "penetration testing",
    "Polish_term": "testy penetracyjne",
    "Notes": "An evaluation methodology whereby assessors search for vulnerabilities and attempt to circumvent the security features of a network and/or information system."
  },
  {
    "ID": "80",
    "Ukrainian_term": "фішинг",
    "English_term": "phishing",
    "Polish_term": "phishing",
    "Notes": "A digital form of social engineering to deceive individuals into providing sensitive information."
  },
  {
    "ID": "81",
    "Ukrainian_term": "відкритий текст",
    "English_term": "plaintext",
    "Polish_term": "tekst jawny",
    "Notes": "Unencrypted information."
  },
  {
    "ID": "82",
    "Ukrainian_term": "захист персональних даних",
    "English_term": "privacy",
    "Polish_term": "prywatność",
    "Notes": "The assurance that the confidentiality of, and access to, certain information about an entity is protected."
  },
  {
    "ID": "83",
    "Ukrainian_term": "закритий ключ",
    "English_term": "private key",
    "Polish_term": "klucz prywatny",
    "Notes": "A cryptographic key that must be kept confidential and is used to enable the operation of an asymmetric (public key) cryptographic algorithm."
  },
  {
    "ID": "84",
    "Ukrainian_term": "відкритий ключ",
    "English_term": "public key",
    "Polish_term": "klucz publiczny",
    "Notes": "A cryptographic key that may be widely published and is used to enable the operation of an asymmetric (public key) cryptographic algorithm."
  },
  {
    "ID": "85",
    "Ukrainian_term": "криптографія з відкритим ключем",
    "English_term": "public key cryptography",
    "Polish_term": "kryptografia klucza publicznego",
    "Notes": "A branch of cryptography in which a cryptographic system or algorithms use two uniquely linked keys: a public key and a private key (a key pair)."
  },
  {
    "ID": "86",
    "Ukrainian_term": "інфраструктура відкритих ключів",
    "English_term": "public key infrastructure",
    "Polish_term": "infrastruktura klucza publicznego",
    "Notes": "A framework consisting of standards and services to enable secure, encrypted communication and authentication over potentially insecure networks such as the Internet."
  },
  {
    "ID": "87",
    "Ukrainian_term": "програма-вимагач",
    "English_term": "ransomware",
    "Polish_term": "ransomware",
    "Notes": "a malware designed to deny a user or organization access to files on their computer"
  },
  {
    "ID": "88",
    "Ukrainian_term": "відновлення",
    "English_term": "recovery",
    "Polish_term": "odzyskiwanie",
    "Notes": "The activities after an incident or event to restore essential services and operations in the short and medium term and fully restore all capabilities in the longer term."
  },
  {
    "ID": "89",
    "Ukrainian_term": "червона команда",
    "English_term": "red team",
    "Polish_term": "red team",
    "Notes": "A group authorized and organized to emulate a potential adversary’s attack or exploitation capabilities against an enterprise’s cybersecurity posture."
  },
  {
    "ID": "90",
    "Ukrainian_term": "надлишковість",
    "English_term": "redundancy",
    "Polish_term": "redundancja",
    "Notes": "Additional or alternative systems, sub-systems, assets, or processes that maintain a degree of overall functionality in case of loss or failure of another system, sub-system, asset, or process."
  },
  {
    "ID": "91",
    "Ukrainian_term": "стійкість",
    "English_term": "resilience",
    "Polish_term": "odporność",
    "Notes": "The ability to adapt to changing conditions and prepare for, withstand, and rapidly recover from disruption."
  },
  {
    "ID": "92",
    "Ukrainian_term": "ризик",
    "English_term": "risk",
    "Polish_term": "ryzyko",
    "Notes": "The potential for an unwanted or adverse outcome resulting from an incident, event, or occurrence, as determined by the likelihood that a particular threat will exploit a particular vulnerability, with the associated consequences."
  },
  {
    "ID": "93",
    "Ukrainian_term": "аналіз ризиків",
    "English_term": "risk analysis",
    "Polish_term": "analiza ryzyka",
    "Notes": "The systematic examination of the components and characteristics of risk."
  },
  {
    "ID": "94",
    "Ukrainian_term": "оцінка ризиків",
    "English_term": "risk assessment",
    "Polish_term": "ocena ryzyka",
    "Notes": "The product or process which collects information and assigns values to risks for the purpose of informing priorities, developing or comparing courses of action, and informing decision making."
  },
  {
    "ID": "95",
    "Ukrainian_term": "управління ризиками",
    "English_term": "risk management",
    "Polish_term": "zarządzanie ryzykiem",
    "Notes": "The process of identifying, analyzing, assessing, and communicating risk and accepting, avoiding, transferring or controlling it to an acceptable level considering associated costs and benefits of any actions taken."
  },
  {
    "ID": "96",
    "Ukrainian_term": "руткіт",
    "English_term": "rootkit",
    "Polish_term": "rootkit",
    "Notes": "A set of software tools with administrator-level access privileges installed on an information system and designed to hide the presence of the tools, maintain the access privileges, and conceal the activities conducted by the tools."
  },
  {
    "ID": "97",
    "Ukrainian_term": "політика безпеки",
    "English_term": "security policy",
    "Polish_term": "polityka bezpieczeństwa",
    "Notes": "A rule or set of rules that govern the acceptable use of an organization's information and services to a level of acceptable risk and the means for protecting the organization's information assets."
  },
  {
    "ID": "98",
    "Ukrainian_term": "SIEM (система управління подіями безпеки)",
    "English_term": "SIEM (Security Information and Event Management)",
    "Polish_term": "SIEM (system zarządzania informacjami i zdarzeniami bezpieczeństwa)",
    "Notes": "Security information and event management"
  },
  {
    "ID": "99",
    "Ukrainian_term": "ситуаційна обізнаність",
    "English_term": "situational awareness",
    "Polish_term": "świadomość sytuacyjna",
    "Notes": "Comprehending information about the current and developing security posture and risks, based on information gathered, observation and analysis, and knowledge or experience."
  },
  {
    "ID": "100",
    "Ukrainian_term": "смішинг",
    "English_term": "smishing",
    "Polish_term": "smishing",
    "Notes": "the fraudulent practice of sending text messages purporting to be from reputable companies in order to induce individuals to reveal personal information"
  },
  {
    "ID": "101",
    "Ukrainian_term": "соціальна інженерія",
    "English_term": "social engineering",
    "Polish_term": "inżynieria społeczna",
    "Notes": "the use of deception to manipulate individuals into divulging confidential or personal information that may be used for fraudulent purposes"
  },
  {
    "ID": "102",
    "Ukrainian_term": "гарантування програмного забезпечення",
    "English_term": "software assurance",
    "Polish_term": "zapewnienie jakości oprogramowania",
    "Notes": "The level of confidence that software is free from vulnerabilities, either intentionally designed into the software or accidentally inserted at any time during its lifecycle, and that the software functions in the intended manner."
  },
  {
    "ID": "103",
    "Ukrainian_term": "спам",
    "English_term": "spam",
    "Polish_term": "spam",
    "Notes": "The abuse of electronic messaging systems to indiscriminately send unsolicited bulk messages."
  },
  {
    "ID": "104",
    "Ukrainian_term": "спуфінг",
    "English_term": "spoofing",
    "Polish_term": "spoofing",
    "Notes": "Faking the sending address of a transmission to gain illegal [unauthorized] entry into a secure system."
  },
  {
    "ID": "105",
    "Ukrainian_term": "шпигунське програмне забезпечення",
    "English_term": "spyware",
    "Polish_term": "spyware",
    "Notes": "Software that is secretly or surreptitiously installed into an information system without the knowledge of the system user or owner."
  },
  {
    "ID": "106",
    "Ukrainian_term": "ланцюг постачання",
    "English_term": "supply chain",
    "Polish_term": "łańcuch dostaw",
    "Notes": "A system of organizations, people, activities, information and resources, for creating and moving products including product components and/or services from suppliers through to their customers."
  },
  {
    "ID": "107",
    "Ukrainian_term": "управління ризиками ланцюга постачання",
    "English_term": "supply chain risk management",
    "Polish_term": "zarządzanie ryzykiem łańcucha dostaw",
    "Notes": "The process of identifying, analyzing, and assessing supply chain risk and accepting, avoiding, transferring or controlling it to an acceptable level considering associated costs and benefits of any actions taken."
  },
  {
    "ID": "108",
    "Ukrainian_term": "симетрична криптографія",
    "English_term": "symmetric cryptography",
    "Polish_term": "kryptografia symetryczna",
    "Notes": "A branch of cryptography in which a cryptographic system or algorithms use the same secret key (a shared secret key)."
  },
  {
    "ID": "109",
    "Ukrainian_term": "штабне навчання",
    "English_term": "tabletop exercise",
    "Polish_term": "ćwiczenie symulacyjne",
    "Notes": "A discussion-based exercise where personnel meet in a classroom setting or breakout groups and are presented with a scenario to validate the content of plans, procedures, policies, cooperative agreements or other information for managing an incident."
  },
  {
    "ID": "110",
    "Ukrainian_term": "загроза",
    "English_term": "threat",
    "Polish_term": "zagrożenie",
    "Notes": "A circumstance or event that has or indicates the potential to exploit vulnerabilities and to adversely impact (create adverse consequences for) organizational operations, organizational assets (including information and information systems), individuals, other organizations, or society."
  },
  {
    "ID": "111",
    "Ukrainian_term": "джерело загрози",
    "English_term": "threat agent",
    "Polish_term": "źródło zagrożenia",
    "Notes": "An individual, group, organization, or government that conducts or has the intent to conduct detrimental activities."
  },
  {
    "ID": "112",
    "Ukrainian_term": "аналіз загроз",
    "English_term": "threat analysis",
    "Polish_term": "analiza zagrożeń",
    "Notes": "The detailed evaluation of the characteristics of individual threats."
  },
  {
    "ID": "113",
    "Ukrainian_term": "оцінка загроз",
    "English_term": "threat assessment",
    "Polish_term": "ocena zagrożeń",
    "Notes": "The product or process of identifying or evaluating entities, actions, or occurrences, whether natural or man-made, that have or indicate the potential to harm life, information, operations, and/or property."
  },
  {
    "ID": "114",
    "Ukrainian_term": "протокол світлофора",
    "English_term": "traffic light protocol",
    "Polish_term": "protokół sygnalizacji świetlnej",
    "Notes": "A set of designations employing four colors (RED, AMBER, GREEN, and WHITE) used to ensure that sensitive information is shared with the correct audience."
  },
  {
    "ID": "115",
    "Ukrainian_term": "троянський кінь",
    "English_term": "trojan horse",
    "Polish_term": "koń trojański",
    "Notes": "A computer program that appears to have a useful function, but also has a hidden and potentially malicious function that evades security mechanisms, sometimes by exploiting legitimate authorizations of a system entity that invokes the program."
  },
  {
    "ID": "116",
    "Ukrainian_term": "несанкціонований доступ",
    "English_term": "unauthorized access",
    "Polish_term": "nieautoryzowany dostęp",
    "Notes": "Any access that violates the stated security policy."
  },
  {
    "ID": "117",
    "Ukrainian_term": "вірус",
    "English_term": "virus",
    "Polish_term": "wirus",
    "Notes": "A computer program that can replicate itself, infect a computer without permission or knowledge of the user, and then spread or propagate to another computer."
  },
  {
    "ID": "118",
    "Ukrainian_term": "вішинг",
    "English_term": "vishing",
    "Polish_term": "vishing",
    "Notes": "a hacking technique of defrauding target's over the phone, enticing them to divulge sensitive information"
  },
  {
    "ID": "119",
    "Ukrainian_term": "вразливість",
    "English_term": "vulnerability",
    "Polish_term": "podatność",
    "Notes": "A characteristic or specific weakness that renders an organization or asset (such as information or an information system) open to exploitation by a given threat or susceptible to a given hazard."
  },
  {
    "ID": "120",
    "Ukrainian_term": "біла команда",
    "English_term": "white team",
    "Polish_term": "white team",
    "Notes": "A group responsible for refereeing an engagement between a Red Team of mock attackers and a Blue Team of actual defenders of information systems."
  },
  {
    "ID": "121",
    "Ukrainian_term": "фактор трудовитрат",
    "English_term": "work factor",
    "Polish_term": "współczynnik pracochłonności",
    "Notes": "An estimate of the effort or time needed by a potential adversary, with specified expertise and resources, to overcome a protective measure."
  },
  {
    "ID": "122",
    "Ukrainian_term": "хробак",
    "English_term": "worm",
    "Polish_term": "robak",
    "Notes": "A self-replicating, self-propagating, self-contained program that uses networking mechanisms to spread itself."
  },
  {
    "ID": "123",
    "Ukrainian_term": "активний вміст",
    "English_term": "active content",
    "Polish_term": "aktywna zawartość",
    "Notes": "Software that is able to automatically carry out or trigger actions without the explicit intervention of a user."
  },
  {
    "ID": "124",
    "Ukrainian_term": "фізична ізоляція",
    "English_term": "air gap",
    "Polish_term": "szczelina powietrzna",
    "Notes": "To physically separate or isolate a system from other systems or networks (verb)."
  },
  {
    "ID": "125",
    "Ukrainian_term": "розвідка з усіх джерел",
    "English_term": "all source intelligence",
    "Polish_term": "pozyskiwanie informacji z wielu źródeł",
    "Notes": "Analyzes threat information from multiple sources, disciplines, and agencies across the Intelligence Community. Synthesizes and places intelligence information in context; draws insights about the possible implications."
  },
  {
    "ID": "126",
    "Ukrainian_term": "антивірусне програмне забезпечення",
    "English_term": "antivirus software",
    "Polish_term": "oprogramowanie antywirusowe",
    "Notes": "A program that monitors a computer or network to detect or identify major types of malicious code and to prevent or contain malware incidents. Sometimes by removing or neutralizing the malicious code."
  },
  {
    "ID": "127",
    "Ukrainian_term": "актив",
    "English_term": "asset",
    "Polish_term": "zasób",
    "Notes": "A person, structure, facility, information, and records, information technology systems and resources, material, process, relationships, or reputation that has value."
  },
  {
    "ID": "128",
    "Ukrainian_term": "метод атаки",
    "English_term": "attack method",
    "Polish_term": "metoda ataku",
    "Notes": "The manner or technique and means an adversary may use in an assault on information or an information system."
  },
  {
    "ID": "129",
    "Ukrainian_term": "шаблон атаки",
    "English_term": "attack pattern",
    "Polish_term": "wzorzec ataku",
    "Notes": "Similar cyber events or behaviors that may indicate an attack has occurred or is occurring, resulting in a security violation or a potential security violation."
  },
  {
    "ID": "130",
    "Ukrainian_term": "зловмисник",
    "English_term": "attacker",
    "Polish_term": "napastnik",
    "Notes": "An individual, group, organization, or government that executes an attack."
  }
];

/* ============================================================
   1. UI TRANSLATIONS DICTIONARY
   All user-facing strings in three languages.
   ============================================================ */
const uiTranslations = {
  en: {
    mainTitle: "Cybersecurity Terminology Explained",
    vision: "Decoding the digital battlefield.",
    searchPlaceholder: "Search terms in any language\u2026",
    zenLabel: "Zen Mode",
    notFound: "Term not found in the dictionary",
    initialHint: "Start typing or select a letter to browse terms",
    biblioTitle: "Sources / Reference Material",
    footerGithub: "Contact Us / Open Source",
    statsShowing: "Showing",
    statsOf: "of",
    statsTerms: "terms",
    notesLabel: "Definition",
    showAll: "Show All",
  },
  uk: {
    mainTitle: "\u041A\u0456\u0431\u0435\u0440\u0431\u0435\u0437\u043F\u0435\u043A\u0430: \u0442\u0435\u0440\u043C\u0456\u043D\u0438 \u0442\u0430 \u0432\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F",
    vision: "\u0420\u043E\u0437\u0448\u0438\u0444\u0440\u043E\u0432\u0443\u0454\u043C\u043E \u0446\u0438\u0444\u0440\u043E\u0432\u0435 \u043F\u043E\u043B\u0435 \u0431\u043E\u044E.",
    searchPlaceholder: "\u0428\u0443\u043A\u0430\u0442\u0438 \u0442\u0435\u0440\u043C\u0456\u043D\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u044E \u043C\u043E\u0432\u043E\u044E\u2026",
    zenLabel: "\u0420\u0435\u0436\u0438\u043C \u0444\u043E\u043A\u0443\u0441\u0443",
    notFound: "\u0422\u0435\u0440\u043C\u0456\u043D \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0443 \u0441\u043B\u043E\u0432\u043D\u0438\u043A\u0443",
    initialHint: "\u041F\u043E\u0447\u043D\u0456\u0442\u044C \u0432\u0432\u043E\u0434\u0438\u0442\u0438 \u0430\u0431\u043E \u043E\u0431\u0435\u0440\u0456\u0442\u044C \u043B\u0456\u0442\u0435\u0440\u0443",
    biblioTitle: "\u0414\u0436\u0435\u0440\u0435\u043B\u0430 / \u0414\u043E\u0432\u0456\u0434\u043A\u043E\u0432\u0456 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0438",
    footerGithub: "\u0417\u0432'\u044F\u0437\u0430\u0442\u0438\u0441\u044F / \u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438\u0439 \u043A\u043E\u0434",
    statsShowing: "\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E",
    statsOf: "\u0437",
    statsTerms: "\u0442\u0435\u0440\u043C\u0456\u043D\u0456\u0432",
    notesLabel: "\u0412\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F",
    showAll: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0432\u0441\u0456",
  },
  pl: {
    mainTitle: "S\u0142ownik cyberbezpiecze\u0144stwa",
    vision: "Dekodujemy cyfrowe pole bitwy.",
    searchPlaceholder: "Szukaj termin\u00F3w w dowolnym j\u0119zyku\u2026",
    zenLabel: "Tryb Zen",
    notFound: "Termin nie zosta\u0142 znaleziony w s\u0142owniku",
    initialHint: "Zacznij pisa\u0107 lub wybierz liter\u0119, aby przegl\u0105da\u0107 terminy",
    biblioTitle: "\u0179r\u00F3d\u0142a / Materia\u0142y referencyjne",
    footerGithub: "Kontakt / Open Source",
    statsShowing: "Wy\u015Bwietlono",
    statsOf: "z",
    statsTerms: "termin\u00F3w",
    notesLabel: "Definicja",
    showAll: "Poka\u017C wszystko",
  }
};

/* ============================================================
   2. ALPHABET DEFINITIONS PER LANGUAGE
   ============================================================ */
const alphabets = {
  en: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  uk: '\u0410\u0411\u0412\u0413\u0414\u0415\u0416\u0417\u0418\u0419\u041A\u041B\u041C\u041D\u041E\u041F\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042C\u042E\u042F'.split(''),
  pl: ['A','\u0104','B','C','\u0106','D','E','\u0118','F','G','H','I','J','K','L','\u0141','M','N','\u0143','O','\u00D3','P','Q','R','S','\u015A','T','U','V','W','X','Y','Z','\u0179','\u017B']
};

/** Maps language key to its two "other" languages for card sub-terms */
const otherLangsMap = {
  en: [{ key: 'uk', field: 'Ukrainian_term', label: 'UK' }, { key: 'pl', field: 'Polish_term', label: 'PL' }],
  uk: [{ key: 'en', field: 'English_term', label: 'EN' }, { key: 'pl', field: 'Polish_term', label: 'PL' }],
  pl: [{ key: 'en', field: 'English_term', label: 'EN' }, { key: 'uk', field: 'Ukrainian_term', label: 'UK' }]
};

/** Maps UI language to the JSON field used for that language */
const langFieldMap = {
  en: 'English_term',
  uk: 'Ukrainian_term',
  pl: 'Polish_term'
};

/* ============================================================
   3. APPLICATION STATE
   ============================================================ */
let currentLang = 'en';      // Currently selected UI language
let zenActive = false;        // Whether Zen Mode is on
let activeLetter = null;      // Currently selected alphabet letter (or null)

/* ============================================================
   4. DOM ELEMENT REFERENCES
   ============================================================ */
const $ = (id) => document.getElementById(id);

const dom = {
  mainTitle:       $('mainTitle'),
  visionStatement: $('visionStatement'),
  searchInput:     $('searchInput'),
  searchClear:     $('searchClear'),
  searchStats:     $('searchStats'),
  alphaIndex:      $('alphaIndex'),
  resultsArea:     $('resultsArea'),
  emptyState:      $('emptyState'),
  emptyStateText:  $('emptyStateText'),
  initialState:    $('initialState'),
  initialStateText:$('initialStateText'),
  zenToggle:       $('zenToggle'),
  zenLabel:        $('zenLabel'),
  biblioTitle:     $('biblioTitle'),
  biblioToggle:    $('bibliographyToggle'),
  biblioContent:   $('bibliographyContent'),
  footerGithubText:$('footerGithubText'),
  showAllBtn:      $('showAllBtn'),
  langBtns:        document.querySelectorAll('.lang-btn'),
};

/* ============================================================
   5. UTILITY FUNCTIONS
   ============================================================ */

/**
 * Escapes special regex characters in a string so it can be
 * safely used inside a RegExp constructor.
 * @param {string} str - raw user input
 * @returns {string} escaped string
 */
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Wraps every occurrence of `query` inside `text` with a
 * <span class="highlight-match"> tag. Case-insensitive.
 * Uses regex replacement and HTML-escapes surrounding text
 * to prevent XSS while preserving highlight markup.
 * @param {string} text  - original term text
 * @param {string} query - search query
 * @returns {string} HTML string with highlights
 */
function highlightMatch(text, query) {
  if (!query) return escapeHTML(text);
  const escaped = escapeRegex(query);
  // Word-boundary aware: match only at the start of a word.
  // Standard \b doesn't work for Cyrillic/Polish, so we use a
  // lookbehind for start-of-string or whitespace/punctuation.
  const regex = new RegExp(`((?:^|[\\s.,!?;:\\-\\(\\)/]))(${escaped})`, 'gi');
  // We do a manual scan approach to avoid breaking HTML
  const result = [];
  let lastIndex = 0;
  let match;
  // Reset regex state
  const globalRegex = new RegExp(`((?:^|[\\s.,!?;:\\-\\(\\)/]))(${escaped})`, 'gi');
  while ((match = globalRegex.exec(text)) !== null) {
    const prefix = match[1]; // the whitespace/punctuation before the match
    const matched = match[2]; // the actual matched term
    const beforeStart = match.index;
    // Add everything before this match (including prefix chars)
    result.push(escapeHTML(text.slice(lastIndex, beforeStart + prefix.length)));
    // Add highlighted match
    result.push(`<span class="highlight-match">${escapeHTML(matched)}</span>`);
    lastIndex = beforeStart + prefix.length + matched.length;
  }
  // Add remaining text
  result.push(escapeHTML(text.slice(lastIndex)));
  return result.join('');
}

/**
 * Basic HTML entity escaping to prevent XSS in dynamic content.
 */
function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ============================================================
   6. UI LANGUAGE SYSTEM
   Switches all interface text without reloading the page.
   ============================================================ */

/**
 * Applies the selected language to every translatable UI element.
 * Also rebuilds the alphabetical index for the new language.
 * @param {string} lang - 'en', 'uk', or 'pl'
 */
function setLanguage(lang) {
  currentLang = lang;
  const t = uiTranslations[lang];

  // Update all translatable text nodes
  dom.mainTitle.textContent       = t.mainTitle;
  dom.visionStatement.textContent = t.vision;
  dom.searchInput.placeholder     = t.searchPlaceholder;
  dom.zenLabel.textContent        = t.zenLabel;
  dom.emptyStateText.textContent  = t.notFound;
  dom.initialStateText.textContent= t.initialHint;
  dom.biblioTitle.textContent     = t.biblioTitle;
  dom.footerGithubText.textContent= t.footerGithub;
  dom.showAllBtn.textContent      = t.showAll;

  // Toggle active class on language buttons
  dom.langBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Rebuild alphabet for the selected language
  buildAlphabetIndex(lang);

  // Re-run current search or letter filter to update card display
  if (dom.searchInput.value.trim()) {
    performSearch(dom.searchInput.value.trim());
  } else if (activeLetter) {
    filterByLetter(activeLetter);
  } else {
    showInitialState();
  }
}

/* ============================================================
   7. ALPHABET INDEX
   ============================================================ */

/**
 * Builds the clickable alphabet bar for the given language.
 * Letters with no matching terms are visually dimmed.
 * @param {string} lang - current UI language key
 */
function buildAlphabetIndex(lang) {
  const letters = alphabets[lang];
  const field = langFieldMap[lang];

  dom.alphaIndex.innerHTML = '';

  letters.forEach(letter => {
    const btn = document.createElement('button');
    btn.className = 'alpha-btn';
    btn.textContent = letter;
    btn.setAttribute('aria-label', `Filter by letter ${letter}`);

    // Check if any term starts with this letter
    const hasTerms = glossaryData.some(item =>
      item[field].toUpperCase().startsWith(letter.toUpperCase())
    );

    if (!hasTerms) {
      btn.classList.add('disabled');
    }

    // Mark active letter
    if (activeLetter && activeLetter.toUpperCase() === letter.toUpperCase()) {
      btn.classList.add('active');
    }

    btn.addEventListener('click', () => {
      if (!hasTerms) return;
      // Clear search input when using alphabet
      dom.searchInput.value = '';
      dom.searchClear.classList.remove('visible');
      activeLetter = letter;
      // Update active states on all buttons
      dom.alphaIndex.querySelectorAll('.alpha-btn').forEach(b =>
        b.classList.toggle('active',
          b.textContent.toUpperCase() === letter.toUpperCase())
      );
      filterByLetter(letter);
    });

    dom.alphaIndex.appendChild(btn);
  });
}

/**
 * Filters glossary by the first letter of the term in the
 * current UI language's field.
 * @param {string} letter - the selected letter
 */
function filterByLetter(letter) {
  const field = langFieldMap[currentLang];
  const results = glossaryData.filter(item =>
    item[field].toUpperCase().startsWith(letter.toUpperCase())
  );
  renderResults(results, '');
}

/* ============================================================
   8. SEARCH ENGINE
   Omni-lingual, case-insensitive search with highlighting.
   ============================================================ */

/**
 * Searches across all three language fields for the query.
 * @param {string} query - user's search input
 */
function performSearch(query) {
  activeLetter = null;
  // Remove active state from alphabet buttons
  dom.alphaIndex.querySelectorAll('.alpha-btn').forEach(b =>
    b.classList.remove('active')
  );

  if (!query) {
    showInitialState();
    return;
  }

  const lowerQuery = query.toLowerCase();

  /**
   * Word-boundary match: the query must appear at the START of a word
   * within the field value. We check if the query appears right after
   * a word separator (start of string, space, punctuation) in any field.
   */
  const boundaryRegex = new RegExp('(^|[\\s.,!?;:\\-\\(\\)/])' + escapeRegex(lowerQuery), 'i');

  const results = glossaryData.filter(item =>
    boundaryRegex.test(item.English_term) ||
    boundaryRegex.test(item.Ukrainian_term) ||
    boundaryRegex.test(item.Polish_term)
  );

  renderResults(results, query);
}

/* ============================================================
   9. RENDERING ENGINE
   Builds term cards and manages visibility of states.
   ============================================================ */

/**
 * Renders an array of glossary items as cards.
 * @param {Array} items - filtered glossary entries
 * @param {string} query - current search query (for highlighting)
 */
function renderResults(items, query) {
  const t = uiTranslations[currentLang];

  // Hide initial state
  dom.initialState.classList.add('hidden');

  if (items.length === 0) {
    // Show empty state
    dom.resultsArea.innerHTML = '';
    dom.emptyState.classList.remove('hidden');
    dom.searchStats.textContent = '';
    return;
  }

  // Hide empty state, show results
  dom.emptyState.classList.add('hidden');
  dom.searchStats.textContent =
    `${t.statsShowing} ${items.length} ${t.statsOf} ${glossaryData.length} ${t.statsTerms}`;

  // Determine which field is "primary" based on current UI language
  const primaryField = langFieldMap[currentLang];
  const others = otherLangsMap[currentLang];

  // Build cards HTML — primary term matches the selected UI language
  dom.resultsArea.innerHTML = items.map((item, i) => {
    const primaryText = highlightMatch(item[primaryField], query);
    const sub1Text = highlightMatch(item[others[0].field], query);
    const sub2Text = highlightMatch(item[others[1].field], query);
    const notes  = item.Notes ? escapeHTML(item.Notes) : '';

    return `
      <article class="term-card" style="animation-delay: ${Math.min(i * 0.04, 0.8)}s" id="term-${item.ID}">
        <span class="term-card__id">#${item.ID}</span>
        <div class="term-card__header">
          <h2 class="term-card__primary">${primaryText}</h2>
        </div>
        <div class="term-card__translations">
          <div class="term-card__lang">
            <span class="term-card__lang-label">${others[0].label}</span>
            <span class="term-card__lang-value">${sub1Text}</span>
          </div>
          <div class="term-card__lang">
            <span class="term-card__lang-label">${others[1].label}</span>
            <span class="term-card__lang-value">${sub2Text}</span>
          </div>
        </div>
        ${notes ? `
        <div class="term-card__notes">
          <div class="term-card__notes-label">${t.notesLabel}</div>
          ${notes}
        </div>` : ''}
      </article>
    `;
  }).join('');
}

/**
 * Shows the initial "type to search" state.
 */
function showInitialState() {
  dom.resultsArea.innerHTML = '';
  dom.emptyState.classList.add('hidden');
  dom.initialState.classList.remove('hidden');
  dom.searchStats.textContent = '';
  activeLetter = null;
  dom.alphaIndex.querySelectorAll('.alpha-btn').forEach(b =>
    b.classList.remove('active')
  );
}

/* ============================================================
   10. ZEN MODE
   ============================================================ */

/**
 * Toggles Zen Mode on/off. Adds/removes body class that
 * triggers CSS transitions to hide extraneous UI.
 */
function toggleZenMode() {
  zenActive = !zenActive;
  document.body.classList.toggle('zen-active', zenActive);
  dom.zenToggle.classList.toggle('active', zenActive);
  // Focus the search input in zen mode
  if (zenActive) {
    dom.searchInput.focus();
  }
}

/* ============================================================
   11. BIBLIOGRAPHY TOGGLE
   ============================================================ */

function toggleBibliography() {
  const expanded = dom.biblioToggle.getAttribute('aria-expanded') === 'true';
  dom.biblioToggle.setAttribute('aria-expanded', String(!expanded));
  dom.biblioContent.classList.toggle('open', !expanded);
}

/* ============================================================
   12. EVENT LISTENERS
   ============================================================ */

function initEventListeners() {
  // Language buttons
  dom.langBtns.forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Search input — debounced
  let searchTimeout;
  dom.searchInput.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    dom.searchClear.classList.toggle('visible', val.length > 0);
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => performSearch(val), 180);
  });

  // Clear button
  dom.searchClear.addEventListener('click', () => {
    dom.searchInput.value = '';
    dom.searchClear.classList.remove('visible');
    showInitialState();
    dom.searchInput.focus();
  });

  // Show All button
  dom.showAllBtn.addEventListener('click', () => {
    dom.searchInput.value = '';
    dom.searchClear.classList.remove('visible');
    activeLetter = null;
    dom.alphaIndex.querySelectorAll('.alpha-btn').forEach(b =>
      b.classList.remove('active')
    );
    renderResults(glossaryData, '');
  });

  // Zen Mode
  dom.zenToggle.addEventListener('click', toggleZenMode);

  // Bibliography
  dom.biblioToggle.addEventListener('click', toggleBibliography);

  // Keyboard shortcut: Escape to exit Zen Mode
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && zenActive) {
      toggleZenMode();
    }
  });
}

/* ============================================================
   13. INITIALIZATION
   ============================================================ */

function init() {
  initEventListeners();
  setLanguage('en');    // Default language
  showInitialState();   // Show hint on load
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', init);

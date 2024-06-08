const questions = [
    {
        question: "Top	1	most	critical	issues	according	to millenial?",
        answers: {
            a: "Poverty",
            b: "Government corruption",
            c: "Lack of education",
            d: "Climate change"
        },
        correctAnswer: "d"
    },
    {
        question: "In what rank among the top 10 critical issues to millenial is the government corruption?",
        answers: {
            a: "4",
            b: "1",
            c: "6",
            d: "7"
        },
        correctAnswer: "c"
    },
  
    {
        question: "What  is  the  top  4  most  critical  problem according to millennial?",
        answers: {
            a: "Poverty",
            b: "Government corruption",
            c: "Lack of education",
            d: "Climate change"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the percentage of total population of the philippines connected to sewer system?",
        answers: {
            a: "3%",
            b: "4%",
            c: "5%",
            d: "6%"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the approximate percentage of households that have access to piped sewerage systems?",
        answers: {
            a: "8%",
            b: "10%",
            c: "12%",
            d: "13%"
        },
        correctAnswer: "b"
    },
    {
        question: " Where can we find the Tarxien Temple?",
        answers: {
            a: "Mexico",
            b: "Turkey",
            c: "Italy",
            d: "Malta"
        },
        correctAnswer: "d"
    },
    {
        question: "Where can we find the Olmec Heads?",
        answers: {
            a: "Mexico",
            b: "Turkey",
            c: "Italy",
            d: "Malta"
        },
        correctAnswer: "a"
    },
    {
        question: " Where can we find the Nuraghe Temple?",
        answers: {
            a: "Mexico",
            b: "Turkey",
            c: "Italy",
            d: "Malta"
        },
        correctAnswer: "c"
    },
    {
        question: "Where can we find the Gobekli Tepe?",
        answers: {
            a: "Mexico",
            b: "Turkey",
            c: "Italy",
            d: "Scotland"
        },
        correctAnswer: "b"
    },
    {
        question: "Where can we find the Callanish Stones?",
        answers: {
            a: "Mexico",
            b: "Turkey",
            c: "Italy",
            d: "Scotland"
        },
        correctAnswer: "d"
    },
   
    {
        question: "A turning space of _____ sqm with a minimum dimension of 1.50 m for wheelchairs shall be provided outside water closet stalls",
        answers: {
            a: "1.50",
            b: "2.25",
            c: "3.00",
            d: "5.25"
        },
        correctAnswer: "b"
    },
    {
        question: "Maximum height of lavatories should be _____",
        answers: {
            a: "0.85m",
            b: "0.80m",
            c: "0.90m",
            d: "0.70m"
        },
        correctAnswer: "b"
    },
    {
        question: "The maximum height of waterclosets should be _____.",
        answers: {
            a: "0.43m",
            b: "0.45m",
            c: "0.48m",
            d: "0.50m"
        },
        correctAnswer: "b"
    },
    {
        question: "Urinals should have an elongated lip or should be trough-type; the maximum height of the lip should be _____",
        answers: {
            a: "0.43m",
            b: "0.45m",
            c: "0.48m",
            d: "0.50m"
        },
        correctAnswer: "c"
    },
    {
        question: "Which is a debatable statement when it comes to ESD?",
        answers: {
            a: "There is no universally accepted definition of ecologically sustainable development ",
            b: "ESD is suing, conserving and enhancing community's resources",
            c: "There is a universal definition of ESD",
            d: "ESD is associated with increasing quality of life in the future "
        },
        correctAnswer: "d"
    },
    {
        question: "What is the most common method of rain harvesting being used in residential houses today?",
        answers: {
            a: "Catch Basins and directed to storm drains. ",
            b: "Rain water collected at roof gutter and directed to water containers",
            c: "Downspouts directed to septic tanks.",
            d: "Catch basin and directed to concrete culverts"
        },
        correctAnswer: "b"
    },
    {
        question: "What is considered non-renewable source of energy?",
        answers: {
            a: "Wind",
            b: "Fossil fuels",
            c: "Sun",
            d: "Water"
        },
        correctAnswer: "b"
    },
    {
        question: "What is considered renewable source of energy?",
        answers: {
            a: "Fossil fuels",
            b: "Coal",
            c: "Gasoline",
            d: "Biomass"
        },
        correctAnswer: "d"
    },
    {
        question: "What is considered NOT conforming to ESD?",
        answers: {
            a: "Vigorous protection of biodiversity",
            b: "Propagation of organic farming practices",
            c: "Massive reforestation",
            d: "Massive use of fossil fuels"
        },
        correctAnswer: "d"
    },
    
    {
        question: "Where can we find the Tarxien Temple?",
        answers: {
            a: "Mexico",
            b: "Turkey",
            c: "Italy",
            d: "Malta"
        },
        correctAnswer: "d"
    },
    {
        question: "Where can we find the Olmec Heads?",
        answers: {
            a: "Mexico",
            b: "Turkey",
            c: "Italy",
            d: "Malta"
        },
        correctAnswer: "a"
    },
    {
        question: "Where can we find the Nuraghe Temple?",
        answers: {
            a: "Mexico",
            b: "Turkey",
            c: "Italy",
            d: "Malta"
        },
        correctAnswer: "c"
    },
    {
        question: "Where can we find the Gobekli Tepe?",
        answers: {
            a: "Mexico",
            b: "Turkey",
            c: "Italy",
            d: "Scotland"
        },
        correctAnswer: "b"
    },
    {
        question: "Where can we find the Callanish Stones?",
        answers: {
            a: "Mexico",
            b: "Turkey",
            c: "Italy",
            d: "Scotland"
        },
        correctAnswer: "d"
    },
    {
        question: "Movement characterized by a patterned repetition or alternation of formal elements or motifs in the same or a modified form",
        answers: {
            a: "Emphasis",
            b: "Repetition",
            c: "Symmetry",
            d: "Rhythm"
        },
        correctAnswer: "d"
    },
    {
        question: "The exact correspondence in size, form, and arrangement of parts on opposite sides of a dividing line or plane, or about a center or axis. Also, regularity of form or arrangement in terms of like, reciprocal, or corresponding parts",
        answers: {
            a: "Emphasis",
            b: "Repetition",
            c: "Symmetry",
            d: "Rhythm"
        },
        correctAnswer: "c"
    },
    {
        question: "The act or process of repeating formal elements or motifs in a design",
        answers: {
            a: "Emphasis",
            b: "Repetition",
            c: "Hierarchy",
            d: "Rhythm"
        },
        correctAnswer: "b"
    },
    {
        question: "Stress or prominence given to an element of a composition by means of contrast, anomaly, or counterpoint",
        answers: {
            a: "Emphasis",
            b: "Repetition",
            c: "Hierarchy",
            d: "Rhythm"
        },
        correctAnswer: "a"
    },
    {
        question: "A system of elements ranked, classified, and organized one above another, according to importance or significance",
        answers: {
            a: "Emphasis",
            b: "Repetition",
            c: "Hierarchy",
            d: "Rhythm"
        },
        correctAnswer: "c"
    },
   
    {
        question: "Characteristic of a gothic bell tower",
        answers: {
            a: "Separated",
            b: "No bell tower",
            c: "Tall",
            d: "Short"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the usual shape of a gothic arch?",
        answers: {
            a: "Flat",
            b: "Semi circular",
            c: "Pointed",
            d: "Circular"
        },
        correctAnswer: "c"
    },
    {
        question: "Characteristic of a gothic church interior",
        answers: {
            a: "Light and airy",
            b: "Dark",
            c: "Barbaric",
            d: "Eclectic"
        },
        correctAnswer: "a"
    },
    {
        question: "Characteristic of gothic buttress",
        answers: {
            a: "Flat",
            b: "Flying",
            c: "Flushed",
            d: "No buttress"
        },
        correctAnswer: "b"
    },
    {
        question: "What period did gothic architecture flourish?",
        answers: {
            a: "1240 - 1400",
            b: "1140 - 1400",
            c: "1440 - 1600",
            d: "410 - 1500"
        },
        correctAnswer: "b"
    },
    {
        question: "What supports the dome in a byzantine church?",
        answers: {
            a: "Base",
            b: "Plinth",
            c: "Zocalo",
            d: "Pendentive"
        },
        correctAnswer: "d"
    },
    {
        question: "It is the first Christian church built in Constantinople, by Roman emperor Constantine I.",
        answers: {
            a: "Hagia Sophia",
            b: "Hagia Irene",
            c: "Hagia Theodosia",
            d: "Basilica of San Vitale"
        },
        correctAnswer: "b"
    },
    {
        question: "The original exterior color of this church was white. In present day, its exterior developed to a colorful one.",
        answers: {
            a: "Hagia Sophia",
            b: "St. Basil's Cathedral",
            c: "Hagia Theodosia",
            d: "Basilica of San Vitale"
        },
        correctAnswer: "b"
    },
    {
        question: "Characteristic  of byzantine architecture",
        answers: {
            a: "Square plan",
            b: "Greek cross plan",
            c: "Without domes",
            d: "Flying buttress"
        },
        correctAnswer: "b"
    },
    {
        question: "What period did Byzantine Architecture flourish?",
        answers: {
            a: "Between A.D. 627 and 665",
            b: "Between A.D. 527 and 565",
            c: "Between A.D. 427 and 465",
            d: "Between A.D. 827 and 865"
        },
        correctAnswer: "b"
    },
    {
        question: "Minimum frontage for single detached corner lot.",
        answers: {
            a: "14",
            b: "12",
            c: "10",
            d: "8"
        },
        correctAnswer: "b"
    },
    {
        question: "Minimum frontage for single detached regular lot",
        answers: {
            a: "14",
            b: "12",
            c: "10",
            d: "8"
        },
        correctAnswer: "c"
    },
    {
        question: "How much allocation in percentage of gross area for parks and playground if the density is 21-25 DU/Has?",
        answers: {
            a: "4",
            b: "5",
            c: "6",
            d: "7"
        },
        correctAnswer: "a"
    },
    {
        question: "How much allocation in percentage of gross area for parks and playground if the density is 36-50 DU/Has?",
        answers: {
            a: "5",
            b: "6",
            c: "7",
            d: "9"
        },
        correctAnswer: "b"
    },
    {
        question: "How much allocation in percentage of gross area for parks and playground if the density is 51-65 DU/Has?",
        answers: {
            a: "5",
            b: "6",
            c: "7",
            d: "9"
        },
        correctAnswer: "c"
    },
   
    {
        question: "All architectural plans, designs, specifications, drawings and architectural documents relative to the construction of a building shall bear the __________ only of an architect registered and licensed under R.A. No. 9266 together with his/her professional identification card number and the date of its expiration",
        answers: {
            a: "Sign",
            b: "Seal",
            c: "Sign and Seal",
            d: "Sign and PTR"
        },
        correctAnswer: "c"
    },
    {
        question: "In the event of refusal to issue certificate for any reason, the Board shall give the applicant a written statement setting forth the reasons for such action, which statement shall be incorporated in the record of the Board: Provided, however, That registration shall not be refused and a name shall not be removed from the roster of architects on conviction for a __________ or for an offense which should not, in the opinion of the Board, either from the nature of the offense or from the circumstances of the case, disqualify a person from practicing under R.A. No. 9266",
        answers: {
            a: "Political offense",
            b: "Moral turpitude",
            c: "Misdemeanor",
            d: "All of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "All disputes, claims, questions subject to _____ shall be settled in accordance with the provisions of the UAP document.",
        answers: {
            a: "Out of court settlement",
            b: "Arbitration",
            c: "Small court claims",
            d: "All of the above"
        },
        correctAnswer: "b"
    },
    {
        question: "The Architect shall not use __________ nor use self-laudatory, exaggerated or misleading publicity. However, the presentation of factual materials, verbal or visual, of the aims, standards and progress of the profession through literature or by industrious application of his work and services which tend to dignify the professional or advance public knowledge of the Architect’s function in society may be presented through any public communication media.",
        answers: {
            a: "Solicitation",
            b: "Power",
            c: "Paid advertisement",
            d: "None of the above"
        },
        correctAnswer: "c"
    },
    {
        question: "The architect shall not solicit free __________ or other technical services from manufacturers or suppliers of building materials or equipment when these are accompanied by an obligation detrimental to the best interest of the Client, or which may adversely affect the Architect's professional opinion",
        answers: {
            a: "Materials",
            b: "Labor",
            c: "Professional engineering/allied design",
            d: "All of the above"
        },
        correctAnswer: "c"
    },
    {
        question: "When the suspension of construction exceeds a period of _____ months, the fee for the remaining works shall be doubled",
        answers: {
            a: "1",
            b: "3",
            c: "6",
            d: "12"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the following is not a heat transfer?",
        answers: {
            a: "Conduction",
            b: "Evaporation",
            c: "Convection",
            d: "Radiation"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the opening inlet height for windows?",
        answers: {
            a: "0.90 m",
            b: "1.20 m",
            c: "1.80 m",
            d: "2.10 m"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the opening outlet height for windows?",
        answers: {
            a: "0.90 m",
            b: "1.20 m",
            c: "1.80 m",
            d: "2.10 m"
        },
        correctAnswer: "d"
    },
    {
        question: "What is habagat?",
        answers: {
            a: "Northeast monsoon",
            b: "Northwest monsoon",
            c: "Southeast monsoon",
            d: "Southwest monsoon"
        },
        correctAnswer: "d"
    },
    {
        question: "What is amihan?",
        answers: {
            a: "Northeast monsoon",
            b: "Northwest monsoon",
            c: "Southeast monsoon",
            d: "Southwest monsoon"
        },
        correctAnswer: "a"
    },
    {
        question: "What does PABX mean?",
        answers: {
            a: "Private automatic branch exchange",
            b: "Public automatic branch exchange",
            c: "People access branch exchange",
            d: "Philippines automatic branch exchange"
        },
        correctAnswer: "a"
    },
    {
        question: "What does BMS mean?",
        answers: {
            a: "Body mass system",
            b: "Building maintenance system",
            c: "Building manual sheet",
            d: "Building management system"
        },
        correctAnswer: "d"
    },
    {
        question: "What does ISDN mean?",
        answers: {
            a: "Integrated services digital network",
            b: "International services dual network",
            c: "Integrated system of dual network",
            d: "International services digital network"
        },
        correctAnswer: "a"
    },
    {
        question: "What does FACP mean?",
        answers: {
            a: "Fire alarm computed power",
            b: "Fire alarm control power",
            c: "Fire alarm control panel",
            d: "Fire alarm communication pole"
        },
        correctAnswer: "c"
    },
    {
        question: "What does FDAS mean?",
        answers: {
            a: "Fire detection and alarm system",
            b: "Fire department access system",
            c: "Fire development accreditation symbol",
            d: "Fire detection and access system"
        },
        correctAnswer: "a"
    },
    {
        question: "It has a central chamber that is surrounded by small chambers",
        answers: {
            a: "Passage",
            b: "Stone circle",
            c: "Wedge",
            d: "Court"
        },
        correctAnswer: "a"
    },
    {
        question: "Tombs oriented from north and south with long passage",
        answers: {
            a: "Passage",
            b: "Stone circle",
            c: "Wedge",
            d: "Court"
        },
        correctAnswer: "c"
    },
    {
        question: "Consisting of a series of upright stones arranged in a circle and supporting horizontal slabs",
        answers: {
            a: "Passage",
            b: "Stone circle",
            c: "Wedge",
            d: "Court"
        },
        correctAnswer: "b"
    },
    {
        question: "Formed of branches of trees and covered with turf",
        answers: {
            a: "Lean to",
            b: "Stone circle",
            c: "Hut",
            d: "Court"
        },
        correctAnswer: "c"
    },
    {
        question: "One side is leaned to a cave and is supported by stones at the base",
        answers: {
            a: "Lean to",
            b: "Stone circle",
            c: "Hut",
            d: "Court"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the construction system of the Greeks?",
        answers: {
            a: "Trussed",
            b: "Buttressed",
            c: "Columnar and trabeated",
            d: "Arcuated"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the architectural character of the Greeks?",
        answers: {
            a: "Vastness and magnificence",
            b: "Simplicity and harmony",
            c: "Ostentation and ornatenes",
            d: "Solidity and massiveness"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the architectural character of the Romans?",
        answers: {
            a: "Simplicity and harmony",
            b: "Solidity and massiveness",
            c: "Monumentality",
            d: "Vastness and magnificence"
        },
        correctAnswer: "d"
    },
    {
        question: "What buildings are the Romans famous for?",
        answers: {
            a: "Temple",
            b: "Aphitheater",
            c: "Aqueduct",
            d: "Dwellings"
        },
        correctAnswer: "b"
    },
    {
        question: "Most famous and largest amphitheater of the Romans",
        answers: {
            a: "Colosseum",
            b: "Verona",
            c: "Marcellus",
            d: "Orange"
        },
        correctAnswer: "a"
    },
    {
        question: "Any set of colors, such as red, yellow, and blue, regarded as generating all other colors.",
        answers: {
            a: "Primary colors",
            b: "Secondary colors",
            c: "Tertiary colors",
            d: "None of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "A color, such as orange, green, or violet, produced by mixing two primary colors",
        answers: {
            a: "Primary colors",
            b: "Secondary colors",
            c: "Tertiary colors",
            d: "None of the above"
        },
        correctAnswer: "b"
    },
    {
        question: "A color, such as brown, produced by mixing two secondary colors, or a secondary color with one of its constituent primaries",
        answers: {
            a: "Primary colors",
            b: "Secondary colors",
            c: "Tertiary colors",
            d: "None of the above"
        },
        correctAnswer: "c"
    },
    {
        question: "One of a pair of opposing colors on a wheel, perceived as completing or enhancing each other",
        answers: {
            a: "Complementary",
            b: "Analogous",
            c: "Triad",
            d: "Split complementary"
        },
        correctAnswer: "a"
    },
    {
        question: "One of two or three closely related colors on a color wheel",
        answers: {
            a: "Complementary",
            b: "Analogous",
            c: "Triad",
            d: "Split complementary"
        },
        correctAnswer: "b"
    },
    {
        question: "What is a pump used to move water vertically from the underground cistern to an overhead tank?",
        answers: {
            a: "Booster pump",
            b: "Transfer pump",
            c: "Jockey pump",
            d: "Sump pump"
        },
        correctAnswer: "b"
    },
    {
        question: "What is a pump connected to a fire sprinkler system to maintain pressure in the sprinkler pipes?",
        answers: {
            a: "Pressure pump",
            b: "Jockey pump",
            c: "Booster pump",
            d: "Fire pump"
        },
        correctAnswer: "b"
    },
    {
        question: "What is a pump designed to increase water supply pressure where inadequate water pressure exists?",
        answers: {
            a: "Positive displacement pump",
            b: "Booster pump",
            c: "Jockey pump",
            d: "Pressure pump"
        },
        correctAnswer: "b"
    },
    {
        question: "What is a pump that uses a rotating impeller to move water and pressurize the discharge flow?",
        answers: {
            a: "Pneumatic pump",
            b: "Positive displacement",
            c: "Jockey pump",
            d: "Centrifugal pump"
        },
        correctAnswer: "d"
    },
   
    {
        question: "What is the pump used under the elevator pit?",
        answers: {
            a: "Elevator pump",
            b: "Sump pump",
            c: "Lift pump",
            d: "Pit pump"
        },
        correctAnswer: "b"
    },
    {
        question: "A saw which uses a reciprocating blade to cut irregular curves, such as stenciled designs, in wood, metal, or other materials.",
        answers: {
            a: "Jigsaw",
            b: "Belt sander",
            c: "Circular saw",
            d: "Table saw"
        },
        correctAnswer: "a"
    },
    {
        question: "A tool for cutting many materials such as wood, masonry, plastic, or metal and may be hand-held or mounted to a machine",
        answers: {
            a: "Jigsaw",
            b: "Belt sander",
            c: "Circular saw",
            d: "Table saw"
        },
        correctAnswer: "c"
    },
    {
        question: "A circular saw mounted under a table or bench so that the blade projects up through a slot",
        answers: {
            a: "Chop saw",
            b: "Belt sander",
            c: "Circular saw",
            d: "Table saw"
        },
        correctAnswer: "d"
    },
    {
        question: "A lightweight circular saw mounted on a spring-loaded pivoting arm, and supported by a metal base",
        answers: {
            a: "Chop saw",
            b: "Belt sander",
            c: "Circular saw",
            d: "Table saw"
        },
        correctAnswer: "a"
    },
    {
        question: "A sander used in shaping and finishing wood and other materials",
        answers: {
            a: "Chop saw",
            b: "Belt sander",
            c: "Circular saw",
            d: "Table saw"
        },
        correctAnswer: "b"
    },
    {
        question: "Architect registered and licensed under R.A. No. 9266, who is directly and professionally responsible for the total design of the project for the client and who shall assume the civil liability for the plans, specifications and contract documents he/she has signed and sealed",
        answers: {
            a: "Architect in charge of const",
            b: "Local counterpart",
            c: "Foreign consultant",
            d: "Architect of record"
        },
        correctAnswer: "d"
    },
    {
        question: "The architect whose sign and seal appears on the contract documents.",
        answers: {
            a: "Architect in charge of const",
            b: "Local counterpart",
            c: "Foreign consultant",
            d: "Architect of record"
        },
        correctAnswer: "d"
    },
    {
        question: "Architect registered and licensed under R.A. No. 9266, who is directly and professionally responsible and liable for the construction supervision of the project",
        answers: {
            a: "Architect in charge of const",
            b: "Local counterpart",
            c: "Foreign consultant",
            d: "Architect of record"
        },
        correctAnswer: "a"
    },
    {
        question: "These permits include, among others, ground preparation and excavation, encroachment of foundation to public area, fencing, for fence not exceeding 1.80 meters high, sidewalk construction, temporary sidewalk enclosure and occupancy, erection of scaffolding, erecting, repair, removal of sign; and demolition.",
        answers: {
            a: "Building permit",
            b: "Accessory permit",
            c: "Ancilliary permit",
            d: "None of the above"
        },
        correctAnswer: "b"
    },
    
    {
        question: "The portion of a roadway or public way that should be kept opened and unobstructed at all times for the expedient conduct of fire fighting operations.",
        answers: {
            a: "Fire lane",
            b: "Fire hazard",
            c: "Abatement",
            d: "Fire trap"
        },
        correctAnswer: "a"
    },
    {
        question: "Any condition or act which increases or may cause an increase in the probability of the occurrence of fire, or which may obstruct, delay, hinder or interfere with fire fighting operations and the safeguarding of life and property",
        answers: {
            a: "Fire lane",
            b: "Fire hazard",
            c: "Abatement",
            d: "Fire trap"
        },
        correctAnswer: "b"
    },
    {
        question: "What does FDAS stand for?",
        answers: {
            a: "Fire detection and alarm system",
            b: "Fire and detection alarming system",
            c: "Fire device and automation system",
            d: "Fire damper and automatic shutter"
        },
        correctAnswer: "a"
    },
    {
        question: "This process will lead to the statement and identification of both horizontal and vertical requirements in offering a solution. It incorporates a space  program with characterizations of the envisioned spaces such as ambiance, cost range, etc",   
        answers: {
            a: "Space planning",
            b: "Architectural research",
            c: "Space management",
            d: "Architectural programming"
        },
        correctAnswer: "d"
    },
    {
        question: "The Architect determines the adequate size and appropriate configuration and assemblage for a proposed project in consideration of the use, allocation and interface of spaces for given activities",
        answers: {
            a: "Space planning",
            b: "Architectural research",
            c: "Space management",
            d: "Architectural programming"
        },
        correctAnswer: "a"
    },
    {
        question: "The Architect in this area of practice conceives, chooses and develops the type, disposition, arrangement and proportioning of the structural elements of an architectural work, giving due considerations to safety, cost-effectiveness, functionality and aesthetics",
        answers: {
            a: "Structural conceptualization",
            b: "Building testing and commisioning",
            c: "Building components",
            d: "Building appraisal"
        },
        correctAnswer: "a"
    },
    {
        question: "This entails the formulation of site criteria, assistance to the Client in site evaluation as well as analysis to determine the most appropriate site/s for a proposed project or building program",
        answers: {
            a: "Site selection and analysis",
            b: "Site utilization and land use",
            c: "Site development planning",
            d: "Site and physical planning services"
        },
        correctAnswer: "a"
    },
    {
        question: " It was the tallest building in the world from 1913 to 1930, with a height of 792 feet (241m).",
        answers: {
            a: "Chrysler building",
            b: "Empire state building",
            c: "Woolworth building",
            d: "The home life insurance building"
        },
        correctAnswer: "c"
    },
    
    {
        "question": "What is the key government building work of Ar. Antonio Toledo in Manila?",
        "answers": {
            "a": "Manila City Hall",
            "b": "Malacañang",
            "c": "Philippine General Hospital",
            "d": "Palacio Del Gobernador"
        },
        correctAnswer: "a"
    },
    {
        "question": "What is the oldest church in the Philippines?",
        "answers": {
            "a": "Pasig Church",
            "b": "San Agustin Church",
            "c": "San Sebastian Church",
            "d": "Pinaglabanan Church"
        },
        correctAnswer: "b"
    },
    {
        "question": "Who is the Father of Philippine Architecture and the first registered architect?",
        "answers": {
            "a": "Antonio Toledo",
            "b": "Juan Arellano",
            "c": "Juan Nakpil",
            "d": "Tomas Mapua"
        },
        correctAnswer: "c"
    },
    {
        "question": "Architect in the Philippines known for his Brutalist style or Brutalism.",
        "answers": {
            "a": "Leandro Locsin",
            "b": "Pablo Antonio",
            "c": "Juan Nakpil",
            "d": "Juan Arellano"
        },
        correctAnswer: "a"
    },    
    {
        "question": "What is the minimum width of any means of egress?",
        "answers": {
            "a": "985",
            "b": "905",
            "c": "915",
            "d": "938"
        },
        correctAnswer: "c"
    },
    {
        "question": "What is the minimum clear distance in mm of fire escape stairs in between rails?",
        "answers": {
            "a": "60",
            "b": "70",
            "c": "80",
            "d": "90"
        },
        correctAnswer: "a"
    },
    {
        "question": "What is the riser height of fire escape stairs in cm?",
        "answers": {
            "a": "23",
            "b": "24",
            "c": "25",
            "d": "26"
        },
        correctAnswer: "a"
    },
    {
        "question": "What is the tread width of fire escape stairs in cm?",
        "answers": {
            "a": "23",
            "b": "25",
            "c": "26",
            "d": "27"
        },
        correctAnswer: "a"
    },
    {
        "question": "What is the minimum and maximum height of railings at the fire escape stairs?",
        "answers": {
            "a": "76cm-86.5cm",
            "b": "70cm-80cm",
            "c": "70cm-90cm",
            "d": "76cm-91.4cm"
        },
        correctAnswer: "a"
    },
    
    {
        "question": "In 'Image if the City' by Kevin Lynch, these are point of references like mountains, etc.",
        "answers": {
            "a": "Paths",
            "b": "Nodes",
            "c": "Edges",
            "d": "Landmarks"
        },
        correctAnswer: "d"
    },
    {
        "question": "In 'Image if the City' by Kevin Lynch, these are the intensive foci within a city.",
        "answers": {
            "a": "Paths",
            "b": "Nodes",
            "c": "Edges",
            "d": "Landmarks"
        },
        correctAnswer: "b"
    },
    {
        "question": "Romanesque twin tower and has a dome and have an apse on both sides.",
        "answers": {
            "a": "Worms Cathedral",
            "b": "Pisa Cathedral",
            "c": "Angouleme Cathedral",
            "d": "Peterborough Cathedral"
        },
        correctAnswer: "a"
    },
    {
        "question": "What is the defining characteristic of Gothic Architecture?",
        "answers": {
            "a": "Pointed arches & ornate decorations",
            "b": "Domes",
            "c": "Basilican plan",
            "d": "Semi-circular arches"
        },
        correctAnswer: "a"
    },
    {
        "question": "Highly decorated beam developed during the Medieval time period and used often during the English Gothic period of Architecture.",
        "answers": {
            "a": "Collar beam",
            "b": "Hammerbeam",
            "c": "Cross braced",
            "d": "Tie beam"
        },
        correctAnswer: "b"
    },
    {
        "question": "What is the structural system of the Egyptians?",
        "answers": {
            "a": "Columnar and squared",
            "b": "Columnar and round",
            "c": "Columnar and trabeated",
            "d": "Columnar and lintel"
        },
        correctAnswer: "c"
    },
    {
        "question": "He shall assume civil liabilities for the plans, specifications and contract documents.",
        "answers": {
            "a": "Architect of Record",
            "b": "Architect in Charge of Construction",
            "c": "Consulting Architect",
            "d": "Architect"
        },
        correctAnswer: "a"
    },
    {
        "question": "Professionally responsible and liable for the construction supervision of the project.",
        "answers": {
            "a": "Architect of Record",
            "b": "Architect in Charge of Construction",
            "c": "Consulting Architect",
            "d": "Architect"
        },
        correctAnswer: "b"
    },
    {
        "question": "Who is the professional and academically qualified architect with specialization?",
        "answers": {
            "a": "Architect of Record",
            "b": "Architect in Charge of Construction",
            "c": "Consulting Architect",
            "d": "Architect"
        },
        correctAnswer: "c"
    },
    {
        "question": "A group of professionals in architecture and allied professions, incorporated with architects for the purpose of delivering professional service in architecture and allied professions.",
        "answers": {
            "a": "Architectural company",
            "b": "Architectural corporation",
            "c": "Sole proprietorship",
            "d": "Partnership"
        },
        correctAnswer: "b"
    },
    {
        "question": "A juridical entity, synonymous with architectural partnership.",
        "answers": {
            "a": "Architectural company",
            "b": "Architectural corporation",
            "c": "Sole proprietorship",
            "d": "Partnership"
        },
        correctAnswer: "a"
    },
    {
        "question": "Tomb of the Egyptian Architecture characterized battered walls and with burial chambers underground.",
        "answers": {
            "a": "Mastaba",
            "b": "Pyramid",
            "c": "Temple",
            "d": "Rock cut tomb"
        },
        correctAnswer: "a"
    },
    {
        "question": "There are two types of Egyptian temple; cult and mortuary. Which of the following is an example of a cult temple?",
        "answers": {
            "a": "Khons",
            "b": "Ramesseum",
            "c": "Hatshepsut",
            "d": "Mentuhotep"
        },
        correctAnswer: "a"
    },
    {
        "question": "Tall tower with square base and tapered top.",
        "answers": {
            "a": "Obelisk",
            "b": "Pyramid",
            "c": "Pylon",
            "d": "Mastaba"
        },
        correctAnswer: "a"
    },
    {
        "question": "Byzantine secular building with combined buildings such as private apartments, chapels, and churches.",
        "answers": {
            "a": "Palace of Ministra",
            "b": "Palace of Lausus and Antiochos",
            "c": "Palace of Porphyrogenitus",
            "d": "Palace of Constantinople"
        },
        correctAnswer: "a"
    },
    {
        "question": "The largest pyramid in Giza.",
        "answers": {
            "a": "Cheops",
            "b": "Chephren",
            "c": "Mycerinos",
            "d": "Queens pyramid"
        },
        correctAnswer: "a"
    },



    {
        "question": "What is the maximum distance between fire hydrants?",
        "answers": {
            "a": "250",
            "b": "350",
            "c": "200",
            "d": "300"
        },
        correctAnswer: "a"
    },
    {
        "question": "What is the spacing of street light posts?",
        "answers": {
            "a": "One every 30 units or 100m, whichever is shorter",
            "b": "One every 20 units or 100m, whichever is shorter",
            "c": "Two every 30 units or 100m, whichever is shorter",
            "d": "Two every 20 units or 100m, whichever is shorter"
        },
        correctAnswer: "d"
    },
    {
        "question": "What is the maximum slope of a major road?",
        "answers": {
            "a": "12",
            "b": "15",
            "c": "20",
            "d": "25"
        },
        correctAnswer: "b"
    },
    {
        "question": "What is the maximum slope of a service road?",
        "answers": {
            "a": "12",
            "b": "15",
            "c": "20",
            "d": "25"
        },
        correctAnswer: "a"
    },
    {
        "question": "Minimum percentage of parks, playgrounds and recreational facilities in open market subdivision.",
        "answers": {
            "a": "2",
            "b": "2.5",
            "c": "3.5",
            "d": "4"
        },
        correctAnswer: "c"
    },


    {
        "question": "Recommended professional fee for the detailed engineering design services for a gymnasium with a cost of 50m or less.",
        "answers": {
            "a": "2",
            "b": "4.2",
            "c": "5",
            "d": "6"
        },
        correctAnswer: "d"
    },
    {
        "question": "Recommended professional fee for the detailed engineering design services for a supermarket with a cost of 50m or less.",
        "answers": {
            "a": "3",
            "b": "3.6",
            "c": "4.2",
            "d": "5"
        },
        correctAnswer: "d"
    },
    {
        "question": "What is the most common method of compensation for architects?",
        "answers": {
            "a": "Percentage of PCC",
            "b": "Unit cost",
            "c": "Lump sum",
            "d": "Time-basis"
        },
        correctAnswer: "a"
    },
    {
        "question": "What is the method of compensation wherein the payment is in hourly, daily, or monthly basis?",
        "answers": {
            "a": "Percentage of PCC",
            "b": "Unit cost",
            "c": "Lump sum",
            "d": "Time-basis"
        },
        correctAnswer: "d"
    },
    {
        "question": "What is the method of compensation wherein the scope of work is clearly and fully defined?",
        "answers": {
            "a": "Percentage of PCC",
            "b": "Unit cost",
            "c": "Lump sum",
            "d": "Time-basis"
        },
        correctAnswer: "c"
    },
    {
        "question": "Who is the Italian architect of the Padre Pio Pilgrimage Church?",
        "answers": {
            "a": "Renzo Piano",
            "b": "Pierre Luigi Nervi",
            "c": "Flippo Brunelleschi",
            "d": "Richard Rogers"
        },
        correctAnswer: "a"
    },
    {
        "question": "Who is the architect of the White House?",
        "answers": {
            "a": "James Hoban",
            "b": "Thomas Jefferson",
            "c": "William Thornton",
            "d": "George Bergstorm"
        },
        correctAnswer: "a"
    },
    {
        "question": "Who is the architect of the Getty Center?",
        "answers": {
            "a": "Richard Meier",
            "b": "Alvar Aalto",
            "c": "Eliel Saarinen",
            "d": "Philip Johnson"
        },
        correctAnswer: "a"
    },
    {
        "question": "What is the famous work of the deconstructivist architect Frank Gehry?",
        "answers": {
            "a": "Chiat Building",
            "b": "Sydney Opera house",
            "c": "Walt Disney Concert Hall",
            "d": "Heydar Aliyev"
        },
        correctAnswer: "c"
    },
    {
        "question": "Who is the architect of the Sydney Opera House?",
        "answers": {
            "a": "Zaha Hadid",
            "b": "Frank Gehry",
            "c": "Richard Rogers",
            "d": "Jorn Utzon"
        },
        correctAnswer: "d"
    },



    {
        "question": "What is the recommended lot size for R-1 corner lot?",
        "answers": {
            "a": "301",
            "b": "365",
            "c": "548",
            "d": "261"
        },
        correctAnswer: "b"
    },
    {
        "question": "What is the recommended lot size for C-1 corner lot?",
        "answers": {
            "a": "204",
            "b": "238",
            "c": "365",
            "d": "548"
        },
        correctAnswer: "b"
    },
    {
        "question": "What is the recommended lot size for R-2 inside lot?",
        "answers": {
            "a": "80",
            "b": "96",
            "c": "140",
            "d": "120"
        },
        correctAnswer: "a"
    },
    {
        "question": "What is the minimum width of road for 6 dwelling units?",
        "answers": {
            "a": "3.0",
            "b": "2.5",
            "c": "5.0",
            "d": "3.5"
        },
        correctAnswer: "a"
    },
    {
        "question": "Horizontal alignment of roads such as cul-de-sacs?",
        "answers": {
            "a": "50",
            "b": "45",
            "c": "40",
            "d": "60"
        },
        correctAnswer: "d"
    },




    {
        "question": "What is the minimum width of a ramp?",
        "answers": {
            "a": "1.00m",
            "b": "1.10m",
            "c": "1.20m",
            "d": "1.50m"
        },
        correctAnswer: "c"
    },
    {
        "question": "What is the minimum walkway width in front of car parking spaces?",
        "answers": {
            "a": "1.00m",
            "b": "1.10m",
            "c": "1.20m",
            "d": "1.50m"
        },
        correctAnswer: "c"
    },
    {
        "question": "What is the width of an accessible car parking space?",
        "answers": {
            "a": "2.15",
            "b": "2.50",
            "c": "3.60",
            "d": "3.70"
        },
        correctAnswer: "d"
    },
    {
        "question": "What is the minimum elevator car size?",
        "answers": {
            "a": "1.0 x 1.2",
            "b": "1.1 x 1.4",
            "c": "1.2 x 1.6",
            "d": "1.7 x 1.8"
        },
        correctAnswer: "b"
    },
    {
        "question": "What is the distance between an elevator from an entrance?",
        "answers": {
            "a": "3.0",
            "b": "3.6",
            "c": "2.4",
            "d": "2.0"
        },
        correctAnswer: "a"
    },
    {
        "question": "What is the supreme example of Greek sanctuary in Athens?",
        "answers": {
            "a": "Acropolis",
            "b": "Erechtheion",
            "c": "Parthenon",
            "d": "Propylaea"
        },
        correctAnswer: "c"
    },
    {
        "question": "Principal decoration of walls and shaft of columns in Egyptian Architecture.",
        "answers": {
            "a": "Battered",
            "b": "Hieroglyphics",
            "c": "Papyrus",
            "d": "Scarab"
        },
        correctAnswer: "b"
    },
    {
        "question": "What is the most important Roman architecture and famous for its great dome?",
        "answers": {
            "a": "Parthenon",
            "b": "Pantheon",
            "c": "Coliseum",
            "d": "Aqueduct"
        },
        correctAnswer: "b"
    },
    {
        "question": "What is an alternative ornamentation used by the Romans aside from marbles?",
        "answers": {
            "a": "Paintings",
            "b": "Painted fresco decorations",
            "c": "Wall sculpture",
            "d": "Granite"
        },
        correctAnswer: "b"
    },
    {
        "question": "Palace of west Asiatic architecture that features 250 towers and 100 bronze gates.",
        "answers": {
            "a": "Palace of Sargon",
            "b": "Palace of Xerxes",
            "c": "Palace of Nebuchadnezzar",
            "d": "Palace of Ashurbanipal"
        },
        correctAnswer: "c"
    },
    {
        "question": "It encompasses the statistics of temperature, meteorological elements given in a region.",
        "answers": {
            "a": "Climate",
            "b": "Weather",
            "c": "Monsoon",
            "d": "Pressure"
        },
        correctAnswer: "a"
    },
    {
        "question": "The present condition which varies over a short period of time.",
        "answers": {
            "a": "Climate",
            "b": "Weather",
            "c": "Monsoon",
            "d": "Pressure"
        },
        correctAnswer: "b"
    },
    {
        "question": "The seasonal changes of atmospheric precipitation, due to asymmetrical heating of land and sea.",
        "answers": {
            "a": "Climate",
            "b": "Weather",
            "c": "Monsoon",
            "d": "Pressure"
        },
        correctAnswer: "c"
    },
    {
        "question": "What does the condition that affects rainfall or weather patterns?",
        "answers": {
            "a": "Climate",
            "b": "Weather",
            "c": "Monsoon",
            "d": "Pressure"
        },
        correctAnswer: "d"
    },
    {
        "question": "Specialized localized climate, which spans from 10 yards or sometimes 100 yards.",
        "answers": {
            "a": "Microclimate",
            "b": "Macroclimate",
            "c": "Mesoclimate",
            "d": "Miniclimate"
        },
        correctAnswer: "c"
    },


    {
        "question": "A Finnish architect who was famous for art nouveau in his early years.",
        "answers": {
            "a": "Hugo Alvar Aalto",
            "b": "Gottlieb Eliel Saarinen",
            "c": "Eero Saarinen",
            "d": "Philip Johnson"
        },
        correctAnswer: "b"
    },
    {
        "question": "A Finnish architect whose projects include architecture, glass, furniture, and textile.",
        "answers": {
            "a": "Hugo Alvar Aalto",
            "b": "Gottlieb Eliel Saarinen",
            "c": "Eero Saarinen",
            "d": "Philip Johnson"
        },
        correctAnswer: "a"
    },
    {
        "question": "21st century British architect, famous for curved lines, sharp angles, severe materials, and dynamic facade.",
        "answers": {
            "a": "David Chipperfield",
            "b": "Norman Foster",
            "c": "Zaha Hadid",
            "d": "Richard Rogers"
        },
        correctAnswer: "c"
    },
    {
        "question": "Post-renaissance designed by Burton and Turner in London. It has a central section, and is made of glass and combined wrought and cast iron.",
        "answers": {
            "a": "Great Conservatory, Chatsworth",
            "b": "Palm House, Kew Garden",
            "c": "King Cross Station",
            "d": "Coal Station"
        },
        correctAnswer: "b"
    },

    {
        "question": "What architectural style is characterized by long pointed arches?",
        "answers": {
            "a": "Gothic",
            "b": "Romanesque",
            "c": "Renaissance",
            "d": "Roman"
        },
        correctAnswer: "a"
    },
    {
        "question": "What architectural style is characterized by a reintroduction of classical elements?",
        "answers": {
            "a": "Rococo",
            "b": "Baroque",
            "c": "Romanesque",
            "d": "Renaissance"
        },
        correctAnswer: "c"
    },
    {
        "question": "What architectural style is characterized by rock-like structures, crimped shells put together to have a lavish look?",
        "answers": {
            "a": "Rococo",
            "b": "Baroque",
            "c": "Romanesque",
            "d": "Renaissance"
        },
        correctAnswer: "a"
    },
    {
        "question": "What architectural style is characterized by rich, wild, full ornamented arcades, walls, windows, and arches?",
        "answers": {
            "a": "Gothic",
            "b": "Romanesque",
            "c": "Renaissance",
            "d": "Roman"
        },
        correctAnswer: "b"
    },
    {
        "question": "What architectural style is characterized by rich, wild, full architectural style?",
        "answers": {
            "a": "Gothic",
            "b": "Romanesque",
            "c": "Renaissance",
            "d": "Roman"
        },
        correctAnswer: "b"
    },
    {
        "question": "Who is the architect of the Opus Place?",
        "answers": {
            "a": "Kenzo Tange",
            "b": "James Hoban",
            "c": "Richard Meier",
            "d": "Frank Lloyd Wright"
        },
        correctAnswer: "c"
    },
    {
        "question": "Japanese architect who designed Hiroshima Peace Center and Memorial Park.",
        "answers": {
            "a": "Kenzo Tange",
            "b": "James Hoban",
            "c": "Richard Meier",
            "d": "Frank Lloyd Wright"
        },
        correctAnswer: "a"
    },
    {
        "question": "Who is the architect of the White House?",
        "answers": {
            "a": "Kenzo Tange",
            "b": "James Hoban",
            "c": "Richard Meier",
            "d": "Frank Lloyd Wright"
        },
        correctAnswer: "b"
    },
    {
        "question": "Who is the architect who designed over 500 projects in the US and mostly residential?",
        "answers": {
            "a": "Kenzo Tange",
            "b": "James Hoban",
            "c": "Richard Meier",
            "d": "Frank Lloyd Wright"
        },
        correctAnswer: "d"
    },
    {
        "question": "Who is the architect of the Opus Place?",
        "answers": {
            "a": "Kenzo Tange",
            "b": "James Hoban",
            "c": "Richard Meier",
            "d": "Frank Lloyd Wright"
        },
        correctAnswer: "c"
    },


    {
        "question": "What is the width of the sidewalk if it would have trees?",
        "answers": {
            "a": "2.0",
            "b": "3.0",
            "c": "2.7",
            "d": "2.5"
        },
        correctAnswer: "b"
    },
    {
        "question": "If you are going to build a structure near a body of water in Manila, where would you ask permission?",
        "answers": {
            "a": "DENR",
            "b": "LLDA",
            "c": "MMDA",
            "d": "DPWH"
        },
        correctAnswer: "c"
    },
    {
        "question": "What is the type of survey that looks out for utilities and roads?",
        "answers": {
            "a": "Subdivision",
            "b": "Land mapping",
            "c": "Topographic",
            "d": "Locational"
        },
        correctAnswer: "d"
    },
    {
        "question": "What is the minimum width of the sidewalk with plating strips?",
        "answers": {
            "a": "2.0",
            "b": "3.0",
            "c": "2.70",
            "d": "2.50"
        },
        correctAnswer: "a"
    },
    {
        "question": "What is the most difficult type of land to build on?",
        "answers": {
            "a": "Very steep",
            "b": "Rolling",
            "c": "Flat",
            "d": "Irregular"
        },
        correctAnswer: "a"
    },

    {
        "question": "Architectural corporation duly registered with SEC or a single proprietorship duly registered with DTI, and likewise registered with PRC and BOA to perform state-regulated architectural services.",
        "answers": {
            "a": "Architectural Firm",
            "b": "Consortium or Association",
            "c": "Filipino Professional Consulting Architect",
            "d": "Owner"
        },
        correctAnswer: "a"
    },
    {
        "question": "A natural or juridical entity.",
        "answers": {
            "a": "Architectural Firm",
            "b": "Consortium or Association",
            "c": "Filipino Professional Consulting Architect",
            "d": "Owner"
        },
        correctAnswer: "d"
    },
    {
        "question": "Shall refer only to a RLA to a RLA who may a who may also be a also be a separately separately Registered and Licensed Professional (RLP).",
        "answers": {
            "a": "Architectural Firm",
            "b": "Consortium or Association",
            "c": "Filipino Professional Consulting Architect",
            "d": "Owner"
        },
        correctAnswer: "c"
    },
    {
        "question": "Architectural firm, in collaboration with a foreign architect.",
        "answers": {
            "a": "Architectural Firm",
            "b": "Consortium or Association",
            "c": "Filipino Professional Consulting Architect",
            "d": "Owner"
        },
        correctAnswer: "c"
    },
    {
        "question": "Services rendered by architectural firms or consulting architects.",
        "answers": {
            "a": "Architectural Firm",
            "b": "Consortium or Association",
            "c": "Filipino Professional Consulting Architect",
            "d": "Owner"
        },
        correctAnswer: "c"
    },


    {
        "question": "Who is the father of prestressed concrete?",
        "answers": {
            "a": "Eugene Freyssinet",
            "b": "Auguste Perret",
            "c": "Le Corbusier",
            "d": "Frei Otto"
        },
        correctAnswer: "a"
    },
    {
        "question": "Beam above doors and windows.",
        "answers": {
            "a": "Header beam",
            "b": "Tie beam",
            "c": "Girder beam",
            "d": "Lintel beam"
        },
        correctAnswer: "d"
    },
    {
        "question": "Also known as perimeter beam.",
        "answers": {
            "a": "Girder",
            "b": "Plinth",
            "c": "Spandrel",
            "d": "Girt"
        },
        correctAnswer: "c"
    },
    {
        "question": "What is the camber for a 4 meter long beam?",
        "answers": {
            "a": "4.5mm",
            "b": "6mm",
            "c": "10mm",
            "d": "8mm"
        },
        correctAnswer: "a"
    },
    {
        "question": "What is the standard size of purlins?",
        "answers": {
            "a": "2x3",
            "b": "2x4",
            "c": "2x6",
            "d": "2x8"
        },
        correctAnswer: "b"
    },

    {
        "question": "What insulation is made up of polyethylene?",
        "answers": {
            "a": "Foam",
            "b": "Rockwool",
            "c": "Membrane",
            "d": "Cellulose"
        },
        correctAnswer: "a"
    },
    {
        "question": "Maximum span of a 2x4 purlin?",
        "answers": {
            "a": "600mm",
            "b": "800mm",
            "c": "400mm",
            "d": "1000mm"
        },
        correctAnswer: "a"
    },
    {
        "question": "What valve are we going to use if we are going to embed it to soil?",
        "answers": {
            "a": "Ball",
            "b": "Globe",
            "c": "Butterfly",
            "d": "Check"
        },
        correctAnswer: "d"
    },
    {
        "question": "What is the most expensive insulation?",
        "answers": {
            "a": "Polyurethane",
            "b": "Polystyrene",
            "c": "Fiberglass",
            "d": "Cellulose"
        },
        correctAnswer: "a"
    },
    {
        "question": "What insulation is used in between studs?",
        "answers": {
            "a": "Wool",
            "b": "Spray",
            "c": "Fiberglass",
            "d": "Foam"
        },
        correctAnswer: "c"
    },



    {
        "question": "What valve does not regulate the flow of water?",
        "answers": {
            "a": "Globe valve",
            "b": "Ball valve",
            "c": "Check valve",
            "d": "Showe valve"
        },
        correctAnswer: "c"
    },
    {
        "question": "Identify the number of CHB required for a 10.2m span by 3.3m high wall with 300mm lintel beam and 300mm wide stiffener column. Add 5% contingency.",
        "answers": {
            "a": "366",
            "b": "355",
            "c": "378",
            "d": "388"
        },
        correctAnswer: "b"
    },
    {
        "question": "I beam is also known as _____.",
        "answers": {
            "a": "H section",
            "b": "W section",
            "c": "Universal beam",
            "d": "Channel"
        },
        correctAnswer: "c"
    },
    {
        "question": "Common length of a deformed steel bar?",
        "answers": {
            "a": "3 m",
            "b": "4 m",
            "c": "5 m",
            "d": "6 m"
        },
        correctAnswer: "d"
    },
    {
        "question": "Which is the most expensive concrete in terms of curing time?",
        "answers": {
            "a": "14 days",
            "b": "21 days",
            "c": "28 days",
            "d": "30 days"
        },
        correctAnswer: "a"
    },


    {
        "question": "Horizontal bars used for CHB walls are installed _____.",
        "answers": {
            "a": "600 mm every 3 layers",
            "b": "600 mm every 4 layers",
            "c": "400 mm every 3 layers",
            "d": "400 mm every 4 layers"
        },
        correctAnswer: "a"
    },
    {
        "question": "Which of the following is not a steel section?",
        "answers": {
            "a": "SHS",
            "b": "HHS",
            "c": "CHS",
            "d": "RHS"
        },
        correctAnswer: "b"
    },
    {
        "question": "What beam section is that letter H when vertical and letter I if horizontal?",
        "answers": {
            "a": "H section",
            "b": "W section",
            "c": "Universal beam",
            "d": "Channel"
        },
        correctAnswer: "c"
    },
    {
        "question": "Best panel for sound absorption?",
        "answers": {
            "a": "Gypsum",
            "b": "Plywood",
            "c": "Ficem",
            "d": "Acoustic boards"
        },
        correctAnswer: "d"
    },
    {
        "question": "A valve that offers a fine and precise flow.",
        "answers": {
            "a": "Needle valve",
            "b": "Angle valve",
            "c": "Ball valve",
            "d": "Check valve"
        },
        correctAnswer: "a"
    },


    {
        "question": "What is the best type of waterproofing used for underwater or near saltwater.",
        "answers": {
            "a": "Bentonite",
            "b": "Integral",
            "c": "Crystalline",
            "d": "Cementitious"
        },
        correctAnswer: "b"
    },
    {
        "question": "Xypex is a brand name used for _____.",
        "answers": {
            "a": "Bentonite",
            "b": "Integral",
            "c": "Crystalline",
            "d": "Cementitious"
        },
        correctAnswer: "c"
    },
    {
        "question": "Elastoseal is a brand name by what company?",
        "answers": {
            "a": "Jardine",
            "b": "Pioneer",
            "c": "Bostik",
            "d": "James Hardie"
        },
        correctAnswer: "b"
    },
    {
        "question": "What is the largest chamber of the septic tank?",
        "answers": {
            "a": "Leaching 1",
            "b": "Leaching 2",
            "c": "Digestive",
            "d": "Manhole"
        },
        correctAnswer: "c"
    },
    {
        "question": "Why is CHB the most common masonry unit used in the Philippines?",
        "answers": {
            "a": "Availability and cost",
            "b": "Easy to install",
            "c": "Heat insulative properties",
            "d": "Economical"
        },
        correctAnswer: "a"
    },


    {
        "question": "What is the most economic roofing?",
        "answers": {
            "a": "Corrugated",
            "b": "Rib type",
            "c": "Longspan",
            "d": "Asphalt shingles"
        },
        correctAnswer: "c"
    },
    {
        "question": "Easy to construct slab but has an expensive construction due to its greater thickness of the slab.",
        "answers": {
            "a": "Flat slab",
            "b": "Waffle slab",
            "c": "2 way slab",
            "d": "1 way slab"
        },
        correctAnswer: "a"
    },
    {
        "question": "What is the tank used in a water closet?",
        "answers": {
            "a": "Toilet tank",
            "b": "Flushometer",
            "c": "Toilet cistern",
            "d": "Toilet reservoir"
        },
        correctAnswer: "a"
    },
    {
        "question": "What is the maximum height of a telephone outlet?",
        "answers": {
            "a": "0.30",
            "b": "0.60",
            "c": "0.90",
            "d": "1.20"
        },
        correctAnswer: "c"
    },
    {
        "question": "What is the most lightweight insulation?",
        "answers": {
            "a": "Rockwool",
            "b": "Foam",
            "c": "Fiberglass",
            "d": "Membrane"
        },
        correctAnswer: "b"
    },



    {
        "question": "What is the purpose of sagrods?",
        "answers": {
            "a": "Control deflection",
            "b": "Support sagging members",
            "c": "For tension",
            "d": "For compression"
        },
        correctAnswer: "b"
    },
    {
        "question": "What is the shape of the beam under positive bending moment?",
        "answers": {
            "a": "Compress below, stretch above",
            "b": "Stretches below, compress above",
            "c": "Doesn’t matter",
            "d": "Equal compression and tension"
        },
        correctAnswer: "b"
    },
    {
        "question": "It is a door that can accommodate a large number of persons at the same time and resists heavy winds.",
        "answers": {
            "a": "Revolving door",
            "b": "Pivot door",
            "c": "Air curtain",
            "d": "Swing door"
        },
        correctAnswer: "a"
    },
    {
        "question": "What is the main disadvantage of a pivot door in a commercial area?",
        "answers": {
            "a": "Difficult to install",
            "b": "Requires large panels",
            "c": "Air tightness",
            "d": "Security"
        },
        correctAnswer: "c"
    },
    {
        "question": "Which of the following is the heaviest roofing material?",
        "answers": {
            "a": "Concrete tile",
            "b": "Clay tile",
            "c": "Asphalt shingles",
            "d": "Ceramic tile"
        },
        correctAnswer: "a"
    },

    {
        "question": "What is the usual section of a purlin used for roofing works?",
        "answers": {
            "a": "C channel",
            "b": "Z channel",
            "c": "T channel",
            "d": "Tubular"
        },
        correctAnswer: "a"
    },
    {
        "question": "What door has a wide opening and offers a good vista for viewing?",
        "answers": {
            "a": "Folding door",
            "b": "Sliding door",
            "c": "Bi-fold door",
            "d": "French door"
        },
        correctAnswer: "d"
    },
    {
        "question": "What is the thickness of an earthfill before it needs compaction?",
        "answers": {
            "a": "100mm",
            "b": "150mm",
            "c": "200mm",
            "d": "250mm"
        },
        correctAnswer: "c"
    },
    {
        "question": "What type of doors is commonly used in wardrobes?",
        "answers": {
            "a": "Bi-fold",
            "b": "Folding door",
            "c": "Accordion",
            "d": "Roll-up"
        },
        correctAnswer: "a"
    },
    {
        "question": "What is the product of Puyat Steel?",
        "answers": {
            "a": "Longspan",
            "b": "Corrugated",
            "c": "Rib-type",
            "d": "Galvalume"
        },
        correctAnswer: "b"
    },


    {
        "question": "What is the difference between a float glass and a clear glass?",
        "answers": {
            "a": "Has green tint",
            "b": "More transparent",
            "c": "Iron content",
            "d": "Chemical composition"
        },
        correctAnswer: "b"
    },
    {
        "question": "Type of glass used for bathrooms.",
        "answers": {
            "a": "Annealed glass",
            "b": "Tempered glass",
            "c": "Laminated glass",
            "d": "Float glass"
        },
        correctAnswer: "b"
    },
    {
        "question": "Standard thickness of glass shower door.",
        "answers": {
            "a": "6mm",
            "b": "8mm",
            "c": "10mm",
            "d": "12mm"
        },
        correctAnswer: "c"
    },
    {
        "question": "Most efficient slope for pipes used for water supply for residential buildings.",
        "answers": {
            "a": "1%",
            "b": "2%",
            "c": "3%",
            "d": "None"
        },
        correctAnswer: "d"
    },
    {
        "question": "Vertical reinforcement of CHB wall.",
        "answers": {
            "a": "0.3m",
            "b": "0.6m",
            "c": "0.8m",
            "d": "1.0m"
        },
        correctAnswer: "b"
    },

    {
        "question": "A type of beam with a thickened support/base.",
        "answers": {
            "a": "Simply supported beam",
            "b": "Cantilever",
            "c": "I beam",
            "d": "Haunched beam"
        },
        correctAnswer: "d"
    },
    {
        "question": "Engineered wood flooring is purchased per _____.",
        "answers": {
            "a": "Per piece",
            "b": "Per box",
            "c": "Per sqm",
            "d": "Per weight"
        },
        correctAnswer: "b"
    },
    {
        "question": "Not a part of structural plans.",
        "answers": {
            "a": "Roof framing plan",
            "b": "Foundation plan",
            "c": "Site development plan",
            "d": "Floor framing plan"
        },
        correctAnswer: "c"
    },
    {
        "question": "What kind of glass is not advisable to use for interior areas?",
        "answers": {
            "a": "Low E",
            "b": "Laminated",
            "c": "Tempered",
            "d": "Glass blocks"
        },
        correctAnswer: "a"
    },
    {
        "question": "For the preparation of formworks for concrete pouring, which is/are needed?",
        "answers": {
            "a": "Cement, sand, gravel",
            "b": "Rebars",
            "c": "Phenolic boards",
            "d": "Scaffoldings and support"
        },
        correctAnswer: "c"
    },

    {
        "question": "What is the thinner used for latex paints?",
        "answers": {
            "a": "Water",
            "b": "Lacquer",
            "c": "Turpentine",
            "d": "Oil"
        },
        correctAnswer: "a"
    },
    {
        "question": "Foundation that is used for weak soils.",
        "answers": {
            "a": "Mat",
            "b": "Isolated",
            "c": "Combined",
            "d": "Strip"
        },
        correctAnswer: "a"
    },
    {
        "question": "Which of the following is an example of a shallow foundation?",
        "answers": {
            "a": "Pile",
            "b": "Caissons",
            "c": "Sheet piles",
            "d": "Isolated"
        },
        correctAnswer: "d"
    },
    {
        "question": "Column with poured concrete inside is known as _____.",
        "answers": {
            "a": "Tied",
            "b": "Spiral",
            "c": "Lally",
            "d": "Long column"
        },
        correctAnswer: "c"
    },
    {
        "question": "What is found between two intersecting slopes of roof that catches water?",
        "answers": {
            "a": "Inside gutter",
            "b": "Hip",
            "c": "Valley",
            "d": "Fascia"
        },
        correctAnswer: "c"
    },


    {
        "question": "Where should we place a shear wall?",
        "answers": {
            "a": "Elevator/stairwell",
            "b": "Center of the Bldg.",
            "c": "Between interior walls",
            "d": "Exterior walls"
        },
        correctAnswer: "a"
    },
    {
        "question": "What is the minimum size of aggregates to used as bedding?",
        "answers": {
            "a": "25mm",
            "b": "40 mm",
            "c": "50mm",
            "d": "100mm"
        },
        correctAnswer: "a"
    },
    {
        "question": "Which of the following is not a standard thickness of a CHB?",
        "answers": {
            "a": "4in",
            "b": "6in",
            "c": "8in",
            "d": "10in"
        },
        correctAnswer: "d"
    },
    {
        "question": "Proper removal of formworks and shores for beams.",
        "answers": {
            "a": "3 days",
            "b": "7 days",
            "c": "14 days",
            "d": "21 days"
        },
        correctAnswer: "c"
    },
    {
        "question": "What is the minimum slope of roof?",
        "answers": {
            "a": "10",
            "b": "12",
            "c": "15",
            "d": "18"
        },
        correctAnswer: "c"
    },

    {
        "question": "What is the ratio used for plastering and mortars?",
        "answers": {
            "a": "1:4",
            "b": "1:2",
            "c": "1:6",
            "d": "1:3"
        },
        correctAnswer: "d"
    },
    {
        "question": "Compressive strength for slab on grade.",
        "answers": {
            "a": "2000",
            "b": "2500",
            "c": "3000",
            "d": "3500"
        },
        correctAnswer: "c"
    },
    {
        "question": "Compressive strength for a structural member.",
        "answers": {
            "a": "2000",
            "b": "3000",
            "c": "6000",
            "d": "8000"
        },
        correctAnswer: "b"
    },
    {
        "question": "Which of the following has a built-in ptrap?",
        "answers": {
            "a": "Lavatory",
            "b": "Floor drain",
            "c": "Water closet",
            "d": "Bath tub"
        },
        correctAnswer: "c"
    },
    {
        "question": "What is meant by VOC?",
        "answers": {
            "a": "Volatile organic compound",
            "b": "Vocational organic compound",
            "c": "Volatile orange compound",
            "d": "Volatile organic composition"
        },
        correctAnswer: "a"
    },

    {
        "question": "Best glass to use in skylights.",
        "answers": {
            "a": "Float glass",
            "b": "Annealed glass",
            "c": "Tempered glass",
            "d": "Laminated glass"
        },
        correctAnswer: "d"
    },
    {
        "question": "White salts deposits on walls that are hard to solve.",
        "answers": {
            "a": "Calcification",
            "b": "Rust discoloration",
            "c": "Efflorescence",
            "d": "Mildew"
        },
        correctAnswer: "c"
    },
    {
        "question": "Which of the following is not a regulating valve?",
        "answers": {
            "a": "Diaphragm",
            "b": "Gate",
            "c": "Globe",
            "d": "Ball"
        },
        correctAnswer: "b"
    },
    {
        "question": "Which of the following is the best valve to use for water containing solid wastes?",
        "answers": {
            "a": "Gate",
            "b": "Globe",
            "c": "Check",
            "d": "Butterfly"
        },
        correctAnswer: "a"
    },
    {
        "question": "Linear valve used for regulating water flow.",
        "answers": {
            "a": "Diaphragm",
            "b": "Globe",
            "c": "Ball",
            "d": "Check"
        },
        correctAnswer: "b"
    },

    {
        "question": "What is the best door to counter the air coming from outside going into the building?",
        "answers": {
            "a": "Pivot",
            "b": "Revolving",
            "c": "Swing",
            "d": "Air curtain"
        },
        correctAnswer: "b"
    },
    {
        "question": "Who issues certificate of electrical inspection or CEI?",
        "answers": {
            "a": "City hall inspector",
            "b": "Engineer",
            "c": "Utility company",
            "d": "Contractor"
        },
        correctAnswer: "a"
    },
    {
        "question": "Who signs and seals electrical plans with 20 branch circuits?",
        "answers": {
            "a": "Professional electrical engineer",
            "b": "Registered engineer",
            "c": "Master electrician",
            "d": "All are allowed"
        },
        correctAnswer: "a"
    },
    {
        "question": "Type 2 and 3 construction shall have a minimum of _____ fire resistive rating.",
        "answers": {
            "a": "1 hour",
            "b": "2 hours",
            "c": "3 hours",
            "d": "4 hours"
        },
        correctAnswer: "a"
    },
    {
        "question": "What is not considered a component of a ceiling?",
        "answers": {
            "a": "Trim",
            "b": "Wall angle",
            "c": "Hanger",
            "d": "T runner"
        },
        correctAnswer: "a"
    },


    {
        "question": "Which of the following is not commonly used in residential buildings.",
        "answers": {
            "a": "Urinal",
            "b": "Dual flush",
            "c": "Bidet",
            "d": "Flushometer"
        },
        correctAnswer: "d"
    },
    {
        "question": "Best angle of the solar panel to maximize solar gain.",
        "answers": {
            "a": "30 deg south",
            "b": "45 deg south",
            "c": "30 deg east",
            "d": "45 deg east"
        },
        correctAnswer: "a"
    },
    {
        "question": "Which type of glass is used for acoustics?",
        "answers": {
            "a": "Satin",
            "b": "Tinted",
            "c": "Tempered",
            "d": "Double glazed"
        },
        correctAnswer: "d"
    },
    {
        "question": "Best orientation for solar panels.",
        "answers": {
            "a": "North",
            "b": "South",
            "c": "East",
            "d": "West"
        },
        correctAnswer: "b"
    },
    {
        "question": "What pump should be used to transfer the water flooding from the basement to the ground floor?",
        "answers": {
            "a": "Transfer pump",
            "b": "Submersible",
            "c": "Booster",
            "d": "Pneumatic"
        },
        correctAnswer: "a"
    }

   
];
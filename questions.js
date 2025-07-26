const questions = [
  // ==== General Knowledge (Harder) ====
  { subject: "GK", question: "Which country is both in Europe and Asia?", options: ["Germany", "Turkey", "Spain", "Italy"], answer: "Turkey" },
  { subject: "GK", question: "Who was the first woman Prime Minister of India?", options: ["Pratibha Patil", "Indira Gandhi", "Sarojini Naidu", "Sushma Swaraj"], answer: "Indira Gandhi" },
  { subject: "GK", question: "Which Indian state has the longest coastline?", options: ["Goa", "Tamil Nadu", "Gujarat", "Andhra Pradesh"], answer: "Gujarat" },
  { subject: "GK", question: "Which city is known as the 'Silicon Valley of India'?", options: ["Hyderabad", "Mumbai", "Bengaluru", "Chennai"], answer: "Bengaluru" },
  { subject: "GK", question: "Which river is known as the 'Sorrow of Bihar'?", options: ["Kosi", "Ganga", "Yamuna", "Brahmaputra"], answer: "Kosi" },
  { subject: "GK", question: "Who wrote 'Discovery of India'?", options: ["Sardar Patel", "Subhas Bose", "Jawaharlal Nehru", "Dr. Ambedkar"], answer: "Jawaharlal Nehru" },
  { subject: "GK", question: "The first general election in India was held in?", options: ["1950", "1952", "1947", "1960"], answer: "1952" },
  { subject: "GK", question: "Which country gifted the Statue of Liberty to the USA?", options: ["Germany", "France", "Italy", "Russia"], answer: "France" },
  { subject: "GK", question: "Which city is called the 'City of Joy'?", options: ["Mumbai", "Chennai", "Kolkata", "Delhi"], answer: "Kolkata" },
  { subject: "GK", question: "The currency of South Korea is?", options: ["Yen", "Won", "Ringgit", "Baht"], answer: "Won" },

  // ==== Mathematics (Harder) ====
  { subject: "Maths", question: "What is the cube root of 729?", options: ["9", "27", "6", "8"], answer: "9" },
  { subject: "Maths", question: "If 3x + 5 = 20, what is x?", options: ["3", "5", "6", "7"], answer: "5" },
  { subject: "Maths", question: "Find the value of 2³ × 2⁴.", options: ["64", "16", "128", "32"], answer: "128" },
  { subject: "Maths", question: "What is the sum of interior angles of a hexagon?", options: ["720°", "540°", "900°", "600°"], answer: "720°" },
  { subject: "Maths", question: "A train travels 180 km in 2 hours. What is its speed?", options: ["60 km/h", "70 km/h", "90 km/h", "100 km/h"], answer: "90 km/h" },
  { subject: "Maths", question: "LCM of 12, 15 and 20 is?", options: ["60", "180", "120", "240"], answer: "60" },
  { subject: "Maths", question: "What is the square of 15?", options: ["215", "225", "235", "245"], answer: "225" },
  { subject: "Maths", question: "What is the next prime number after 29?", options: ["31", "30", "33", "35"], answer: "31" },
  { subject: "Maths", question: "If angle A is 90° in a triangle, what is the triangle called?", options: ["Obtuse", "Acute", "Right-angled", "Scalene"], answer: "Right-angled" },
  { subject: "Maths", question: "The average of 4, 8, 12, 16 is?", options: ["10", "12", "14", "8"], answer: "10" },

  // ==== English (Harder) ====
  { subject: "English", question: "Choose the correct synonym of 'Rapid'.", options: ["Slow", "Fast", "Late", "Idle"], answer: "Fast" },
  { subject: "English", question: "Identify the adjective in the sentence: 'She wore a beautiful dress.'", options: ["wore", "dress", "beautiful", "she"], answer: "beautiful" },
  { subject: "English", question: "Which is the correct passive form of 'He writes a letter'?", options: ["A letter is written by him", "A letter was written by him", "He wrote a letter", "He was writing a letter"], answer: "A letter is written by him" },
  { subject: "English", question: "Pick the correctly spelled word.", options: ["Definately", "Definitely", "Definetely", "Definattely"], answer: "Definitely" },
  { subject: "English", question: "What is the plural of 'Crisis'?", options: ["Crisis", "Crisises", "Crises", "Crisis'"], answer: "Crises" },
  { subject: "English", question: "What is the antonym of 'Victory'?", options: ["Defeat", "Glory", "Win", "Triumph"], answer: "Defeat" },
  { subject: "English", question: "Identify the correct indirect speech: He said, 'I am tired.'", options: ["He said that he was tired", "He says that he is tired", "He told he is tired", "He said that he tired"], answer: "He said that he was tired" },
  { subject: "English", question: "Which part of speech is the word 'quickly'?", options: ["Adjective", "Verb", "Adverb", "Noun"], answer: "Adverb" },
  { subject: "English", question: "Select the correct form of the verb: He ___ gone already.", options: ["has", "have", "is", "was"], answer: "has" },
  { subject: "English", question: "Which of the following is a conjunction?", options: ["But", "Fast", "After", "Quickly"], answer: "But" },

  // ==== Science (Harder) ====
  { subject: "Science", question: "Which part of the cell contains genetic material?", options: ["Cytoplasm", "Nucleus", "Mitochondria", "Ribosome"], answer: "Nucleus" },
  { subject: "Science", question: "Which vitamin helps in blood clotting?", options: ["Vitamin A", "Vitamin K", "Vitamin D", "Vitamin C"], answer: "Vitamin K" },
  { subject: "Science", question: "Which is the powerhouse of the cell?", options: ["Ribosome", "Nucleus", "Mitochondria", "Chloroplast"], answer: "Mitochondria" },
  { subject: "Science", question: "Which organ in the human body produces insulin?", options: ["Liver", "Pancreas", "Stomach", "Kidney"], answer: "Pancreas" },
  { subject: "Science", question: "Which gas is responsible for the greenhouse effect?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide" },
  { subject: "Science", question: "What is the SI unit of force?", options: ["Newton", "Joule", "Pascal", "Watt"], answer: "Newton" },
  { subject: "Science", question: "Which is the smallest bone in the human body?", options: ["Stapes", "Femur", "Tibia", "Ulna"], answer: "Stapes" },
  { subject: "Science", question: "Which planet has the most moons?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: "Saturn" },
  { subject: "Science", question: "What is the chemical formula of Common Salt?", options: ["KCl", "NaCl", "HCl", "CaCl₂"], answer: "NaCl" },
  { subject: "Science", question: "What is the boiling point of water in Kelvin?", options: ["273K", "373K", "273°C", "212K"], answer: "373K" },

  // ==== Current Affairs (2025, Harder) ====
  { subject: "Current", question: "Which Indian economist was appointed Chief Economist at the World Bank in 2024?", options: ["Raghuram Rajan", "Indermit Gill", "Kaushik Basu", "Abhijit Banerjee"], answer: "Indermit Gill" },
  { subject: "Current", question: "Who is the Chairperson of ISRO in 2025?", options: ["K. Sivan", "S. Somanath", "G. Madhavan Nair", "K. Radhakrishnan"], answer: "S. Somanath" },
  { subject: "Current", question: "Which state had the highest GSDP growth in India (2023-24)?", options: ["Gujarat", "Andhra Pradesh", "Karnataka", "Maharashtra"], answer: "Andhra Pradesh" },
  { subject: "Current", question: "India signed a Green Hydrogen agreement with which country in 2024?", options: ["Japan", "Australia", "USA", "Germany"], answer: "Australia" },
  { subject: "Current", question: "Which Indian airport became the first to run 100% on green energy in 2024?", options: ["Delhi", "Bangalore", "Hyderabad", "Cochin"], answer: "Cochin" },
  { subject: "Current", question: "Who won the Jnanpith Award 2023?", options: ["Gulzar", "Vinod Kumar Shukla", "Amitav Ghosh", "Temsula Ao"], answer: "Vinod Kumar Shukla" },
  { subject: "Current", question: "Which Indian state launched 'Mukhyamantri Mahila Samman Yojana'?", options: ["Delhi", "UP", "Maharashtra", "Bihar"], answer: "Delhi" },
  { subject: "Current", question: "Which Indian city hosted the IPL 2025 final?", options: ["Chennai", "Ahmedabad", "Mumbai", "Kolkata"], answer: "Ahmedabad" },
  { subject: "Current", question: "Who is the CEO of Twitter (X) in 2025?", options: ["Elon Musk", "Linda Yaccarino", "Parag Agrawal", "Jack Dorsey"], answer: "Linda Yaccarino" },
  { subject: "Current", question: "Which Indian cricketer announced retirement in 2024?", options: ["Virat Kohli", "Shikhar Dhawan", "Rohit Sharma", "MS Dhoni"], answer: "Rohit Sharma" }
];

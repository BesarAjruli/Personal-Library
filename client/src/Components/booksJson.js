const books = [
  {
    "title": "Mjeksia interne me kujdes",
    "year": "",
    "author": "Tefik Bekteshi",
    "language": "",
    "category": "",
    "cover_image": ""
  },
  {
    "title": "Mesim i shkurte mbi namazin dhe Jasini Sherifi",
    "year": "",
    "author": "H. Sulejman Kemura",
    "language": "",
    "category": "Religious (Islamic)",
    "cover_image": ""
  },
  {
    "title": "Tridhjete e gjashte kallezime",
    "year": "",
    "author": "Adem Abdullahu",
    "language": "Albanian",
    "category": "Literature/Stories",
    "cover_image": ""
  },
  {
    "title": "Emancipimi i femres dhe moda",
    "year": "",
    "author": "Jusuf Zimeri",
    "language": "Albanian",
    "category": "Social/Religious",
    "cover_image": ""
  },
  {
    "title": "Sunnetet e rregullta te namazit",
    "year": "",
    "author": "Hfz. Ekrem Hasani",
    "language": "Albanian",
    "category": "Religious (Islamic)",
    "cover_image": ""
  },
  {
    "title": "Disa nga dijetaret sahabe",
    "year": "",
    "author": "Grup autoresh",
    "language": "Albanian",
    "category": "Religious (Islamic)/Biography",
    "cover_image": ""
  },
  {
    "title": "Mekatet e medha dhe tridhjet shkaqet e hyrjes ne Xhennet",
    "year": "",
    "author": "Shemsuddin Edh-Dhehebi",
    "language": "Albanian (Translation of a classic work)",
    "category": "Religious (Islamic)",
    "cover_image": ""
  },
  {
    "title": "Poezia diktatike e Josif Bagerit",
    "year": "",
    "author": "Nexhat Abazi",
    "language": "Albanian",
    "category": "Literary Criticism/Poetry",
    "cover_image": ""
  },
  {
    "title": "Muhamedu a.s, profeti islam",
    "year": "",
    "author": "Imam Vehbi Ismaili",
    "language": "Albanian",
    "category": "Religious (Islamic)/Biography",
    "cover_image": ""
  },
  {
    "title": "Fjalor enciklopedik",
    "year": "",
    "author": "Pasho Baku",
    "language": "Albanian",
    "category": "Reference/Dictionary",
    "cover_image": ""
  },
  {
    "title": "Antropologjia",
    "year": "",
    "author": "Mr. Sc. Reshat Qahili",
    "language": "Albanian",
    "category": "Academic/Anthropology",
    "cover_image": ""
  },
  {
    "title": "Gramatika I, fonetika, leksikologjia dhe morfologjia)",
    "year": "",
    "author": "Prof. Dr. Remzi Nesimi",
    "language": "Albanian",
    "category": "Academic/Linguistics",
    "cover_image": ""
  },
  {
    "title": "Atllas anatomik",
    "year": "",
    "author": "Dr. Anida Kargovska",
    "language": "",
    "category": "Academic/Medicine",
    "cover_image": ""
  },
  {
    "title": "Biologjia",
    "year": "",
    "author": "Cvetanovska Lenka",
    "language": "",
    "category": "Academic/Biology",
    "cover_image": ""
  },
  {
    "title": "Mbrojtja dhe siguria",
    "year": "",
    "author": "Universiteti i Tetoves",
    "language": "Albanian",
    "category": "Academic/Security Studies",
    "cover_image": ""
  },
  {
    "title": "Bageti e bujqesi dhe Lulet e veres",
    "year": "1886 (Bageti e Bujqesi)",
    "author": "Naim Frasheri",
    "language": "Albanian",
    "category": "Poetry/Classic Literature",
    "cover_image": ""
  },
  {
    "title": "Te dheu i huaj",
    "year": "",
    "author": "Zef Skiroi",
    "language": "Albanian",
    "category": "Literature/Poetry",
    "cover_image": ""
  },
  {
    "title": "Juvenilia",
    "year": "",
    "author": "Ndre Mjeda",
    "language": "Albanian",
    "category": "Poetry/Classic Literature",
    "cover_image": ""
  },
  {
    "title": "Gjuh shqipe dhe letersi III",
    "year": "",
    "author": "Resul Bekteshi",
    "language": "Albanian",
    "category": "Academic/Language Arts",
    "cover_image": ""
  },
  {
    "title": "Biologjia III",
    "year": "",
    "author": "Suzana Dinevska",
    "language": "",
    "category": "Academic/Biology",
    "cover_image": ""
  },
  {
    "title": "Mikrobiologjia dhe infektologjia me perkujdesje",
    "year": "",
    "author": "Dr. Ilmi Mehmedi",
    "language": "Albanian",
    "category": "Academic/Medicine",
    "cover_image": ""
  },
  {
    "title": "Gjuha latine",
    "year": "",
    "author": "Dr. Engjell Sedaj",
    "language": "Albanian",
    "category": "Academic/Linguistics",
    "cover_image": ""
  },
  {
    "title": "Historia e maqedonise II",
    "year": "",
    "author": "Mirosllav Boshkoviq",
    "language": "Albanian",
    "category": "Academic/History",
    "cover_image": ""
  },
  {
    "title": "Kequshqyerja - shtimi ne peshe",
    "year": "",
    "author": "No",
    "language": "",
    "category": "Health/Nutrition",
    "cover_image": ""
  },
  {
    "title": "Parandalimi i semundjeve kardiovaskulare me ane te ushqimit",
    "year": "",
    "author": "No",
    "language": "",
    "category": "Health/Nutrition",
    "cover_image": ""
  },
  {
    "title": "Anoreksia dhe bulimia",
    "year": "",
    "author": "No",
    "language": "",
    "category": "Health/Psychology",
    "cover_image": ""
  },
  {
    "title": "Bazat e kujdesit",
    "year": "",
    "author": "Danka Gigovska",
    "language": "Albanian (Textbook for Health Care)",
    "category": "Academic/Health Care",
    "cover_image": ""
  },
  {
    "title": "Proteza parciale",
    "year": "",
    "author": "No",
    "language": "",
    "category": "Academic/Dentistry",
    "cover_image": ""
  },
  {
    "title": "Prefimet e agjentit anglez dhe armiqesia e anglezeve ndaj islamit",
    "year": "",
    "author": "M. Siddik Gümüş",
    "language": "Albanian (Translation)",
    "category": "Religious (Islamic)/Political",
    "cover_image": ""
  },
  {
    "title": "Migjeni 1",
    "year": "",
    "author": "Migjeni",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "Poezi te zgjedhura",
    "year": "",
    "author": "Vahit Nasufi",
    "language": "Albanian",
    "category": "Poetry",
    "cover_image": ""
  },
  {
    "title": "Psikologjia III",
    "year": "",
    "author": "Liljana Mileva",
    "language": "",
    "category": "Academic/Psychology",
    "cover_image": ""
  },
  {
    "title": "Pike heshtje",
    "year": "",
    "author": "Taxhedin Alimi",
    "language": "Albanian",
    "category": "Poetry",
    "cover_image": ""
  },
  {
    "title": "Sa mire, sa bukur",
    "year": "",
    "author": "Berzat Sadiku",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "Aspekti edukativ i krijimtarise poetike te shkrumtarit per femije Odhise K. Grillo",
    "year": "",
    "author": "Mr. Sc. Adem Abdullahu",
    "language": "Albanian",
    "category": "Literary Criticism/Education",
    "cover_image": ""
  },
  {
    "title": "Prangat e praruara",
    "year": "",
    "author": "Shaip Beqiri",
    "language": "Albanian",
    "category": "Literature/Novel",
    "cover_image": ""
  },
  {
    "title": "I ketill ishte Muhamedi Sal-Lallahu Alejhi Ve Sel-lem",
    "year": "",
    "author": "Bekir Halimi",
    "language": "Albanian",
    "category": "Religious (Islamic)/Biography",
    "cover_image": ""
  },
  {
    "title": "Ishulli Adular",
    "year": "",
    "author": "Lindite Ahmeti",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "Migjeni 2",
    "year": "",
    "author": "Migjeni",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "Historia Islame I",
    "year": "",
    "author": "Nuredin Ahmeti",
    "language": "Albanian",
    "category": "Religious (Islamic)/History",
    "cover_image": ""
  },
  {
    "title": "Poezi e zgjedhur",
    "year": "",
    "author": "Adem Abdullahu",
    "language": "Albanian",
    "category": "Poetry",
    "cover_image": ""
  },
  {
    "title": "Ndergjegjja",
    "year": "",
    "author": "Sami Frasheri",
    "language": "Albanian",
    "category": "Philosophy/Literature",
    "cover_image": ""
  },
  {
    "title": "Mami",
    "year": "",
    "author": "Merxhivane Kadrii",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "Si te behesh prind i suksesshem",
    "year": "",
    "author": "Abdullah Mugamed Abdulmuti",
    "language": "Albanian (Translation)",
    "category": "Parenting/Self-Help",
    "cover_image": ""
  },
  {
    "title": "Kimia 11",
    "year": "",
    "author": "Prof. Dr. Eduard Andoni",
    "language": "Albanian",
    "category": "Academic/Chemistry",
    "cover_image": ""
  },
  {
    "title": "Si ta besh femijen tend yll",
    "year": "",
    "author": "Abdulhamid Bilal",
    "language": "Albanian (Translation)",
    "category": "Parenting/Self-Help",
    "cover_image": ""
  },
  {
    "title": "Ky eshte Profeti Muhamed i derguari Zotit per mbare njerzimin",
    "year": "",
    "author": "Prof. Dr. Shefik Osmani",
    "language": "Albanian",
    "category": "Religious (Islamic)/Biography",
    "cover_image": ""
  },
  {
    "title": "Nene me trego per Allahun",
    "year": "",
    "author": "Selçuk Yildrim",
    "language": "Albanian (Translation)",
    "category": "Religious (Islamic)/Children's",
    "cover_image": ""
  },
  {
    "title": "Taroja i tokeve se maleve",
    "year": "",
    "author": "Mijoko Macutani",
    "language": "Albanian (Translation from Japanese)",
    "category": "Children's Literature",
    "cover_image": ""
  },
  {
    "title": "Tregime te mocme",
    "year": "",
    "author": "Thoma Kacori",
    "language": "Albanian",
    "category": "Short Stories",
    "cover_image": ""
  },
  {
    "title": "Drita mbi drite dhe kandili ndricues",
    "year": "",
    "author": "Ef. Ali Tahiri",
    "language": "Albanian",
    "category": "Religious (Islamic)",
    "cover_image": ""
  },
  {
    "title": "Liria",
    "year": "",
    "author": "Nexhat Pustina",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "Semundja - \"Ekrani\"",
    "year": "",
    "author": "Ali Qerimi",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "Derdhje loti...",
    "year": "",
    "author": "Bashkim Selmani",
    "language": "Albanian",
    "category": "Poetry",
    "cover_image": ""
  },
  {
    "title": "Fjalor frengjisht - shqip",
    "year": "1989",
    "author": "Edat Kokona",
    "language": "Albanian/French",
    "category": "Reference/Dictionary",
    "cover_image": ""
  },
  {
    "title": "Fjalor maqedonisht - shqip, shqip - maqedonisht",
    "year": "2020",
    "author": "Ilija Strashevski",
    "language": "Albanian/Macedonian",
    "category": "Reference/Dictionary",
    "cover_image": ""
  },
  {
    "title": "Me syte e argusit",
    "year": "",
    "author": "Rahmi Tuda",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "Fluturim i lire",
    "year": "",
    "author": "Zyhra Farizi",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "Shtjellime letrare",
    "year": "",
    "author": "Dr. Mahmud Hysa",
    "language": "Albanian",
    "category": "Literary Criticism",
    "cover_image": ""
  },
  {
    "title": "Bredhje pertej qetesise",
    "year": "",
    "author": "Iljaz Xhemaili",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "Teoria e noveles dhe e tregimit",
    "year": "",
    "author": "Dr. Hysni Hoxha",
    "language": "Albanian",
    "category": "Literary Theory",
    "cover_image": ""
  },
  {
    "title": "Nuk shembet nje popull i bekuar",
    "year": "",
    "author": "Muzafer Ramadani",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "Fjalet e qiririt",
    "year": "2000 (reprint)",
    "author": "Naim Frasheri",
    "language": "Albanian",
    "category": "Poetry/Classic Literature",
    "cover_image": ""
  },
  {
    "title": "Bukuria e jetes",
    "year": "",
    "author": "Bekir Halimi",
    "language": "Albanian",
    "category": "Literature/Poetry",
    "cover_image": ""
  },
  {
    "title": "Migjeni 3",
    "year": "",
    "author": "Migjeni",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "Migjeni 4",
    "year": "",
    "author": "Migjeni",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "Narracioni dhe folalizimi ne tregimin shqiptar ne maqedoni",
    "year": "",
    "author": "Sherif Selimi",
    "language": "Albanian",
    "category": "Literary Criticism",
    "cover_image": ""
  },
  {
    "title": "Tregime te mocme",
    "year": "",
    "author": "Thoma Kacori",
    "language": "Albanian",
    "category": "Short Stories",
    "cover_image": ""
  },
  {
    "title": "Bageti e bujqesia",
    "year": "1886 (Original) / Various",
    "author": "Naim Frasheri",
    "language": "Albanian",
    "category": "Poetry/Classic Literature",
    "cover_image": ""
  },
  {
    "title": "Gramatika e gjuhes Angleze",
    "year": "",
    "author": "Halit Burrniku",
    "language": "Albanian (Instructional)",
    "category": "Language Instruction",
    "cover_image": ""
  },
  {
    "title": "Ne tetove bie shi",
    "year": "",
    "author": "Daim Iljazi",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "Kultere",
    "year": "",
    "author": "Taxhedin Alimi",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "Me cfar mendje apo feje mund te konsiderohen shperthimet dhe shkateimet lufte ne rruge te zotit?!",
    "year": "",
    "author": "Abdulmuhsin Bin Hamed El Abbad El Bedr",
    "language": "Albanian (Translation)",
    "category": "Religious (Islamic)",
    "cover_image": ""
  },
  {
    "title": "Te tjeret per islamin",
    "year": "",
    "author": "Ajni Sinani",
    "language": "Albanian",
    "category": "Religious (Islamic)",
    "cover_image": ""
  },
  {
    "title": "Historia e Skenderbeut",
    "year": "",
    "author": "Odhise K. Grillo",
    "language": "Albanian",
    "category": "History/Biography",
    "cover_image": ""
  },
  {
    "title": "Ura e fshejit",
    "year": "",
    "author": "Jusuf Buxhovi",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "10 arsyet me te forta pse vajzat nuk e mbane hixhabin",
    "year": "",
    "author": "Dr. Huejda Ismail",
    "language": "Albanian (Translation)",
    "category": "Religious (Islamic)/Social",
    "cover_image": ""
  },
  {
    "title": "Malli per vendlindjen",
    "year": "",
    "author": "Sheqibe Shaqiri",
    "language": "Albanian",
    "category": "Literature/Poetry",
    "cover_image": ""
  },
  {
    "title": "Muhamedi profeti islam",
    "year": "",
    "author": "Imam Vehbi Ismaili",
    "language": "Albanian",
    "category": "Religious (Islamic)/Biography",
    "cover_image": ""
  },
  {
    "title": "Pirua i Epirit",
    "year": "",
    "author": "Leonard Prifti",
    "language": "Albanian",
    "category": "History/Biography",
    "cover_image": ""
  },
  {
    "title": "Vallja e shkronjave",
    "year": "",
    "author": "Mehmedali Hoxha",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "Ilumuddini",
    "year": "",
    "author": "Bilal Hasanoviq",
    "language": "Albanian",
    "category": "Religious (Islamic)",
    "cover_image": ""
  },
  {
    "title": "Aforizma pedagogjik",
    "year": "",
    "author": "Mehdi Memeti",
    "language": "Albanian",
    "category": "Education/Aphorisms",
    "cover_image": ""
  },
  {
    "title": "Lulja e lumturise",
    "year": "",
    "author": "Arijeta Alija",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "Tregime islame per femije dhe te rritur",
    "year": "",
    "author": "Mr. Nexhadi ef. Limani",
    "language": "Albanian",
    "category": "Religious (Islamic)/Stories",
    "cover_image": ""
  },
  {
    "title": "Shtepia misterioze",
    "year": "",
    "author": "Honore De Balzak",
    "language": "Albanian (Translation from French)",
    "category": "Classic Literature/Novel",
    "cover_image": ""
  },
  {
    "title": "Udheheqje pedagogjike",
    "year": "",
    "author": "Mehdi Memeti",
    "language": "Albanian",
    "category": "Education/Pedagogy",
    "cover_image": ""
  },
  {
    "title": "Psalme te vonuara",
    "year": "",
    "author": "Alusg Kamberi",
    "language": "Albanian",
    "category": "Poetry",
    "cover_image": ""
  },
  {
    "title": "Vrasesi i konsullit",
    "year": "",
    "author": "Jakup Ceraja",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "Mendime",
    "year": "",
    "author": "Myfti i Manastirit",
    "language": "Albanian",
    "category": "Philosophy/Religious",
    "cover_image": ""
  },
  {
    "title": "Muhamedi a.s profeti islam",
    "year": "",
    "author": "Imam Vehbi Ismaili",
    "language": "Albanian",
    "category": "Religious (Islamic)/Biography",
    "cover_image": ""
  },
  {
    "title": "Amesia",
    "year": "",
    "author": "Shyqri Galcia",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "Luli i vocer",
    "year": "",
    "author": "Migjeni",
    "language": "Albanian",
    "category": "Literature/Short Stories",
    "cover_image": ""
  },
  {
    "title": "Tempulli i mekateve",
    "year": "",
    "author": "Ejup Ajdini",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "Fonetika",
    "year": "",
    "author": "Kostaq Cipo",
    "language": "Albanian",
    "category": "Academic/Linguistics",
    "cover_image": ""
  },
  {
    "title": "E pervajtura",
    "year": "",
    "author": "Nexhat Mustafa",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "Anglisht ne nje jave",
    "year": "",
    "author": "Enver Neziri",
    "language": "Albanian (Instructional)",
    "category": "Language Instruction",
    "cover_image": ""
  },
  {
    "title": "Pa konsensus",
    "year": "",
    "author": "Bezgat Bezgati",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "Biografi e shkaperderdhur",
    "year": "",
    "author": "Syrja Etemi",
    "language": "Albanian",
    "category": "Biography/Memoir",
    "cover_image": ""
  },
  {
    "title": "Aventura mbi drin",
    "year": "1999",
    "author": "Adil Zeka",
    "language": "Albanian",
    "category": "Children's Literature/Novel",
    "cover_image": ""
  },
  {
    "title": "Letersia e huaj",
    "year": "",
    "author": "Zihni Sako",
    "language": "Albanian",
    "category": "Academic/Literary Studies",
    "cover_image": ""
  },
  {
    "title": "Lutjet e jetes nga Kurani dhe Hadithi",
    "year": "",
    "author": "No",
    "language": "",
    "category": "Religious (Islamic)",
    "cover_image": ""
  },
  {
    "title": "A ka jete pertej se majtes dhe se djathtes",
    "year": "",
    "author": "Ndricum Kulla",
    "language": "Albanian",
    "category": "Philosophy/Social Commentary",
    "cover_image": ""
  },
  {
    "title": "Imperfekti ne gjuhen shqipe",
    "year": "",
    "author": "Mr. Haxhere Sulejmani",
    "language": "Albanian",
    "category": "Academic/Linguistics",
    "cover_image": ""
  },
  {
    "title": "Gurekala",
    "year": "",
    "author": "Hasan Hasani",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "Kati i trete",
    "year": "",
    "author": "Adem Abdullahu",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "Vendimi i islamit per mjekren dhe duhanin",
    "year": "",
    "author": "Ali Iben Hasen Abdulhamid El Halebi El Etheri",
    "language": "Albanian (Translation)",
    "category": "Religious (Islamic)",
    "cover_image": ""
  },
  {
    "title": "Drita e zemres",
    "year": "1992",
    "author": "Dr. Ramiz Zekaj",
    "language": "Albanian",
    "category": "Religious (Islamic)",
    "cover_image": ""
  },
  {
    "title": "Nevoja e njerzimit per mesazhin e Muhamedit sal-lallahu alejhi ve sel-lem",
    "year": "",
    "author": "Nehat Ismaili",
    "language": "Albanian",
    "category": "Religious (Islamic)",
    "cover_image": ""
  },
  {
    "title": "Mall",
    "year": "",
    "author": "Kimete Tairi",
    "language": "Albanian",
    "category": "Poetry",
    "cover_image": ""
  },
  {
    "title": "Dust of dreams",
    "year": "2009",
    "author": "Steven Erikson",
    "language": "English",
    "category": "Fantasy/Novel",
    "cover_image": ""
  },
  {
    "title": "Engjuj dhe djaj",
    "year": "2000 (Original)",
    "author": "Dan Brown",
    "language": "Albanian (Translation from English)",
    "category": "Mystery/Thriller/Novel",
    "cover_image": ""
  },
  {
    "title": "The godfather",
    "year": "1969 (Original)",
    "author": "Mario Puzo",
    "language": "English",
    "category": "Crime/Novel",
    "cover_image": ""
  },
  {
    "title": "The sicilian",
    "year": "1984 (Original)",
    "author": "Mario Puzo",
    "language": "English",
    "category": "Crime/Novel",
    "cover_image": ""
  },
  {
    "title": "The intellegent investor",
    "year": "1949 (Original)",
    "author": "Benjamin Graham",
    "language": "English",
    "category": "Finance/Investing",
    "cover_image": ""
  },
  {
    "title": "Forever amber",
    "year": "1944",
    "author": "Kathleen Winsor",
    "language": "English",
    "category": "Historical Fiction/Novel",
    "cover_image": ""
  },
  {
    "title": "The crippled god",
    "year": "2011",
    "author": "Steven Erikson",
    "language": "English",
    "category": "Fantasy/Novel",
    "cover_image": ""
  },
  {
    "title": "Solace",
    "year": "",
    "author": "Nicci Gerrard",
    "language": "English",
    "category": "Fiction/Novel",
    "cover_image": ""
  },
  {
    "title": "Past tense",
    "year": "2018",
    "author": "Lee Child",
    "language": "English",
    "category": "Thriller/Novel",
    "cover_image": ""
  },
  {
    "title": "Across the universe",
    "year": "2011",
    "author": "Beth Revis",
    "language": "English",
    "category": "Science Fiction/Young Adult",
    "cover_image": ""
  },
  {
    "title": "Ne shoqeri me te dashurin tone",
    "year": "",
    "author": "Abdulhalik Sherif",
    "language": "Albanian (Translation)",
    "category": "Religious (Islamic)",
    "cover_image": ""
  },
  {
    "title": "Ylli ne pushime",
    "year": "",
    "author": "Ali Qerimi",
    "language": "Albanian",
    "category": "Children's Literature",
    "cover_image": ""
  },
  {
    "title": "Shpella e thesarit",
    "year": "",
    "author": "Ali Qerimi",
    "language": "Albanian",
    "category": "Children's Literature",
    "cover_image": ""
  },
  {
    "title": "Klasa jone",
    "year": "",
    "author": "Ali Qerimi",
    "language": "Albanian",
    "category": "Children's Literature",
    "cover_image": ""
  },
  {
    "title": "Drita e zemres suret e shkurtera dhe jasini",
    "year": "",
    "author": "No",
    "language": "Albanian",
    "category": "Religious (Islamic)/Prayer Book",
    "cover_image": ""
  },
  {
    "title": "Ramazani muaji i vlerave",
    "year": "",
    "author": "No",
    "language": "Albanian",
    "category": "Religious (Islamic)",
    "cover_image": ""
  },
  {
    "title": "Bamiresia ndan prinderve",
    "year": "",
    "author": "Dr. Said iben Ali iben Vehf el Kahtani",
    "language": "Albanian (Translation)",
    "category": "Religious (Islamic)/Parenting",
    "cover_image": ""
  },
  {
    "title": "Perjetoni bukurine e namazit",
    "year": "",
    "author": "Mishary Al Khazar",
    "language": "Albanian (Translation)",
    "category": "Religious (Islamic)",
    "cover_image": ""
  },
  {
    "title": "Tregime mbi parimet e ngrenies dhe pijes",
    "year": "",
    "author": "Ahmed Muhamed Hasan",
    "language": "Albanian (Translation)",
    "category": "Religious (Islamic)/Children's",
    "cover_image": ""
  },
  {
    "title": "Tregime mbi parimet e lojes dhe talljes",
    "year": "",
    "author": "Shaban Mustafa Kazamil",
    "language": "Albanian (Translation)",
    "category": "Religious (Islamic)/Children's",
    "cover_image": ""
  },
  {
    "title": "Tregime mbi parimet e punes",
    "year": "",
    "author": "Jasir Ali Nur",
    "language": "Albanian (Translation)",
    "category": "Religious (Islamic)/Children's",
    "cover_image": ""
  },
  {
    "title": "Tregime mbi parimet e pershendetjes",
    "year": "",
    "author": "Medihat Mensur El-Medhali",
    "language": "Albanian (Translation)",
    "category": "Religious (Islamic)/Children's",
    "cover_image": ""
  },
  {
    "title": "Tregime mbi parimet e diturise",
    "year": "",
    "author": "Eshref Abdurteuf Kadeh",
    "language": "Albanian (Translation)",
    "category": "Religious (Islamic)/Children's",
    "cover_image": ""
  },
  {
    "title": "Gjuha e kuranit",
    "year": "",
    "author": "Abduhrrahman Asllani",
    "language": "Albanian",
    "category": "Religious (Islamic)/Linguistics",
    "cover_image": ""
  },
  {
    "title": "Gramatika e gjuhes shqipe II",
    "year": "",
    "author": "Zijadin Munishi",
    "language": "Albanian",
    "category": "Academic/Linguistics",
    "cover_image": ""
  },
  {
    "title": "Hyrje ne shkencen e letersise",
    "year": "",
    "author": "Milivoj Solar",
    "language": "Albanian (Translation)",
    "category": "Academic/Literary Theory",
    "cover_image": ""
  },
  {
    "title": "Hyrje ne gjuhen e pergjithshme",
    "year": "",
    "author": "Shezai Rrokaj",
    "language": "Albanian",
    "category": "Academic/Linguistics",
    "cover_image": ""
  },
  {
    "title": "Pulsin yjesh",
    "year": "",
    "author": "Ahmet Osmani",
    "language": "Albanian",
    "category": "Poetry",
    "cover_image": ""
  },
  {
    "title": "Gramatika e gabimeve",
    "year": "",
    "author": "Dr. Qemal Murati",
    "language": "Albanian",
    "category": "Academic/Linguistics",
    "cover_image": ""
  },
  {
    "title": "Verorja",
    "year": "",
    "author": "Rexhep Hoxha",
    "language": "Albanian",
    "category": "Literature",
    "cover_image": ""
  },
  {
    "title": "Vallja e luleve",
    "year": "",
    "author": "Qefsere Dauti-Rufati",
    "language": "Albanian",
    "category": "Poetry",
    "cover_image": ""
  },
  {
    "title": "Jeta alhaku dhe themelet e fese qe presikoi Muhamedi a.s",
    "year": "",
    "author": "Prof. Dr. Ahmet Onkal",
    "language": "Albanian (Translation)",
    "category": "Religious (Islamic)/Biography",
    "cover_image": ""
  },
  {
    "title": "Rregullat e arta te te pareve per vellazerine e besimit",
    "year": "",
    "author": "Dr. Abdullah Ferexhullah",
    "language": "Albanian (Translation)",
    "category": "Religious (Islamic)",
    "cover_image": ""
  },
  {
    "title": "Udhezues i Ibadetit",
    "year": "",
    "author": "Sejfetin Jazexhe",
    "language": "Albanian",
    "category": "Religious (Islamic)",
    "cover_image": ""
  },
  {
    "title": "Gjuha shqipe dhe leximi IX",
    "year": "",
    "author": "Islam Karanfili",
    "language": "Albanian",
    "category": "Academic/Language Arts",
    "cover_image": ""
  },
  {
    "title": "Detyra paresore te levizjes islame ne periudhen e ardhshme",
    "year": "",
    "author": "Dr. Josuf el-Kardavi",
    "language": "Albanian (Translation)",
    "category": "Religious (Islamic)/Political",
    "cover_image": ""
  },
  {
    "title": "Emrat e bukur te Allahut",
    "year": "",
    "author": "Dr. Vexhih Jakub Sejjid",
    "language": "Albanian (Translation)",
    "category": "Religious (Islamic)",
    "cover_image": ""
  },
  {
    "title": "Historia e profeteve",
    "year": "",
    "author": "Amer Halid",
    "language": "Albanian (Translation)",
    "category": "Religious (Islamic)/History",
    "cover_image": ""
  },
  {
    "title": "Studime letrare",
    "year": "",
    "author": "Sherif Selimi",
    "language": "Albanian",
    "category": "Literary Criticism",
    "cover_image": ""
  },
  {
    "title": "Rethanat fetare arsimore ne rajonin e Tetives dhe rethinen e saj",
    "year": "",
    "author": "Abdulqerim Osmani",
    "language": "Albanian",
    "category": "Religious/Education/Regional History",
    "cover_image": ""
  },
  {
    "title": "Gete ka te drejt",
    "year": "",
    "author": "Lutfi Lepaj",
    "language": "Albanian",
    "category": "Literature/Philosophy",
    "cover_image": ""
  },
  {
    "title": "Astronomia kuranore",
    "year": "",
    "author": "Adnan Sherifi",
    "language": "Albanian",
    "category": "Religious (Islamic)/Science",
    "cover_image": ""
  },
  {
    "title": "Imam Esh'ariu Jets, vepra dhe mendime",
    "year": "",
    "author": "Nexhat Ibrahimi",
    "language": "Albanian",
    "category": "Religious (Islamic)/Biography",
    "cover_image": ""
  }
]

export default books
type College = {
  name: string;
  type: "Government" | "Aided" | "Private" | "Autonomous";
  note?: string;
};

type Category = {
  name: string;
  colleges: College[];
};

export type DistrictData = {
  name: string;
  slug: string;
  tagline: string;
  institutions: number;
  courseCount: number;
  categories: Category[];
};

export const districtsData: DistrictData[] = [
  {
    name: "Thiruvananthapuram",
    slug: "thiruvananthapuram",
    tagline:
      "Kerala's capital blends historic academic institutions with modern research campuses. Home to the state's oldest government colleges and a growing private sector.",
    institutions: 34,
    courseCount: 86,
    categories: [
      {
        name: "Engineering",
        colleges: [
          { name: "College of Engineering Trivandrum", type: "Government", note: "Established 1939" },
          { name: "TKM College of Engineering", type: "Aided", note: "NAAC A+ accredited" },
          { name: "Rajiv Gandhi Institute of Technology", type: "Government" },
          { name: "M.G. College of Engineering", type: "Private" },
          { name: "Mohandas College of Engineering", type: "Private" },
          { name: "Sree Chitra Thirunal College of Engineering", type: "Government" },
        ],
      },
      {
        name: "Medicine",
        colleges: [
          { name: "Government Medical College Thiruvananthapuram", type: "Government", note: "Est. 1951" },
          { name: "KIMS Hospital", type: "Private", note: "NAAC A+ accredited" },
          { name: "Sree Chitra Thirunal Institute", type: "Autonomous", note: "National importance" },
          { name: "Azeezia Medical College", type: "Private" },
          { name: "Karithas College of Nursing", type: "Private" },
        ],
      },
      {
        name: "Law",
        colleges: [
          { name: "Government Law College Thiruvananthapuram", type: "Government", note: "Est. 1875" },
          { name: "Kerala Law Academy Law College", type: "Private" },
          { name: "SPECS Law College", type: "Private" },
        ],
      },
      {
        name: "Commerce",
        colleges: [
          { name: "Mahatma Gandhi College", type: "Government", note: "NAAC A+ accredited" },
          { name: "University College Thiruvananthapuram", type: "Government", note: "Est. 1866" },
          { name: "St. Xavier's College", type: "Aided" },
          { name: "MM College of Arts and Science", type: "Private" },
        ],
      },
    ],
  },
  {
    name: "Kollam",
    slug: "kollam",
    tagline:
      "Quilon's educational hub spans engineering, nursing and commerce — anchored by TKM and SN College, with a strong aided-college network.",
    institutions: 41,
    courseCount: 94,
    categories: [
      {
        name: "Engineering",
        colleges: [
          { name: "TKM College of Engineering", type: "Aided", note: "NAAC A+ accredited" },
          { name: "SNM Institute of Management and Technology", type: "Private" },
          { name: "Federal Institute of Science and Technology", type: "Private", note: "Autonomous" },
          { name: "College of Engineering Perumon", type: "Government" },
          { name: "Meenakshi Institute of Technology", type: "Private" },
        ],
      },
      {
        name: "Nursing",
        colleges: [
          { name: "Amrita School of Nursing", type: "Private" },
          { name: "SN College of Nursing", type: "Aided" },
          { name: "KMCT College of Nursing", type: "Private" },
          { name: "Pushpagiri College of Nursing", type: "Private" },
          { name: "Barkathullah College of Nursing", type: "Private" },
        ],
      },
      {
        name: "Commerce",
        colleges: [
          { name: "SN College Kollam", type: "Aided", note: "NAAC A accredited" },
          { name: "Sree Narayana College", type: "Aided" },
          { name: "Mahatma Gandhi College", type: "Aided" },
          { name: "Fatima Matha National College", type: "Aided" },
        ],
      },
      {
        name: "Arts & Science",
        colleges: [
          { name: "SN College Kollam", type: "Aided", note: "NAAC A accredited" },
          { name: "Sree Narayana College for Women", type: "Aided" },
          { name: "T.K.M. College of Arts and Science", type: "Aided" },
          { name: "SD College", type: "Aided" },
        ],
      },
    ],
  },
  {
    name: "Pathanamthitta",
    slug: "pathanamthitta",
    tagline:
      "A hilly, educationally underserved district where aided-college seats and nursing programmes dominate — we handle the quota mapping and hostel logistics families often struggle with.",
    institutions: 19,
    courseCount: 42,
    categories: [
      {
        name: "Nursing",
        colleges: [
          { name: "Pushpagiri College of Nursing", type: "Private", note: "NAAC A accredited" },
          { name: "Mount Zion College of Nursing", type: "Private" },
          { name: "Saint John's College of Nursing", type: "Private" },
          { name: "Buds College of Nursing", type: "Private" },
          { name: "Jyothi College of Nursing", type: "Private" },
        ],
      },
      {
        name: "Arts & Science",
        colleges: [
          { name: "St. Thomas College Ranni", type: "Aided" },
          { name: "N.S.S. College Pandalam", type: "Aided", note: "Est. 1950" },
          { name: "Mahathma Gandhi College Seethathode", type: "Aided" },
          { name: "MD College of Arts and Science", type: "Aided" },
          { name: "S.D. Vidyapeetham College", type: "Private" },
        ],
      },
      {
        name: "B.Ed",
        colleges: [
          { name: "N.S.S. Training College", type: "Aided" },
          { name: "St. Thomas College of Education", type: "Private" },
          { name: "B.M. College of Education", type: "Private" },
        ],
      },
      {
        name: "Commerce",
        colleges: [
          { name: "N.S.S. College Pandalam", type: "Aided" },
          { name: "St. Thomas College Ranni", type: "Aided" },
          { name: "MD College of Arts and Science", type: "Aided" },
        ],
      },
    ],
  },
  {
    name: "Alappuzha",
    slug: "alappuzha",
    tagline:
      "Backwater-district campuses strong in medical, commerce and marine studies — we track paramedical seat releases and file on opening day.",
    institutions: 23,
    courseCount: 56,
    categories: [
      {
        name: "Medicine",
        colleges: [
          { name: "Government TD Medical College", type: "Government", note: "Est. 1963" },
          { name: "Pushpagiri Medical College", type: "Private" },
          { name: "SUT Academy of Medical Sciences", type: "Private" },
        ],
      },
      {
        name: "Commerce",
        colleges: [
          { name: "SN College Cherthala", type: "Aided" },
          { name: "Government College for Women", type: "Government" },
          { name: "S.D. College", type: "Aided" },
          { name: "M.G.M. College of Commerce", type: "Aided" },
        ],
      },
      {
        name: "Marine",
        colleges: [
          { name: "Cusat School of Marine Sciences", type: "Autonomous", note: "Under CUSAT" },
          { name: "Kerala University of Fisheries and Ocean Studies", type: "Autonomous" },
        ],
      },
      {
        name: "Engineering",
        colleges: [
          { name: "Government Engineering College Alappuzha", type: "Government" },
          { name: "Viswajyothi College of Engineering", type: "Private" },
          { name: "Toc-H Institute of Technology", type: "Private" },
        ],
      },
    ],
  },
  {
    name: "Kottayam",
    slug: "kottayam",
    tagline:
      "MG University's headquarters — equivalency certificates, affiliation checks and deadline reminders are our bread and butter here.",
    institutions: 31,
    courseCount: 78,
    categories: [
      {
        name: "Medicine",
        colleges: [
          { name: "Government Medical College Kottayam", type: "Government", note: "Est. 1962" },
          { name: "PDC Medical College", type: "Private" },
          { name: "Amala Institute of Medical Sciences", type: "Private", note: "NAAC A+ accredited" },
        ],
      },
      {
        name: "Law",
        colleges: [
          { name: "Government Law College Kottayam", type: "Government" },
          { name: "Baselius College", type: "Aided" },
          { name: "Bharath Matha College of Law", type: "Private" },
        ],
      },
      {
        name: "Management",
        colleges: [
          { name: "Bharathiar University School of Management", type: "Autonomous" },
          { name: "Rajagiri Centre for Business Studies", type: "Private", note: "NAAC A+ accredited" },
          { name: "Amal Jyothi College of Engineering", type: "Private" },
        ],
      },
      {
        name: "Arts & Science",
        colleges: [
          { name: "CMS College Kottayam", type: "Aided", note: "Est. 1817" },
          { name: "N.S.S. College Kottayam", type: "Aided" },
          { name: "Bishop Moore College", type: "Aided" },
          { name: "St. Albert's College", type: "Aided" },
        ],
      },
    ],
  },
  {
    name: "Idukki",
    slug: "idukki",
    tagline:
      "Kerala's hill district has limited seats spread across agriculture, engineering and forestry — we shortlist realistically and confirm transport before you commit.",
    institutions: 12,
    courseCount: 28,
    categories: [
      {
        name: "Agriculture",
        colleges: [
          { name: "Kerala Agricultural University Idukki", type: "Autonomous", note: "KAU campus" },
          { name: "College of Agriculture Vannapuram", type: "Autonomous" },
        ],
      },
      {
        name: "Engineering",
        colleges: [
          { name: "Government Engineering College Idukki", type: "Government" },
          { name: "Rajiv Gandhi Institute of Technology Kottayam", type: "Government" },
          { name: "SCMS School of Engineering", type: "Private" },
        ],
      },
      {
        name: "Forestry",
        colleges: [
          { name: "College of Forestry Vannapuram", type: "Autonomous", note: "KAU affiliate" },
        ],
      },
      {
        name: "Arts & Science",
        colleges: [
          { name: "Mahatma Gandhi College Idukki", type: "Aided" },
          { name: "N.S.S. College for Women", type: "Aided" },
        ],
      },
    ],
  },
  {
    name: "Ernakulam",
    slug: "ernakulam",
    tagline:
      "Kerala's widest academic landscape — CUSAT, major private universities and the state's densest college cluster. We compare fees and placements so you choose wisely.",
    institutions: 52,
    courseCount: 130,
    categories: [
      {
        name: "Engineering",
        colleges: [
          { name: "Cochin University of Science & Technology", type: "Autonomous", note: "NAAC A+ accredited" },
          { name: "Government Engineering College Thrissur", type: "Government" },
          { name: "M.A. College of Engineering", type: "Aided" },
          { name: "Rajagiri College of Engineering", type: "Private" },
          { name: "SCMS School of Engineering & Technology", type: "Private" },
          { name: "Saintgits College of Engineering", type: "Private" },
          { name: "MES College of Engineering", type: "Private" },
        ],
      },
      {
        name: "Management",
        colleges: [
          { name: "Indian Institute of Management Kozhikode", type: "Autonomous", note: "IIM" },
          { name: "Rajagiri Centre for Business Studies", type: "Private", note: "NAAC A+ accredited" },
          { name: "Toc-H Business School", type: "Private" },
          { name: "SCMS School of Business", type: "Private" },
        ],
      },
      {
        name: "Design",
        colleges: [
          { name: "National Institute of Design Calicut", type: "Autonomous", note: "NID campus" },
          { name: "LIMS College of Design", type: "Private" },
          { name: "Cochin College of Fine Arts", type: "Aided" },
        ],
      },
      {
        name: "Arts & Science",
        colleges: [
          { name: "Maharaja's College Ernakulam", type: "Government", note: "Est. 1875" },
          { name: "St. Albert's College", type: "Aided" },
          { name: "Loyola College of Social Sciences", type: "Aided" },
          { name: "Rajagiri College of Social Sciences", type: "Private", note: "NAAC A+ accredited" },
          { name: "Sree Sankaracharya University", type: "Autonomous" },
        ],
      },
    ],
  },
  {
    name: "Thrissur",
    slug: "thrissur",
    tagline:
      "The cultural capital — home to Kerala's top law and fine arts colleges, plus a strong medical cluster. We prepare KLEE portfolios and verify category documents.",
    institutions: 37,
    courseCount: 88,
    categories: [
      {
        name: "Law",
        colleges: [
          { name: "Government Law College Thrissur", type: "Government", note: "Est. 1894" },
          { name: "Kerala Law Academy", type: "Private" },
          { name: "Sree Narayana Guru College of Legal Studies", type: "Private" },
        ],
      },
      {
        name: "Medical",
        colleges: [
          { name: "Government Medical College Thrissur", type: "Government", note: "Est. 1982" },
          { name: "Amala Institute of Medical Sciences", type: "Private", note: "NAAC A+ accredited" },
          { name: "P.K. Das Institute of Medical Sciences", type: "Private" },
        ],
      },
      {
        name: "Fine Arts",
        colleges: [
          { name: "College of Fine Arts Thrissur", type: "Government" },
          { name: "Kerala Kalamandalam", type: "Autonomous", note: "Heritage institution" },
        ],
      },
      {
        name: "Engineering",
        colleges: [
          { name: "Government Engineering College Thrissur", type: "Government", note: "Est. 1957" },
          { name: "Vimal Jyothi Engineering College", type: "Private" },
          { name: "MES Institute of Technology", type: "Private" },
          { name: "Vidya Academy of Science and Technology", type: "Private" },
        ],
      },
    ],
  },
  {
    name: "Palakkad",
    slug: "palakkad",
    tagline:
      "Gateway to the Malabar — IIT Palakkad anchors the district's engineering cluster. We run parallel backup applications so no year is lost.",
    institutions: 26,
    courseCount: 62,
    categories: [
      {
        name: "Engineering",
        colleges: [
          { name: "IIT Palakkad", type: "Autonomous", note: "Institute of National Importance" },
          { name: "Government Engineering College Palakkad", type: "Government" },
          { name: "NSS College of Engineering", type: "Aided" },
          { name: "M.P. Narayanan Memorial National Institute", type: "Private" },
        ],
      },
      {
        name: "Agriculture",
        colleges: [
          { name: "Kerala Agricultural University Palakkad", type: "Autonomous", note: "KAU campus" },
          { name: "College of Agriculture Vellayani", type: "Autonomous" },
        ],
      },
      {
        name: "Arts & Science",
        colleges: [
          { name: "Victoria College Palakkad", type: "Aided", note: "Est. 1874" },
          { name: "NSS College Ottapalam", type: "Aided" },
          { name: "V.V. College of Arts and Science", type: "Aided" },
          { name: "M.E.S. Maramkalam College", type: "Aided" },
        ],
      },
      {
        name: "Commerce",
        colleges: [
          { name: "Victoria College Palakkad", type: "Aided" },
          { name: "St. Thomas College Thrissur", type: "Aided" },
          { name: "SN College Palakkad", type: "Aided" },
        ],
      },
    ],
  },
  {
    name: "Malappuram",
    slug: "malappuram",
    tagline:
      "Calicut University's home — CAP registration, community quota paperwork and result-day follow-up handled on your behalf.",
    institutions: 29,
    courseCount: 72,
    categories: [
      {
        name: "Arts & Science",
        colleges: [
          { name: "University of Calicut", type: "Autonomous", note: "State university" },
          { name: "TKM College of Arts and Science", type: "Aided" },
          { name: "M.E.S. Asmabi College", type: "Aided" },
          { name: "Nehru Arts and Science College", type: "Private" },
          { name: "PSMO College Tirurangadi", type: "Aided" },
        ],
      },
      {
        name: "Management",
        colleges: [
          { name: "IMK Institute of Management", type: "Autonomous" },
          { name: "MES Maramkalam College", type: "Aided" },
          { name: "Don Bosco College", type: "Private" },
        ],
      },
      {
        name: "Nursing",
        colleges: [
          { name: "KMCT College of Nursing", type: "Private" },
          { name: "MES College of Nursing", type: "Private" },
          { name: "M.Y. College of Nursing", type: "Private" },
        ],
      },
      {
        name: "Commerce",
        colleges: [
          { name: "University of Calicut", type: "Autonomous" },
          { name: "P.K.M. College of Commerce", type: "Aided" },
          { name: "MD College", type: "Aided" },
        ],
      },
    ],
  },
  {
    name: "Kozhikode",
    slug: "kozhikode",
    tagline:
      "Home to IIM Kozhikode and a strong medical-management cluster. We schedule interviews and certificate checks in one trip to save families repeated travel.",
    institutions: 33,
    courseCount: 82,
    categories: [
      {
        name: "Medical",
        colleges: [
          { name: "Government Medical College Kozhikode", type: "Government", note: "Est. 1957" },
          { name: "MIMS Hospital Kozhikode", type: "Private" },
          { name: "Azeezia Medical College", type: "Private" },
        ],
      },
      {
        name: "Management",
        colleges: [
          { name: "IIM Kozhikode", type: "Autonomous", note: "Institute of National Importance" },
          { name: "Indian Institute of Management Kozhikode", type: "Autonomous" },
          { name: "Vidyadhirja School of Business", type: "Private" },
        ],
      },
      {
        name: "Engineering",
        colleges: [
          { name: "Government Engineering College Kozhikode", type: "Government" },
          { name: "Model Engineering College", type: "Aided", note: "NAAC A accredited" },
          { name: "Meenchantha College of Engineering", type: "Private" },
        ],
      },
      {
        name: "Arts & Science",
        colleges: [
          { name: "Farook College", type: "Aided", note: "NAAC A+ accredited" },
          { name: "St. Joseph's College Devagiri", type: "Aided" },
          { name: "Malabar Christian College", type: "Aided" },
          { name: "SM College Kozhikode", type: "Aided" },
        ],
      },
    ],
  },
  {
    name: "Wayanad",
    slug: "wayanad",
    tagline:
      "Kerala's tribal district — scholarship and tribal-quota assistance are our specialty here, plus direct coordination with campus admissions offices.",
    institutions: 9,
    courseCount: 22,
    categories: [
      {
        name: "Agriculture",
        colleges: [
          { name: "Kerala Agricultural University Wayanad", type: "Autonomous", note: "KAU campus" },
        ],
      },
      {
        name: "Veterinary",
        colleges: [
          { name: "Kerala Veterinary and Animal Sciences University", type: "Autonomous" },
        ],
      },
      {
        name: "B.Ed",
        colleges: [
          { name: "Govt. College of Teacher Education", type: "Government" },
          { name: "SNGM College of Education", type: "Private" },
        ],
      },
      {
        name: "Arts & Science",
        colleges: [
          { name: "Govt. Arts and Science College Mananthavady", type: "Government" },
          { name: "Mahatma Gandhi College Sulthan Bathery", type: "Aided" },
          { name: "NMSM College Kalpetta", type: "Aided" },
        ],
      },
    ],
  },
  {
    name: "Kannur",
    slug: "kannur",
    tagline:
      "Strong in engineering, nursing and commerce — Kannur University portal filing and refund-rule explanations are core services we provide.",
    institutions: 21,
    courseCount: 54,
    categories: [
      {
        name: "Engineering",
        colleges: [
          { name: "Government Engineering College Kannur", type: "Government" },
          { name: "KNM College of Engineering", type: "Private" },
          { name: "LBS Institute of Technology", type: "Private" },
        ],
      },
      {
        name: "Nursing",
        colleges: [
          { name: "A.K. College of Nursing", type: "Private" },
          { name: "KMCT College of Nursing Kannur", type: "Private" },
          { name: "Kannur College of Nursing", type: "Private" },
        ],
      },
      {
        name: "Commerce",
        colleges: [
          { name: "St. Aloysius College", type: "Aided", note: "NAAC A accredited" },
          { name: "Govt. Brennen College", type: "Aided" },
          { name: "P.N.M. College", type: "Aided" },
        ],
      },
      {
        name: "Arts & Science",
        colleges: [
          { name: "St. Aloysius College", type: "Aided", note: "Est. 1968" },
          { name: "Govt. Brennen College Thalassery", type: "Aided" },
          { name: "D.E.S. College", type: "Aided" },
        ],
      },
    ],
  },
  {
    name: "Kasaragod",
    slug: "kasaragod",
    tagline:
      "Kerala's northernmost district — bilingual guidance for families, including inter-state options if a Kerala seat isn't the best fit.",
    institutions: 14,
    courseCount: 34,
    categories: [
      {
        name: "Arts & Science",
        colleges: [
          { name: "Government College Kasaragod", type: "Government" },
          { name: "Mahatma Gandhi College", type: "Aided" },
          { name: "Valspad Arts and Science College", type: "Private" },
          { name: "Kidderpur Arts and Science College", type: "Private" },
        ],
      },
      {
        name: "Nursing",
        colleges: [
          { name: "Yenepoya College of Nursing", type: "Private" },
          { name: "Al-Qameel College of Nursing", type: "Private" },
          { name: "MIMS College of Nursing", type: "Private" },
        ],
      },
      {
        name: "B.Ed",
        colleges: [
          { name: "Govt. College of Teacher Education", type: "Government" },
          { name: "Iqbal College of Education", type: "Private" },
        ],
      },
      {
        name: "Commerce",
        colleges: [
          { name: "Government College Kasaragod", type: "Government" },
          { name: "Mahatma Gandhi College", type: "Aided" },
        ],
      },
    ],
  },
];

export function getDistrictBySlug(slug: string): DistrictData | undefined {
  return districtsData.find((d) => d.slug === slug);
}

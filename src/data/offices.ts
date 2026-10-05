export type Office = {
  name: string;
  label?: string;
  address: string;
  short?: string;
};

export const offices: Office[] = [
  {
    name: "Ampalakara",
    label: "Head Office",
    address:
      "6/730, Kunnumpurathu Building, Ampalakara P.O., Valakom, Kottarakara, Kollam, Kerala - 691532",
    short: "6/730, Kunnumpurathu Building, Ampalakara P.O.",
  },
  {
    name: "Kottarakara",
    address:
      "Opposite Swayamwara Skills, Pulamon P.O, Kottarakara (Kollam), Kerala",
    short: "Opp. Swayamwara Skills, Pulamon P.O",
  },
  {
    name: "Kollam",
    address: "High School Jn, Kollam, Kerala - 691009",
    short: "High School Jn, Kollam - 691009",
  },
  {
    name: "Anchal",
    address: "College Jn, Anchal, Kollam, Kerala - 691306",
    short: "College Jn, Anchal - 691306",
  },
  {
    name: "Karunagappally",
    address: "Opposite H&J Mall, Karunagappally, Kerala - 690518",
    short: "Opp. H&J Mall, Karunagappally - 690518",
  },
  {
    name: "Adimali",
    address:
      "Service Station Road, Old Putheyath Building, Near Krishna Jewellery, Adimali, Adimali - 685561",
    short: "Service Station Road, Old Putheyath Building, Adimali - 685561",
  },
  {
    name: "Trivandrum",
    address:
      "Near Ameya Collections, Vanross Road, Oottukuzhy Jn, Trivandrum, Kerala - 695001",
    short: "Near Ameya Collections, Vanross Road, Oottukuzhy Jn",
  },
];

export const headOffice: Office = offices[0]!;

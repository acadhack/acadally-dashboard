/**
 * staff-data.js — Parsed staff list from DPS Harni records.
 * Contains DOB, qualifications, grade, subject, joining date.
 * Only displayed when session is authenticated (PIN verified).
 * acad_INFO v5.0
 */

const STAFF_DATA = {
    // ── SR. SECONDARY & SECONDARY ──
    'DEEPALI SEKHON': { dob: '06.11.1961', grade: 'PRINCIPAL', qualifications: 'M.A., B.ED, M.PHIL', subject: 'GEOGRAPHY', joining: '01.04.2009' },
    'MOUSUMI GUHA': { dob: '01.11.1969', grade: 'HEADMISTRESS', qualifications: 'M.A., B.ED', subject: 'ENGLISH', joining: '01.04.2008' },
    'CHANDRESH R SINGH': { dob: '21.07.1981', grade: 'PGT', qualifications: 'M.COM, MPED', subject: 'P.E', joining: '01.04.2008' },
    'PARESH S PANDYA': { dob: '03.07.1968', grade: 'PGT', qualifications: 'M.SC, B.ED', subject: 'MATHS', joining: '01.04.2008' },
    'PURNIMA TIWARI': { dob: '10.10.1975', grade: 'PGT', qualifications: 'M.A., B.ED', subject: 'SOCIAL SCIENCE', joining: '01.04.2008' },
    'AJIT KUMAR SINGH': { dob: '16.12.1989', grade: 'PGT', qualifications: 'B.SC., MCA', subject: 'COMPUTERS', joining: '01.04.2012' },
    'SUCHITA PILLAI': { dob: '09.02.1977', grade: 'PGT', qualifications: 'M.SC, B.ED., M.ED.', subject: 'SCIENCE', joining: '13.09.2012' },
    'ANANT PANCHAL': { dob: '20.02.1972', grade: 'PGT', qualifications: 'M.S.C., B.ED', subject: 'SCIENCE', joining: '01.04.2013' },
    'T.BHASKARA RAO': { dob: '09.10.1978', grade: 'PGT', qualifications: 'M.SC, B.ED', subject: 'SCIENCE', joining: '01.04.2013' },
    'VAISHALI DUTTA': { dob: '03.05.1975', grade: 'PGT', qualifications: 'M.COM, B.ED, M.ED', subject: 'COMMERCE', joining: '01.04.2013' },
    'DINESH SHARMA': { dob: '17.10.1975', grade: 'PGT', qualifications: 'MSC B.ED', subject: 'MATHS', joining: '01.11.2013' },
    'VISHAL THAKKAR': { dob: '27.06.1984', grade: 'PGT', qualifications: 'M.COM, M.A. B.ED.', subject: 'COMMERCE', joining: '20.04.2015' },
    'ASWATHI NAIR': { dob: '09.06.1987', grade: 'PGT', qualifications: 'M.SC, B.ED', subject: 'SCIENCE', joining: '01.04.2016' },
    'ANAMIKA MATHUR': { dob: '09.02.1973', grade: 'PGT/COUNSELLOR', qualifications: 'M.A. PGDCCP', subject: 'ADMIN', joining: '11.04.2016' },
    'SANDEEP KUMAR SHARMA': { dob: '17.04.1985', grade: 'PGT', qualifications: 'MA., B.ED', subject: 'SOCIAL SCIENCE', joining: '01.04.2017' },
    'RICHA SAXENA': { dob: '05.09.1978', grade: 'PGT', qualifications: 'M.A. B.ED., CTET', subject: 'SOCIAL SCIENCE', joining: '02.04.2018' },
    'SAGAR THAKKAR': { dob: '20.02.1990', grade: 'PGT', qualifications: 'M.TECH', subject: 'MATHS', joining: '01.04.2017' },
    'MEGHA GHOSH': { dob: '05.01.1991', grade: 'PGT', qualifications: 'M.SC., B.ED. (Physics Hons.)', subject: 'PHYSICS', joining: '30.07.2018' },
    'KANYAKUMARI MISHRA': { dob: '15.08.1977', grade: 'PGT', qualifications: 'M.A., M.Phil, B.ED.', subject: 'ENGLISH', joining: '01.04.2019' },
    'PREETI JHA': { dob: '22.04.1986', grade: 'PGT', qualifications: 'BCA, MCA, B.ED', subject: 'COMPUTERS', joining: '01.04.2016' },
    'NUKARAJU PAILA': { dob: '17.07.1987', grade: 'PGT', qualifications: 'M.F.A.', subject: 'ARTS', joining: '15.09.2015' },
    'SHIVAM PANDEY': { dob: '01.08.1995', grade: 'PGT', qualifications: 'M.P.A.', subject: 'P.E.', joining: '08.05.2023' },
    'ARPITA DATTA': { dob: '19.01.1974', grade: 'PGT', qualifications: 'M.SC., B.Ed., P.HD.', subject: 'SCIENCE', joining: '28.08.2023' },
    'MANISHA BHAVSAR': { dob: '27.12.1991', grade: 'PGT', qualifications: 'M.A. B.ED.', subject: 'ENGLISH', joining: '21.08.2023' },
    'DEEPTHI DEVADATHAN': { dob: '26.06.1979', grade: 'TGT', qualifications: 'B.SC., B.ED', subject: 'MATHS', joining: '03.04.2006' },
    'RAJENDRA JOSHI': { dob: '08.12.1968', grade: 'TGT', qualifications: 'M.P.A', subject: 'V.P.A', joining: '01.04.2008' },
    'ZALAK THAKAR': { dob: '15.09.1981', grade: 'TGT', qualifications: 'B.SC. (Home Sc.), B.LIB. SC.', subject: 'LIBRARY', joining: '01.04.2008' },
    'PRITESH P PATEL': { dob: '25.08.1980', grade: 'TGT', qualifications: 'B.COM, MPA', subject: 'V.P.A', joining: '01.04.2008' },
    'VAISHALI RAVALJI': { dob: '02.07.1977', grade: 'TGT', qualifications: 'M.PE, B.A', subject: 'P.E', joining: '01.04.2008' },
    'SANJAY BHATT': { dob: '12.08.1981', grade: 'TGT', qualifications: 'M.A., B.ED', subject: 'HINDI', joining: '01.04.2009' },
    'ASHISH TRIVEDI': { dob: '21.06.1987', grade: 'TGT', qualifications: 'M.A., B.ED', subject: 'SANSKRIT', joining: '01.04.2012' },
    'C.B.GUPTA': { dob: '01.10.1970', grade: 'TGT', qualifications: 'M.A., B.ED', subject: 'HINDI', joining: '01.04.2012' },
    'VILPA SAKSENA': { dob: '01.12.1979', grade: 'TGT', qualifications: 'B.SC., B.ED., M.ED.', subject: 'SCIENCE', joining: '01.04.2013' },
    'AMIT DIXIT': { dob: '24.06.1981', grade: 'TGT', qualifications: 'B.COM, MPED', subject: 'P.E', joining: '22.07.2013' },
    'PRATIBHA RAI': { dob: '01.02.1983', grade: 'TGT', qualifications: 'M.PHIL, B.ED', subject: 'HINDI', joining: '05.08.2013' },
    'RITU KUMRA': { dob: '11.06.1983', grade: 'TGT', qualifications: 'M.SC, B.ED, PGDCA', subject: 'MATHS', joining: '27.08.2013' },
    'SUSHMITA DASGUPTA': { dob: '26.09.1976', grade: 'TGT', qualifications: 'M.B.A., B.Ed', subject: 'SCIENCE', joining: '01.06.2014' },
    'ANINDITA BASAK': { dob: '22.11.1966', grade: 'TGT', qualifications: 'M.SC, B.ED', subject: 'SCIENCE', joining: '01.04.2015' },
    'MAHESH SHITOLE': { dob: '13.04.1976', grade: 'TGT', qualifications: 'M.COM, B.ED', subject: 'MATHS', joining: '01.04.2016' },
    'SHOBHA PANDEY': { dob: '15.07.1979', grade: 'TGT', qualifications: 'M.SC, PH.D, MBA, B.ED', subject: 'MATHS', joining: '01.04.2016' },
    'SUDHIR RATHOD': { dob: '27.01.1980', grade: 'TGT', qualifications: 'B.A., M.A., B.ED', subject: 'HINDI', joining: '01.04.2016' },
    'TUSHAR PATIL': { dob: '23.06.1980', grade: 'TGT', qualifications: 'B.COM, M.P.ED', subject: 'P.E', joining: '01.04.2016' },
    'PREETI GAMETI': { dob: '05.10.1975', grade: 'TGT', qualifications: 'M.SC, B.ED, M.ED', subject: 'MATHS', joining: '01.07.2016' },
    'DURGA': { dob: '19.09.1991', grade: 'TGT', qualifications: 'M.SC, B.ED', subject: 'MATHS', joining: '01.04.2017' },
    'SACHIN SOLAT B': { dob: '25.08.1978', grade: 'TGT', qualifications: 'MPE, MPHIL', subject: 'SWIMMING', joining: '01.04.2017' },
    'KRUTIKA SHAH': { dob: '23.07.1987', grade: 'TGT', qualifications: 'B.A., M.A., B.ED', subject: 'SANSKRIT', joining: '01.06.2017' },
    'NARENDRA SHARMA': { dob: '08.07.1986', grade: 'TGT', qualifications: 'MA, B.ED, CTET', subject: 'SANSKRIT', joining: '09.10.2017' },
    'SUDIPTA SINHA': { dob: '01.06.1983', grade: 'TGT', qualifications: 'M.A., B.ED.', subject: 'ENGLISH', joining: '13.12.2017' },
    'SOFIYA A. VORA': { dob: '28.08.1990', grade: 'TGT', qualifications: 'M.SC., B.ED.', subject: 'PHYSICS', joining: '02.01.2018' },
    'SAKSHI SHARMA': { dob: '29.12.1980', grade: 'TGT', qualifications: 'M.A. B.ED.', subject: 'ENGLISH', joining: '05.03.2018' },
    'SAGAR CHEDE': { dob: '05.07.1985', grade: 'TGT', qualifications: 'B.P.E., MBA (SPORTS MGMT)', subject: 'P.E.', joining: '01.04.2019' },
    'RUBINA KHAN': { dob: '15.10.1982', grade: 'TGT', qualifications: 'M.A., B.ED., M.ED.', subject: 'ENGLISH', joining: '02.07.2019' },
    'SUBODH CHAUHAN': { dob: '11.07.1982', grade: 'TGT', qualifications: 'M.A., B.ED.', subject: 'HINDI', joining: '11.07.2019' },
    'POONAM PANDEY': { dob: '28.03.1977', grade: 'TGT', qualifications: 'M.A., B.ED.', subject: 'ENGLISH', joining: '16.03.2020' },
    'SUDHA PARAG PATHAK': { dob: '20.02.1982', grade: 'TGT', qualifications: 'B.Sc., B.Ed., PGDCA', subject: 'COMPUTERS', joining: '30.09.2020' },
};

/**
 * Look up staff data by teacher name.
 * Tries exact match, then uppercase match, then partial.
 */
function lookupStaff(teacherName) {
    if (!teacherName) return null;
    const upper = teacherName.toUpperCase().trim();

    // Direct match
    if (STAFF_DATA[upper]) return STAFF_DATA[upper];

    // Try matching by last name + first name or partial
    for (const [key, val] of Object.entries(STAFF_DATA)) {
        if (upper.includes(key) || key.includes(upper)) return val;
        // Try comparing just the first word
        const firstName = upper.split(' ')[0];
        const keyFirst = key.split(' ')[0];
        const lastName = upper.split(' ').slice(-1)[0];
        const keyLast = key.split(' ').slice(-1)[0];
        if (firstName === keyFirst && lastName === keyLast) return val;
    }

    return null;
}

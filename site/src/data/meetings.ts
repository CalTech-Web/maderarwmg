export type Meeting = {
  date: string;
  agenda: string | null;
  minutes: string | null;
  note?: string;
};

export type MeetingYear = {
  year: string;
  meetings: Meeting[];
};

/**
 * All board meetings from 2018 to present, grouped by year.
 * To add a new meeting, add it to the top of the relevant year's meetings array.
 * The homepage automatically displays the 6 most recent meetings.
 */
export const meetingsByYear: MeetingYear[] = [
  {
    year: "2026",
    meetings: [
      {
        date: "March 2026",
        agenda: "/documents/MaderaRWMG_Agenda_March2026.pdf",
        minutes: null,
      },
      {
        date: "January 2026",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2026/01/MaderaRWMG_Agenda_January2026.pdf",
        minutes: "/documents/MaderaRWMG_Minutes_January2026.pdf",
      },
    ],
  },
  {
    year: "2025",
    meetings: [
      {
        date: "November 2025",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2025/11/MaderaRWMG_Agenda_November2025.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2026/01/MaderaRWMG_Minutes_November2025.pdf",
      },
      {
        date: "October 2025",
        agenda: null,
        minutes: null,
        note: "Cancelled",
      },
      {
        date: "September 2025",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2025/09/MaderaRWMG_Agenda_September2025.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2025/11/MaderaRWMG_Minutes_September2025.pdf",
      },
      {
        date: "August 2025",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2025/08/MaderaRWMG_Agenda_August2025.pdf",
        minutes: null,
      },
      {
        date: "July 2025",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2025/07/MaderaRWMG_Agenda_July2025.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2025/08/MaderaRWMG_Minutes_July2025.pdf",
      },
      {
        date: "June 2025",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2025/06/MaderaRWMG_Agenda_June2025.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2025/07/MaderaRWMG_Minutes_June2025.pdf",
      },
      {
        date: "May 2025",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2025/05/MaderaRWMG_Agenda_May2025.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2025/06/MaderaRWMG_Minutes_May2025.pdf",
      },
      {
        date: "April 2025",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2025/04/MaderaRWMG_Agenda_April2025.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2025/05/MaderaRWMG_Minutes_April2025.pdf",
      },
      {
        date: "March 2025",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2025/03/MaderaRWMG_Agenda_March2025.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2025/04/MaderaRWMG_Minutes_March2025.pdf",
      },
      {
        date: "February 2025",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2025/02/MaderaRWMG_Agenda_February2025.pdf",
        minutes: null,
      },
      {
        date: "January 2025",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2025/01/MaderaRWMG_Agenda_January2025.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2025/04/MaderaRWMG_Minutes_January2025.pdf",
      },
    ],
  },
  {
    year: "2024",
    meetings: [
      {
        date: "November 2024",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2024/11/MaderaRWMG_Agenda_November2024.pdf",
        minutes: null,
      },
      {
        date: "October 2024",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2024/10/MaderaRWMG_Agenda_October2024.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2024/11/MaderaRWMG_Minutes_October2024.pdf",
      },
      {
        date: "September 2024",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2024/09/MaderaRWMG_Agenda_September2024.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2024/10/MaderaRWMG_Minutes_September2024.pdf",
      },
      {
        date: "August 2024",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2024/08/MaderaRWMG_Agenda_August2024.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2024/09/MaderaRWMG_Minutes_August2024.pdf",
      },
      {
        date: "July 2024",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2024/07/MaderaRWMG_Agenda_July2024.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2024/08/MaderaRWMG_Minutes_July2024.pdf",
      },
      {
        date: "June 2024",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2024/06/MaderaRWMG_Agenda_June2024.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2024/07/MaderaRWMG_Minutes_June2024.pdf",
      },
      {
        date: "April 2024",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2024/04/MaderaRWMG_Agenda_April2024.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2024/06/MaderaRWMG_Minutes_April2024.pdf",
      },
      {
        date: "March 2024",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2024/03/MaderaRWMG_Agenda_March2024.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2024/04/MaderaRWMG_Minutes_March2024.pdf",
      },
      {
        date: "February 2024",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2024/02/MaderaRWMG_Agenda_February2024.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2024/03/MaderaRWMG_Minutes_February2024.pdf",
      },
      {
        date: "January 2024",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2024/01/MaderaRWMG_Agenda_January2024.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2024/02/MaderaRWMG_Minutes_January2024.pdf",
      },
    ],
  },
  {
    year: "2023",
    meetings: [
      {
        date: "December 2023",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2023/11/MaderaRWMG_Agenda_December2023.pdf",
        minutes: null,
      },
      {
        date: "October 2023",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2023/10/MaderaRWMG_Agenda_October2023.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2023/11/MaderaRWMG_Minutes_October2023.pdf",
      },
      {
        date: "September 2023",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2023/09/MaderaRWMG_Agenda_September2023.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2023/10/MaderaRWMG_Minutes_September2023-1.pdf",
      },
      {
        date: "August 2023",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2023/08/MaderaRWMG_Agenda_August2023.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2023/09/MaderaRWMG_Minutes_August2023.pdf",
      },
      {
        date: "June 2023",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2023/06/MaderaRWMG_Agenda_June2023.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2023/08/MaderaRWMG_Minutes_June2023.pdf",
      },
      {
        date: "May 2023",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2023/06/MaderaRWMG_Agenda_May2023.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2023/07/MaderaRWMG_Minutes_May2023.pdf",
      },
      {
        date: "April 2023",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2023/04/MaderaRWMG_Agenda_April2023.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2023/05/MaderaRWMG_Minutes_April2023.pdf",
      },
      {
        date: "March 2023",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2023/03/MaderaRWMG_Agenda_March2023-3-16.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2023/04/MaderaRWMG_Minutes_March2023.pdf",
      },
      {
        date: "February 2023",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2023/02/MaderaRWMG_Agenda_February2023.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2023/03/MaderaRWMG_Minutes_February2023.pdf",
      },
      {
        date: "January 2023",
        agenda:
          "https://maderarwmg.com/wp-content/uploads/2023/02/MaderaRWMG_Agenda_January2023.pdf",
        minutes:
          "https://maderarwmg.com/wp-content/uploads/2023/02/MaderaRWMG_Minutes_January2023.pdf",
      },
    ],
  },
  {
    year: "2022",
    meetings: [
      { date: "November 2022", agenda: "https://maderarwmg.com/wp-content/uploads/2023/01/MaderaRWMG_Agenda_November2022.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2023/01/MaderaRWMG_Minutes_November2022.pdf" },
      { date: "October 2022", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Agenda_October2022.pdf", minutes: null },
      { date: "September 2022", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Agenda_September2022.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Minutes_September2022.pdf" },
      { date: "August 2022", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Agenda_August2022.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Minutes_August2022.pdf" },
      { date: "July 2022", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Agenda_July2022.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Minutes_July2022-1.pdf" },
      { date: "June 2022", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Agenda_June2022-1.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Minutes_June2022.pdf" },
      { date: "May 2022", agenda: "https://maderarwmg.com/wp-content/uploads/2023/06/MaderaRWMG_Agenda_May2023.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Minutes_May2022-1.pdf" },
      { date: "April 2022", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Agenda_April2022.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Minutes_April2022.pdf" },
      { date: "March 2022", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Agenda_March2022.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Minutes_March2022.pdf" },
      { date: "February 2022", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Agenda_February2022-1.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Minutes_February2022.pdf" },
      { date: "January 2022", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Agenda_January2022.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Minutes_January2022-1.pdf" },
    ],
  },
  {
    year: "2021",
    meetings: [
      { date: "November 2021", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Agenda_September2022.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Minutes_September2022.pdf" },
      { date: "October 2021", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Agenda_October2021.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Minutes_October2021.pdf" },
      { date: "September 2021", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Agenda_October2021-1.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Minutes_October2021-1.pdf" },
      { date: "August 2021", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_AgendaNEW_August2021.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Minutes_August2021.pdf" },
      { date: "July 2021", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Agenda_July2021.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Minutes_July2021.pdf" },
      { date: "June 2021", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Agenda_June2021.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Minutes_June2021.pdf" },
      { date: "May 2021", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Agenda_May2021.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Minutes_May2021.pdf" },
      { date: "April 2021", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/5.14.18-RWMG-Agenda.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/5.14.18-RWMG-Minutes.pdf" },
      { date: "March 2021", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Agenda_March2021.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Minutes_March2021-1.pdf" },
      { date: "February 2021", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Agenda_February2021.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Minutes_February2021.pdf" },
      { date: "January 2021", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Agenda_January2021.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Minutes_January2021.pdf" },
    ],
  },
  {
    year: "2020",
    meetings: [
      { date: "November 2020", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Agenda_November2020.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Minutes_November2020.pdf.pdf" },
      { date: "October 2020", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Agenda_October2020.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Minutes_October2020.pdf" },
      { date: "September 2020", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Agenda_September2020.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Minutes_September2020.pdf" },
      { date: "August 2020", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Agenda_August2020rvsd.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Minutes_August2020.pdf" },
      { date: "July 2020", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Agenda_July2020.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Minutes_July2020.pdf" },
      { date: "June 2020", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/Agenda_Final.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/MaderaRWMG_Minutes_June2020.pdf" },
      { date: "May 2020", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/May2020Agenda.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/May2020Minutes.pdf" },
      { date: "April 2020 - Special Meeting", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/20.0415-RWMG-Closed-Session.pdf", minutes: null, note: "Closed Session" },
      { date: "March 2020", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/Minutes-RWMG-March-23-2020.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/Minutes-RWMG-March-23-2020.pdf" },
      { date: "March 2020 - Special Meeting", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/20-03-RWMG-Closed-Session.pdf", minutes: null, note: "Closed Session" },
      { date: "February 2020", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/Agenda-RWMG-February-24-2020.doc", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/Minutes-RWMG-March-23-2020.pdf" },
      { date: "January 2020", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/Agenda-RWMG-January-27-2020.doc", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/Minutes-RWMG-January-27-2020.doc" },
    ],
  },
  {
    year: "2019",
    meetings: [
      { date: "November 2019", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/19-1125-Agenda-RWMG.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/Minutes-RWMG-November-25-2019.doc" },
      { date: "October 2019", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/19-1028-Agenda-RWMG.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/19-1028-Minutes-RWMG.pdf" },
      { date: "September 2019", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/19-0923-rvsd-Agenda-RWMG.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/19-0923-Minutes-RWMG-1-1.pdf" },
      { date: "August 2019", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/19-0826-Agenda-RWMG.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/19-0826-Minutes-RWMG-.pdf" },
      { date: "July 2019", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/190722-Agenda-RWMG-July-22-2019-1.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/19-0722-Minutes-RWMG.pdf" },
      { date: "June 2019", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/6.11.18-RWMG-Agenda-1.pdf", minutes: null },
      { date: "May 2019", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/19-0513-Agenda-RWMG-.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/19-0513-Minutes-RWMG-May-13-2019.pdf" },
      { date: "April 2019", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/19-0408-Agenda-RWMG.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/19-0408-Minutes-RWMG-.pdf" },
      { date: "March 2019", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/19-0311-Agenda-RWMG.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/19-0311-Minutes-RWMG.pdf" },
      { date: "February 2019", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/19-0211-Agenda-RWMG.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/19-0211-Minutes.pdf" },
      { date: "January 2019", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/190114-Agenda-RWMG.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/19-0114-Minutes-RWMG.pdf" },
    ],
  },
  {
    year: "2018",
    meetings: [
      { date: "December 2018", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/181210-Revised-Agenda-RWMG.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/181210-Minutes-Sp-Meeting-RWMG.pdf" },
      { date: "November 2018", agenda: null, minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/181113-Minutes-RWMG.pdf" },
      { date: "October 2018", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/10.8.18-Agenda-RWMG.pdf", minutes: null },
      { date: "September 2018", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/9.10.18-Agenda-RWMG.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/9.10.18-Minutes-RWMG.pdf" },
      { date: "August 2018", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/8.13.18-RWMG-Agenda.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/180813-Minutes-RWMG.pdf" },
      { date: "July 2018", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/7.9.18-RWMG-Agenda.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/7.9.18-RWMG-Minutes.pdf" },
      { date: "June 2018", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/6.11.18-RWMG-Agenda.pdf", minutes: null },
      { date: "May 2018", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/5.14.18-RWMG-Agenda.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/5.14.18-RWMG-Minutes.pdf" },
      { date: "April 2018", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/4.8.18-RWMG-Agenda.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/4.9.18-RWMG-Minutes.pdf" },
      { date: "March 2018", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/3.12.18-RWMG-Agenda.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/3.12.18-RWMG-Minutes.pdf" },
      { date: "February 2018", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/2.12.18-RWMG-Agenda.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/2.12.18-RWMG-Minutes.pdf" },
      { date: "January 2018", agenda: "https://maderarwmg.com/wp-content/uploads/2022/10/1.8.18-RWMG-Agenda.pdf", minutes: "https://maderarwmg.com/wp-content/uploads/2022/10/1.8.18-RWMG-Minutes.pdf" },
    ],
  },
];

/**
 * Returns the most recent N meetings (excluding cancelled ones),
 * flattened from the year-grouped structure.
 */
export function getRecentMeetings(count: number): Meeting[] {
  const all: Meeting[] = [];
  for (const group of meetingsByYear) {
    for (const meeting of group.meetings) {
      if (meeting.note === "Cancelled") continue;
      all.push(meeting);
      if (all.length >= count) return all;
    }
  }
  return all;
}

import { ReactNode } from "react";
import { PiStudentFill,PiChalkboardTeacher } from "react-icons/pi";
import { BiSolidCategory  } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsCalendarEvent } from "react-icons/bs";
import { MdOutlineSettings } from "react-icons/md";

export type MenuItem = {
  id: string;
  icon: ReactNode;
  title: string;
  links: { path: string; label: string }[];
};

export const menuItems: MenuItem[] = [
  {
    id: "settings",
    icon: <MdOutlineSettings  />,
    title: "Settings",
    links: [
      { path: "/mail-configuration", label: "Mail Configuration" },
      { path: "/theme-configuration", label: "Theme Configuration" },
      { path: "/site-settings", label: "Site Settings" },
    ],
  },
  {
    id: "users",
    icon: <FiUsers />,
    title: "Users",
    links: [
      { path: "/users/user-list", label: "User List" },
      { path: "/permissions", label: "Permissions" },
    ],
  },
  {
    id: "students",
    icon: <PiStudentFill />,
    title: "Students",
    links: [
      { path: "/student-list", label: "Student List" },
      { path: "/exams", label: "Exams" },
      { path: "/courses", label: "Courses" },
    ],
  },
  {
    id: "teachers",
    icon: <PiChalkboardTeacher />,
    title: "Teachers",
    links: [
      { path: "/teacher-list", label: "Teacher List" },
      { path: "/classes", label: "Classes" },
      { path: "/documents", label: "Documents" },
    ],
  },
  {
    id: "courses",
    icon: <BiSolidCategory  />,
    title: "Courses",
    links: [
      { path: "/math", label: "Mathematics" },
      { path: "/grammar", label: "Grammar" },
      { path: "/science-knowledge", label: "Science Knowledge" },
      { path: "/social-sciences", label: "Social Sciences" },
      { path: "/information-technologies", label: "Information-Technologies" },
      { path: "/music", label: "Music" },
      { path: "/art", label: "Art" },
      { path: "/guidance", label: "Guidance" },
    ],
  },
  {
    id: "classrooms",
    icon: <PiChalkboardTeacher />,
    title: "Classrooms",
    links: [
      { path: "/classrooms", label: "Classrooms" },
      { path: "/laboratories", label: "Laboratories" },
      { path: "/study-rooms", label: "Study Rooms" },
      { path: "/conference-halls", label: "conference Halls" },
      { path: "/libraries", label: "Libraries" },
      { path: "/art-rooms", label: "Art Rooms" },
      { path: "/gyms", label: "Gyms" },
      { path: "/teachers-rooms", label: "Teachers' rooms" },
      { path: "/staff-rooms", label: "Staff Rooms" },
      { path: "/store-rooms", label: "Store Rooms" },
      { path: "/server-room", label: "Server Room" },
    ],
  },
  {
    id: "events",
    icon: <BsCalendarEvent  />,
    title: "Events",
    links: [
      { path: "/event-list", label: "Event List" },
      { path: "/event-announcements", label: "Event Announcements" },
      { path: "/galleries", label: "Galleries" },
    ],
  },
];

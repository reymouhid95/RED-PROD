import DraftsIcon from "@mui/icons-material/Drafts";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import PeopleIcon from "@mui/icons-material/People";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DvrIcon from "@mui/icons-material/Dvr";

export const menu = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    path: "/admin/dashboard",
  },
  {
    title: "Liste des hôtels",
    icon: <DvrIcon />,
    path: "/admin/hotels",
  },
];

export const cardsDash = [
  {
    title: "Formulaires",
    number: "125",
    description: "Je ne sais pas quoi mettre",
    icon: <DraftsIcon />,
    id: "icon1",
  },
  {
    title: "Messages",
    number: "40",
    description: "Je ne sais pas quoi mettre",
    icon: <LocalParkingIcon />,
    id: "icon2",
  },
  {
    title: "Utilisateurss",
    number: "600",
    description: "Je ne sais pas quoi mettre",
    icon: <PeopleIcon />,
    id: "icon3",
  },
  {
    title: "E-mails",
    number: "25",
    description: "Je ne sais pas quoi mettre",
    icon: <DraftsIcon />,
    id: "icon4",
  },
  {
    title: "Hotels",
    number: "40",
    description: "Je ne sais pas quoi mettre",
    icon: <LocalParkingIcon />,
    id: "icon5",
  },
  {
    title: "Entités",
    number: "02",
    description: "Je ne sais pas quoi mettre",
    icon: <DraftsIcon />,
    id: "icon6",
  },
];

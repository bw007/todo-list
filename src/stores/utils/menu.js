import { GraduationCap, LibraryBig, PieChart } from "lucide-vue-next";


export const menu = [
  {
    path: "",
    name: "Home",
    title: "Home",
    component: () => import("@/views/HomeView.vue"),
    icon: PieChart
  },
  {
    path: "course",
    name: "Course",
    title: "Course",
    component: () => import("@/views/CourseView.vue"),
    icon: LibraryBig
  },
  {
    path: "students",
    name: "Students",
    title: "Students",
    component: () => import("@/views/StudentsView.vue"),
    icon: GraduationCap
  },
]
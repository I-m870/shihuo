export default {
    path: "/tuangou/:head",
    component: () => import("@/views/children/tuangou"),
    name: "tuangou",
    meta: {
        tabBarFlag: false
    }
}
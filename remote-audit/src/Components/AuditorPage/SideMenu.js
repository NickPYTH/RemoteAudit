import { SideMenuList } from "./SideMenuList";

export const SideMenu = ({}) => {
    return (
        <div style={styles.wrapper}>
            <SideMenuList />
        </div>
    );
};

const styles = {
    wrapper: {
        display: "flex",
        flexDirection: "column",
        width: 300,
        height: window.innerHeight,
        backgroundColor: "#f3f6f9",
    },
};

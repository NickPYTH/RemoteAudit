import { CompanySideMenuList } from "./CompanySideMenuList";

export const CompanySideMenu = ({}) => {
    return (
        <div style={styles.wrapper}>
            <CompanySideMenuList />
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

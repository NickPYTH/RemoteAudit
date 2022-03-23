import { SideMenu } from "../../Components/AuditorPage/SideMenu";
import { CompanyCard } from "../../Components/AuditorPage/CompanyPage/CompanyCard";
import { AddCompanyCard } from "../../Components/AuditorPage/CompanyPage/AddCompanyCard";
import { StaffCard } from "../../Components/AuditorPage/StaffPage/StaffCard";
import { AddStaffCard } from "../../Components/AuditorPage/StaffPage/AddStaffCard";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const AuditorStaffPageLayout = ({ info }) => {
    return (
        <div style={styles.wrapper}>
            <SideMenu />
            {info.employers &&
                info.employers.map((employer) => {
                    return (
                        <StaffCard
                            key={Math.random()}
                            name={employer.name}
                            surname={employer.surname}
                            secondName={employer.second_name}
                        />
                    );
                })}
            <AddStaffCard />
        </div>
    );
};

const styles = {
    wrapper: {
        display: "flex",
    },
};

const mapStateToProps = (state) => {
    const info = state.authReducer;
    return { info };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export const AuditorStaffPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(AuditorStaffPageLayout);

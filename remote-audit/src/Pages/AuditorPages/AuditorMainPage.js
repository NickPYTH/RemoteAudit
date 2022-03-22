import {SideMenu} from "../../Components/AuditorPage/SideMenu";
import {CompanyCard} from "../../Components/AuditorPage/CompanyPage/CompanyCard";
import {AddCompanyCard} from "../../Components/AuditorPage/CompanyPage/AddCompanyCard";
import {bindActionCreators} from "redux";
import {fetchLogin} from "../../store/actions/authActions";
import {connect} from "react-redux";

const AuditorMainPageLayout = ({info}) => {
    console.log(info)
    return (
        <div style={styles.wrapper}>
            <SideMenu />
            {info.clients && info.clients.map(client=>{
                return(
                    <CompanyCard key={Math.random()} name={client.company_name} location={client.company_location} />
                )
            })}
            <AddCompanyCard />
        </div>
    )
}

const mapStateToProps = (state) => {
    const info = state.authReducer;
    return { info };
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {

        },
        dispatch
    );

export const AuditorMainPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(AuditorMainPageLayout);

const styles = {
    wrapper: {
        display: 'flex',
    }
}
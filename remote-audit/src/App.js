import { Navigation } from "./Components/Navigation";
import { store } from "./store/reducersMerge";
import { Provider } from "react-redux";

const App = () => {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    );
};

export default App;

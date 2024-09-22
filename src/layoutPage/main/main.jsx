import PropTypes from "prop-types";
import {MainStyle} from './mainStyle';

const MainHtml = ({ children }) => {
    return <MainStyle>{children}</MainStyle>;
}
MainHtml.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainHtml
import PropTypes from "prop-types";
import {MainStyle} from './mainStyle';

//use of prototypes, with the aim that everything in children is part of the main
const MainHtml = ({ children }) => {
    return <MainStyle>{children}</MainStyle>;
}

//defines that the children prop is mandatory and must be a React node 
MainHtml.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainHtml
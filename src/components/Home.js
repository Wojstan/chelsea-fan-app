import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const Home = () => {
  return <div></div>;
};

Home.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

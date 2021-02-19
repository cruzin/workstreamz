import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from 'components/Button';
import * as AppActionCreators from 'actions/count';
import { routeCodes } from 'config/routes';

import Logo from 'Assets/img/logo.svg';
import './Home.scss';
import InputComp from '../../components/InputComp/InputComp';

class Home extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    // comments: PropTypes.Object.isRequired,
  };

  state = {
    title: 'Comment train',
  };

  render() {
    const { title } = this.state;
    const { comments } = this.props;

    return (
      <Fragment>
        <h1>{title}</h1>

        {comments.map(c => (
          <div key={c.dateCreated} style={{ border: 'solid', marginTop: '2rem' }}>
            <div>{c.text}</div>
            <br />
            <div>{c.author}</div>
            <div>{c.dateCreated}</div>
          </div>
        ))}
        <InputComp />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.appReducer.get('counter'),
  comments: state.appReducer.get('comments'),
});

const mapDispatchToProps = dispatch => bindActionCreators(AppActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React, {PropTypes} from 'react';
import look, {StyleSheet} from 'react-look';
import theme from 'universal/styles/theme';
import ui from 'universal/styles/ui';
import {ib} from 'universal/styles/helpers';
import FontAwesome from 'react-fontawesome';
import Type from '../Type/Type';

import CreateCardRootStyles from 'universal/components/CreateCard/CreateCardRootStyles';

let s = {};

const margin = '0 .25rem';
const iconStyle = {
  ...ib,
  color: theme.palette.mid,
  fontSize: ui.iconSize2x,
  margin
};

const AddCard = (props) => {
  return (
    <div className={s.root} onClick={props.onClick}>
      <div className={s.inner}>
        <FontAwesome name="plus-square-o" style={iconStyle} />
        <div className={s.type}>
          <Type align="center" bold display="inlineBlock" scale="s3" theme="mid" width="auto">Add a Project Here</Type>
        </div>
      </div>
    </div>
  );
};

AddCard.propTypes = {
  onClick: PropTypes.func.required
};

s = StyleSheet.create({
  root: {
    ...CreateCardRootStyles,
    cursor: 'pointer',

    ':hover': {
      opacity: '.65'
    }
  },

  inner: {
    textAlign: 'center'
  },

  type: {
    ...ib,
    margin
  }
});

export default look(AddCard);

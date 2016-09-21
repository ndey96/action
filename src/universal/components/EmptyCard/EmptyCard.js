import React, {PropTypes} from 'react';
import look, {StyleSheet} from 'react-look';
import ui from 'universal/styles/ui';
import FontAwesome from 'react-fontawesome';
import Type from '../Type/Type';
// import theme from 'universal/styles/theme';

import CreateCardRootStyles from 'universal/components/CreateCard/CreateCardRootStyles';

let s = {};

const iconStyle = {
  fontSize: ui.iconSize,
  marginRight: '.25rem'
};

const EmptyCard = (props) => {
  const {copy, icon, heading} = props;
  return (
    <div className={s.root}>
      <div className={s.inner}>
        <Type align="center" bold scale="s3" theme="dark">{heading}</Type>
        <Type align="center" family="serif" italic scale="s1" theme="dark">
          {icon &&
            <span>
              <FontAwesome name={icon} style={iconStyle} />
            </span>
          }
          {copy}
        </Type>
      </div>
    </div>
  );
};

EmptyCard.propTypes = {
  copy: PropTypes.string,
  icon: PropTypes.string,
  heading: PropTypes.string
};

EmptyCard.defaultProps = {
  copy: PropTypes.string,
  icon: PropTypes.string,
  heading: PropTypes.string
};

s = StyleSheet.create({
  root: {
    ...CreateCardRootStyles
  },
  inner: {
    textAlign: 'center'
  }
});

export default look(EmptyCard);

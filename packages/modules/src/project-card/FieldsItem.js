import React from 'react';
import PropTypes from 'prop-types';
import {Flex} from '@ursip/design-system';
import {Common} from '@ursip-box-front/components';
import FiedlItemLine from './FiedlItemLine';
import styled from 'styled-components';

const {FlexContainerBottomDivider} = Common;

const Bordered = styled(Flex)`
  padding-bottom: 32px;
`;

function FieldsItem({children, field, ...props}) {
  if (field !== undefined) {
    console.log(field);
    return (
      <Bordered flexDirection={'column'}>
        {field.map((fieldline, key) => {
          return (
            <FlexContainerBottomDivider>
              <FiedlItemLine key={key} fieldline={fieldline} />
            </FlexContainerBottomDivider>
          );
        })}
      </Bordered>
    );
  } else {
    return null;
  }
}

FieldsItem.propTypes = {
  field: PropTypes.array
};

FieldsItem.defaultProps = {
  field: []
};

export default FieldsItem;

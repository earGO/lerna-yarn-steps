import React from 'react';
import {Flex, Box, Text} from '@ursip/design-system';
import styled from 'styled-components';

import {Common} from '@ursip-box-front/components';
const {Icon} = Common;

const IconSized = styled(Box)`
  transform: scale(0.68);
  font-size: 12px;
  padding: 0;
  padding-left: 10px;
  margin: 0;
  position: relative;
  top: 40%;
  cursor: pointer;
  color: ${props => props.theme.colors[props.color]};
`;
const Labelizer = styled(Box)`
  padding: 0;
  padding-bottom: 8px;
  position: relative;
  top: -5px;
  cursor: pointer;
`;

function AddSection({props}) {
  return (
    <Flex
      flexDirection={'row'}
      justifyContent={'flex-start'}
      alignItems={'baseline'}
    >
      <IconSized color={'primary'}>
        <Icon name={add_circle_outline} />
      </IconSized>
      <Labelizer>
        <Text color={'primary'}>Добавить подраздел</Text>
      </Labelizer>
    </Flex>
  );
}

export default AddSection;

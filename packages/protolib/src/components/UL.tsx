import React from 'react';
import { YStack, styled } from '@my/ui'

const StyledUL = styled(YStack, {
  tag: 'ul',
  //@ts-ignore
  my: '$1',
  ml: '$4',
  mr: '$2',
  display: 'inline'
})


export const UL = React.forwardRef((props: any, ref: any) => {
  return <StyledUL ref={ref} {...props}>
    {props.children}
  </StyledUL>;
})
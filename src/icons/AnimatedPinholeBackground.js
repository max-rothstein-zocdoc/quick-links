import styled from 'styled-components';
// TODO: mobile breakpointing

const AnimatedPinholeBackground = styled.div`
  background-color: ${p => `rgba(${p.rgb},0.7)`};
  width: 110px;
  height: 110px;
  margin: 5px;
  padding: 0;
  clip-path: circle(50%);
  transition: margin 0.5s ease-out, padding 0.5s ease-out, background-color 0.5s ease-out;

  &:hover {
    background-color: ${p => `rgba(${p.rgb},1.0)`};
    margin: 0;
    padding: 5px;
  }
`;

export default AnimatedPinholeBackground;

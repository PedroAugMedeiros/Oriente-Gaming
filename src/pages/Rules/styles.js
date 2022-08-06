import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1000px)',
};


export const Rules = styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
background-color: rgb(32, 35, 41);
font-family: sans-serif;
color: white;
padding: 5%;

.linkLocal {
  border-bottom: solid 5px orange;
}

img {
  width: 50%;
  border-radius: 50%;
}

h2, h3 {
  margin-top: 25%;
  color: orange;
}

h1 {
  color: orange;
  font-size: 250%;
}

h2 {
  color: orange;
  font-size: 230%;
}

p {
  padding: 5%;
  font-size: 180%;
  margin: 0;
  border-bottom: solid 5px orange; 
}

h3 {
  font-size: 200%;
}

a {
  font-size: 200%;
  padding: 5%; 
}

spam {
  padding: 5%;
  font-size: 180%;
  margin: 0;
}

${media.desktop} {
  width: 100%;
}
`;

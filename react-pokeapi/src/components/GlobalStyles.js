import styled, {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Montserrat', sans-serif;
    }

    h2{
        font-size: 2rem;
    }

    button{
        font-family: 'Montserrat', sans-serif;
    }

   .rock{
    background: #776A3E;
   }

   .ground{
    background: #ECE193;
   }

   .water{
    background: #36AFF6;
   }

   .fire{
    background: #F67F0B;
   }

   .normal{
    background: #BDBDB1;
   }

   .poison{
    background: #A719D7;
   }

   .psychic{
    background: #F55792;
   }

   .grass{
    background: #68ad46;
   }

   .ice{
    background: #58b8c9;
   }

   .dragon{
    background: #BD98CB;
   }

   .dark{
    background: #705848;
   }

   .steel{
    background: #BBC5C4;
   }

   .bug{
    background: #BDDD6E;
   }

   .electric{
    background: #F8D030;
   }

   .fighting{
    background: #C03028;
   }

   .flying{
    background: #5EB9B2;
   }

   .ghost{
    background: #8E55A4;
   }

   .fairy{
    background: #FDD1E0;
   }

   .card{
    //padding: 0.5rem;
    //border-radius: 8px;
   }

   .type{
    margin: 0rem .2rem;
    width: 100px;
    border-radius: 8px;
    color: white;
   }

.slick-prev:before,
.slick-next:before {
  color: #1583eb;
}

.inner{
    padding: 5px 0px;
    background-color: #D84242;
}

`;

export const Loading = styled.div`
    display: flex;
    justify-content: center;
`;


export default GlobalStyles;
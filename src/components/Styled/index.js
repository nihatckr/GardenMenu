import styled from "styled-components";

export const MenuItems = styled.section`  

`;

export const Flex = styled.div` 
  display:grid;     
  grid-template-columns:repeat(2,1fr);
  @media (max-width: 600px)    { 
}
`;

export const VStack = styled.div`   
  display:flex; 
  justify-content:center; 
  margin-top:${props => props.marginTop};  
  
`
export const TextMenuNavTitle = styled.p`   
  font-style: normal;
  font-family: ${props => props.theme.text.navHeadingTitle.ff};
  font-weight: ${props => props.theme.text.navHeadingTitle.fw};
  font-size: ${props => props.theme.text.navHeadingTitle.fs};
  line-height: ${props => props.theme.text.navHeadingTitle.lh}; 
  color: ${props => props.theme.text.navHeadingTitle.fc};
  letter-spacing: ${props => props.theme.text.navHeadingTitle.ls};

  `
export const TextMenuNavSubTitle = styled.p`   
 font-style: normal;
 font-family: ${props => props.theme.text.navHeadingSubTitle.ff};
 font-weight: ${props => props.theme.text.navHeadingSubTitle.fw};
 font-size: ${props => props.theme.text.navHeadingSubTitle.fs};
 line-height: ${props => props.theme.text.navHeadingSubTitle.lh}; 
 color: ${props => props.theme.text.navHeadingSubTitle.fc};
 letter-spacing: ${props => props.theme.text.navHeadingSubTitle.ls};

 `
export const TextTitleCenter = styled.h1`   
font-style: normal;
font-family: ${props => props.theme.text.menuTitleCenter.ff};
font-weight: ${props => props.theme.text.menuTitleCenter.fw};
font-size: ${props => props.theme.text.menuTitleCenter.fs};
line-height: ${props => props.theme.text.menuTitleCenter.lh};
color: ${props => props.theme.text.menuTitleCenter.fc};
`
export const TextSubtitleCenter = styled.h2`   
font-style: normal;
font-family: ${props => props.theme.text.menuSubtitleCenter.ff};
font-weight: ${props => props.theme.text.menuSubtitleCenter.fw};
font-size: ${props => props.theme.text.menuSubtitleCenter.fs};
line-height: ${props => props.theme.text.menuSubtitleCenter.lh};
color: ${props => props.theme.text.menuSubtitleCenter.fc};
`


export const TextMenuTitle = styled.p`   
  font-style: normal;
  font-family: ${props => props.theme.text.headingTitle.ff};
  font-weight: ${props => props.theme.text.headingTitle.fw};
  font-size: ${props => props.theme.text.headingTitle.fs};
  line-height: ${props => props.theme.text.headingTitle.lh}; 
  color: ${props => props.theme.text.headingTitle.fc};
  letter-spacing: ${props => props.theme.text.headingTitle.ls};

  `
export const TextMenuSubTitle = styled.p`   
 font-style: normal;
 font-family: ${props => props.theme.text.headingSubTitle.ff};
 font-weight: ${props => props.theme.text.headingSubTitle.fw};
 font-size: ${props => props.theme.text.headingSubTitle.fs};
 line-height: ${props => props.theme.text.headingSubTitle.lh}; 
 color: ${props => props.theme.text.headingSubTitle.fc};
 letter-spacing: ${props => props.theme.text.headingSubTitle.ls};

 `

export const TextClHard = styled.p`   
font-style: normal; 
font-family: ${props => props.theme.text.cl.ff};
font-weight: ${props => props.theme.text.cl.fw};
font-size: ${props => props.theme.text.cl.fs};
line-height: ${props => props.theme.text.cl.lh};
color: ${props => props.theme.text.cl.fc}; 
margin-left:${props => props.marginLeft};
min-width:33.3%;   
text-align:center;
`

export const MenuTitle = styled.p`   
  font-style: normal;
  margin-top: 40px; 
  font-family: ${props => props.theme.text.menuTitle.ff};
  font-weight: ${props => props.theme.text.menuTitle.fw};
  font-size: ${props => props.theme.text.menuTitle.fs};
  line-height: ${props => props.theme.text.menuTitle.lh}; 
  color: ${props => props.theme.text.menuTitle.fc}; 
  letter-spacing: ${props => props.theme.text.menuTitle.ls};
  text-align:center;
  margin-left:10px;
  `

export const TextTitle = styled.p`   
  font-style: normal;
  font-family: ${props => props.theme.text.title.ff};
  font-weight: ${props => props.theme.text.title.fw};
  font-size: ${props => props.theme.text.title.fs};
  line-height: ${props => props.theme.text.title.lh}; 
  color: ${props => props.theme.text.title.fc};
   
  `
export const TextTitleHard = styled.p`   
font-style: normal;
font-family: ${props => props.theme.text.title.ff};
font-weight: ${props => props.theme.text.title.fw};
font-size: ${props => props.theme.text.title.fs};
line-height: ${props => props.theme.text.title.lh}; 
color: ${props => props.theme.text.title.fc};
max-width:90px;
min-width:90px;
 
`
export const TextSubTitle = styled.p`   
  font-style: normal;
  font-family: ${props => props.theme.text.subtitle.ff};
  font-weight: ${props => props.theme.text.subtitle.fw};
  font-size: ${props => props.theme.text.subtitle.fs};
  line-height: ${props => props.theme.text.subtitle.lh};
   color: ${props => props.theme.text.subtitle.fc};
   
 `

export const TextDesc = styled.p`   
  font-style: normal;
  font-family: ${props => props.theme.text.desc.ff};
  font-weight: ${props => props.theme.text.desc.fw};
  font-size: ${props => props.theme.text.desc.fs};
  line-height: ${props => props.theme.text.desc.lh};
  color: ${props => props.theme.text.desc.fc};
 
  `

export const TextCl = styled.p`   
font-style: normal; 
font-family: ${props => props.theme.text.cl.ff};
font-weight: ${props => props.theme.text.cl.fw};
font-size: ${props => props.theme.text.cl.fs};
line-height: ${props => props.theme.text.cl.lh};
color: ${props => props.theme.text.cl.fc}; 
 
`
export const TextPriceHard = styled.p`   
  font-style: normal;  
  font-family: ${props => props.theme.text.price.ff};
  font-weight: ${props => props.theme.text.price.fw};
  font-size: ${props => props.theme.text.price.fs};
  line-height: ${props => props.theme.text.price.lh};
   color: ${props => props.theme.text.price.fc};
  
   text-align:center;
   
  `
export const TextPrice = styled.p`   
  font-style: normal;  
  font-family: ${props => props.theme.text.price.ff};
  font-weight: ${props => props.theme.text.price.fw};
  font-size: ${props => props.theme.text.price.fs};
  line-height: ${props => props.theme.text.price.lh};
   color: ${props => props.theme.text.price.fc}; 
  `


export const Loading = styled.section`  
display:flex;
  width:100vw;
  height:100vh; 
  justify-content:center;
  align-items:center; 

`
export const Spinner = styled.div`  
  margin:auto;
  border: 6px solid #f3f3f3; 
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin .9s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;




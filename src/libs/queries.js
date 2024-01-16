import { gql } from "@apollo/client";



export const GET_SINGLEMENU = gql`
query Categories($where: RootQueryToMonomenuCategoryConnectionWhereArgs) {
  monomenuCategories(where: $where,first: 20) {
    nodes {
      id
      name
      slug 
      description
      monomenus {
        nodes {
          id
          slug
          title
          menu {
            bottle
            cl
            fourcl
            fivecl 
            thirtyfivecl
            fiftycl
            seventycl
            color
            descriptionen
            mn_show_content
            dlc
            description
            glass
            image
            price
            subtitle
            title
            tag
          }
        }
      }
    }
  }
} 
`;

export const GET_MENU = gql`
query Slug {
    monomenuCategories(first: 20) {
      nodes {
        id
        slug
        name
        description
      }
    }
  }
`;

export const GET_HARD = gql`
query Categories {
  monoHardDrinksCategory {
    nodes {
      id
      slug
      name
      description
      monomenus {
        nodes {
          id
          menu {
            bottle
            cl
            fourcl
            fivecl
            eightcl
            thirtyfivecl
            fiftycl
            seventycl
            color
            descriptionen
            description
            dlc
            glass
            image
            price
            subtitle
            tag
            title
            
          }
        }
      }
    }
  }
}
`;


export const GET_SOFT = gql`
  query Soft {
  monoSoftKategoriler {
    nodes {
      id
      name
      description
      slug
      monomenus {
        nodes {
          menu {
            bottle
            cl
            description
            color
            descriptionen
            dlc
            glass
            image
            price
            subtitle
            tag
            title
            mn_show_content
            mngarden_show_content
          }
        }
      }
    }
  }
}
`;

export const GET_SOFTMENU = gql`
query SoftMenu {
  monoSoftKategoriler {
    nodes {
      id
      name
      description
      slug
      monomenus {
        nodes {
        id
          menu {
            bottle
            cl
            description
            color
            descriptionen
            dlc
            glass
            image
            price
            fourcl
            fivecl
            eightcl
            thirtyfivecl
            fiftycl
            seventycl
            subtitle
            tag
            title
            mn_show_content
            mngarden_show_content
          } 
        }
      }
    }
  }
}
`;
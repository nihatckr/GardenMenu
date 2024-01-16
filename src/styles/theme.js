import { createGlobalStyle } from "styled-components";


export const theme = {
	fontFamily: 'Mono',
	text: {
		menuTitleCenter: {
			ff: 'Mono',
			fw: '300',
			fs: '16px',
			lh: 'auto',
			fc: '#000000',
			ls: '2px'
		},
		menuSubtitleCenter: {
			ff: 'Mono',
			fw: '300',
			fs: '10px',
			lh: 'auto',
			fc: '#727272',
			ls: '2px'
		},
		menuTitle: {
			ff: 'Mono',
			fw: '400',
			fs: '12px',
			lh: '12px',
			fc: '#000000',
			ls: '10px'
		},
		headingTitle: {
			ff: 'Mono',
			fw: '300',
			fs: '12px',
			lh: '14px',
			fc: '#000000',
			ls: '2px'
		},
		headingSubTitle: {
			ff: 'Mono',
			fw: '300',
			fs: '12px',
			lh: '14px',
			fc: '#727272',
			ls: '2px',
			ta: 'center'
		},
		navHeadingTitle: {
			ff: 'Mono',
			fw: '400',
			fs: '10px',
			lh: '14px',
			fc: '#000000',
			ls: '6px'
		},
		navHeadingSubTitle: {
			ff: 'Mono',
			fw: '400',
			fs: '10px',
			lh: '14px',
			fc: '#727272',
			ls: '6px',
			ta: 'center'
		},
		title: {
			ff: 'Inter',
			fw: '700',
			fs: '8px',
			lh: '12px',
			fc: '#00000',
		},
		subtitle: {
			ff: 'Inter',
			fw: '700',
			fs: '8px',
			lh: '12px',
			fc: '#000000',
		},
		price: {
			ff: 'Mono',
			fw: '400',
			fc: '#000000',
			fs: '8px',
			lh: '12px',
			ls: '-4px',
			ta: 'right',
		},
		cl: {
			ff: 'Mono',
			fw: '300',
			fc: '#000000',
			fs: '6px',
			lh: '-2px',
			ls: '0px',
			ta: 'right',
		},
		desc: {
			ff: 'Inter',
			fw: '400',
			fs: '6px',
			lh: '10px',
			fc: '#727272',
		}
	},
	colors: {
		header: 'blue',
		body: '#fff',
		footer: '#0a0a0a'
	},
	size: {
		minWidth: '1060px',
		maxWidth: '1060px',

	},
	mobile: {
		minWidth: '1060px',
		maxWidth: '1060px',

	},
	main: "mediumseagreen"
};
export const GlobalStyle = createGlobalStyle`
*, *::after, *::before {  
box-sizing:border-box;
}
html{
	margin:0px;
padding:0px;  
}
body{ 
	margin:0px;
padding:0px;

}
`
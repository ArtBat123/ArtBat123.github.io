import{j as t}from"./index-BbHPmgEB.js";import{C as i}from"./card.esm-D3X4tTwz.js";import{_ as l}from"./data-BnJ9Vx5K.js";const c="_links_5pv8e_1",n="_title_5pv8e_5",_="_card-list_5pv8e_9",d="_card-item_5pv8e_16",o="_literature-title_5pv8e_20",p="_literature-author_5pv8e_24",m="_link_5pv8e_1",e={links:c,title:n,"card-list":"_card-list_5pv8e_9",cardList:_,"card-item":"_card-item_5pv8e_16",cardItem:d,"literature-title":"_literature-title_5pv8e_20",literatureTitle:o,"literature-author":"_literature-author_5pv8e_24",literatureAuthor:p,link:m},h=()=>{const{LinkResponse:a}=l,r=a;return t.jsxs("section",{"aria-label":"Links",className:e.links,children:[t.jsxs("p",{className:e.title,children:["Техническая и справочная литература",t.jsx("div",{className:e.cardList,children:r.literature.map(s=>t.jsxs(i,{className:e.cardItem,children:[t.jsx("p",{className:e.literatureTitle,children:s.title}),t.jsx("p",{className:e.literatureAuthor,children:s.authors}),t.jsx("p",{children:s.description})]},s.title))})]}),t.jsx("p",{className:e.title,children:"Специализированные сайты и порталы"}),t.jsx("div",{className:e.cardList,children:r.saits.map(s=>t.jsxs(i,{className:e.cardItem,children:[t.jsx("a",{href:s.link,target:"_blank",style:{color:"var(--primary-600)"},children:"Ссылка"}),t.jsx("p",{className:e.link,children:s.description})]},s.link))})]})};h.displaName="Links";export{h as Links};

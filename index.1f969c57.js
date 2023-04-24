const[o,n,e]=[".country-list",".country-info","#search-box"].map((o=>document.querySelector(o)));var t;(t="https://restcountries.com/v3.1/all?fields=name,flags",fetch(t).then((o=>o.json()))).then((function(o){return console.log(o),o.map((o=>{console.log(o.flags.png)}))}));
//# sourceMappingURL=index.1f969c57.js.map

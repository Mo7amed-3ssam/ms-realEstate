function s(t){return t.replace(/[^\d]/g,"")}function i(t,e=""){let r=s(t),n=encodeURIComponent(e),o=n?`?text=${n}`:"";return`https://wa.me/${r}${o}`}export{i as a};

document.querySelectorAll("input").forEach(function(e){var t=document.createElement("label"),r=e.getAttribute("name").replace(/([A-Z])/g," $1"),l=r.charAt(0).toUpperCase()+r.slice(1);t.textContent=l,t.classList.add("field-label"),t.setAttribute("for",e.id),e.parentElement.insertBefore(t,e),e.setAttribute("placeholder",l)});
//# sourceMappingURL=index.fbb0a6b1.js.map

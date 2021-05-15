// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".wrapper {\r\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r\n  padding: 15px 20px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\nsvg {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\nh1 {\r\n  font-weight: 900;\r\n  font-size: 20px;\r\n  line-height: 1;\r\n  margin: 6px 0 6px 10px;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\nbutton + button {\r\n  margin-left: 10px;\r\n}\r\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
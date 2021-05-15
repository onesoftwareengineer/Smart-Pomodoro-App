// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "section {\r\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  font-size: 14px;\r\n  line-height: 24px;\r\n  padding: 48px 20px;\r\n  margin: 0 auto;\r\n  max-width: 600px;\r\n  color: #333;\r\n}\r\n\r\nh2 {\r\n  font-weight: 900;\r\n  font-size: 32px;\r\n  line-height: 1;\r\n  margin: 0 0 4px;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\np {\r\n  margin: 1em 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #1ea7fd;\r\n}\r\n\r\nul {\r\n  padding-left: 30px;\r\n  margin: 1em 0;\r\n}\r\n\r\nli {\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.tip {\r\n  display: inline-block;\r\n  border-radius: 1em;\r\n  font-size: 11px;\r\n  line-height: 12px;\r\n  font-weight: 700;\r\n  background: #e7fdd8;\r\n  color: #66bf3c;\r\n  padding: 4px 12px;\r\n  margin-right: 10px;\r\n  vertical-align: top;\r\n}\r\n\r\n.tip-wrapper {\r\n  font-size: 13px;\r\n  line-height: 20px;\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.tip-wrapper svg {\r\n  display: inline-block;\r\n  height: 12px;\r\n  width: 12px;\r\n  margin-right: 4px;\r\n  vertical-align: top;\r\n  margin-top: 3px;\r\n}\r\n\r\n.tip-wrapper svg path {\r\n  fill: #1ea7fd;\r\n}\r\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
function openWin(source,caption) {
	var w = window.open("","win","width=680,height=540,scrollbars");
	w.document.write("<html><body style='margin:0px;background:#777;font-family:tahoma;font-weight:bold;color:#fff'><div style='text-align:center'><img style='margin:5px;border:1px solid #000' src='"+source+"' /></div>");
	w.document.write("<p style='margin:5px 10px;font-size=80%'>"+caption+"</p>");
	w.document.write("<a style='display:block;text-align:right;font-size=80%;margin:5px;color:#fff' href='#' onclick='window.close()'>Close Window</a>");
	w.document.write("</body></html>");
}
function toggleList(obj) {
	with(obj.nextSibling) {
		if(style) {
			style.display = style.display == 'block' ? 'none' : 'block';
		}
	}
	return false
}
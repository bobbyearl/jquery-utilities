/**
 * jQuery Selectors
 * @author Bobby Earl
**/

// Text Equals Selector
$.expr[':'].textEquals = function(obj, index, meta, stack) {
	return $(obj).text() == meta[3];
}

// Text Contains Selector
$.expr[':'].textContains = function(obj, index, meta, statck) {
	return $(obj).text().toLowerCase().indexOf(meta[3].toLowerCase()) != -1;
}

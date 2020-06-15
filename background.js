chrome.contextMenus.create({
	title: "Go to Dynatrace: \"%s\"",
	contexts: ["selection"],
	onclick: searchText
});

function searchText(info) {
	var dyna =  `https://ubz19741.live.dynatrace.com/#topglobalwebrequests;gtf=l_2_HOURS;gf=all;servicefilter=0%1E15%115fcf07f8-ad92-4dba-bce8-94d6f4750779%14${info.selectionText}%140%14%14%14%14`
	chrome.tabs.create({ url: dyna })
}
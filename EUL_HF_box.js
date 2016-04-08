/*!
 * Created by Michael Antczak
 * Michael.Antczak@ed.ac.uk
 * The University of Edinburgh
 *
 * Date: 2016-03-31
 */

$(function() {

	// this box is only loaded on brief results page, so no testing is required for the existence 
	// of the div id = "exlidIdeasBrief"
	
	// add the HTML structure and content for the box, div containers and the content
	$('#exlidIdeasBrief').append('<div id="iEUL_HF_title"></div>');
	$('#exlidIdeasBrief').append('<div id="iEUL_HF_content"></div>');
	$('#iEUL_HF_title').append("<h2>TEST - Having troubles finding what you're looking for?</h2>");
	$('#iEUL_HF_content').append("<h3>Would you like to search in another library?</h3>");
	$('#iEUL_HF_content').append('<p>Search for&nbsp;<span class="cEUL_HF_searchTerm"></span>&nbsp;in&nbsp;<span id="iEUL_HF_copacLink">COPAC</span>.</p>');
	$('#iEUL_HF_content').append('<p>Search for&nbsp;<span class="cEUL_HF_searchTerm"></span>&nbsp;in <a href="http://main-cat.nls.uk/vwebv/searchBasic">National Library of Scotland</a>.</p>');
	$('#iEUL_HF_content').append("<h3>Would you like to recommend the item for purchase?</h3>");
	$('#iEUL_HF_content').append('<p>If you are a student, you can use <a href="https://www.ease.ed.ac.uk/cosign.cgi?cosign-eucsCosign-lac-edwebtools.is.ed.ac.uk&http://lac-edwebtools.is.ed.ac.uk/bookrecs/secure/StudRec.php" target="_blank">RAB</a> to tell us and we will try and buy it for the library.</p>');
	$('#iEUL_HF_content').append('<p>If you are a member of staff, then you can go to the <a href="http://www.ed.ac.uk/information-services/library-museum-gallery/using-library/request-resources/recommend-books" target="_blank">staff recommendation form</a>.</p>');
	$('#iEUL_HF_content').append("<h3>Other options:</h3>");
	$('#iEUL_HF_content').append('<p>If you require a book quickly, you may prefer to submit an <a href="https://ed-ac.illiad.oclc.org/illiad/logon.html" target="_blank"> Inter-Library Loan request</a>.</p>');
	$('#iEUL_HF_content').append('<p>Or maybe you want to find it on <a href="http://www.amazon.co.uk/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=mama+mia" target="_blank">Amazon UK</a>.</p>');
	
	// al the CSS to the box
	$('#exlidIdeasBrief').css({

	})
	
	$('#iEUL_HF_title').css({
		'text-align' : 'center',
		'color' : 'white',
		'background-clip' : 'border-box',
		'background-color' : '#1B325E',
		'padding' : '1em',
	})
	
	$('#iEUL_HF_title > h2').css({

	})
	
	$('#iEUL_HF_content').css({
		'border' : '2px solid #1B325E',
		'padding' : '1em 1em 0 1em',
	})
	
	$('#iEUL_HF_content > p').css({
		'marginBottom' : '10px'
	})
	
	$('#iEUL_HF_content > h3').css({
		'marginBottom' : '10px'
	})
	
	$('.cEUL_HF_searchTerm').css({
		"background" : "#1B325E",
		"color" : "white",
		"padding-left" : "10px",
		"padding-right" : "10px"
	})
		
	// any logic for the box, intercepting search terms for the links and populating the box
	// find input box with name == vl(freeText0) && id == search_field && read its value
	var searchTerm = $('#search_field').val();
	
	
	// populate the box with the search term - COPAC
	$('.cEUL_HF_searchTerm').append(searchTerm);
	var tempLink = EUL_createSearchLink(searchTerm); //
	var tempLink1 = '<a href="' + tempLink + '" target="_blank"></a>';
	$('#iEUL_HF_copacLink').wrap(tempLink1);
	
	
	// create links for outside services
	function EUL_createSearchLink (searchTerm) {
		//  a string with words conected by a + sign
		var tempHolder = searchTerm.replace(/\s+/ig, "+"); 
		var link = "http://copac.jisc.ac.uk/search?any=" + searchTerm.replace(/\s+/ig, "+"); 
		return link;
	}
	
	function EUL_insertLink (link) {
		$('#iEUL_HF_copacLink').wrap("<a></a>");
	}
	
		
		
});
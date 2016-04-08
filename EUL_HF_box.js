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
	$('#iEUL_HF_title').append("<h2>Haven't found what you're looking for?</h2>");
	$('#iEUL_HF_content').append("<h3>Would you like to search an external source</h3>");
	$('#iEUL_HF_content').append('<p>Search for&nbsp;<span class="cEUL_HF_searchTerm"></span>&nbsp;in&nbsp;<span id="iEUL_HF_copacLink">COPAC</span>.</p>');
	$('#iEUL_HF_content').append('<p>Search for&nbsp;<span class="cEUL_HF_searchTerm"></span>&nbsp;in <a href="http://main-cat.nls.uk/vwebv/searchBasic">National Library of Scotland</a>.</p>');
		
	
	// add CSS to the box
	$('#exlidIdeasBrief').css({
		'border' : '3px solid red',
		'padding' : '10px'
	})
	
	$('#iEUL_HF_title').css({
		'border' : '1px solid pink',
		'marginBottom' : '10px'
	})
	
	$('#iEUL_HF_title > h2').css({
		'border' : '1px solid red',
		'marginBottom' : '10px'
	})
	
	$('#iEUL_HF_content').css({
		'border' : '1px solid green',
		'marginBottom' : '10px'
	})
	
	$('#iEUL_HF_content > p').css({
		'marginBottom' : '10px'
	})
	
	$('#iEUL_HF_content > h3').css({
		'marginBottom' : '10px'
	})
	
	$('.cEUL_HF_searchTerm').css({
		"background" : "blue",
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
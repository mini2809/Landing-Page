document.addEventListener('DOMContentLoaded', function(event) 
{
	// populating sections in an unordered list
	let entry;
	let sections=document.querySelectorAll('[id^="section"]');
	const length=sections.length;
	const list=document.querySelector("#navbar__list");
	for(let i=1 ; i<=length ; i++)
	{
		entry=document.createElement('li');
		entry.textContent='SECTION' +' '+ i ;
		entry.id=i;
		list.appendChild(entry);
			//event listener for click and scroll event and gototop icon
		entry.addEventListener('click',respondToClick)
		document.addEventListener('scroll',respondToScroll)
		let butt=document.querySelector('.button');
		butt.addEventListener('click',goToTop);
		window.onscroll= function()
		{
			if(document.documentElement.scrollTop > 10)
				butt.style.display="block";
			else
				butt.style.display="none";
		}
		function goToTop(){
			document.documentElement.scrollTop=0;
			document.body.scrollTop = 0;
		}
		
		function respondToClick(evt)
		{
			let target= evt.target.id;
		
			let sec = document.getElementById('section'+target);
			let navItems= document.getElementsByTagName('li');
			let listitems=navItems[target-1];
			sec.scrollIntoView();
		   	if(SectionInViewport(sec))
		   	{
		   		sec.classList.add("active");
		   		listitems.classList.add("activeLi");
		   		//this is to find all siblings of clicked node.
		   		let SiblingArray = []
		   		let SiblingArray1 = [],
	    		node = sec.parentNode.firstElementChild;
	    		node1=listitems.parentNode.firstElementChild;
	    		while ( node ) 
				{
		    		if ( node !== sec ) 
		      		SiblingArray.push( node );
		    		node = node.nextElementSibling ;
		    		for(let x=1; x<SiblingArray.length; x++)
		    		SiblingArray[x].classList.remove("active");
	    		}
	    		while ( node1 ) 
				{
		    		if ( node1 !== listitems ) 
		      		SiblingArray1.push( node1 );
		    		node1 = node1.nextElementSibling ;
		    		for(let x=0; x<SiblingArray1.length; x++)
		    		SiblingArray1[x].classList.remove("activeLi");
	    		}
			}
	   	}

		function respondToScroll(evt)
		{
			let arrayOfSections=Array.from(sections);
		
			for(let p=0; p<length; p++)
			{
				if(SectionInViewport(arrayOfSections[p]))
				{
					
					arrayOfSections[p].classList.add('active');
					
					let SiblingArray = []
					let SiblingArray1 = []
					node = arrayOfSections[p].parentNode.firstElementChild;
					let navItems= document.getElementsByTagName('li');
					let listitems=navItems[p];
					listitems.classList.add("activeLi");
					node1=listitems.parentNode.firstElementChild;
					while ( node ) 
					{
			    		if ( node !== arrayOfSections[p] ) 
			      		SiblingArray.push( node );
			    		node = node.nextElementSibling ;
			    		for(let x=1; x<SiblingArray.length; x++)
			    		SiblingArray[x].classList.remove("active");
					}
					while ( node1 ) 
				{
		    		if ( node1 !== listitems ) 
		      		SiblingArray1.push( node1 );
		    		node1 = node1.nextElementSibling ;
		    		for(let x=0; x<SiblingArray1.length; x++)
		    		SiblingArray1[x].classList.remove("activeLi");
	    		}
			
		    		
				}
			}
		}

			let SectionInViewport;
			SectionInViewport = function (evt) 
			{
			    let bound = evt.getBoundingClientRect();
			    if(bound.top >= 0 &&
			        bound.left >= 0 &&
			        bound.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			        bound.right <= (window.innerWidth || document.documentElement.clientWidth)){
			        
			    	return true;}
			    else{
			    	return false;}
		    	
		 	}
	}
});
	


/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



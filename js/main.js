


            


$(document).on('hidden.bs.modal','#signUp', function () {
	console.log("close");


   // reset form
   $('#thanks').addClass('hidden');
   $('#submit-form').removeClass('hidden');
   $('.modal-title').removeClass('hidden');
   $('#request-submit').removeClass('hidden');
   $('#email-warning-unvalid').addClass('hidden');
   $('#name-warning-empty').addClass('hidden');


   $('#name').val("");
   $('#email').val("");
   $('#org').val("");
   $('#plan').val("Demo");
   $('#notes').val("");
 //Do stuff here
});


function submit(){

	console.log("submit");


	var name = $('#name').val();
	var email = $('#email').val();
	var org = $('#org').val();
	var plan = $('#plan').val();
	var notes = $('#notes').val();

	var empty_email = isEmpty(email);
	var empty_name = isEmpty(name);
	var valid_email = validateEmail(email);


	var valid = true;
	if(empty_email){
		$('#email-warning-unvalid').removeClass('hidden');
		valid = false;

	}else{
		$('#email-warning-unvalid').addClass('hidden');
	}


	if(!valid_email){
		$('#email-warning-unvalid').removeClass('hidden');
		valid = false;
	}else{
		$('#email-warning-unvalid').addClass('hidden');
	}


	if(empty_name){
		$('#name-warning-empty').removeClass('hidden');
		valid = false;
	}else{
		$('#name-warning-empty').addClass('hidden');
	}


	if(valid){
		$('#submit-form').addClass('hidden');
		$('.modal-title').addClass('hidden');
		$('#request-submit').addClass('hidden');
		$('#thanks').removeClass('hidden');

   var url = "https://script.google.com/macros/s/AKfycbybzmFw96TCKLah5hYHRwVePRjcBBnIzVfhQ6qxJcodXH8I7WE/exec";
		 var posting = $.post( url, { name: name, email: email, org: org, plan:plan, notes:notes  });
	}


/*
  console.log(name);
  console.log(email);
  console.log(org );
  console.log(plan);
  console.log(notes);
  */

  /*


  var community =  navItem.attr("sc");
  if(community != vue_app.community){


   vue_app.community = navItem.attr("sc");
   vue_app.communityName = navItem.attr("name");
   vue_app.communityScanDate = navItem.attr("date");
   vue_app.communityLastScanDate = navItem.attr("lastScan");

   $(".nav-community").removeClass('selected_box');
   $(".nav-community").addClass('hover_box');
   $(".nav-community").children('.users-list-name').addClass('regular_text');
   $(".nav-community").children('.users-list-name').removeClass('selected_text');
     //selected.children('.sort').
     navItem.addClass('selected_box');
     navItem.removeClass('hover_box');
     navItem.children('.users-list-name').removeClass('regular_text');
     navItem.children('.users-list-name').addClass("selected_text");
       setDataRange();

   }


   */

 }

 function isEmpty(val){
 	return (val == "" || val == null);
 }
 function validateEmail(email) {
 	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 	return re.test(email);
 }

 $(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1000);
                    
            }
            
        }); 
    
    });
    
});

 var searchDesktopImage = playerImage = 'img/features/search.jpg'
 var discoveryDesktopImage = playerImage = 'img/features/discovery.jpg'
  var playlistDesktopImage = playerImage = 'img/features/video.jpg'

 var searchPhoneImage = 'img/features/phone_search.jpg'
 var discoveryPhoneImage = 'img/features/phone_discovery.jpg'
  var playlistPhoneImage = 'img/features/phone_playlists.jpg'

 var app = new Vue({
  el: '#app',
  data: {
    playerImage: 'img/features/discovery.jpg',
    playerSearch: false,
    playerDiscovery: true,
    playerPlaylist: false,
    device: "desktop",
    feature: "discovery"
  },
   methods: {
    selectPlayerFeature: function () {
      // `this` inside methods points to the Vue instance
      switch(this.feature){
        case "search":

          if(this.device == "desktop"){
            this.playerImage = searchDesktopImage;
          }else{
             this.playerImage = searchPhoneImage;
          }

          this.playerSearch = true;
          this.playerDiscovery= false;
          this.playerPlaylist= false;

          break;
        case "discovery":

          if(this.device == "desktop"){
            this.playerImage = discoveryDesktopImage;
          }else{
            this.playerImage = discoveryPhoneImage;
          }
          
          this.playerSearch = false;
          this.playerDiscovery= true;
          this.playerPlaylist= false;

          break;
        case "playlists":

         if(this.device == "desktop"){
           this.playerImage = playlistDesktopImage;
          }else{
           this.playerImage = playlistPhoneImage;
          }
          
          this.playerSearch = false;
          this.playerDiscovery= false;
          this.playerPlaylist= true;
          break;
      }
    },
     selectDevice: function(device){
       this.device = device;
        this.selectPlayerFeature();
    },
    selectFeature: function(message){
      this.feature = message;
       this.selectPlayerFeature();
  }
  },
 
})

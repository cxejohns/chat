// ask user for name with popup prompt
var guestNames = ["Afternoon_Farmer","All_Hat_and_No_Cattle","Blunderbuss","Cad","Chatterbox_or_Clack_Box","Chicken_Hearted","Chuckle_Head","Cow_Handed","Deaths_Head_Upon_a_Mop_Stick","Duke_of_Limbs","Dunderhead","Fop","Fribble","Fussbudget","Gadabout","Gasser","Gentleman_of_Four_Outs","Ginger_Snap","Go_Alonger","Go_By_the_Ground","Gollumpus","Greedy_Guts","Grumbletonian","Heathen_Philosopher","Milksop","Minikin","Mollycoddle","Nigmenog","Nincompoop","Ninnyhammer","Poltroon","Rascal","Rattlecap","Ruffian","Rumbumptious","Sauce_Box","Scallywag","Seek_Sorrow","Scamp","Scoundrel","Shabbaroon","Skinflint","Slug_A_Bed","Sneaksby","Spoony","Stingbum","Unlicked_Cub","White_Livered","Word_Grubbers","Wrinkler"];
var guestIndex = Math.round((Math.random() / 2) * 100); 
var guestName = guestNames[guestIndex];

var guestNum = Math.round(Math.random() * 1000); 
var name = prompt("Enter your chat name:", guestName + guestNum);
        
        // default name is 'Guest'
    	if (!name || name === '') {
           name = "Incognito";
    	}
    	
    	// strip tags
    	name = name.replace(/(<([^>]+)>)/ig,"");
    	
    	// display name on page
    	$("#name-area").html("You are: <span>" + name + "</span>");
        
       
    	// kick off chat
        var chat =  new Chat();
        
       

    	$(function() {
    	
    		 chat.getState(); 
             
            $( document ).ready(function() {
                chat.send("xINTROx", name);
            });
     //       $(window).on('beforeunload', function() {
              //  chat.send("xEXITx", name);
       //         chat.send("xEXITx", name);
         //   });

    		 // watch textarea for key presses
             $("#sendMess").keydown(function(event) {  
             
                 var key = event.which;  
           
                 //all keys including return.  
                 if (key >= 33) {
                   
                     var maxLength = $(this).attr("maxlength");  
                     var length = this.value.length;  
                     
                     // don't allow new content if length is maxed out
                     if (length >= maxLength) {  
                         event.preventDefault();  
                     }  
                  }  
    		 																																																});
    		 // watch textarea for release of key press
             $("#sendMessBtn").click(function(event){
                event.preventDefault();
                var text = $('#sendMess').val();
                var maxLength = $('#sendMess').attr("maxlength");  
                var length = text.length; 
                     
                    // send 
                    if (length <= maxLength + 1) { 
                     
    			        chat.send(text, name);	
                        $('#sendMess').val("");
                    } else {
                    
    					$('#sendMess').val(text.substring(0, maxLength));
    					
    				}	
              });
             
             $('#sendMess').keyup(function(e) {	
    		 					 
    			  if (e.keyCode == 13) { 
    			  
                    var text = $(this).val();
    				var maxLength = $(this).attr("maxlength");  
                    var length = text.length; 
                     
                    // send 
                    if (length <= maxLength + 1) { 
                     
    			        chat.send(text, name);	
    			        $(this).val("");
    			        
                    } else {
                    
    					$(this).val(text.substring(0, maxLength));
    					
    				}	
    				
    				
    			  }
             });
            
    	});
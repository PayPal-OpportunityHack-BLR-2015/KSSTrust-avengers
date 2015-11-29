var inpDetails = {
emailId:"",
amount:"",
name:""

};


var ufCards = [{
imgUrl:"http://lorempixel.com/80/80/sports/1",
textDesc:"test text"

},{
imgUrl:"http://lorempixel.com/80/80/sports/1",
textDesc:"test text"

},{
imgUrl:"http://lorempixel.com/80/80/sports/1",
textDesc:"test text"

}];

var dfCards = [{
ngoName:"NGO TEST NAME"

},{
ngoName:"NGO TEST NAME 2"

}];

var cfCards = [{
campName:"Campaign Name",
completed:40,
cashCollected:4000,
date:"4 Dec 2015",


},{
campName:"Campaign Name",
completed:40,
cashCollected:4000,
date:"4 Dec 2015",


},{
campName:"Campaign Name",
completed:40,
cashCollected:4000,
date:"4 Dec 2015",


},{
campName:"Campaign Name",
completed:40,
cashCollected:4000,
date:"4 Dec 2015",


}];

$(document).ready(function () {

    
    
    populateData(); 
    
    init();

    setListeners();


    
});


function setListeners() {
        $("#tab_1").on("click", function () {
            $(".tabMenu").removeClass("tab_active");
            $("#tab_1").addClass("tab_active");

            $("#updateFeed").fadeIn();
            $("#donateFeed").hide();
            $("#campFeed").hide();
        });

        $("#tab_2").on("click", function () {
            $(".tabMenu").removeClass("tab_active");
            $("#tab_2").addClass("tab_active");
            $("#updateFeed").hide();
            $("#donateFeed").fadeIn();
            $("#campFeed").hide();
        });

        $("#tab_3").on("click", function () {
            $(".tabMenu").removeClass("tab_active");
            $("#tab_3").addClass("tab_active");
            $("#updateFeed").hide();
            $("#donateFeed").hide();
            $("#campFeed").fadeIn();

        });

        $(".dButton").on('click', function () {
            openDonatePage();

        });
    
    //abtButton

        //navHome
        $(".navHome").on('click', function () {
            closeDonatePage();

        });
    
       $(".abtButton").on('click', function () {
            openAboutPage();

        });
    
     $(".abtButton").on('click', function () {
            closeAboutPage();

        });
    
    $('#innerW').each(function() {
    //$('#MyDiv', this.contentWindow.document||this.contentDocument);
        console.log($('#submitButton', this.contentWindow.document||this.contentDocument));
        
        $('#submitButton', this.contentWindow.document||this.contentDocument).on('click',function(){
        console.log("I am submit");
        });
        
        //input_cntnr
});
    
    $("#proceedButton").on("click",function(){
    
        
        inpDetails.emailId = $("#emailId").val();
        inpDetails.amount = $("#amount").val();
        inpDetails.name = $("#name").val();
        
        console.log(inpDetails);
        
    });
    
    }


    function init() {
        
        populateData();
        
        
        $('body').css("height", "" + $(window).height() + "px");


        $("#donateFeed").hide();
        $("#campFeed").hide();

        $("#tab_1").addClass("tab_active");
    }

    function populateData(){
        
    render("#uf_card_template","#updateFeed",ufCards);  
        
    render("#df_card_template","#donateFeed",dfCards);     
       
        
    render("#cf_card_template","#campFeed",cfCards);         
        
    }

function render(wireframe,target,data){
 var compiled = _.template($(wireframe).html());
  
    $(target).html(compiled({
        items: data
    }));
}


    function openDonatePage() {
        $("#donatePage").css("left", "0%");
    }

    function closeDonatePage() {
        $("#donatePage").css("left", "100%");
    }




(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


 
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
function fct()
{
    if(document.getElementById('name').value=="" )
    {
        document.getElementById('errornom').innerHTML='Nom champ obligatoir';
        c=c+1;
      
        return false;
       
    }
    if(document.getElementById('nom').value!="")
    {document.getElementById('er1').innerHTML='';}
        
        
    /*-----prenom------*/
    if( document.getElementById('email').value=="" )
    {
        document.getElementById('er2').innerHTML='Email champ obligatoir';
        c=c+1;
       
        return false;
    }
    if (     document.getElementById('email').value!="")
    {   document.getElementById('er2').innerHTML=''; }
    
    /*-----Mote de passe------*/
    if(document.getElementById('subject').value=="")
    {
        var error=document.getElementById('er3').innerHTML='champ obligatoir';
        c=c+1;
    
        return false;
    }
    if(  document.getElementById('subject').value!="")
    {var error=document.getElementById('er3').innerHTML='';}
    /*-----confirmation mote de passe------*/
    if(document.getElementById('message').value=="")
    {
        document.getElementById('er4').innerHTML='confirmation mote de passe champ obligatoir';
        c=c+1;
     
        return false;
    }
    if(document.getElementById('message').value!="")
    {   document.getElementById('er4').innerHTML='';}    
    if(c==0)
    {
        /*var error=document.getElementById('error').innerHTML='';*/
         alert('bien envoyer');
         return true;
    }
    
    
    

}
}

)(jQuery);
function fct()
{ 

 var  c=0;

/*-----NOM------*/
if(document.getElementById('name').value=="" )
{
    document.getElementById('er1').innerHTML='nom champ obligatoir';
    c=c+1;
  
    return false;
   
}
if(document.getElementById('name').value!="")
{document.getElementById('er1').innerHTML='';}
    
    
/*-----email------*/
if( document.getElementById('email').value=="" )
{
    document.getElementById('er2').innerHTML='champ obligatoir';
    c=c+1;
   
    return false;
}
if (     document.getElementById('email').value!="")
{   document.getElementById('er2').innerHTML=''; }

/*-----objet------*/
if(document.getElementById('subject').value=="")
{
    var error=document.getElementById('er3').innerHTML='champ obligatoir';
    c=c+1;

    return false;
}
if(  document.getElementById('subject').value!="")
{var error=document.getElementById('er3').innerHTML='';}
/*-----message------*/
if(document.getElementById('message').value=="")
{
    document.getElementById('er4').innerHTML='champ obligatoir';
    c=c+1;
 
    return false;
}
if(document.getElementById('message').value!="")
{   document.getElementById('er4').innerHTML='';}

if(c==0)
{
    /*var error=document.getElementById('error').innerHTML='';*/
     alert('bien envoyer');
     return true;
}
}





 var tl = gsap.timeline() ; 

 gsap.set(".a" , { opacity : 0 , y : 10 })
 gsap.set(".b" , { opacity : 0 , y : 10 })
 gsap.set("#right>img" , {opacity : 0 , scale :0 , y : 0   })
  
 tl.from("#left" , {
    width : 0 , 
    duration : 1 , 
    ease : Expo.easeInOut 
 })
 .from("#right" , {
    width : 0 ,
    delay : -0.3 ,  
    duration : 2 , 
    ease : Expo.easeInOut 
 })
 .to(".a" , {
   delay : -2 , 
   stagger : .2 , 
   opacity : 1 ,
   duration : 1 ,  
   y : 0 , 
   ease : Expo.easeInOut , 
 }  , "up"  )
 .to(".b" , {
   delay : -1 , 
   stagger : .2, 
   opacity : 1 ,
   duration : 1 ,  
   y : 0 , 
   ease : Expo.easeInOut , 
 } , "up" 
)
 .to("#right>img" , {
   opacity : 1  , 
   scale : 0.7, 
   y : 0  ,  
   duration : 1.5  ,
   dealy :-1.9
 }  , "up"  )
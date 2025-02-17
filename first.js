var typed = new Typed('#element', {
    strings: ['  software ',  '  software  developer ','Graphic Designer','machine learning ','UX Designer',"Full Stack Web developer "],
    typeSpeed: 70,
  });



  const prevEle = document.querySelector(".prev")
  const nextEle = document.querySelector(".next")
  const imgContainerEle=document.querySelector(".img-container")
  const imgEle =document.querySelectorAll(".pr-img")


  let currImg =1;
  let Timeout;


  nextEle.addEventListener("click",()=>{
        currImg++
        clearInterval(Timeout)
        updateImg()
  })

   prevEle.addEventListener("click",()=>{
    currImg--
    clearTimeout(Timeout)
    updateImg()
   })


updateImg()

  function updateImg(){
    if(currImg > imgEle.length){
      currImg=1

    }else if (currImg < 1){
      currImg =imgEle.length
    }
      imgContainerEle.style.transform = `translateX(${-(currImg -1) *100}%)`

      Timeout=setTimeout(()=>{
        currImg++
       updateImg()
      },2000)

  }
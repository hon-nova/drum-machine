const turnAudioOn =(id)=>{
   let audioId = document.getElementById(id)
   let display=document.getElementById("display")

   let sourceElements =Array.from(audioId.getElementsByTagName('source'))
   // console.log(Array.isArray(sourceElements))
   if(sourceElements.length >0){
      sourceElements.forEach((ele,index)=>{
         let sourceParts = ele.src.split('/')
         // console.log('sourceParts::',sourceParts)
         let sourceName=sourceParts[sourceParts.length -1]
         let sourceNameFirst = sourceName.split('.')[0]
         display.innerHTML = `<h1>${sourceNameFirst}</h1>`;
      })
      
   audioId.play();
}
}

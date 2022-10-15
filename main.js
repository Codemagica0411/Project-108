function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ihok8pE20/', modelReady)  
}


function modelReady() {
classifier.classify(gotResults);
}


function gotResults() {
    if (error) {
        console.error(error);
      } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("soundrepeated_label").innerHTML = 'Count of Animal Sound Detected - '+ results[0].label;
        document.getElementById("soundname").innerHTML = 'Sound Name Detected - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("soundrepeated_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("soundname").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    
        img = document.getElementById('alien1') 
        img1 = document.getElementById('alien2')
        img2 = document.getElementById('alien3')
        img3 = document.getElementById('alien4')
    
        if (results[0].label == "Barking") {
          img.src = 'design-bigol-animated-dog-sitting_469988-3.webp'
          Dog = Dog+1;
        } else if (results[0].label == "Meowing") {
          img.src = '1000_F_239699166_R5LrX55c92PknZtxSfqlPcN44BOZ384K.jpg'
          Cat = Cat+1;
          
        } else if (results[0].label == "Roaring") {
          img.src = 'angry-roaring-male-lion-head_9645-2129.webp'
          Lion = Lion+1;
          
        }else{
          img.src = 'ear-emoji-by-google.png';
          
        }
      }
    }


Dog = 0
Cat = 0
Lion = 0
img = document.getElementById("gif1")
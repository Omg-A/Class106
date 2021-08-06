function startClassification(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/6iX_ASQ4P/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);

        random_color_r = Math.floor(Math.random() * 255) + 1;
        random_color_g = Math.floor(Math.random() * 255) + 1;
        random_color_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + " %";

        document.getElementById("result_label").style.color = "rgb( " + random_color_r + "," + random_color_g + "," + random_color_b +")";
        document.getElementById("result_confidence").style.color = "rgb( " + random_color_r + "," + random_color_g + "," + random_color_b +")";

        img = document.getElementById("alien-01");
        img1 = document.getElementById("alien-02");
        img2 = document.getElementById("alien-03");
        img3 = document.getElementById("alien-04");

        if(results[0].label == "Clap"){
            img.src = "aliens-01.gif";
            img1.src = "aliens-02.png";
            img2.src = "aliens-03.png";
            img3.src = "aliens-04.png";
        }else if(results[0].label == "Bell"){
            img.src = "aliens-01.png";
            img1.src = "aliens-02.gif";
            img2.src = "aliens-03.png";
            img3.src = "aliens-04.png";
        }else if(results[0].label == "Snap"){
            img.src = "aliens-01.png";
            img1.src = "aliens-02.png";
            img2.src = "aliens-03.gif";
            img3.src = "aliens-04.png";
        }else{
            img.src = "aliens-01.png";
            img1.src = "aliens-02.png";
            img2.src = "aliens-03.png";
            img3.src = "aliens-04.gif"; 
        }
    }
}
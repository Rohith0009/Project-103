popup = document.getElementById("popup");

Webcam.set({
  width: 350,
  height: 300,
  image_format: "png",
  png_quality: 90,
});

camera = document.getElementById("camera");

Webcam.attach(camera);
function take_snapshot() {
  Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML = '<img src="' + data_uri + '" id="captured_img"><br>';
  });
  document.getElementById("taken_label").innerHTML = "<br>Captured Image:";
  document.getElementById("identify_button").innerHTML = "<button class='btn btn-outline-primary' onclick='check()'>Identify Image</button><br><br>";
}

console.log("ml5 has Been loaded👍", ml5.version);

function check() {
  popup.classList.add("open-popup");
  img = document.getElementById("captured_img");
  classifier.classify(img, gotresult);
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GEKVC4u3D/model.json", modelloaded);

function modelloaded() {
  console.log("Successfully Loaded TeachableMachine API");
}

function gotresult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    final_accuracy = results[0].confidence.toFixed(2);
    final_accuracy = (final_accuracy * 100).toFixed(2) + "%";
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = final_accuracy;
  }
}

function closePopup() {
  popup.classList.remove("open-popup");
}

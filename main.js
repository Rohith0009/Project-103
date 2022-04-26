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
  document.getElementById("taken_label").innerHTML = "<br>Result:";
  document.getElementById("identify_button").innerHTML = "<button class='btn btn-outline-primary' onclick='check()'>Identify Image</button><br><br>";
}

console.log("ml5 has Been loaded👍", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GEKVC4u3D/model.json", modelloaded);

function modelloaded() {
  console.log("Successfully Loaded TeachableMachine API");
}

(function () {
  var byeSpeaker = {};
  var speakWord = "Good Bye";

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }


// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
  window.byeSpeaker = byeSpeaker;
})();



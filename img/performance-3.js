var mainTimeline = gsap.timeline();
var dtl = complete_data_timeline();
var stl = complete_screen_timeline();
var timeScale = 2;
dtl.timeScale(timeScale);
stl.timeScale(1.5);
mainTimeline
  .add(complete_count_increase_timeline(dtl, stl));

function complete_count_increase_timeline(dtl, stl) {
  var tl = gsap.timeline({repeat: -1, repeatDelay: 1, onRepeat: restart_dtl_and_stl, onRepeatParams: [dtl, stl]});
  tl
    .add(start_dataflow())
    .add(increase_to_25(), "0.5")
    .add(increase_to_50(), "+=0.5")
    .add(increase_to_75(), "+=0.5")
    .add(increase_to_100(), "+=0.5")
    .add(block_pty_thread(dtl), "<")
    .add(decrease_to_75(), "+=1")
    .add(unblock_pty_thread(dtl), "<")
    .add(increase_to_100(), "+=0.5")
    .add(block_pty_thread(dtl), "<")
    .add(decrease_to_75(), "+=1")
    .add(unblock_pty_thread(dtl), "<")
    .add(increase_to_100(), "+=0.5")
    .add(block_pty_thread(dtl), "<")
    .add(decrease_to_75(), "+=1")
    .add(stop_pty_thread(dtl), "<")
    .add(decrease_to_50(), "+=1")
    .add(decrease_to_25(), "+=1")
    .add(decrease_to_0(stl), "+=1")
//     .add(increase_to_2k(), "6")
//     .add(increase_to_17k(), "10")
//     .add(increase_to_96k(), "14")
//     .add(increase_to_124k(), "18");
  return tl;
}

function start_dataflow() {
  var tl = gsap.timeline();
  tl.set(
    ".performance3 .new-data-yellow-arrow, .performance3 .datapilltext, .performance3 .datapill",
    { opacity: 1 }
  );
  return tl;
}

function stop_dataflow() {
  var tl = gsap.timeline();
  tl.set(
    ".performance3 .new-data-yellow-arrow, .performance3 .datapilltext, .performance3 .datapill",
    { opacity: 0 }
  );
  return tl;
}

function restart_dtl_and_stl(dtl, stl) {
  dtl.restart();
  stl.restart();
}

function complete_data_timeline() {
  var tl = gsap.timeline({repeat: -1});
tl
  .add(data_to_mpsc())
  .add(data_and_render_to_mpsc())
  return tl;
}

function data_and_render_to_mpsc() {
  var tl = gsap.timeline();
  tl.set(
    ".performance3 .datapill-animate-rect, .performance3 .datapill-animate-text, .performance3 .renderpill-animate-rect, .performance3 .renderpill-animate-text",
    { x: 0, y: 0 }
  );
  tl.set(".performance3 .render-now-red-box, .performance3 .render-now-text, .performance3 .datapill-animate-rect, .performance3 .datapill-animate-text",
    { opacity: 0 }
  );
  tl.to(
    ".performance3 .render-now-red-box, .performance3 .render-now-text, .performance3 .renderpill-animate-rect, .performance3 .renderpill-animate-text, .performance3 .datapill-animate-rect, .performance3 .datapill-animate-text",
    { duration: 0.1, opacity: 1, ease: "power4.in" },
  );

  tl.to(
    ".performance3 .datapill-animate-rect, .performance3 .datapill-animate-text",
    { duration: 0.1, x: 40.7, y: 7.5 },
  );
  tl.to(
    ".performance3 .renderpill-animate-rect, .performance3 .renderpill-animate-text",
    { duration: 0.1, x: 40.7, y: -6 },
    "<"
  );
//   tl.to(
//     ".performance3 .new-data-yellow-arrow, .performance3 .datapill, .performance3 .datapilltext, .performance3 .render-now-red-box, .performance3 .render-now-text, .performance3 .renderpill-animate-rect, .performance3 .renderpill-animate-text",
//     { duration: 0.1, opacity: 0, ease: "power4.in" },
//   );
  tl.to(
    ".performance3 .render-now-red-box, .performance3 .render-now-text, .performance3 .renderpill-animate-rect, .performance3 .renderpill-animate-text",
    { duration: 0.1, opacity: 0, ease: "power4.in" },
  );
  return tl;
}

function data_to_mpsc() {
  var tl = gsap.timeline();
  tl.set(
    ".performance3 .datapill-animate-rect, .performance3 .datapill-animate-text, .performance3 .renderpill-animate-rect, .performance3 .renderpill-animate-text",
    { x: 0, y: 0 }
  );
  tl.set(".performance3 .render-now-red-box, .performance3 .render-now-text, .performance3 .datapill-animate-rect, .performance3 .datapill-animate-text",
    { opacity: 0 }
  );
  tl.to(
    ".performance3 .datapill-animate-rect, .performance3 .datapill-animate-text",
    { duration: 0.1, opacity: 1, ease: "power4.in" }
  );

  
  tl.to(
    ".performance3 .datapill-animate-rect, .performance3 .datapill-animate-text",
    { duration: 0.1, x: 40.7, y: 7.5 },
  );

  return tl;
}

function complete_screen_timeline() {
  var tl = gsap.timeline({repeat: -1});
tl
  .add(data_processing_timeline())
  .add(render_timeline())
  .add(data_processing_timeline_2())
  .add(render_timeline_2())
  return tl;
}

function data_processing_timeline() {
  // var tl = gsap.timeline({onComplete: function() { this.pause(0, true) }});
  // var tl = gsap.timeline({smoothChildTiming: true});
  var tl = gsap.timeline({smoothChildTiming: true});
  // tl.set("#interpret-state-1, #interpret-state-yellow-1", {opacity: 0});
  // tl.set("#initial-state-text", {opacity: 1});


  // make datapill appear under the mpsc channel (starting point)
  tl.set(
    ".performance3 .datapill-animate-rect-2, .performance3 .datapill-animate-text-2",
    { opacity: 1},
    "setup",
  );
  tl.set(
    ".performance3 .datapill-animate-rect-2, .performance3 .datapill-animate-text-2",
    { x: 0, y: 0 },
    "setup",
  );

  // toss datapill at the "interpret data" box and activate it (yellow background)
  tl.to(
    ".performance3 .datapill-animate-rect-2, .performance3 .datapill-animate-text-2",
    // { duration: 1, x: 40.7, y: -18, ease: "power4" },
    { duration: 0.2, x: 40.7, y: -18, ease: "power4" },
  );
  tl.to(
    ".performance3 .interpret-yellow-box, .performance3 .interpret-data-text",
    // { duration: 0.5, opacity: 1, ease: "power4.out" },
    { duration: 0.1, opacity: 1, ease: "power4.out" },
    "<30%"
  );

  // turn interpreting state indication on
  tl.to(
    ".performance3 .state-yellow-box, .performance3 .state-text-second-black",
    // { duration: 1, opacity: 1, ease: "steps(5)" },
    { duration: 0.2, opacity: 1, ease: "steps(5)" },
  );
  tl.set(".performance3 .state-text-first-yellow", {opacity: 0});

  // turn interpreting state indication off and leave new state in place
  tl.to(
    ".performance3 .state-yellow-box, .performance3 .state-text-second-black",
    // { duration: 1, opacity: 0, ease: "steps(5)" },
    { duration: 0.1, opacity: 0, ease: "steps(5)" },
  );
  tl.set(".performance3 .state-text-second-yellow", {opacity: 1}, "<");

  // bring pill back to original position
  tl.to(
    ".performance3 .datapill-animate-rect-2, .performance3 .datapill-animate-text-2",
    { x: 0, y: 0, duration: 0 },
    "cleanup"
  );

  // deactivate interpret data button
  tl.to(
    ".performance3 .interpret-yellow-box, .performance3 .interpret-data-text",
    // { duration: 0.5, opacity: 0, ease: "power4.out" },
    { duration: 0.1, opacity: 0, ease: "power4.out" },
  );

  return tl;
}

function data_processing_timeline_2() {
  // var tl = gsap.timeline({onComplete: function() { this.pause(0, true) }});
  // var tl = gsap.timeline({smoothChildTiming: true});
  var tl = gsap.timeline({smoothChildTiming: true});
  // tl.set("#interpret-state-1, #interpret-state-yellow-1", {opacity: 0});
  // tl.set("#initial-state-text", {opacity: 1});


  // make datapill appear under the mpsc channel (starting point)
  tl.set(
    ".performance3 .datapill-animate-rect-2, .performance3 .datapill-animate-text-2",
    { opacity: 1},
    "setup",
  );
  tl.set(
    ".performance3 .datapill-animate-rect-2, .performance3 .datapill-animate-text-2",
    { x: 0, y: 0 },
    "setup",
  );

  // toss datapill at the "interpret data" box and activate it (yellow background)
  tl.to(
    ".performance3 .datapill-animate-rect-2, .performance3 .datapill-animate-text-2",
    // { duration: 1, x: 40.7, y: -18, ease: "power4" },
    { duration: 0.2, x: 40.7, y: -18, ease: "power4" },
  );
  tl.to(
    ".performance3 .interpret-yellow-box, .performance3 .interpret-data-text",
    // { duration: 0.5, opacity: 1, ease: "power4.out" },
    { duration: 0.1, opacity: 1, ease: "power4.out" },
    "<30%"
  );

  // turn interpreting state indication on
  tl.to(
    ".performance3 .state-yellow-box, .performance3 .state-text-first-black",
    // { duration: 1, opacity: 1, ease: "steps(5)" },
    { duration: 0.2, opacity: 1, ease: "steps(5)" },
  );
  tl.set(".performance3 .state-text-second-yellow", {opacity: 0});

  // turn interpreting state indication off and leave new state in place
  tl.to(
    ".performance3 .state-yellow-box, .performance3 .state-text-first-black",
    // { duration: 1, opacity: 0, ease: "steps(5)" },
    { duration: 0.2, opacity: 0, ease: "steps(5)" },
  );
  tl.set(".performance3 .state-text-first-yellow", {opacity: 1}, "<");

  // bring pill back to original position
  tl.to(
    ".performance3 .datapill-animate-rect-2, .performance3 .datapill-animate-text-2",
    { x: 0, y: 0, duration: 0 },
    "cleanup"
  );

  // deactivate interpret data button
  tl.to(
    ".performance3 .interpret-yellow-box, .performance3 .interpret-data-text",
    // { duration: 0.5, opacity: 0, ease: "power4.out" },
    { duration: 0.1, opacity: 0, ease: "power4.out" },
  );

  return tl;
}

function render_timeline() {
  var tl = gsap.timeline({smoothChildTiming: true});

  // make renderpill appear under the mpsc channel (starting point)
  tl.set(
    ".performance3 .render-animate-pill-2",
    { opacity: 1},
    "setup",
  );

  // toss renderpill at the "render" box and activate it (red background)
  tl.to(
    ".performance3 .render-animate-pill-2",
    // { duration: 1, x: 12.7, y: -2, ease: "power4" },
    { duration: 0.2, x: 12.7, y: -2, ease: "power4" },
  );
  tl.to(
    ".performance3 .active-render-button",
    // { duration: 0.5, opacity: 1, ease: "power4.out" },
    { duration: 0.1, opacity: 1, ease: "power4.out" },
    "<30%"
  );

  // turn rendering indication on
  tl.to(
    ".performance3 .state-red-box, .performance3 .state-text-second-yellow-2",
    // { duration: 1, opacity: 1, ease: "steps(5)" },
    { duration: 0.2, opacity: 1, ease: "steps(5)" },
  );

  // toss rendering box at screen
  tl.to(
    ".performance3 .state-red-box, .performance3 .state-text-second-yellow-2",
    // { duration: 1, x: 37.5, ease: "elastic.out(1, 0.3)" },
    { duration: 0.2, x: 37.5, ease: "elastic.out(1, 0.3)" },
  );
  tl.to(
    ".performance3 .state-text-first-yellow-on-screen, .performance3 .state-text-first-yellow-2",
    { duration: 0, opacity: 0 },
    "<"
  );

  // turn off rendering box
  tl.to(
    ".performance3 .state-red-box",
    // { duration: 1, opacity: 0, ease: "steps(5)" },
    { duration: 0.2, opacity: 0, ease: "steps(5)" },
  );


  // disappear pill so we won't see it on top of the deactivated box
  tl.to(
    ".performance3 .render-animate-pill-2",
    { opacity: 0, duration: 0 },
    "cleanup"
  );

  // deactivate render button
  tl.to(
    ".performance3 .active-render-button",
    // { duration: 0.5, opacity: 0, ease: "power4.out" },
    { duration: 0.1, opacity: 0, ease: "power4.out" },
  );

  return tl;
}

function render_timeline_2() {
  var tl = gsap.timeline({smoothChildTiming: true});


  // make renderpill appear under the mpsc channel (starting point)
  tl.set(
    ".performance3 .render-animate-pill-2",
    // { opacity: 1},
    { opacity: 0.2},
    "setup",
  );
  tl.set(
    ".performance3 .render-animate-pill-2",
    { x: -35, y: -20},
    "setup",
  );

  // move rendering box back to original position
  tl.set(
    ".performance3 .state-red-box",
    { x: 0 },
    "setup"
  );

    // "#state-red-box, #state-text-second-yellow-2",

  // toss renderpill at the "render" box and activate it (red background)
  tl.to(
    ".performance3 .render-animate-pill-2",
    // { duration: 1, x: 12.7, y: -2, ease: "power4" },
    { duration: 0.2, x: 12.7, y: -2, ease: "power4" },
  );
  tl.to(
    ".performance3 .active-render-button",
    // { duration: 0.5, opacity: 1, ease: "power4.out" },
    { duration: 0.1, opacity: 1, ease: "power4.out" },
    "<30%"
  );

  // turn rendering indication on
  tl.to(
    ".performance3 .state-red-box, .performance3 .state-text-first-yellow-2",
    // { duration: 1, opacity: 1, ease: "steps(5)" },
    { duration: 0.2, opacity: 1, ease: "steps(5)" },
  );
  tl.set(".performance3 .state-text-second-yellow-2", {opacity: 0}, "<");

  // toss rendering box at screen
  tl.to(
    ".performance3 .state-red-box",
    // { duration: 1, x: 37.5, ease: "elastic.out(1, 0.3)" },
    { duration: 0.2, x: 37.5, ease: "elastic.out(1, 0.3)" },
  );
  tl.to(
    ".performance3 .state-text-first-yellow-2",
    // { duration: 1, x: 34.5, ease: "elastic.out(1, 0.3)" },
    { duration: 0.1, x: 34.5, ease: "elastic.out(1, 0.3)" },
    "<"
  );

  // turn off rendering box
  tl.to(
    ".performance3 .state-red-box",
    // { duration: 1, opacity: 0, ease: "steps(5)" },
    { duration: 0.2, opacity: 0, ease: "steps(5)" },
  );


  // disappear pill so we won't see it on top of the deactivated box
  tl.to(
    ".performance3 .render-animate-pill-2",
    { opacity: 0, duration: 0 },
    "cleanup"
  );

  // deactivate render button
  tl.to(
    ".performance3 .active-render-button",
    // { duration: 0.5, opacity: 0, ease: "power4.out" },
    { duration: 0.1, opacity: 0, ease: "power4.out" },
  );

  return tl;
}

function increase_to_25 () {
  var tl = gsap.timeline({smoothChildTiming: true});
  tl.set(
    ".performance3 .zero-percent",
    { opacity: 0 },
  );
  tl.set(
    ".performance3 .twentyfive-percent",
    { opacity: 1 },
    "<"
  );
  tl.to(
    ".performance3 .twentyfive-fill",
      {opacity: 1, duration: 0.5, ease: "power4.out" },
  );
  return tl;
}

function increase_to_50 () {
  var tl = gsap.timeline({smoothChildTiming: true});
  tl.set(
    ".performance3 .twentyfive-percent",
    { opacity: 0 },
  );
  tl.set(
    ".performance3 .fifty-percent",
    { opacity: 1 },
    "<"
  );
  tl.to(
    ".performance3 .twentyfive-fill",
      {opacity: 0, duration: 0.5, ease: "power4.out" },
  );
  tl.to(
    ".performance3 .fifty-fill",
      {opacity: 1, duration: 0.5, ease: "power4.out" }, "<"
  );
  return tl;
}

function increase_to_75 () {
  var tl = gsap.timeline({smoothChildTiming: true});
  tl.set(
    ".performance3 .fifty-percent",
    { opacity: 0 },
  );
  tl.set(
    ".performance3 .seventyfive-percent",
    { opacity: 1 },
    "<"
  );
  tl.to(
    ".performance3 .fifty-fill",
      {opacity: 0, duration: 0.5, ease: "power4.out" },
  );
  tl.to(
    ".performance3 .seventyfive-fill",
      {opacity: 1, duration: 0.5, ease: "power4.out" }, "<"
  );
  return tl;
}

function increase_to_100 () {
  var tl = gsap.timeline({smoothChildTiming: true});
  tl.set(
    ".performance3 .seventyfive-percent",
    { opacity: 0 },
  );
  tl.set(
    ".performance3 .onehundred-percent",
    { opacity: 1 },
    "<"
  );
  tl.to(
    ".performance3 .fifty-fill",
      {opacity: 0, duration: 0.5, ease: "power.out" },
  );
  tl.to(
    ".performance3 .onehundred-fill",
      {opacity: 1, duration: 0.5, ease: "power.out" }, "<"
  );
  return tl;
}

function decrease_to_75() {
  var tl = gsap.timeline({smoothChildTiming: true});
  tl.set(
    ".performance3 .onehundred-percent",
    { opacity: 0 },
  );
  tl.set(
    ".performance3 .seventyfive-percent",
    { opacity: 1 },
    "<"
  );
  tl.to(
    ".performance3 .onehundred-fill",
      {opacity: 0, duration: 0.5, ease: "power4.out"},
  );
  tl.to(
    ".performance3 .seventyfive-fill",
      {opacity: 1, duration: 0.5, ease: "power4.out" }, "<"
  );
  return tl;
}

function decrease_to_50() {
  var tl = gsap.timeline({smoothChildTiming: true});
  tl.set(
    ".performance3 .seventyfive-percent",
    { opacity: 0 },
  );
  tl.set(
    ".performance3 .fifty-percent",
    { opacity: 1 },
    "<"
  );
  tl.to(
    ".performance3 .seventyfive-fill",
      {opacity: 0, duration: 0.5, ease: "power4.out" },
  );
  tl.to(
    ".performance3 .fifty-fill",
      {opacity: 1, duration: 0.5, ease: "power4.out" }, "<"
  );
  return tl;
}

function decrease_to_25() {
  var tl = gsap.timeline({smoothChildTiming: true});
  tl.set(
    ".performance3 .fifty-percent",
    { opacity: 0 },
  );
  tl.set(
    ".performance3 .twentyfive-percent",
    { opacity: 1 },
    "<"
  );
  tl.to(
    ".performance3 .fifty-fill",
      {opacity: 0, duration: 0.5, ease: "power4.out" },
  );
  tl.to(
    ".performance3 .twentyfive-fill",
      {opacity: 1, duration: 0.05, ease: "power4.out" }, "<"
  );
  return tl;
}

function decrease_to_0(stl) {
  var tl = gsap.timeline({smoothChildTiming: true, onComplete: () => {
    stl.restart();
    stl.pause();
  }});
  tl.set(
    ".performance3 .twentyfive-percent",
    { opacity: 0 },
  );
  tl.set(
    ".performance3 .zero-percent",
    { opacity: 1 },
    "<"
  );
  tl.to(
    ".performance3 .twentyfive-fill",
      {opacity: 0, duration: 0.05, ease: "power4.out" },
  );
  return tl;
}

function block_pty_thread(dtl) {
  var tl = gsap.timeline({smoothChildTiming: true, onStart: () => {
    dtl.restart();
    dtl.pause();
  }});
  tl.to(
    ".performance3 .blocked",
    { opacity: 1, duration: 0.5, ease: "power4.out" },
  );
  return tl;
}

function unblock_pty_thread(dtl) {
  var tl = gsap.timeline({smoothChildTiming: true, onStart: () => {
    dtl.restart();
  }});
  tl.to(
    ".performance3 .blocked",
    { opacity: 0, duration: 0.5, ease: "power4.out" },
  );
  return tl;
}

function stop_pty_thread(dtl) {
  var tl = gsap.timeline({smoothChildTiming: true, onStart: stop_dataflow, onComplete: () => {
    dtl.restart();
    dtl.pause();
  }});
  tl.to(
    ".performance3 .blocked",
    { opacity: 0, duration: 0.5, ease: "power4.out" },
  );
  return tl;
}

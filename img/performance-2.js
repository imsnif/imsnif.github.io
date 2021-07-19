var mainTimeline = gsap.timeline();
mainTimeline
  .add(complete_data_timeline())
  .add(complete_screen_timeline(), "<")
  .add(complete_count_increase_timeline(), "<")

function complete_count_increase_timeline() {
  var tl = gsap.timeline({repeat: -1, repeadDelay: 1});
  tl
    .add(increase_to_719(), "2")
    .add(increase_to_2k(), "6")
    .add(increase_to_17k(), "10")
    .add(increase_to_96k(), "14")
    .add(increase_to_124k(), "18");
  return tl;
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
    ".performance2 .datapill-animate-rect, .performance2 .datapill-animate-text, .performance2 .renderpill-animate-rect, .performance2 .renderpill-animate-text",
    { x: 0, y: 0 }
  );
  tl.set(".performance2 .render-now-red-box, .performance2 .render-now-text, .performance2 .datapill-animate-rect, .performance2 .datapill-animate-text",
    { opacity: 0 }
  );
  tl.to(
    ".performance2 .newdata-yellow-rect, .performance2 .newdata-yellow-text, .performance2 .new-data-text, .performance2 .datapill, .performance2 .datapilltext, .performance2 .render-now-red-box, .performance2 .render-now-text, .performance2 .renderpill-animate-rect, .performance2 .renderpill-animate-text, .performance2 .datapill-animate-rect, .performance2 .datapill-animate-text",
    { duration: 0.1, opacity: 1, ease: "power4.in" },
  );

  tl.to(
    ".performance2 .datapill-animate-rect, .performance2 .datapill-animate-text",
    { duration: 0.1, x: 40.7, y: 7.5 },
  );
  tl.to(
    ".performance2 .renderpill-animate-rect, .performance2 .renderpill-animate-text",
    { duration: 0.1, x: 40.7, y: -6 },
    "<"
  );
  tl.to(
    ".performance2 .newdata-yellow-rect, .performance2 .newdata-yellow-text, .performance2 .new-data-text, .performance2 .datapill, .performance2 .datapilltext, .performance2 .render-now-red-box, .performance2 .render-now-text, .performance2 .renderpill-animate-rect, .performance2 .renderpill-animate-text",
    { duration: 0.1, opacity: 0, ease: "power4.in" },
  );
  return tl;
}

function data_to_mpsc() {
  // var tl = gsap.timeline({onComplete: function() { this.pause(0, true) }});
  var tl = gsap.timeline();
  tl.set(
    ".performance2 .datapill-animate-rect, .performance2 .datapill-animate-text, .performance2 .renderpill-animate-rect, .performance2 .renderpill-animate-text",
    { x: 0, y: 0 }
  );
  tl.set(".performance2 .render-now-red-box, .performance2 .render-now-text, .performance2 .datapill-animate-rect, .performance2 .datapill-animate-text",
    { opacity: 0 }
  );
  tl.to(
    ".performance2 .newdata-yellow-rect, .performance2 .newdata-yellow-text, .performance2 .datapill, .performance2 .datapilltext, .performance2 .datapill-animate-rect, .performance2 .datapill-animate-text",
    { duration: 0.1, opacity: 1, ease: "power4.in" }
  );

  
  tl.to(
    ".performance2 .datapill-animate-rect, .performance2 .datapill-animate-text",
    { duration: 0.1, x: 40.7, y: 7.5 },
  );
  tl.to(
    ".performance2 .newdata-yellow-rect, .performance2 .new-data-text, .performance2 .datapill, .performance2 .datapilltext",
    { duration: 0.1, opacity: 0, ease: "power4.in" },
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
    ".performance2 .datapill-animate-rect-2, .performance2 .datapill-animate-text-2",
    { opacity: 1},
    "setup",
  );
  tl.set(
    ".performance2 .datapill-animate-rect-2, .performance2 .datapill-animate-text-2",
    { x: 0, y: 0 },
    "setup",
  );

  // toss datapill at the "interpret data" box and activate it (yellow background)
  tl.to(
    ".performance2 .datapill-animate-rect-2, .performance2 .datapill-animate-text-2",
    // { duration: 1, x: 40.7, y: -18, ease: "power4" },
    { duration: 0.2, x: 40.7, y: -18, ease: "power4" },
  );
  tl.to(
    ".performance2 .interpret-yellow-box, .performance2 .interpret-data-text",
    // { duration: 0.5, opacity: 1, ease: "power4.out" },
    { duration: 0.1, opacity: 1, ease: "power4.out" },
    "<30%"
  );

  // turn interpreting state indication on
  tl.to(
    ".performance2 .state-yellow-box, .performance2 .state-text-second-black",
    // { duration: 1, opacity: 1, ease: "steps(5)" },
    { duration: 0.2, opacity: 1, ease: "steps(5)" },
  );
  tl.set(".performance2 .state-text-first-yellow", {opacity: 0});

  // turn interpreting state indication off and leave new state in place
  tl.to(
    ".performance2 .state-yellow-box, .performance2 .state-text-second-black",
    // { duration: 1, opacity: 0, ease: "steps(5)" },
    { duration: 0.1, opacity: 0, ease: "steps(5)" },
  );
  tl.set(".performance2 .state-text-second-yellow", {opacity: 1}, "<");

  // bring pill back to original position
  tl.to(
    ".performance2 .datapill-animate-rect-2, .performance2 .datapill-animate-text-2",
    { x: 0, y: 0, duration: 0 },
    "cleanup"
  );

  // deactivate interpret data button
  tl.to(
    ".performance2 .interpret-yellow-box, .performance2 .interpret-data-text",
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
    ".performance2 .datapill-animate-rect-2, .performance2 .datapill-animate-text-2",
    { opacity: 1},
    "setup",
  );
  tl.set(
    ".performance2 .datapill-animate-rect-2, .performance2 .datapill-animate-text-2",
    { x: 0, y: 0 },
    "setup",
  );

  // toss datapill at the "interpret data" box and activate it (yellow background)
  tl.to(
    ".performance2 .datapill-animate-rect-2, .performance2 .datapill-animate-text-2",
    // { duration: 1, x: 40.7, y: -18, ease: "power4" },
    { duration: 0.2, x: 40.7, y: -18, ease: "power4" },
  );
  tl.to(
    ".performance2 .interpret-yellow-box, .performance2 .interpret-data-text",
    // { duration: 0.5, opacity: 1, ease: "power4.out" },
    { duration: 0.1, opacity: 1, ease: "power4.out" },
    "<30%"
  );

  // turn interpreting state indication on
  tl.to(
    ".performance2 .state-yellow-box, .performance2 .state-text-first-black",
    // { duration: 1, opacity: 1, ease: "steps(5)" },
    { duration: 0.2, opacity: 1, ease: "steps(5)" },
  );
  tl.set(".performance2 .state-text-second-yellow", {opacity: 0});

  // turn interpreting state indication off and leave new state in place
  tl.to(
    ".performance2 .state-yellow-box, .performance2 .state-text-first-black",
    // { duration: 1, opacity: 0, ease: "steps(5)" },
    { duration: 0.2, opacity: 0, ease: "steps(5)" },
  );
  tl.set(".performance2 .state-text-first-yellow", {opacity: 1}, "<");

  // bring pill back to original position
  tl.to(
    ".performance2 .datapill-animate-rect-2, .performance2 .datapill-animate-text-2",
    { x: 0, y: 0, duration: 0 },
    "cleanup"
  );

  // deactivate interpret data button
  tl.to(
    ".performance2 .interpret-yellow-box, .performance2 .interpret-data-text",
    // { duration: 0.5, opacity: 0, ease: "power4.out" },
    { duration: 0.1, opacity: 0, ease: "power4.out" },
  );

  return tl;
}

function render_timeline() {
  var tl = gsap.timeline({smoothChildTiming: true});

  // make renderpill appear under the mpsc channel (starting point)
  tl.set(
    ".performance2 .render-animate-pill-2",
    { opacity: 1},
    "setup",
  );

  // toss renderpill at the "render" box and activate it (red background)
  tl.to(
    ".performance2 .render-animate-pill-2",
    // { duration: 1, x: 12.7, y: -2, ease: "power4" },
    { duration: 0.2, x: 12.7, y: -2, ease: "power4" },
  );
  tl.to(
    ".performance2 .active-render-button",
    // { duration: 0.5, opacity: 1, ease: "power4.out" },
    { duration: 0.1, opacity: 1, ease: "power4.out" },
    "<30%"
  );

  // turn rendering indication on
  tl.to(
    ".performance2 .state-red-box, .performance2 .state-text-second-yellow-2",
    // { duration: 1, opacity: 1, ease: "steps(5)" },
    { duration: 0.2, opacity: 1, ease: "steps(5)" },
  );

  // toss rendering box at screen
  tl.to(
    ".performance2 .state-red-box, .performance2 .state-text-second-yellow-2",
    // { duration: 1, x: 37.5, ease: "elastic.out(1, 0.3)" },
    { duration: 0.2, x: 37.5, ease: "elastic.out(1, 0.3)" },
  );
  tl.to(
    ".performance2 .state-text-first-yellow-on-screen, .performance2 .state-text-first-yellow-2",
    { duration: 0, opacity: 0 },
    "<"
  );

  // turn off rendering box
  tl.to(
    ".performance2 .state-red-box",
    // { duration: 1, opacity: 0, ease: "steps(5)" },
    { duration: 0.2, opacity: 0, ease: "steps(5)" },
  );


  // disappear pill so we won't see it on top of the deactivated box
  tl.to(
    ".performance2 .render-animate-pill-2",
    { opacity: 0, duration: 0 },
    "cleanup"
  );

  // deactivate render button
  tl.to(
    ".performance2 .active-render-button",
    // { duration: 0.5, opacity: 0, ease: "power4.out" },
    { duration: 0.1, opacity: 0, ease: "power4.out" },
  );

  return tl;
}

function render_timeline_2() {
  var tl = gsap.timeline({smoothChildTiming: true});


  // make renderpill appear under the mpsc channel (starting point)
  tl.set(
    ".performance2 .render-animate-pill-2",
    // { opacity: 1},
    { opacity: 0.2},
    "setup",
  );
  tl.set(
    ".performance2 .render-animate-pill-2",
    { x: -35, y: -20},
    "setup",
  );

  // move rendering box back to original position
  tl.set(
    ".performance2 .state-red-box",
    { x: 0 },
    "setup"
  );

    // "#state-red-box, #state-text-second-yellow-2",

  // toss renderpill at the "render" box and activate it (red background)
  tl.to(
    ".performance2 .render-animate-pill-2",
    // { duration: 1, x: 12.7, y: -2, ease: "power4" },
    { duration: 0.2, x: 12.7, y: -2, ease: "power4" },
  );
  tl.to(
    ".performance2 .active-render-button",
    // { duration: 0.5, opacity: 1, ease: "power4.out" },
    { duration: 0.1, opacity: 1, ease: "power4.out" },
    "<30%"
  );

  // turn rendering indication on
  tl.to(
    ".performance2 .state-red-box, .performance2 .state-text-first-yellow-2",
    // { duration: 1, opacity: 1, ease: "steps(5)" },
    { duration: 0.2, opacity: 1, ease: "steps(5)" },
  );
  tl.set(".performance2 .state-text-second-yellow-2", {opacity: 0}, "<");

  // toss rendering box at screen
  tl.to(
    ".performance2 .state-red-box",
    // { duration: 1, x: 37.5, ease: "elastic.out(1, 0.3)" },
    { duration: 0.2, x: 37.5, ease: "elastic.out(1, 0.3)" },
  );
  tl.to(
    ".performance2 .state-text-first-yellow-2",
    // { duration: 1, x: 34.5, ease: "elastic.out(1, 0.3)" },
    { duration: 0.1, x: 34.5, ease: "elastic.out(1, 0.3)" },
    "<"
  );

  // turn off rendering box
  tl.to(
    ".performance2 .state-red-box",
    // { duration: 1, opacity: 0, ease: "steps(5)" },
    { duration: 0.2, opacity: 0, ease: "steps(5)" },
  );


  // disappear pill so we won't see it on top of the deactivated box
  tl.to(
    ".performance2 .render-animate-pill-2",
    { opacity: 0, duration: 0 },
    "cleanup"
  );

  // deactivate render button
  tl.to(
    ".performance2 .active-render-button",
    // { duration: 0.5, opacity: 0, ease: "power4.out" },
    { duration: 0.1, opacity: 0, ease: "power4.out" },
  );

  return tl;
}

function increase_to_719 () {
  var tl = gsap.timeline({smoothChildTiming: true});
  tl.set(
    ".performance2 .more-42",
    { opacity: 0 },
  );
  tl.set(
    ".performance2 .more-719",
    { opacity: 1 },
    "<"
  );
  tl.to(
    ".performance2 .more-719-glow, .performance2 .mpsc-channel-glow, .performance2 .halo",
    { opacity: 1, duration: 0.5, ease: "sine" },
  );
  tl.to(
    ".performance2 .channel-data-variant-1",
    { duration: 0, opacity: 0 },
  );
  tl.to(
    ".performance2 .channel-data-variant-2",
    { duration: 0, opacity: 1 },
    "<"
  );
  tl.to(
    ".performance2 .more-719-glow, .performance2 .mpsc-channel-glow",
    { opacity: 0, duration: 0.5, ease: "sine" },
  );
  return tl;
}

function increase_to_2k () {
  var tl = gsap.timeline({smoothChildTiming: true});
  tl.set(
    ".performance2 .more-719",
    { opacity: 0 },
  );
  tl.set(
    ".performance2 .twok-more",
    { opacity: 1 },
    "<"
  );
  tl.to(
    ".performance2 .twok-more-glow, .performance2 .mpsc-channel-glow",
    { opacity: 1, duration: 0.5, ease: "sine" },
  );
  tl.to(
    ".performance2 .channel-data-variant-2",
    { duration: 0, opacity: 0 },
  );
  tl.to(
    ".performance2 .channel-data-variant-3",
    { duration: 0, opacity: 1 },
    "<"
  );
  tl.to(
    ".performance2 .twok-more-glow, .performance2 .mpsc-channel-glow",
    { opacity: 0, duration: 0.5, ease: "sine" },
  );
  return tl;
}

function increase_to_17k () {
  var tl = gsap.timeline({smoothChildTiming: true});
  tl.set(
    ".performance2 .twok-more",
    { opacity: 0 },
  );
  tl.set(
    ".performance2 .seventeenk-more",
    { opacity: 1 },
    "<"
  );
  tl.to(
    ".performance2 .seventeenk-more-glow, .performance2 .mpsc-channel-glow",
    { opacity: 1, duration: 0.5, ease: "sine" },
  );
  tl.to(
    ".performance2 .channel-data-variant-3",
    { duration: 0, opacity: 0 },
  );
  tl.to(
    ".performance2 .channel-data-variant-1",
    { duration: 0, opacity: 1 },
    "<"
  );
  tl.to(
    ".performance2 .seventeenk-more-glow, .performance2 .mpsc-channel-glow",
    { opacity: 0, duration: 0.5, ease: "sine" },
  );
  return tl;
}

function increase_to_96k () {
  var tl = gsap.timeline({smoothChildTiming: true});
  tl.set(
    ".performance2 .seventeenk-more",
    { opacity: 0 },
  );
  tl.set(
    ".performance2 .ninetysixk-more",
    { opacity: 1 },
    "<"
  );
  tl.to(
    ".performance2 .ninetysixk-more-glow, .performance2 .mpsc-channel-glow",
    { opacity: 1, duration: 0.5, ease: "sine" },
  );
  tl.to(
    ".performance2 .channel-data-variant-1",
    { duration: 0, opacity: 0 },
  );
  tl.to(
    ".performance2 .channel-data-variant-2",
    { duration: 0, opacity: 1 },
    "<"
  );
  tl.to(
    ".performance2 .ninetysixk-more-glow, .performance2 .mpsc-channel-glow",
    { opacity: 0, duration: 0.5, ease: "sine" },
  );
  return tl;
}

function increase_to_124k () {
  var tl = gsap.timeline({smoothChildTiming: true});
  tl.set(
    ".performance2 .ninetysixk-more",
    { opacity: 0 },
  );
  tl.set(
    ".performance2 .onetwentyfourk-more",
    { opacity: 1 },
    "<"
  );
  tl.to(
    ".performance2 .onetwentyfourk-more-glow, .performance2 .mpsc-channel-glow",
    { opacity: 1, duration: 0.5, ease: "sine" },
  );
  tl.to(
    ".performance2 .channel-data-variant-2",
    { duration: 0, opacity: 0 },
  );
  tl.to(
    ".performance2 .channel-data-variant-3",
    { duration: 0, opacity: 1 },
    "<"
  );
  tl.to(
    ".performance2 .onetwentyfourk-more-glow, .performance2 .mpsc-channel-glow",
    { opacity: 0, duration: 0.5, ease: "sine" },
  );
  return tl;
}

var mainTimeline = gsap.timeline({repeat: "-1", repeatDelay: 1})
    .add(data_timeline())
    .add(data_and_render_timeline(), "+=1");

function data_timeline() {
  var tl = gsap.timeline();
  tl.set(
    ".performance1 .initial-state-text-black, .performance1 .initial-state-text, .performance1 .render-text-after-update, .performance1 .render-text-after-update-clone, .performance1 .bigfile-yellow-box, .performance1 .bigfile-line-373, .performance1 .bigfile-line-374, .performance1 .bigfile-line-375, .performance1 .bigfile-lin",
    { opacity: 0 },
  );
  tl.set(".performance1 .render-text-after-update, .performance1 .render-text-after-update-clone, .performance1 .bigfile-yellow-box, .performance1 .bigfile-line-373, .performance1 .bigfile-line-374, .performance1 .bigfile-line-375, .performance1 .bigfile-lin", { opacity: 0 });
  tl.to(
    ".performance1 .newdata-yellow-rect, .performance1 .new-data-text, .performance1 .datapill, .performance1 .datapilltext",
    { duration: 1, opacity: 1, ease: "power4.in" },
  );

  tl.to(
    ".performance1 .datapill-animate-rect, .performance1 .datapill-animate-text",
    { duration: 1, x: 40.7, y: 7.5, ease: "elastic.out( 1, 0.3)" },
  );
  tl.to(
    ".performance1 .newdata-yellow-rect, .performance1 .new-data-text, .performance1 .datapill, .performance1 .datapilltext",
    { duration: 0.5, opacity: 0, ease: "power4.in" },
    "<"
  );
  tl.to(
    ".performance1 .datapill-animate-rect, .performance1 .datapill-animate-text",
    { duration: 1, x: 80.7, y: -10, ease: "power4" },
  );
  tl.to(
    ".performance1 .interpret-yellow-box, .performance1 .interpret-text, .performance1 .data-text",
    { duration: 0.5, opacity: 1, ease: "power4.out" },
    "<30%"
  );
  tl.to(
    ".performance1 .bigfile-yellow-box, .performance1 .initial-state-text-black-2",
    { duration: 1, opacity: 1, ease: "steps(4)" },
  );
  tl.to(
    ".performance1 .interpret-yellow-box, .performance1 .interpret-text, .performance1 .data-text, .performance1 .bigfile-yellow-box, .performance1 .initial-state-text-black-2",
    { duration: 0.5, opacity: 0, ease: "power4.in" },
  );
  tl.to(
    ".performance1 .initial-state-text",
    { duration: 0.5, opacity: 1 },
    "<"
  );
  return tl;
}

function data_and_render_timeline() {
  var tl = gsap.timeline();
  tl.set(
    ".performance1 .initial-state-text",
    { opacity: 1 },
  );
  tl.set(
    ".performance1 .datapill-animate-rect, .performance1 .datapill-animate-text",
    { x: 0, y: 0 },
    "<"
  );
  
  tl.to(
    ".performance1 .newdata-yellow-rect, .performance1 .new-data-text, .performance1 .datapill, .performance1 .datapilltext, .performance1 .render-now-red-box, .performance1 .render-now-text",
    { duration: 1, opacity: 1, ease: "power4.in" },
  );

  tl.to(
    ".performance1 .datapill-animate-rect, .performance1 .datapill-animate-text",
    { duration: 1, x: 40.7, y: 5, ease: "elastic.out( 1, 0.3)" },
  );
  tl.to(
    ".performance1 .renderpill-animate-rect, .performance1 .renderpill-animate-text",
    { duration: 1, x: 40.7, y: -6, ease: "elastic.out( 1, 0.3)" },
    "<"
  );
  tl.to(
    ".performance1 .newdata-yellow-rect, .performance1 .new-data-text, .performance1 .datapill, .performance1 .datapilltext, .performance1 .render-now-red-box, .performance1 .render-now-text",
    { duration: 0.5, opacity: 0, ease: "power4.in" },
    "<"
  );
  
  tl.to(
    ".performance1 .datapill-animate-rect, .performance1 .datapill-animate-text",
    { duration: 1, x: 80.7, y: -10, ease: "power4" },
  );
  tl.to(
    ".performance1 .interpret-yellow-box, .performance1 .interpret-text, .performance1 .data-text",
    { duration: 0.5, opacity: 1, ease: "power4.out" },
    "<30%"
  );
  tl.to(
    ".performance1 .bigfile-yellow-box, .performance1 .bigfile-line-373, .performance1 .bigfile-line-374, .performance1 .bigfile-line-375, .performance1 .bigfile-lin",
    { duration: 1, opacity: 1, ease: "steps(4)" },
  );
  tl.to(".performance1 .initial-state-text", { duration: 1, ease: "steps(4)", opacity: 0 }, "<");
  tl.to(".performance1 .render-text-after-update", { duration: 0.5, opacity: 1 });
  tl.to(
    ".performance1 .interpret-yellow-box, .performance1 .interpret-text, .performance1 .data-text, .performance1 .bigfile-yellow-box, .performance1 .initial-state-text-black-2",
    { duration: 0.5, opacity: 0, ease: "power.in" },
    "<"
  );
 
  tl.to(
    ".performance1 .renderpill-animate-rect, .performance1 .renderpill-animate-text",
    { duration: 1, x: 80.7, y: 10, ease: "power4" },
  );
  
  tl.to(
    ".performance1 .render-button-in-screen",
    { duration: 0.5, opacity: 1 },
    "<"
  );
  tl.to(
    ".performance1 .render-state-box, .performance1 .render-text-after-update-clone",
    { duration: 0.5, opacity: 1 },
  );
  
  tl.to(
    ".performance1 .render-state-box",
    { duration: 0.5, x: "+37.4", ease: "elastic.out( 1, 0.3)" },
  );
  tl.to(
    ".performance1 .render-text-after-update",
    { duration: 0.5, x: "88", ease: "elastic.out( 1, 0.3)" },
    "<"
  );
  tl.to(
    ".performance1 .render-state-box, .performance1 .render-button-in-screen",
    { duration: 1, opacity: 0, ease: "steps(5)" },
  );
  return tl;
}

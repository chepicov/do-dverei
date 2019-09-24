const pad = (s) => ('00' + s).substr(-2);

const update = () => {
  const Now = new Date();
  const Finish = new Date();
  Finish.setHours(23);
  Finish.setMinutes(59);
  Finish.setSeconds(59);
  if (Now.getHours() === 23 && Now.getMinutes() === 59 && Now.getSeconds === 59) {
    Finish.setDate(Finish.getDate() + 1);
  }
  let sec = Math.floor((Finish.getTime() - Now.getTime()) / 1000);
  let hrs = Math.floor(sec / 3600);
  sec -= hrs * 3600;
  const min = Math.floor(sec / 60);
  sec -= min * 60;
  $('.timer .hours').text(pad(hrs));
  $('.timer .minutes').text(pad(min));
  $('.timer .seconds').text(pad(sec));
  setTimeout(update, 200);
}

update();
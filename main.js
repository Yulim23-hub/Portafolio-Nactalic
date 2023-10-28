let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 100,
 cursor: "<span style='color: #fe938c;'>|</span>",
});
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #fe938c;">Bienvenido a mi Portafolio, conoce mi trabajo.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
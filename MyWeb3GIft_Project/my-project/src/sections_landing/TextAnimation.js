


const TextAnimation = () => {
  // const elts = {
  //   text1: useRef(null),
  //   text2: useRef(null)
  // };

  // const texts = [
  //   'Our gift calendar',
  //   'for ',
  //   'your',
  //   'friends and family',
  //  ' Stand out  ',
  //  'from the mass',
  // ' with ',
  // 'a new kind of gift',
  // ];

  // const morphTime = 1;
  // const cooldownTime = 1;

  // let textIndex = texts.length - 1;
  // let time = new Date();
  // let morph = 0;
  // let cooldown = cooldownTime;

  // useEffect(() => {
  //   elts.text1.current.textContent = texts[textIndex % texts.length];
  //   elts.text2.current.textContent = texts[(textIndex + 1) % texts.length];
  // }, [elts.text1, elts.text2, textIndex, texts]);
  

  // function doMorph() {
  //   morph -= cooldown;
  //   cooldown = 0;

  //   let fraction = morph / morphTime;

  //   if (fraction > 1) {
  //     cooldown = cooldownTime;
  //     fraction = 1;
  //   }

  //   setMorph(fraction);
  // }

  // function setMorph(fraction) {
  //   elts.text2.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  //   elts.text2.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  //   fraction = 1 - fraction;
  //   elts.text1.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  //   elts.text1.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  //   elts.text1.current.textContent = texts[textIndex % texts.length];
  //   elts.text2.current.textContent = texts[(textIndex + 1) % texts.length];
  // }

  // function doCooldown() {
  //   morph = 0;

  //   elts.text2.current.style.filter = '';
  //   elts.text2.current.style.opacity = '100%';

  //   elts.text1.current.style.filter = '';
  //   elts.text1.current.style.opacity = '0%';
  // }

  // function animate() {
  //   requestAnimationFrame(animate);

  //   let newTime = new Date();
  //   let shouldIncrementIndex = cooldown > 0;
  //   let dt = (newTime - time) / 1000;
  //   time = newTime;

  //   cooldown -= dt;

  //   if (cooldown <= 0) {
  //     if (shouldIncrementIndex) {
  //       textIndex++;
  //     }

  //     doMorph();
  //   } else {
  //     doCooldown();
  //   }
  // }

  // useEffect(() => {
  //   animate();
  // }, [animate]);
  

  return (
    <>
      {/* <div id="container  ">
        <span ref={elts.text1} id="text1"></span>
        <span ref={elts.text2} id="text2"></span>
      </div>

      <svg id="filters">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg> */}
    </>
  );
};

export default TextAnimation;

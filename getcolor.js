const { Vibrant } = require('node-vibrant/node');
Vibrant.from('public/icon.png')
  .getPalette()
  .then((palette) => {
    console.log('Vibrant:', palette.Vibrant?.hex);
    console.log('DarkVibrant:', palette.DarkVibrant?.hex);
    console.log('LightVibrant:', palette.LightVibrant?.hex);
    console.log('Muted:', palette.Muted?.hex);
    console.log('DarkMuted:', palette.DarkMuted?.hex);
  })
  .catch(console.error);

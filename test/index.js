const Nightmare = require('nightmare');
const nightmare = Nightmare({
    show: false,
    width: 1200,
    height: 4200,
});
const path = require('path');
const imageDiff = require('image-diff');

console.log('Starting nightmare-test... 👻');

nightmare
  .goto('http://localhost:3000')
  .wait(3000)
  .screenshot(path.join(__dirname, 'tmp/out.png'))
  .end()
  .then(() => {
    console.log('Running imageDiff... 📷');
    imageDiff({
      actualImage: path.join(__dirname, 'reference.png'),
      expectedImage: path.join(__dirname, 'tmp/out.png'),
      diffImage: path.join(__dirname, 'tmp/diff.png'),
    }, function (err, imagesAreSame) {
      if (err) {
        console.error(err);
      }

      if (imagesAreSame) {
        console.log('Output image and reference image are identitcal! 👍');
        process.exit(0);
      } else {
        console.log('There appears to be a diff in the images - verify the diff manually or fix any errors. ❌');
        process.exit(1);
      }
    });
  });

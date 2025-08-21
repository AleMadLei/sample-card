((Drupal) => {

  'use strict'

  Drupal.behaviors.initializeSampleCard = {
    attach: (context, settings) => {
      once('sample-card-init', '.sample-card', context).forEach(sc => {
        console.log(sc.querySelector('h2').innerText);
      });
    }
  }
});

const {BigQuery} = require('@google-cloud/bigquery');
const Vision = require('@google-cloud/vision');
const vision = new Vision.ImageAnnotatorClient();
const bigquery = new BigQuery('booklibrary-229314');

exports.analyzeImage = function(event) {
  let image = {
    source: { imageUri: event.data.mediaLink }
  };
  return vision.labelDetection({ image }).then(resp => {
    let labels = resp[0].labelAnnotations.map(l => {
      return {
        description: l.description,
        score: l.score
      };
    });

    const dataset = bigquery.dataset('dataset');
    return dataset.table('images').insert(labels);
  }).catch(err => {
    console.error(err);
  });
};

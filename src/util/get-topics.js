import GithubSlugger from 'github-slugger';

const slugger = new GithubSlugger();

function removeDuplicateUsingFilter(arr) {
  let uniqueArray = arr.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
  });
  return uniqueArray;
}

export function getTopics(examples) {
  const allPossibleCategories = examples.map(example => {
    return example.topic;
  });
  slugger.reset();
  const uniqueCategories = removeDuplicateUsingFilter(allPossibleCategories)
    .filter(topic => {
      return topic !== undefined;
    })
    .map(topic => {
      return {
        title: topic,
        path: '#' + slugger.slug(topic)
      };
    });

  return uniqueCategories;
}

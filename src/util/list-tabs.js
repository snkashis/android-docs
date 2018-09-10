const tabOrder = [
  'overview',
  'examples',
  'help',
  'api',
  'reference',
  'style-spec'
];

export function listTabs(product, arrayOfFolders, additionalTabs) {
  let alltheTabs = arrayOfFolders
    .filter(folder => {
      return (
        folder.path.indexOf('404') < 0 && folder.path.indexOf(product) > -1
      );
    })
    .map(tab => {
      const tabId = tab.path.split('/')[3];
      return {
        label: tabId.charAt(0).toUpperCase() + tabId.slice(1),
        id: tabId,
        href: tab.path
      };
    });
  let orderedTabs = [];
  tabOrder.forEach(function(key) {
    var found = false;
    alltheTabs = alltheTabs.filter(function(item) {
      if (!found && item.id == key) {
        orderedTabs.push(item);
        found = true;
        return false;
      } else return true;
    });
  });
  if (additionalTabs) {
    additionalTabs.forEach(function(tab) {
      orderedTabs.push(tab);
    });
  }
  return orderedTabs;
}

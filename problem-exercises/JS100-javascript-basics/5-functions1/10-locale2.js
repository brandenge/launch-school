const extractRegion = function(locale) {
  console.log(locale.split('.')[0]
                    .split('_')[1]);
  return locale.split('.')[0]
               .split('_')[1];
}

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'

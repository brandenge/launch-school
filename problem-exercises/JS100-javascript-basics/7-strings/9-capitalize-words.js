let title = 'launch school tech & talk'
words = title.split(' ')
capitalizedWords = words.map(word => word[0].toUpperCase() + word.slice(1));
capitalizedTitle = capitalizedWords.join(' ');

def url?(text)
  p !!text.match(/\Ahttps?:\/\/\S+\z/)
end

url?('http://launchschool.com')   # -> true
url?('https://example.com')       # -> true
url?('https://example.com hello') # -> false
url?('   https://example.com')    # -> false

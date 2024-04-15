// 1
function startCounting() {
  let count = 1;
  const id = setInterval(() => {
    console.log(count);
    count += 1;
  }, 1000);
  return id;
}

startCounting();

// 2
function stopCounting(id) {
  clearInterval(id);
}

const id = startCounting();
stopCounting(id);

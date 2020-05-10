function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function main() {
    while(true) {
      console.log('Containers rule! Simple Node');
      await sleep(5000);
    }
  }
  
  main();
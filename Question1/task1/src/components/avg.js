export default function GetAverage(){
    async function fetchAndCalculateAverage(variable) {
        let url;
        switch(variable) {
          case 'e':
            url = 'http://20.244.56.144/test/e';
            break;
          case 'p':
            url = 'http://20.244.56.144/test/p';
            break;
          case 'f':
            url = 'http://20.244.56.144/test/f';
            break;
          case 'r':
            url = 'http://20.244.56.144/test/r';
            break;
          default:
            throw new Error('Invalid variable');
        }
      
        // Fetch numbers
        const response = await fetch(url);
        const json = await response.json();
        const numbers = json.numbers;
      
        // Calculate average
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        const average = sum / numbers.length;
      
        // Return response
        return { numbers, average };
      }
      
      // Usage example
      fetchAndCalculateAverage('e')
        .then(result => console.log(result))
        .catch(error => console.error(error));
}
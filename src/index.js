module.exports = function toReadable (number) {
        const units = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'];
        const tens = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
      
        let result = '';

        if (number === 0) {
            return 'zero';
          }
      
        if (number >= 100) {
          result += units[Math.floor(number / 100)] + ' hundred';
          number %= 100;
        }
      
        if (number >= 20) {
          result += tens[Math.floor(number / 10)];
          number %= 10;
        }
      
        if (number >= 10) {
          result += [' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'][number - 10];


        } else {
          result += units[number];
        }
      
        return result.trim();
      }
      
;
      

console.log(module.exports(0))
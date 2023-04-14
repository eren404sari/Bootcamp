const fs = require('fs');

function testFileRead() {
    const callBackFileRead = (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        //break each line of .txt tile
        const lines = data.trim().split('\n');
        //blank array to place values in
        const text = [];
        //initialize counter
        let i = 0

        // Loop through each line and break apart values
        while(i < lines.length){
            const blank = lines[i].replace(/-/g, '').replace(/\s + /g, ' ').trim()
            //lines[i].replace(/ /g, ',').replace(/\n/g,"<br />")
            //console.log(lines)
            if (!blank || !/^\d/.test(blank));
            //const values = text.split(' ')
            const values = blank.split(' ');
            text.push(values);
            //console.log(values)
            i++
        }

        // save data as a string and convert to file
        const newfile = text.map(line => line.join(',')).join('\n')
        //const newline = text.map(line => line.join(','))
        //const newfile =
        console.log(newfile);
        fs.writeFile('newfile.csv', newfile, (err) => {
            if (err) throw err;
            console.log('success')
        });

        //TXT to XLSX
        //const file = `scripts/output.xls`;
        //const txt = XLSX.readFile('scripts/input.txt');
        //XLSX.writeFile(text, "scripts/output.xls")


        //console.log(`The Shape of Data ${ data} \n The data as below : `)
    }

    fs.readFile('0912.TXT', 'utf-8', callBackFileRead);
}

testFileRead();
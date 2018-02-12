function JSONToHTMLTable(json) {
    function htmlEscape(text) {
        if(typeof text === 'string'){
            return text
                .replace(/&/g, '&amp;')
                .replace(/>/g, '&gt;')
                .replace(/</g, '&lt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }
        else{
            return text;
        }
    }
    let html = "<table>\n";
    let arr = JSON.parse(json);
    // console.log(arr);
    html += "\t<tr>";
    for (let key of Object.keys(arr[0])) {
        html += `<th>${htmlEscape(key)}</th>`;
    }
    html += "</tr>";

    for (let obj of arr) {
        html += `\n\t<tr>`;
        for (let key of Object.keys(obj)) {

            html += `<td>${htmlEscape(obj[key])}</td>`;
        }
        html += `</tr>`;
        // console.log(obj);
        // html+=`\t<tr><td>${obj[key]}</td><td>${obj[value]}</td></tr>`
    }

    html += `\n</table>`;
    console.log(html);

}
const root = document.getElementById("root");
const textarea = document.createElement("textarea");
textarea.setAttribute("cols", "50");
textarea.setAttribute("rows", "5");
textarea.setAttribute("placeholder", "Enter your story here");
textarea.setAttribute("id", "textarea");
document.body.appendChild(textarea);
const subBtn = document.createElement('button');
subBtn.style.width = "60px";
subBtn.style.height = "20px";
subBtn.textContent = "Submit";
const clearBtn = document.createElement("button");
clearBtn.style.width = "60px";
clearBtn.style.height = "20px";
clearBtn.textContent = "Clear"
root.append(textarea);
root.append(document.createElement("br"));
root.append(subBtn);
root.append(clearBtn);
clearBtn.style.marginLeft = "10px";

function getText() {
    const inputText = document.getElementById('textarea').value.trim();
    const words = inputText.split(/\s+/);
    const wordCount = words.reduce((obj, word) => {
        if (obj[word]) {
            obj[word]++;
        } else {
            obj[word] = 1;
        }
        return obj
    }, {});
    console.log(wordCount);
    const wordList = Object.entries(wordCount).sort((a, b) => b[1] - a[1]).slice(0, 5);
    console.log(wordList);

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const trow = document.createElement("tr");
    const wordHeading = document.createElement("th");
    wordHeading.textContent = "Word";
    const freqHeading = document.createElement("th");
    freqHeading.textContent = "Frequency";
    trow.appendChild(wordHeading);
    trow.appendChild(freqHeading);
    thead.appendChild(trow);
    const tbody = document.createElement("tbody");
    wordList.forEach(([word, frequency]) => {
        const row = document.createElement("tr");
        const wordCell = document.createElement("td");
        wordCell.textContent = word;
        const quantCell = document.createElement("td");
        quantCell.textContent = frequency;

        row.appendChild(wordCell);
        row.appendChild(quantCell);
        tbody.appendChild(row);
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    root.append(document.createElement("br"));
    root.append(table);
}

function clearText() {
   location.reload();
}
subBtn.addEventListener("click", getText);
clearBtn.addEventListener("click", clearText);
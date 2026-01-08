function getFlames() {

    let firstName = document.getElementById("Fname").value.toLowerCase();
    let secondName = document.getElementById("Sname").value.toLowerCase();

    // Convert to arrays
    let arr1 = firstName.split("");
    let arr2 = secondName.split("");

    let dup = new Set();

    // Step 1: Remove common characters from arr2 & store duplicates
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                dup.add(arr1[i]);
                arr2.splice(j, 1);
                break;
            }
        }
    }

    // Step 2: Remove common characters from arr1
    for (let i = 0; i < arr1.length; i++) {
        if (dup.has(arr1[i])) {
            arr1.splice(i, 1);
            i--; // important
        }
    }

    let count = arr1.length + arr2.length;

    // Step 3: FLAMES logic
    let flames = ["F", "L", "A", "M", "E", "S"];
    let index = 0;

    while (flames.length > 1) {
        index = (index + count - 1) % flames.length;
        flames.splice(index, 1);
    }

    // Step 4: Result mapping
    let result = "";
    switch (flames[0]) {
        case "F": result = "Friends 🤝"; break;
        case "L": result = "Love ❤️"; break;
        case "A": result = "Affection 😊"; break;
        case "M": result = "Marriage 💍"; break;
        case "E": result = "Enemies 😈"; break;
        case "S": result = "Siblings 👨‍👩‍👧"; break;
    }

    // Show output
    document.getElementById("result").innerText = "FLAMES Result: " + result;
}

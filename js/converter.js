document.querySelector("#convert").addEventListener("click", (event) => {
    // don't reload the page
    event.preventDefault()

    document.getElementById("conversion").classList.remove("hidden")

    console.log("Converting HTML...")
    const turndown = new TurndownService()
    let html = document.getElementById("html").value
    let markdown = turndown.turndown(html)
    document.querySelector("#markdown").innerText = markdown
    console.log("Finished converting\n", markdown)
})

document.querySelector("#clear").addEventListener("click", (event) => {
    // don't reload the page
    event.preventDefault()
    console.log("Clearing...")
    document.getElementById("conversion").classList.add("hidden")
    document.querySelector("#markdown").innerText = ""
    console.log("Clear")
})

document.querySelector("#reset").addEventListener("click", (event) => {
    // don't reload the page
    event.preventDefault()
    if (!confirm("Are you sure you want to reset everything?")) {
        return
    }
    console.log("Resetting...")
    document.querySelector("#conversion").classList.add("hidden")
    document.querySelector("#html").value = ""
    document.querySelector("#markdown").innerText = ""
    console.log("Reset")
})


document.querySelector("#copy").addEventListener("click", () => {
    const markdown = document.querySelector("#markdown").innerText

    navigator.clipboard.writeText(markdown).then(
        () => {
            console.log("Copied!")
        },
        (err) => {
            console.error(err)
        }
    )
})

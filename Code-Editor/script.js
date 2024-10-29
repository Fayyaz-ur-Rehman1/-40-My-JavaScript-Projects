function runCode() {
    try {
        // Get the JavaScript code from the textarea
        let jsCode = document.getElementById("jsCode").value;

        // Get the iframe where we will show the output
        let outputIframe = document.getElementById("output");

        // Clear the previous output by resetting the iframe
        outputIframe.src = 'about:blank';

        // Wait until the iframe reloads
        outputIframe.onload = function () {
            let outputDoc = outputIframe.contentDocument;

            // Create a basic HTML structure in the iframe
            outputDoc.open();
            outputDoc.write("<html><body></body></html>");
            outputDoc.close();

            // Display console.log outputs inside the iframe
            outputIframe.contentWindow.console.log = function (message) {
                outputDoc.body.innerHTML += '<p>' + message + '</p>';
            };

            // Run the JavaScript code inside the iframe
            try {
                let script = outputDoc.createElement('script');
                script.textContent = jsCode;
                outputDoc.body.appendChild(script);
            } catch (err) {
                // Show any errors that occur while running the code
                outputDoc.body.innerHTML += '<p style="color: red;">' + err + '</p>';
            }
        };
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
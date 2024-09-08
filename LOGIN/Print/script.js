function populatePrintTemplate() {
    // Get values from form
    var employeeName = document.getElementById("employeeName").value;
    var destination = document.getElementById("destination").value;
    var departureDate = document.getElementById("departureDate").value;
    var returnDate = document.getElementById("returnDate").value;
    var purpose = document.getElementById("purpose").value;
    var approver = document.getElementById("approver").value;

    // Insert values into the print template
    document.getElementById("printEmployeeName").innerText = employeeName;
    document.getElementById("printDestination").innerText = destination;
    document.getElementById("printDepartureDate").innerText = departureDate;
    document.getElementById("printReturnDate").innerText = returnDate;
    document.getElementById("printPurpose").innerText = purpose;
    document.getElementById("printApprover").innerText = approver;
}

function saveAndPrint() {
    // Populate the print template with form data
    populatePrintTemplate();

    // Get the print template HTML
    var printContents = document.getElementById("printTemplate").innerHTML;

    // Open a new window for printing
    var printWindow = window.open('', '', 'height=400,width=800');
    printWindow.document.write('<html><head><title>Travel Order</title>');
    printWindow.document.write('<style>body { font-family: Arial, sans-serif; } h2 { text-align: center; }</style>'); // Optional inline style
    printWindow.document.write('</head><body >');
    printWindow.document.write(printContents);
    printWindow.document.write('</body></html>');
    printWindow.document.close();

    // Print the content
    printWindow.print();
}

function generateContract() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const name = document.getElementById('client-name').value.trim();
  const target = document.getElementById('target').value.trim();
  const method = document.getElementById('method').value.trim();
  const price = document.getElementById('price').value.trim();
  const detail = document.getElementById('detail').value.trim();
  const password = document.getElementById('admin-pass').value.trim();

  if (!name || !target || !method || !price) {
    alert("Please fill in all fields.");
    return;
  }

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Shadow Contract", 10, 10);

  doc.setFontSize(12);
  doc.setFont("Helvetica", "normal");

  if (password === "admin1234") {
    doc.text("Admin Access Granted", 10, 20);
    doc.text("Waiting List:", 10, 30);
    doc.text("- Client: Alice | Target: Bob | Pay: 10| Detail: QR10", 10, 40);
    doc.text("- Client: Charlie | Target: Dave | Pay: 15| Detail: QR11", 10, 50);
    doc.text("- Client: Unknown | Target: Newton | Pay: 3| Detail: director of Younghwa children's home", 10, 60);
    doc.save("admin-waitlist.pdf");
  } else {
    doc.text(`Client: ${name}`, 10, 20);
    doc.text(`Target: ${target}`, 10, 30);
    doc.text(`Method: ${method}`, 10, 40);
    doc.text(`Payment: ${price}`, 10, 50);
    doc.text(`Payment: ${detail}`, 10, 60);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 10, 70);
    doc.save(`contract-${name}.pdf`);
  }
}